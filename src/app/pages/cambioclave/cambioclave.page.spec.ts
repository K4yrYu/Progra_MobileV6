import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambioclavePage } from './cambioclave.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// Mock de los servicios
class MockManejodbService {
  cambiarContrasena(idUsuario: number, nuevaContrasena: string): Promise<void> {
    return Promise.resolve(); // Simula un cambio de contraseña exitoso
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string): Promise<void> {
    return Promise.resolve(); // Simula la presentación de una alerta
  }
}

// Mock del Router
class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
  getCurrentNavigation() {
    return { extras: { state: { usuario: { id_usuario: 1 } } } }; // Mock de getCurrentNavigation
  }
}

// Mock de ActivatedRoute
class MockActivatedRoute {
  queryParams = {
    subscribe: (callback: (params: any) => void) => callback({})
  };
}

describe('CambioclavePage', () => {
  let component: CambioclavePage;
  let fixture: ComponentFixture<CambioclavePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambioclavePage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Proveer el mock para ManejodbService
        { provide: AlertasService, useClass: MockAlertasService }, // Proveer el mock para AlertasService
        { provide: Router, useClass: MockRouter }, // Proveer el mock para Router
        { provide: ActivatedRoute, useClass: MockActivatedRoute } // Proveer el mock para ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad de validarContrasenas, etc.
});
