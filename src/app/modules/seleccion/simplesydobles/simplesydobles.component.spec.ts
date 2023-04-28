import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesydoblesComponent } from './simplesydobles.component';

describe('SimplesydoblesComponent', () => {
  let component: SimplesydoblesComponent;
  let fixture: ComponentFixture<SimplesydoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplesydoblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplesydoblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
