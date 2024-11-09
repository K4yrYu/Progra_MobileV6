import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudusuariosPage } from './crudusuarios.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchUsuarios() {
    return of([
      {
        id_usuario: '1',
        rut_usuario: '12345678-9',
        nombres_usuario: 'Juan',
        apellidos_usuario: 'Pérez',
        username: 'juanperez',
        clave: 'clave123',
        correo: 'juan@example.com',
        token_recup_clave: 'token123',
        foto_usuario: 'foto.jpg',
        estado_user: 'activo',
        userlogged: '1',
        id_rol: '2'
      }
    ]);
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string) {}
}

describe('CrudusuariosPage', () => {
  let component: CrudusuariosPage;
  let fixture: ComponentFixture<CrudusuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudusuariosPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
