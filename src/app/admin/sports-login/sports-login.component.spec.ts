import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsLoginComponent } from './sports-login.component';

describe('SportsLoginComponent', () => {
  let component: SportsLoginComponent;
  let fixture: ComponentFixture<SportsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
