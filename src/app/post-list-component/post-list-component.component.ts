import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  postTitle = "Article title.";
  postContent = " Article content.";
  postLoveIts =  0;
  postDontLoveIt = 0;
  postCreated = new Date();


  constructor() { }

  ngOnInit() {
  }

  incLoveIt()
  {
     this.postLoveIts = this.postLoveIts + 1;
  }

  decLoveIt(){
    
    this.postDontLoveIt = this.postDontLoveIt + 1;

  }

  getColor(){

    if(Number(this.postLoveIts) > Number(this.postDontLoveIt)){

      return 'lightgreen';

    }

    else if(Number(this.postLoveIts) < Number(this.postDontLoveIt))
    {
      return '#db3639'
    }

    else
    {
      return 'antiquewhite'
    }

    

  }

}
