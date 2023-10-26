import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessDialogComponent } from './success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

describe('SuccessDialogComponent', () => {
  let component: SuccessDialogComponent;
  let fixture: ComponentFixture<SuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessDialogComponent],
      imports: [MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} }],
 // Agrega esta línea
    });

    fixture = TestBed.createComponent(SuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
