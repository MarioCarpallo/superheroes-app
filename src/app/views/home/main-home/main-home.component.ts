import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, takeUntil } from 'rxjs';
import { animations } from 'src/app/shared/animations/animations';
import { HEROE_MOCK, IMAGE_RANDOM } from 'src/app/shared/mocks/heroe.mock';
import { GenericResponse } from 'src/app/shared/models/generic-response.model';
import { HeroeModel } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { HeroeDialogComponent } from '../components/heroe-dialog/heroe-dialog.component';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
  animations: [animations]
})
export class MainHomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  heroeList: HeroeModel[] = []; //Lista Inicial

  //Estas dos variables son para hacer funcionar la paginación en local. De normal se utilizaría una llamada a back.
  dataSource: MatTableDataSource<HeroeModel> = new MatTableDataSource<HeroeModel>();
  obs: any;


  constructor(    
    public _heroesService: HeroesService,
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
    public snackBar: MatSnackBar

    ) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.checkInitialhHeroes();
  }
  
  //A la que entramos en la página, hacemos un get para recibir el listado de Héroes
  checkInitialhHeroes(){
    this._heroesService.getAllHeroes().subscribe((data: HeroeModel[]): void => {
      this.heroeList = data;
      this.dataSource = new MatTableDataSource<HeroeModel>(data)
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    })
  }

  //A la que se levanta una tecla, se hace un filtrado de forma local (Normalmente sería atacando a un endpoint)
  searchAction(searchString: any) {
    if(searchString === null){
      this.checkInitialhHeroes();
    }else{

      const listFiltered = this.checkListWithString(searchString);
      this.dataSource = new MatTableDataSource<HeroeModel>(listFiltered)
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();

    }
  }

  //Función que busca en todo el nombre si contiene lo escrito por el input.
  checkListWithString(searchString: string){
    const listFiltered: HeroeModel[] = [];

    this.heroeList.filter(heroe => {
      const str = heroe.name.toLowerCase();
      const searchString2 = new RegExp(searchString, 'g')
      if(str.match(searchString2)){
        listFiltered.push(heroe);
      }
  })
    return listFiltered;
  }

  //Función que se utiliza para tanto añadir como editar el héroe, abre el modal.
    openDialog(event?: any){
  
        const dialogData = {
          isEditMode: event ? true : false,
          editModeData: event ? event : null,
        };
        const dialogRef = this.dialog.open(HeroeDialogComponent, {
          width: '850px',
          data: dialogData,
        });
  
        dialogRef
          .afterClosed()
          .subscribe((dialogResult: any) => {
            if(dialogResult != null || dialogResult != false){
              if(dialogResult.mode === 'new'){
                dialogResult.results.image = (IMAGE_RANDOM[Math.floor(Math.random() * (3 - 0 + 1) + 0)])
                this.checkIfExists(dialogResult.results);
              }else if(dialogResult.mode === 'edit'){
                this.editHeroe(dialogResult.results)
              }else{
                this.deleteHeroe(dialogResult.results)
              }
            }   
          });
    }

    //Este método consulta si ya existe el nombre del superheroe, para no duplicar identificador único.
    checkIfExists(heroe:HeroeModel){
      let exists = false;
      this.heroeList.find(o => {
        if (o.name.toLocaleLowerCase() === heroe.name.toLowerCase()) {
          exists = true;
            return true;
        }else{
          return false;
        }
      })

      if(!exists){
        this.addNewHeroe(heroe);
      }else{
        const error = {
          message: 'El nombre del SuperHeroe ya existe, editalo o cámbia el nombre',
          errorType: 'info-snackbar'
        }
        this.snackbarMessageHandler(error);
      }
      
    }
    
    //En el caso de que el modal se cierre y esté en modo "new", se añade al servicio, y se emite un mensaje
    addNewHeroe(heroe: HeroeModel){
      this._heroesService.addNewHeroe(heroe, true).subscribe((data: GenericResponse): void => {
       this.snackbarMessageHandler(false, data);
      })
    }

    //En caso contrario al anterior, y contenga un "edit", se edita buscando como identificador único el nombre 
    //(Normalmente iría por id, pero al no disponer de Back, he decidido usarlo como tal).
    editHeroe(heroe: HeroeModel){
      this.heroeList.find((o, i) => {
        if (o.name === heroe.name) {
          const image = this.heroeList[i].image;
          this.heroeList[i] = heroe;
          this.heroeList[i].image = image;
            return true; 
        }else{
          return
        }
    });
    this._heroesService.editHeroe(this.heroeList, true).subscribe((data: GenericResponse): void => {
      this.snackbarMessageHandler(false, data);
    });

    }

    //En el caso de que todo vaya correctamente, se elimina el héroe, y salta la notificación
    deleteHeroe(heroe: HeroeModel){
      this.heroeList.find((o,i) =>{
        if(o.name === heroe.name){
          this.heroeList.splice(i, 1); 
          this._heroesService.deleteHeroe(this.heroeList, true).subscribe((data: GenericResponse): void => {
            this.snackbarMessageHandler(false, data);
          });
          return true;
        }else{
          return false;
        }
      })
    }

    //Handler para los mensajes de información (Notificaciones)
    snackbarMessageHandler(otherError?: any, response?: GenericResponse){
      if(response?.success){
        this.snackBar.open(
          `${response.message}`,
          'OK',
          {
            duration: 5001,
            panelClass: ['good-snackbar']
          },
        );
        this.checkInitialhHeroes();
       }else{
        this.snackBar.open(
          `${response?.message}`,
          'ERROR',
          {
            duration: 10000,
            panelClass: ['error-snackbar', 'alert-snackbar'],
          }
        );
       }

       if(otherError != false){
        this.snackBar.open(
          otherError.message,
          'INFO',
          {
            duration: 10000,
            panelClass: [otherError.errorType],
          }
        );
       }
    }
  }
