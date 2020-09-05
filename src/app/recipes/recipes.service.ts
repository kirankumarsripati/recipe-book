import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
