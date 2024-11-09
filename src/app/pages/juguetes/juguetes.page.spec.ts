import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuguetesPage } from './juguetes.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('JuguetesPage', () => {
  let component: JuguetesPage;
  let fixture: ComponentFixture<JuguetesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuguetesPage],
      imports: [
        HttpClientTestingModule, // Simulación de llamadas HTTP
        FormsModule, // Para soportar [(ngModel)]
        ReactiveFormsModule // Soporte para formularios reactivos
      ],
      providers: [
        ManejodbService,
        AlertasService,
        SQLite, // Proveedor de SQLite
        { provide: Router, useValue: { navigate: () => {} } } // Simulación de Router
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Permitir componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(JuguetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
