import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptodayComponent } from './reptoday.component';

describe('ReptodayComponent', () => {
  let component: ReptodayComponent;
  let fixture: ComponentFixture<ReptodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReptodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
