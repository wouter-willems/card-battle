import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoldSpaceComponent } from './card-hold-space.component';

describe('CardHoldSpaceComponent', () => {
  let component: CardHoldSpaceComponent;
  let fixture: ComponentFixture<CardHoldSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHoldSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHoldSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
