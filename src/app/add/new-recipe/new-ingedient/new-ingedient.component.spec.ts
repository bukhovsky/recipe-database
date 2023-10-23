import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIngedientComponent } from './new-ingedient.component';

describe('NewIngedientComponent', () => {
  let component: NewIngedientComponent;
  let fixture: ComponentFixture<NewIngedientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIngedientComponent]
    });
    fixture = TestBed.createComponent(NewIngedientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
