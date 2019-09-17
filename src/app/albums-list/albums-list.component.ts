import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
 
  albumsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.albumsData = [];
  }
 
  ngOnInit() {
    this.getAllAlbums();
  }
 
  getAllAlbums() {
    //Get da lista de Albuns
    this.apiService.getAlbums().subscribe(response => {
      console.log(response);
      this.albumsData = response;
    })
  }

  //Ordenação das colunas exibidas
  displayedColumns: string[] = ['Id', 'UserId', 'Title'];

}