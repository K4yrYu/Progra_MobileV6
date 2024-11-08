import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarconsolaPage } from './editarconsola.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Importar 'of' para crear observables mock
import { MatSelectModule } from '@angular/material/select'; // Importar MatSelectModule para usar mat-option

// Mock de los servicios
class MockManejodbService {
  modificarConsola(id: number, nombre: string, precio: number, stock: number, descripcion: string, foto: string, estatus: string) {
    return Promise.resolve(); // Simula la modificación exitosa de una consola
  }

  dbState() {
    return of(true); // Simula que la base de datos está lista
  }
}

class MockCamaraService {
  takePicture() {
    return Promise.resolve('foto_mock.jpg'); // Simula la toma de una foto
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          consolaSelect: { id_producto: 1, nombre_prod: 'Consola 1', precio_prod: 300, stock_prod: 5, descripcion_prod: 'Descripción 1', foto_prod: 'foto1.jpg', estatus: 1 }
        }
      }
    }; // Simula la navegación actual
  }
}

class MockActivatedRoute {
  queryParams = {
    subscribe: (callback: (params: any) => void) => callback({})
  };
}

describe('EditarconsolaPage', () => {
  let component: EditarconsolaPage;
  let fixture: ComponentFixture<EditarconsolaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSelectModule, // Agregar aquí el módulo de Angular Material
      ],
      declarations: [EditarconsolaPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Proveer el mock para ManejodbService
        { provide: CamaraService, useClass: MockCamaraService }, // Proveer el mock para CamaraService
        { provide: Router, useClass: MockRouter }, // Proveer el mock para Router
        { provide: ActivatedRoute, useClass: MockActivatedRoute } // Proveer el mock para ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarconsolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad de guardarCambios, tomarFoto, etc.
});
