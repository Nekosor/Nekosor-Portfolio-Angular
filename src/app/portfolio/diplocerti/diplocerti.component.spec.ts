import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplocertiComponent } from './diplocerti.component';

describe('DiplocertiComponent', () => {
  let component: DiplocertiComponent;
  let fixture: ComponentFixture<DiplocertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplocertiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplocertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
