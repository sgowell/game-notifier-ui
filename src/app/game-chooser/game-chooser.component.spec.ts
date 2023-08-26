import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChooserComponent } from './game-chooser.component';

describe('GameChooserComponent', () => {
  let component: GameChooserComponent;
  let fixture: ComponentFixture<GameChooserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameChooserComponent]
    });
    fixture = TestBed.createComponent(GameChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
