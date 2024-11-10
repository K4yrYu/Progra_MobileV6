import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarusuarioPage } from './agregarusuario.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { CamaraService } from 'src/app/services/camara.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';


describe('AgregarusuarioPage', () => {
  let component: AgregarusuarioPage;
  let fixture: ComponentFixture<AgregarusuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarusuarioPage],
      imports: [
        
      ],
      providers: [
        ManejodbService,
        AlertasService,
        CamaraService,
        SQLite,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
