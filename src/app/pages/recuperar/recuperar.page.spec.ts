import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Router } from '@angular/router';

class MockManejodbService {
  consultarUsuarioPorNombre(nombreUsuario: string) {
    return Promise.resolve(null); // Simula que el usuario no existe
  }
}

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
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


  it('debería mostrar error si el usuario no existe', async () => {
    component.nombreUsuario = 'usuarioNoExistente';
    await component.validarUsuario();
    expect(component.errorMessage).toBe('Nombre de usuario no válido.');
  });
});
