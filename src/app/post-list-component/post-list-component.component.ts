import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  postTitle = "Article title.";
  postContent = " Article content.";
  postLoveIts = " Article loveIts count.";
  postCreated = " Article creation date."


  constructor() { }

  ngOnInit() {
  }

}
