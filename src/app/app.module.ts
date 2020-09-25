import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryformComponent } from './diaryform/diaryform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DiaryComponent, DiaryformComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
