import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeXLayoutComponent } from './theme-x-layout.component';

describe('ThemeXLayoutComponent', () => {
  let component: ThemeXLayoutComponent;
  let fixture: ComponentFixture<ThemeXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeXLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
