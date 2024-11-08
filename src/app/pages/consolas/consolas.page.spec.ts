import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsolasPage } from './consolas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';
import { of } from 'rxjs'; // Importar 'of' para crear observables mock

// Mock de los servicios
class MockManejodbService {
  dbState() {
    return of(true); // Simula que la base de datos está lista
  }

  fetchConsolas() {
    return of([{ nombre_prod: 'Consola 1' }, { nombre_prod: 'Consola 2' }]); // Simula una lista de consolas
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string): Promise<void> {
    return Promise.resolve(); // Simula la presentación de una alerta
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
}

describe('ConsolasPage', () => {
  let component: ConsolasPage;
  let fixture: ComponentFixture<ConsolasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsolasPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Proveer el mock para ManejodbService
        { provide: AlertasService, useClass: MockAlertasService }, // Proveer el mock para AlertasService
        { provide: Router, useClass: MockRouter } // Proveer el mock para Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad de buscarConsola, irConsolaUnico, etc.
});
