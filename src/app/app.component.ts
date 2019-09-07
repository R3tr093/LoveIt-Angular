import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Our articles : ';


  Posts = [
    {
      
      
      title: "Post 1",
      content: "Content 1",
      loveIts: "loveIt's 1",
      created_at: new Date()
    },
    {
      title: "Post 2",
      content: "Content 2",
      loveIts: "loveIt's 2",
      created_at: new Date()
    },
    {
      title: "Post 3",
      content: "Content 3",
      loveIts: "loveIt's 3",
      created_at: new Date()
    }
  ];

}
