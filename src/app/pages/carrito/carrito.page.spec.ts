import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPage } from './carrito.page';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';

// Mock de ManejodbService sin dependencias de SQLite
class MockManejodbService {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  verificarOCrearVenta(idUsuario: number) {
    return Promise.resolve(1);
  }
  obtenerCarroPorUsuario(idVenta: number) {
    return Promise.resolve([]);
  }
  agregarCantidad(idVenta: number, idProducto: number) {
    return Promise.resolve();
  }
  restarCantidad(idVenta: number, idProducto: number) {
    return Promise.resolve();
  }
  preciofinal(idVenta: number) {
    return Promise.resolve(0);
  }
  eliminarProductoDelCarrito(idVenta: number, idProducto: number) {
    return Promise.resolve();
  }
  // Agrega otros métodos que sean necesarios para las pruebas
}

describe('CarritoPage', () => {
  let component: CarritoPage;
  let fixture: ComponentFixture<CarritoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useValue: { presentAlert: () => {} } },
        ChangeDetectorRef
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
