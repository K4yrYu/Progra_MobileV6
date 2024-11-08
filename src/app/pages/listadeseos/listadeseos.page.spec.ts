import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadeseosPage } from './listadeseos.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';

// Mock de los servicios
class MockManejodbService {
  obtenerIdUsuarioLogueado(): Promise<number> {
    return Promise.resolve(1); // Simula un ID de usuario logueado
  }

  consultarFavs(idUsuario: number): Promise<any[]> {
    return Promise.resolve([]); // Simula una lista vacía de favoritos
  }

  quitarFav(idProducto: number, idUsuario: number): Promise<void> {
    return Promise.resolve(); // Simula la eliminación exitosa de un favorito
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string): Promise<void> {
    return Promise.resolve(); // Simula la presentación de una alerta
  }
}

describe('ListadeseosPage', () => {
  let component: ListadeseosPage;
  let fixture: ComponentFixture<ListadeseosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadeseosPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Proveer el mock para ManejodbService
        { provide: AlertasService, useClass: MockAlertasService } // Proveer el mock para AlertasService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadeseosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad de cargarFavoritos, quitarDeListaDeseos, etc.
});
