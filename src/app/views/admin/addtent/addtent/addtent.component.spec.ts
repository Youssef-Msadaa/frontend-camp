import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtentComponent } from './addtent.component';

describe('AddtentComponent', () => {
  let component: AddtentComponent;
  let fixture: ComponentFixture<AddtentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtentComponent]
    });
    fixture = TestBed.createComponent(AddtentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
