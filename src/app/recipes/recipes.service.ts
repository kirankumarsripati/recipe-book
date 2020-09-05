import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Vada Pav',
      description: 'Maharashtra Special',
      imagePath: '//media.istockphoto.com/photos/vada-pav-with-a-glass-of-tea-very-famous-street-food-of-india-in-the-picture-id1248186164',
    },
    {
      name: 'Misal Pav',
      description: 'Mamledar Special',
      imagePath: '//media.istockphoto.com/photos/misal-pavindian-street-food-picture-id1222977707',
    }
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
