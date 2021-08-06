import { Component,OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent  {
  title = 'CodingWithArif';
  navname=['ABOUT','EXPERIENCE','EDUCATION','SKILLS','INTERESTS'];
  constructor(){}

}
