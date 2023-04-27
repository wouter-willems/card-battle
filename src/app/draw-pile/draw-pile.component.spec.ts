import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPileComponent } from './draw-pile.component';

describe('DrawPileComponent', () => {
  let component: DrawPileComponent;
  let fixture: ComponentFixture<DrawPileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawPileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawPileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
