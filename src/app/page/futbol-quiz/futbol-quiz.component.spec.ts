import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolQuizComponent } from './futbol-quiz.component';

describe('FutbolQuizComponent', () => {
  let component: FutbolQuizComponent;
  let fixture: ComponentFixture<FutbolQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutbolQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
