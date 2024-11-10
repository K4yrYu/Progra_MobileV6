import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudjuguetesPage } from './crudjuguetes.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CrudjuguetesPage', () => {
  let component: CrudjuguetesPage;
  let fixture: ComponentFixture<CrudjuguetesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudjuguetesPage],
      providers: [
        ManejodbService,
        SQLite
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudjuguetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
