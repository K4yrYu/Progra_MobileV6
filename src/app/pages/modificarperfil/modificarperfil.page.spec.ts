import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarperfilPage } from './modificarperfil.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { CamaraService } from 'src/app/services/camara.service';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

class MockManejodbService {
  modificarUsuariosCliente(id: string, nombres: string, apellidos: string, foto: string) {
    return Promise.resolve();
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string) {}
}

class MockAutenticacionService {
  obtenerUsuarioActual() {
    return Promise.resolve({
      id_usuario: '1',
      nombres_usuario: 'Juan',
      apellidos_usuario: 'Pérez',
      correo: 'juan@example.com',
      foto_usuario: 'foto.jpg'
    });
  }
}

class MockCamaraService {
  takePicture() {
    return Promise.resolve('assets/img/new_profile_photo.jpg');
  }
}

describe('ModificarperfilPage', () => {
  let component: ModificarperfilPage;
  let fixture: ComponentFixture<ModificarperfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],  // Importar CommonModule para ngFor
      declarations: [ModificarperfilPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: AutenticacionService, useClass: MockAutenticacionService },
        { provide: CamaraService, useClass: MockCamaraService },
        { provide: ChangeDetectorRef, useValue: { detectChanges: () => {} } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate'), getCurrentNavigation: () => ({ extras: { state: { usuarioModificarP: {} } } }) } },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } }  // Mock de ActivatedRoute
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
