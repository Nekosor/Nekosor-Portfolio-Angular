import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutosyguiasComponent } from './tutosyguias.component';

describe('TutosyguiasComponent', () => {
  let component: TutosyguiasComponent;
  let fixture: ComponentFixture<TutosyguiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutosyguiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutosyguiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
