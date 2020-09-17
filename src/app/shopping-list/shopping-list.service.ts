import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 1 },
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
