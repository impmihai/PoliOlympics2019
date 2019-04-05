import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoruriLiveComponent } from './scoruri-live.component';

describe('ScoruriLiveComponent', () => {
  let component: ScoruriLiveComponent;
  let fixture: ComponentFixture<ScoruriLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoruriLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoruriLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
