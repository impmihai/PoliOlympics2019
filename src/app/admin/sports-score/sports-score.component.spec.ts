import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsScoreComponent } from './sports-score.component';

describe('SportsScoreComponent', () => {
  let component: SportsScoreComponent;
  let fixture: ComponentFixture<SportsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
