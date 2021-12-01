import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoScreenComponent } from './equipo-screen.component';

describe('EquipoScreenComponent', () => {
  let component: EquipoScreenComponent;
  let fixture: ComponentFixture<EquipoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
