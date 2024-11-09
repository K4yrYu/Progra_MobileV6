import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarconsolaPage } from './agregarconsola.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';


describe('AgregarconsolaPage', () => {
  let component: AgregarconsolaPage;
  let fixture: ComponentFixture<AgregarconsolaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarconsolaPage],
      imports: [], // Importa el módulo de pruebas HTTP si es necesario
      providers: [
        ManejodbService,
        CamaraService,
        AlertasService,
        SQLite, // Agrega SQLite como proveedor
        { provide: Router, useValue: { navigate: () => {} } }, // Simula el Router para evitar errores de enrutamiento en pruebas
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarconsolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
