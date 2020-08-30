import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Vada Pav',
      description: 'Maharashtra Special',
      imagePath: '//media.istockphoto.com/photos/vada-pav-with-a-glass-of-tea-very-famous-street-food-of-india-in-the-picture-id1248186164',
    },
    {
      name: 'Misal Pav',
      description: 'Mamledar Special',
      imagePath: '//hebbarskitchen.com/wp-content/uploads/mainPhotos/misal-pav-recipe-how-to-make-maharashtrian-misal-pav-recipe-1-1068x1423.jpeg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
