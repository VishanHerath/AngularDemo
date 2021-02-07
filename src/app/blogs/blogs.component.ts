import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service' 

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs = null;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs
  }

}
