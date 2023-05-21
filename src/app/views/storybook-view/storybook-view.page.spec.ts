import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorybookViewPage } from './storybook-view.page';

describe('StorybookViewPage', () => {
  let component: StorybookViewPage;
  let fixture: ComponentFixture<StorybookViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StorybookViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
