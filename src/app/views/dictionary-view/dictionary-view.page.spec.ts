import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryViewPage } from './dictionary-view.page';

describe('DictionaryViewPage', () => {
  let component: DictionaryViewPage;
  let fixture: ComponentFixture<DictionaryViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DictionaryViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
