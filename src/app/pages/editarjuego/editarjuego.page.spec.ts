import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarjuegoPage } from './editarjuego.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditarjuegoPage', () => {
  let component: EditarjuegoPage;
  let fixture: ComponentFixture<EditarjuegoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarjuegoPage],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [
        ManejodbService,
        CamaraService,
        SQLite,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarjuegoPage);
    component = fixture.componentInstance;

    // Simulación de datos de juego para evitar errores de propiedades no definidas
    component.juegoLlego = {
      id_producto: 1,
      nombre_prod: 'Juego de prueba',
      precio_prod: 100,
      descripcion_prod: 'Descripción del juego de prueba',
      stock_prod: 10,
      foto_prod: null,
      estatus: '1'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
