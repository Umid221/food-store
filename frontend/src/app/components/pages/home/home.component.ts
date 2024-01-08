import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchValue']) {
        this.foods = this.foodService.searchFoods(params['searchValue']);
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAllFoods();
      }
    });
  }
}
