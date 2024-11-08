import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CambiocontraPage } from './cambiocontra.page';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';

// Mock del ManejodbService
class MockManejodbService {
  async cambiarContrasena(idUsuario: string, nuevaContrasena: string) {
    return Promise.resolve(); // Simula una respuesta exitosa
  }

  async consultarUsuariosPorEstadoConectado() {
    return [{
      id_usuario: '1',
      clave: 'test123' // Proporciona una clave para las pruebas
    }]; // Simula un usuario conectado
  }
}

// Mock del AlertasService
class MockAlertasService {
  presentAlert(title: string, message: string) {
    // Simula la presentación de una alerta
  }
}

// Mock del Router
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('CambiocontraPage', () => {
  let component: CambiocontraPage;
  let fixture: ComponentFixture<CambiocontraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiocontraPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useClass: MockRouter }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiocontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
