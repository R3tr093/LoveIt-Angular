import { Component, OnInit, Input } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  getRandomInt() {

    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }
  
  url = "https://api.nasa.gov/planetary/apod?api_key=KmieIDYWbdNlwhBaig9I7V9k9B4wk8f8puYzd0hq&date=2019-06-1" + this.getRandomInt();
 
  postTitle = axios.get(this.url)
  .then(function (response) {
    console.log(response.data)
    return response.data.title;})
  .catch(function (error) {})
  .finally(function () {});


  postContent = axios.get(this.url)
  .then(function (response) {
    console.log(response.data)
    return response.data.explanation;})
  .catch(function (error) {})
  .finally(function () {});

  postImage = axios.get(this.url)
  .then(function (response) {
    console.log(response.data)
    return response.data.url;})
  .catch(function (error) {})
  .finally(function () {});

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
