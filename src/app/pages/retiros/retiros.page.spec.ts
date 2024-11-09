import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetirosPage } from './retiros.page';
import { IonicModule } from '@ionic/angular';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { of } from 'rxjs';

class SQLiteMock {
  create() {
    return Promise.resolve({});
  }
}

class ManejodbServiceMock {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }

  consultarRetiros(idUser: number) {
    return Promise.resolve([
      {
        id_venta: '1',
        fecha_venta: '2024-11-08',
        total: '100',
        estado_retiro: 'pendiente',
        username: 'test_user',
        id_usuario: idUser,
        id_estado: '1',
      },
    ]);
  }
}

describe('RetirosPage', () => {
  let component: RetirosPage;
  let fixture: ComponentFixture<RetirosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetirosPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        { provide: ManejodbService, useClass: ManejodbServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RetirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
