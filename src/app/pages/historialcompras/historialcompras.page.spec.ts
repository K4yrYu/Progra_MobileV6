import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialcomprasPage } from './historialcompras.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { of } from 'rxjs';

class MockManejodbService {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  consultarRetiros(idUsuario: number) {
    return Promise.resolve([
      {
        id_venta: '1',
        fecha_venta: '2023-01-01',
        total: '100',
        estado_retiro: 'Pendiente',
        username: 'usuario1',
        id_usuario: '1',
        id_estado: '1'
      }
    ]);
  }
}

describe('HistorialcomprasPage', () => {
  let component: HistorialcomprasPage;
  let fixture: ComponentFixture<HistorialcomprasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialcomprasPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialcomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
