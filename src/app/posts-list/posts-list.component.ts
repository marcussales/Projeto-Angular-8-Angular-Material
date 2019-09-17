import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
 
  postsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.postsData = [];
  }
 
  ngOnInit() {
    this.getAllPosts();
  }
 
  getAllPosts() {
    //Get da lista de Postagens
    this.apiService.getPosts().subscribe(response => {
      console.log(response);
      this.postsData = response;
    })
  }

  //Ordenação das colunas a serem mostradas
  displayedColumns: string[] = ['Id', 'UserId', 'Title', 'Body'];

}