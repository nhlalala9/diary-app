import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  title = 'diary';
  diaries:Diary[] = [
   new Diary (1,'Appointment with my Doctor','Go to visit my doctor for checkup to see the progress of my medication',new Date(2019,8,15)),
   new Diary (2,'Introduction to Angular','Read on angular and learn how angular is used to create applications that are reactive and user friendly',new Date(2019,8,14)),
   new Diary (3,'Javascript','Read on js and jquery and learn how javascript is used to create applications that are reactive and user friendly',new Date(2019,8,13)),
   new Diary (4,'Visit Moringa School','Visit Moringa school for an interview to join their core class whisc starts on 23th August 2019',new Date(2019,8,12)),  
  ];
  newDiaryEntry(item){
    let goalLength = this.diaries.length;
    item.id = goalLength-1;
    item.createdOn = new Date(item.createdOn)
    this.diaries.unshift(item)
  }
  toggle(index){
    this.diaries[index].displayInfo = !this.diaries[index].displayInfo;
  }
  deleteItem(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].name}?`)
      if(toDelete){
        this.diaries.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
