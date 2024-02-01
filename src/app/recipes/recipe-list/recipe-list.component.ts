import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
    recipes: Recipe[] = [
      new Recipe('A test Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2024/01/19/18/00/hydrangeas-8519528_1280.jpg'),
      new Recipe('A test Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2024/01/19/18/00/hydrangeas-8519528_1280.jpg'),
    ];
  
    constructor() { }
  
    ngOnInit(): void {
    }
}
