import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

class MockManejodbService {
  consultarUsuarioPorNombre(nombreUsuario: string) {
    return Promise.resolve(null); // Retorna un valor simulado
  }
  validarRespuestaSeguridad(nombreUsuario: string, respuesta: string) {
    return Promise.resolve(true); // Retorna un valor simulado
  }
}

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Usa el mock en lugar del servicio real
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
