import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameViewPage } from './game-view.page';

describe('GameViewPage', () => {
  let component: GameViewPage;
  let fixture: ComponentFixture<GameViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
