import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCampComponent } from './choose-camp.component';

describe('ChooseCampComponent', () => {
  let component: ChooseCampComponent;
  let fixture: ComponentFixture<ChooseCampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseCampComponent]
    });
    fixture = TestBed.createComponent(ChooseCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
