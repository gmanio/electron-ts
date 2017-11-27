import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodictableComponent } from './periodictable.component';

describe('PeriodictableComponent', () => {
  let component: PeriodictableComponent;
  let fixture: ComponentFixture<PeriodictableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodictableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodictableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
