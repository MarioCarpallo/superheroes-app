import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
  
  //Call searchKey emitter
  searchKey(event: any){
    if(event.target.value == null || event.target.value == ''){
      this.searchEvent.emit(null);
    }else{
      this.searchEvent.emit(event.target.value.toLowerCase());
    }
  }

}
