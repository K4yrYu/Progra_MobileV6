import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudconsolasPage } from './crudconsolas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Router } from '@angular/router';
import { of } from 'rxjs'; // Importar 'of' para crear observables mock

// Mock de los servicios
class MockManejodbService {
  dbState() {
    return of(true); // Simula que la base de datos está lista
  }

  fetchConsolas() {
    return of([ // Simula una lista de consolas
      { id_producto: 1, nombre_prod: 'Consola 1', precio_prod: 300, stock_prod: 5, descripcion_prod: 'Descripción 1', foto_prod: 'foto1.jpg', estatus: 1, id_categoria: 1 },
      { id_producto: 2, nombre_prod: 'Consola 2', precio_prod: 400, stock_prod: 10, descripcion_prod: 'Descripción 2', foto_prod: 'foto2.jpg', estatus: 1, id_categoria: 2 }
    ]);
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
}

describe('CrudconsolasPage', () => {
  let component: CrudconsolasPage;
  let fixture: ComponentFixture<CrudconsolasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudconsolasPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Proveer el mock para ManejodbService
        { provide: Router, useClass: MockRouter } // Proveer el mock para Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudconsolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad de agregarConsola, eliminarConsola, editarConsola, etc.
});
