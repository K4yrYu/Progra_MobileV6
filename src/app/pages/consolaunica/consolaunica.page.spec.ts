import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsolaunicaPage } from './consolaunica.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  verificarOCrearVenta(id: number) {
    return Promise.resolve(1);
  }
  consultarConsolaPorId(id: number) {
    return Promise.resolve({ id_producto: id, precio_prod: 100 });
  }
  verificarFav(id_producto: number, id_usuario: number) {
    return Promise.resolve(false);
  }
  agregarFav(id_usuario: number, id_producto: number) {
    return Promise.resolve();
  }
  quitarFav(id_producto: number, id_usuario: number) {
    return Promise.resolve();
  }
  consultarProdsCarro(id_producto: number, id_venta: number) {
    return Promise.resolve(false);
  }
  agregarDetalleVenta(id_venta: number, precio: number, id_producto: number) {
    return Promise.resolve();
  }
  obtenerResecnas2(id_producto: number) {
    return Promise.resolve([]);
  }
  agregarResecnas(reseña: string, id_usuario: number, id_producto: number) {
    return Promise.resolve();
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string) {}
}

describe('ConsolaunicaPage', () => {
  let component: ConsolaunicaPage;
  let fixture: ComponentFixture<ConsolaunicaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsolaunicaPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate'), getCurrentNavigation: () => ({ extras: { state: { consolaSelect: {} } } }) } },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaunicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
