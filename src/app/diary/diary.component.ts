import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: "app-diary",
  templateUrl: "./diary.component.html",
  styleUrls: ["./diary.component.css"],
})
export class DiaryComponent implements OnInit {
  isForm: boolean = false;
  diaryEntries: Diary[] = [
    new Diary(
      "Lorem ipsum  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Faucibus in ornare quam viverra orci sagittis eu. Risus nec feugiat in fermentum. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Morbi tempus iaculis urna id volutpat. Tristique senectus et netus et malesuada fames ac. Feugiat nisl pretium fusce id velit ut. Id aliquet lectus proin nibh nisl condimentum id venenatis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. ",
      new Date(2020, 9, 24)
    ),
    new Diary(
      "Convallis convallis ",
      "Convallis convallis tellus id interdum velit laoreet id donec ultrices. Eget nunc scelerisque viverra mauris in. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Feugiat in fermentum posuere urna. Fermentum leo vel orci porta non. Nunc faucibus a pellentesque sit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.",
      new Date(2020, 8, 24)
    ),
    new Diary(
      "Amet est placerat",
      "Amet est placerat in egestas erat imperdiet sed euismod nisi. Turpis tincidunt id aliquet risus feugiat in ante. Euismod elementum nisi quis eleifend. Tellus pellentesque eu tincidunt tortor. Aliquet sagittis id consectetur purus ut faucibus pulvinar. In est ante in nibh mauris cursus mattis. Sed cras ornare arcu dui vivamus arcu. Urna et pharetra pharetra massa. Mauris nunc congue nisi vitae suscipit tellus..",
      new Date(2020, 8, 24)
    ),
  ];
  showForm() {
    this.isForm = !this.isForm;
  }
  addNewEntry(diaryEntry: Diary) {
    console.log(diaryEntry);
    // diaryEntry.date = new Date(diaryEntry.date)
    diaryEntry.date = new Date(diaryEntry.date);
    this.diaryEntries.unshift(diaryEntry);

    this.isForm = false;
  }
  deleteEntry(i: number){
    this.diaryEntries.splice(i,1 )
  }
  constructor() {}

  ngOnInit() {}
}
