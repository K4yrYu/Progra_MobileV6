import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { YouTubeService } from 'src/app/services/youtube.service';
import { ManejodbService } from '../services/manejodb.service';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { ComicsService } from 'src/app/services/comics.service';
import { of } from 'rxjs';

// Mock de los servicios
class MockYouTubeService {
  openVideo(videoId: string) {}
}

class MockManejodbService {
  dbState() {
    return {
      subscribe: (callback: (data: boolean) => void) => callback(true) // Simula que la base de datos está lista
    };
  }

  consultarUsuariosPorEstadoConectado() {
    return Promise.resolve([]); // Simula la consulta de usuarios
  }
}

class MockAutenticacionService {
  cerrarSesion() {
    return Promise.resolve(); // Simula el cierre de sesión
  }
}

class MockComicsService {
  getComics() {
    return of([]); // Devuelve un observable vacío como ejemplo
  }
}

// Mock de NavController
class MockNavController {
  navigateForward(url: string) {}
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        { provide: YouTubeService, useClass: MockYouTubeService },
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AutenticacionService, useClass: MockAutenticacionService },
        { provide: ComicsService, useClass: MockComicsService },
        { provide: NavController, useClass: MockNavController }, // Proveedor de MockNavController
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate') // Simula la navegación
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad del componente
});
