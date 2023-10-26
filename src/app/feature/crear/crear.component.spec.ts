import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearComponent } from './crear.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';



describe('CrearComponent', () => {
  let component: CrearComponent;
  let fixture: ComponentFixture<CrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: MatDialog, useValue: {} }, { provide: MatDialogRef, useValue: {} }],

    });
    fixture = TestBed.createComponent(CrearComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
