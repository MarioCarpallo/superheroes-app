import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { SearchComponent } from './components/search/search.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AgePipe } from 'src/app/shared/pipes/date-to-age.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeroeDialogComponent } from './components/heroe-dialog/heroe-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


@NgModule({
  declarations: [
    MainHomeComponent,
    SearchComponent,
    HeroeCardComponent,
    AgePipe,
    HeroeDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientTestingModule,
    
  ]
})
export class HomeModule { }
