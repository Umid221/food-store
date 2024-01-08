import { Injectable } from '@angular/core';
import { sampleFoods, sampleTags } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFoods(): Food[] {
    return sampleFoods;
  }

  getFood(id: string): Food {
    return sampleFoods.find((food) => food.id === id) ?? new Food();
  }

  searchFoods(value: string): Food[] {
    return sampleFoods.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  getAllTags() {
    return sampleTags;
  }

  getAllFoodsByTag(tagName: string): Food[] {
    return tagName === 'All'
      ? sampleFoods
      : sampleFoods.filter((food) => food.tags?.includes(tagName));
  }
}
