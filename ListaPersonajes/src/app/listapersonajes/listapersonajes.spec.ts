import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listapersonajes } from './listapersonajes';

describe('Listapersonajes', () => {
  let component: Listapersonajes;
  let fixture: ComponentFixture<Listapersonajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listapersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listapersonajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
