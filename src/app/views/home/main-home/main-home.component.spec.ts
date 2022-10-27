import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { HeroeServiceMock } from 'src/app/shared/mocks/heroe-service.mock';
import { HEROE_DIALOG_ADD_MOCK, HEROE_DIALOG_DELETE_MOCK, HEROE_DIALOG_EDIT_MOCK, HEROE_MOCK } from 'src/app/shared/mocks/heroe.mock';
import { HeroesService } from 'src/app/shared/services/heroes.service';

import { MainHomeComponent } from './main-home.component';

describe('MainHomeComponent', () => {
  let component: MainHomeComponent;
  let fixture: ComponentFixture<MainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeComponent ],
      imports: [
        MatPaginatorModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,

      ],
      providers: [
        { provide: HeroesService, useClass: HeroeServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search with characters', () => {
    component.searchAction('a');
    expect(component.heroeList).toBeTruthy();
  });

  it('should search without characters', () => {
    component.searchAction(null);
    expect(component.heroeList).toEqual(HEROE_MOCK);
  });

  it('should open the dialog and add the new Heroe', () => {
    const heroeDialogResult = HEROE_DIALOG_ADD_MOCK;
    heroeDialogResult.results.name = 'testa'

    spyOn(component.dialog, 'open')
    .and.returnValue({ afterClosed: () => of(heroeDialogResult) } as MatDialogRef<unknown>)

    spyOn(component.snackBar, 'open');

    component.openDialog();

    expect(component.snackBar.open).toHaveBeenCalled();
  });


  it('should open the dialog and edit the Heroe', () => {
    const heroeDialogResult = HEROE_DIALOG_EDIT_MOCK;

    spyOn(component.dialog, 'open')
    .and.returnValue({ afterClosed: () => of(heroeDialogResult) } as MatDialogRef<unknown>)

    spyOn(component.snackBar, 'open');

    component.openDialog(HEROE_MOCK[0]);

    expect(component.snackBar.open).toHaveBeenCalled();
  });

  it('delete the Heroe', () => {

    const heroeDialogResult = HEROE_DIALOG_DELETE_MOCK;


    spyOn(component.dialog, 'open')
    .and.returnValue({ afterClosed: () => of(heroeDialogResult) } as MatDialogRef<unknown>)
    spyOn(component.snackBar, 'open');
    
    component.openDialog(heroeDialogResult);

    expect(component.snackBar.open).toHaveBeenCalled();
  });

  it('add the Heroe', () => {

    const heroeDialogResult = HEROE_MOCK[0];

    spyOn(component.snackBar, 'open');
    
    component.addNewHeroe(heroeDialogResult);

    expect(component.snackBar.open).toHaveBeenCalled();
  });
});
