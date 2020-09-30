import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
  ) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book2-kk.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>('https://ng-course-recipe-book2-kk.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          }
        });
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
