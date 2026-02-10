import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartrecruitComponent } from './smartrecruit';

describe('Smartrecruit', () => {
  let component: SmartrecruitComponent;
  let fixture: ComponentFixture<SmartrecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartrecruitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartrecruitComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
