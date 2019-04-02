import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituatieInscrieriComponent } from './situatie-inscrieri.component';

describe('SituatieInscrieriComponent', () => {
  let component: SituatieInscrieriComponent;
  let fixture: ComponentFixture<SituatieInscrieriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituatieInscrieriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituatieInscrieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
