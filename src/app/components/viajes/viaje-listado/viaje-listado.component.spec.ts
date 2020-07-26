import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeListadoComponent } from './viaje-listado.component';

describe('ViajeListadoComponent', () => {
  let component: ViajeListadoComponent;
  let fixture: ComponentFixture<ViajeListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
