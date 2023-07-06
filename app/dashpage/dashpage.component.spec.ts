import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpageComponent } from './dashpage.component';

describe('DashpageComponent', () => {
  let component: DashpageComponent;
  let fixture: ComponentFixture<DashpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashpageComponent]
    });
    fixture = TestBed.createComponent(DashpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
