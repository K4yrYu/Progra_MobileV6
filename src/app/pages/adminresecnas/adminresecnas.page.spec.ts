import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminresecnasPage } from './adminresecnas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AdminresecnasPage', () => {
  let component: AdminresecnasPage;
  let fixture: ComponentFixture<AdminresecnasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminresecnasPage],
      providers: [
        ManejodbService,
        SQLite
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminresecnasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
