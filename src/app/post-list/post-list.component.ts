import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	@Input() posts: any[];
	

  constructor() { }

  ngOnInit() {

  	
  	
  }

}
