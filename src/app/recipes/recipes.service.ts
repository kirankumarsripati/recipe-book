import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject();

  private recipes: Recipe[] = [
    {
      name: 'Vada Pav',
      description: 'Maharashtra Special',
      imagePath: '//media.istockphoto.com/photos/vada-pav-with-a-glass-of-tea-very-famous-street-food-of-india-in-the-picture-id1248186164',
      ingredients: [
        {
          name: 'Potato',
          amount: 5,
        },
        {
          name: 'Pav',
          amount: 10,
        },
      ],
    },
    {
      name: 'Misal Pav',
      description: 'Mamledar Special',
      imagePath: '//media.istockphoto.com/photos/misal-pavindian-street-food-picture-id1222977707',
      ingredients: [
        {
          name: 'Misal',
          amount: 5,
        },
        {
          name: 'Pav',
          amount: 10,
        },
      ],
    }
  ];

  constructor(
    private slService: ShoppingListService,
  ) { }

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
