import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchUsuarios() {
    return of([{ username: 'usuarioExistente', correo: 'correo@existente.com' }]);
  }
  agregarUsuariosCliente() {
    return Promise.resolve();
  }
}

class MockAlertasService {
  presentAlert(message: string) {}
}

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let mockRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();

    mockRouter = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar error si hay campos vacíos', () => {
    component.nombres = '';
    component.apellidos = '';
    component.rut = '';
    component.usuario = '';
    component.correo = '';
    component.contrasena = '';
    component.confirmarContrasena = '';
    component.respuesta = '';
    component.preguntaSeleccionada = '';

    const errores = component.validarFormulario();
    expect(errores).toContain('Todos los campos son obligatorios.');
  });

  it('Debe mostrar error si las contraseñas no coinciden', () => {
    component.contrasena = 'Password1!';
    component.confirmarContrasena = 'PasswordDiferente';

    const errores = component.validarFormulario();
    expect(errores).toContain('Las contraseñas no coinciden.');
  });

  it('Debe navegar a login después de un registro exitoso', async () => {
    component.nombres = 'Nombre';
    component.apellidos = 'Apellido';
    component.rut = '12345678-k';
    component.usuario = 'nuevoUsuario';
    component.correo = 'nuevo@correo.com';
    component.contrasena = 'Password1!';
    component.confirmarContrasena = 'Password1!';
    component.preguntaSeleccionada = '¿Cuál es tu color favorito?';
    component.respuesta = 'Rojo';

    await component.registrar();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
