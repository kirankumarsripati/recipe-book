import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipes.service';

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
}
