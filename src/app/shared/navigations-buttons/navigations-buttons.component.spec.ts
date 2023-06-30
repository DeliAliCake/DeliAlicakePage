import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsButtonsComponent } from './navigations-buttons.component';

describe('NavigationsButtonsComponent', () => {
  let component: NavigationsButtonsComponent;
  let fixture: ComponentFixture<NavigationsButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationsButtonsComponent]
    });
    fixture = TestBed.createComponent(NavigationsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
