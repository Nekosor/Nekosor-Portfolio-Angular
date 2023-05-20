import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsaiComponent } from './toolsai.component';

describe('ToolsaiComponent', () => {
  let component: ToolsaiComponent;
  let fixture: ComponentFixture<ToolsaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
