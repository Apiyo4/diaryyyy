import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryformComponent } from './diaryform.component';

describe('DiaryformComponent', () => {
  let component: DiaryformComponent;
  let fixture: ComponentFixture<DiaryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
