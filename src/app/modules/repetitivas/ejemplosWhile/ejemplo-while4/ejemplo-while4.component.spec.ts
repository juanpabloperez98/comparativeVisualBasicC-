import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploWhile4Component } from './ejemplo-while4.component';

describe('EjemploWhile4Component', () => {
  let component: EjemploWhile4Component;
  let fixture: ComponentFixture<EjemploWhile4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploWhile4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploWhile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
