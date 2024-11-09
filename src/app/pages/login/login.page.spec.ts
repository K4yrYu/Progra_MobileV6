import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasSilenciosasService } from 'src/app/services/alertasilenciosa.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Platform } from '@ionic/angular';
import { of } from 'rxjs';

class MockManejodbService {
  crearBD() { return Promise.resolve(); }
  dbState() { return of(true); }
  fetchUsuarios() { return of([]); }
  consultarUsuariosPorMantenerSesion() { return Promise.resolve([]); }
  consultarUsuariosLoggin(user: string, clave: string) { return Promise.resolve(true); }
  validarUsuarioBaneado(user: string) { return Promise.resolve(false); }
  actualizarEstadoUsuario(user: string) { return Promise.resolve(); }
}

class MockAlertasSilenciosasService {
  presentSilentToast(message: string, duration: number) {}
}

class MockAutenticacionService {
  cerrarSesion() {}
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasSilenciosasService, useClass: MockAlertasSilenciosasService },
        { provide: AutenticacionService, useClass: MockAutenticacionService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: Platform, useValue: { backButton: { subscribeWithPriority: () => {} } } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería establecer loginError en true si el usuario o contraseña están vacíos', async () => {
    component.usernameunlogged = '';
    component.password = '';
    
    await component.loggin(component.usernameunlogged, component.password);
    expect(component.loginError).toBeTrue();
  });

  it('debería llamar al método loggin sin errores con credenciales válidas', async () => {
    component.usernameunlogged = 'usuarioPrueba';
    component.password = 'Prueba@1234';
    
    await component.loggin(component.usernameunlogged, component.password);
    expect(component.loginError).toBeFalse();
  });
});
