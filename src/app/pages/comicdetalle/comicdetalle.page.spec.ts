import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicdetallePage } from './comicdetalle.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComicsService } from 'src/app/services/comics.service';

describe('ComicdetallePage', () => {
  let component: ComicdetallePage;
  let fixture: ComponentFixture<ComicdetallePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Importar HttpClientTestingModule
      declarations: [ComicdetallePage],
      providers: [
        ComicsService,  // Proveer ComicsService
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '1'  // Cambia '1' por el ID que necesites para la prueba
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComicdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
