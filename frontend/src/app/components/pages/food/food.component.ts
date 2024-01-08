import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['foodId']) {
        this.food = foodService.getFood(params['foodId']);
      }
    });
  }
}
