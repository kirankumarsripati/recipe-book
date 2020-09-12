import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
