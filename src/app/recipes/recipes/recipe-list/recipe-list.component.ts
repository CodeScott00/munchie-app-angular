import { Component } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    //added from the Recipe model class to model the same recipe style for each recipe that will be created/intansaiated
    new Recipe(
      'Test recipe',
      'description test',
      'https://www.recipetineats.com/wp-content/uploads/2014/12/One-Pot-mexican-chicken-and-rice_3.jpg'
    ),
    new Recipe(
      'Steak recipe',
      'it takes so good becasue I made it!',
      'https://cdn.shopify.com/s/files/1/0586/3630/4429/products/beef-box_c0775a6f-439c-441b-aad4-f92506a6df1e.jpg?v=1655046458'
    ),
  ];
}
