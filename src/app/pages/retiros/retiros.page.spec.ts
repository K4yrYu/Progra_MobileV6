import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetirosPage } from './retiros.page';
import { IonicModule } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('RetirosPage', () => {
  let component: RetirosPage;
  let fixture: ComponentFixture<RetirosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetirosPage],
      imports: [IonicModule.forRoot()],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(RetirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
