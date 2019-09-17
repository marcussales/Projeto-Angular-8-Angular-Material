import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
 
  todosData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.todosData = [];
  }
 
  ngOnInit() {
    this.getAllTodos();
  }
 
  getAllTodos() {
    //Get da lista de To-Dos
    this.apiService.getToDos().subscribe(response => {
      console.log(response);
      this.todosData = response;
    })
  }

  //Colunas a serem exibidas
  displayedColumns: string[] = ['Id', 'UserId', 'Title', 'Completed'];
}