import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutosComponent } from './editar-autos.component';

describe('EditarAutosComponent', () => {
  let component: EditarAutosComponent;
  let fixture: ComponentFixture<EditarAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
