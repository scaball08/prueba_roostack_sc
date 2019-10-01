import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLeterComponent } from './count-leter.component';

describe('CountLeterComponent', () => {
  let component: CountLeterComponent;
  let fixture: ComponentFixture<CountLeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountLeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountLeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
