import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

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

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
