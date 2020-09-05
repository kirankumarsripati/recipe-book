import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(
    private slService: ShoppingListService,
  ) { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    this.slService.addIngredient({
      name: this.nameInputRef.nativeElement.value,
      amount: +this.amountInputRef.nativeElement.value,
    });
  }
}
