import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiListadoComponent } from './mi-listado.component';

describe('MiListadoComponent', () => {
  let component: MiListadoComponent;
  let fixture: ComponentFixture<MiListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
