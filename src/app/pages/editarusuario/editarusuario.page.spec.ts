import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarusuarioPage } from './editarusuario.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('EditarusuarioPage', () => {
  let component: EditarusuarioPage;
  let fixture: ComponentFixture<EditarusuarioPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarusuarioPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}) // Puedes ajustar esto según tus necesidades
          }
        },
        ManejodbService,
        SQLite
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarusuarioPage);
    component = fixture.componentInstance;
    component.usuarioLlego = {}; // Inicializar usuarioLlego con un objeto vacío
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
