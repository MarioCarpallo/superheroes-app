import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/shared/models/heroe.model';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  @Input() obs: any;
  @Output() editHeroeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  //Call editHeroeEvent emitter
  editHeroe(event: any): void {
    this.editHeroeEvent.emit(event);
  }
}
