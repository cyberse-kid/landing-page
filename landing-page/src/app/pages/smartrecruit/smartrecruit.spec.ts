import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smartrecruit } from './smartrecruit';

describe('Smartrecruit', () => {
  let component: Smartrecruit;
  let fixture: ComponentFixture<Smartrecruit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smartrecruit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smartrecruit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
