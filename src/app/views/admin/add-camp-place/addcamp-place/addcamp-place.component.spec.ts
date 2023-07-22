import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcampPlaceComponent } from './addcamp-place.component';

describe('AddcampPlaceComponent', () => {
  let component: AddcampPlaceComponent;
  let fixture: ComponentFixture<AddcampPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcampPlaceComponent]
    });
    fixture = TestBed.createComponent(AddcampPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
