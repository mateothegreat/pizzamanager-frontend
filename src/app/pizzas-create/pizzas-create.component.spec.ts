import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasCreateComponent } from './pizzas-create.component';

describe('PizzasCreateComponent', () => {
  let component: PizzasCreateComponent;
  let fixture: ComponentFixture<PizzasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
