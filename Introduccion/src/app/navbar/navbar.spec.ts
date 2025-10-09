import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarOverviewExample } from './navbar';

describe('Navbar', () => {
  let component: ToolbarOverviewExample;
  let fixture: ComponentFixture<ToolbarOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
