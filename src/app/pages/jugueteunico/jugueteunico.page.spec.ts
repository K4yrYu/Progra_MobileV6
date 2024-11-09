import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugueteunicoPage } from './jugueteunico.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

// Mock de ManejodbService sin dependencias de SQLite
class MockManejodbService {
  dbState() {
    return of(true);
  }
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  consultarJuguetePorId(id: number) {
    return Promise.resolve({ id_producto: id, nombre_prod: 'Juguete de Prueba', foto_prod: 'ruta/de/imagen.jpg' });
  }
  // Agrega otros métodos que sean necesarios para la prueba
}

describe('JugueteunicoPage', () => {
  let component: JugueteunicoPage;
  let fixture: ComponentFixture<JugueteunicoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugueteunicoPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useValue: { presentAlert: () => {} } },
        { provide: Router, useValue: { navigate: () => {} } },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
            snapshot: { params: {} },
            getCurrentNavigation: () => ({
              extras: { state: { jugueteSelect: { id_producto: 1, nombre_prod: 'Juguete de Prueba', foto_prod: 'ruta/de/imagen.jpg' } } }
            })
          },
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JugueteunicoPage);
    component = fixture.componentInstance;

    // Inicializa jugueteLlego para evitar problemas de acceso a propiedades indefinidas
    component.jugueteLlego = { id_producto: 1, nombre_prod: 'Juguete de Prueba', foto_prod: 'ruta/de/imagen.jpg' };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
