import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../recipes/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Pasta','Pasta made with white sauce','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl.jpg'),
    new Recipe('Pasta','Pasta made with white sauce','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
