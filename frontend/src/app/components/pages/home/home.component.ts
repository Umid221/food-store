import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
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
    let foodObservable: Observable<Food[]> = of([]);
    activatedRoute.params.subscribe((params) => {
      if (params['searchValue']) {
        foodObservable = this.foodService.searchFoods(params['searchValue']);
      } else if (params['tag']) {
        foodObservable = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        foodObservable = this.foodService.getAllFoods();
      }
      foodObservable.subscribe((result) => (this.foods = result));
    });
  }
}
