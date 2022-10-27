import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroeModel } from 'src/app/shared/models/heroe.model';

@Component({
  selector: 'app-heroe-dialog',
  templateUrl: './heroe-dialog.component.html',
  styleUrls: ['./heroe-dialog.component.scss']
})
export class HeroeDialogComponent implements OnInit {
 /**
    * Contains the general form
    */
  form!: FormGroup;

  /**
   * The edit form values datas to init
   */
   editModeData!: HeroeModel;
  constructor(    
    public dialogRef: MatDialogRef<any>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.getData();
    this.initFormValues();
  }

  getData() {
    this.editModeData = this.data.editModeData;
  }

  
  //Init form values from Dialog Data received
   private initFormValues() {
    this.form = this._initForm(this.editModeData);
  }

  
   //Initialize all form controls by object received based on edit mode
   private _initForm(isEditMode: HeroeModel | boolean): FormGroup {
    const form = this.fb.group({
      name: this.fb.control({ value: (isEditMode) ? this.editModeData.name : '', disabled: (isEditMode? true:false) },[
        Validators.required,
        ]),
      superPower: this.fb.control({ value: (isEditMode) ? this.editModeData.superPower : '', disabled: false },
        [
          Validators.required,
        ]),
        birthDate: this.fb.control({ value: (isEditMode) ? this.editModeData.birthDate : '', disabled: false },
        [
          Validators.required,
        ]),
    });
    return form;
  }

   
   // Close the dialog with form data entered
    close(form: HeroeModel | boolean): void {
      const response = {
        mode: (this.data.isEditMode) ? 'edit' : 'new',
        results: this.form.getRawValue()
      };
      if (form) {
        this.dialogRef.close(response);
      } else {
        this.dialogRef.close(false);
      }
    }


    deleteHeroe(){
      const response = {
        mode: 'delete',
        results: this.editModeData
      };
      this.dialogRef.close(response);
    }
}
