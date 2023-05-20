import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcomidComponent } from './eventcomid.component';

describe('EventcomidComponent', () => {
  let component: EventcomidComponent;
  let fixture: ComponentFixture<EventcomidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcomidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventcomidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
