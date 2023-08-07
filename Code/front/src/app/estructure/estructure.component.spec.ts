import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructureComponent } from './estructure.component';

describe('EstructureComponent', () => {
  let component: EstructureComponent;
  let fixture: ComponentFixture<EstructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstructureComponent]
    });
    fixture = TestBed.createComponent(EstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
