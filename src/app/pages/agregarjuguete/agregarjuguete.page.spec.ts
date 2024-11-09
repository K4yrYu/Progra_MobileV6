import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarjuguetePage } from './agregarjuguete.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { of } from 'rxjs';

class MockManejodbService {
  agregarJuguetes(nombre: string, precio: number, stock: number, descripcion: string, urlImagen: string) {
    return Promise.resolve();
  }
}

class MockCamaraService {
  takePicture() {
    return Promise.resolve('assets/img/test_image.jpg');
  }
}

describe('AgregarjuguetePage', () => {
  let component: AgregarjuguetePage;
  let fixture: ComponentFixture<AgregarjuguetePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarjuguetePage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: CamaraService, useClass: MockCamaraService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarjuguetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
