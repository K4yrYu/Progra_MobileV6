import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JuegosPage } from './juegos.page';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { of } from 'rxjs';

// Mock del ManejodbService
class MockManejodbService {
  dbState() {
    return {
      subscribe: (callback: (data: boolean) => void) => callback(true) // Simula que la base de datos está lista
    };
  }

  fetchJuegos() {
    return of([]); // Simula un arreglo vacío de juegos
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

describe('JuegosPage', () => {
  let component: JuegosPage;
  let fixture: ComponentFixture<JuegosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegosPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useClass: MockRouter }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
