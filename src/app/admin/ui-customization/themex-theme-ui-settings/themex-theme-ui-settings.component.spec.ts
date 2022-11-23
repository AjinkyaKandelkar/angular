import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemexThemeUiSettingsComponent } from './themex-theme-ui-settings.component';

describe('ThemexThemeUiSettingsComponent', () => {
  let component: ThemexThemeUiSettingsComponent;
  let fixture: ComponentFixture<ThemexThemeUiSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemexThemeUiSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemexThemeUiSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
