import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprcptComponent } from './reprcpt.component';

describe('ReprcptComponent', () => {
  let component: ReprcptComponent;
  let fixture: ComponentFixture<ReprcptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprcptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprcptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
