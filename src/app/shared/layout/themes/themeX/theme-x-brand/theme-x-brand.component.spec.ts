import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeXBrandComponent } from './theme-x-brand.component';

describe('ThemeXBrandComponent', () => {
  let component: ThemeXBrandComponent;
  let fixture: ComponentFixture<ThemeXBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeXBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeXBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
