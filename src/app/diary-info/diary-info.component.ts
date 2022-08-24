import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Diary }from '../diary';

@Component({
  selector: 'app-diary-info',
  templateUrl: './diary-info.component.html',
  styleUrls: ['./diary-info.component.css']
})
export class DiaryInfoComponent implements OnInit {
@Input() diary: Diary;
@Output() isComplete = new EventEmitter<boolean>();

deleteItem(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
