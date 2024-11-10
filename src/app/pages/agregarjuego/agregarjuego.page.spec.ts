import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarjuegoPage } from './agregarjuego.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { AlertasSilenciosasService } from 'src/app/services/alertasilenciosa.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';


describe('AgregarjuegoPage', () => {
  let component: AgregarjuegoPage;
  let fixture: ComponentFixture<AgregarjuegoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarjuegoPage],
      imports: [], 
      providers: [
        ManejodbService,
        CamaraService,
        AlertasSilenciosasService,
        SQLite, // Agrega SQLite como proveedor
        { provide: Router, useValue: { navigate: () => {} } }, // Simula el Router para evitar errores en las pruebas
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarjuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
