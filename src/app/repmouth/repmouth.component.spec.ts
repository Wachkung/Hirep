import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepmouthComponent } from './repmouth.component';

describe('RepmouthComponent', () => {
  let component: RepmouthComponent;
  let fixture: ComponentFixture<RepmouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepmouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepmouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
