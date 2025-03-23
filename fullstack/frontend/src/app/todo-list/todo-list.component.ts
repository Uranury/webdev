import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,  // Ensure this component is standalone
  imports: [CommonModule],  // Import CommonModule for *ngFor
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(
      todos => {
        console.log("Fetched todos:", todos); // ✅ Debugging log
        this.todos = todos;
      },
      error => {
        console.error("Error fetching todos:", error); // ✅ Catch API errors
      }
    );
  }  

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => this.loadTodos());
  }
}
