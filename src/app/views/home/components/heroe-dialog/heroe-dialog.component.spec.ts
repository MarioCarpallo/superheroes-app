import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HEROE_CREATE_DATA_MOCK, HEROE_DELETE_DATA_MOCK, HEROE_EDIT_DATA_MOCK, HEROE_MOCK } from 'src/app/shared/mocks/heroe.mock';
import { HeroeModel } from 'src/app/shared/models/heroe.model';

import { HeroeDialogComponent } from './heroe-dialog.component';

describe('HeroeDialogComponent', () => {
  let component: HeroeDialogComponent;
  let fixture: ComponentFixture<HeroeDialogComponent>;
  const dialogMock = {
    close: () => {},
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeDialogComponent ],
      imports: [
        MatDividerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTooltipModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: HEROE_CREATE_DATA_MOCK },
        { provide: MatDialogRef, useValue: dialogMock },
      ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to the close dialog function with HEROE_CREATE_DATA_MOCK', () => {
    component.data = HEROE_CREATE_DATA_MOCK;

    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.form.patchValue({
      name: 'test',
      birthDate: new Date('01-25-1993'),
      superPower: 'test',
    });

    const heroeForm: HeroeModel = component.form.getRawValue();
    component.close(heroeForm);

    expect(spy).toHaveBeenCalledWith({
      mode: 'new',
      results: {
      name: 'test',
      birthDate: new Date('01-25-1993'),
      superPower: 'test',
      },
    });
  });

  it('should call to the close dialog function with nothing', () => {

    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.close(false);
    expect(spy).toHaveBeenCalledWith(false);
  });


  it('should call deleteHeroe close Dialog', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.editModeData = HEROE_MOCK[0];
    component.deleteHeroe();
    const expectClose = {
      mode: 'delete',
      results:  HEROE_MOCK[0]
    }
    expect(spy).toHaveBeenCalledWith(expectClose);
  });
});
