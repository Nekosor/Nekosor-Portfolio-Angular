import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdisenComponent } from './editdisen.component';

describe('EditdisenComponent', () => {
  let component: EditdisenComponent;
  let fixture: ComponentFixture<EditdisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdisenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
