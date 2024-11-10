import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudjuegosPage } from './crudjuegos.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchJuegos() {
    return of([]);
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string) {}
}

describe('CrudjuegosPage', () => {
  let component: CrudjuegosPage;
  let fixture: ComponentFixture<CrudjuegosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudjuegosPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudjuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
