import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaGestionTributaria } from './sistema-gestion-tributaria';

describe('SistemaGestionTributaria', () => {
  let component: SistemaGestionTributaria;
  let fixture: ComponentFixture<SistemaGestionTributaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaGestionTributaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaGestionTributaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
