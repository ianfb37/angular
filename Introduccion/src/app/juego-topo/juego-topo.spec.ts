import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTopo } from './juego-topo';

describe('JuegoTopo', () => {
  let component: JuegoTopo;
  let fixture: ComponentFixture<JuegoTopo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoTopo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoTopo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
