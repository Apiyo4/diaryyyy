import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: "app-diaryform",
  templateUrl: "./diaryform.component.html",
  styleUrls: ["./diaryform.component.css"],
})
export class DiaryformComponent implements OnInit {
  newEntry: Diary = new Diary("", "", new Date());
  @Output() diaryEntry = new EventEmitter<Diary>()
  addEntry(){
    this.diaryEntry.emit(this.newEntry)
    this.newEntry = new Diary("", "", new Date());
  }
  constructor() {}

  ngOnInit() {}
}
