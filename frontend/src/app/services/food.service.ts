import { Injectable } from '@angular/core';
import { sampleFoods, sampleTags } from 'src/data';
import { Food } from '../shared/models/Food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_URL } from '../shared/constants/urls';
import { Tag } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFood(id: string): Observable<Food> {
    return this.http.get<Food>(`${FOODS_URL}/${id}`);
  }

  searchFoods(value: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${FOODS_URL}/search/${value}`);
  }

  getAllTags() {
    return this.http.get<Tag[]>(`${FOODS_URL}/tags`);
  }

  getAllFoodsByTag(tagName: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${FOODS_URL}/tags/${tagName}`);
  }
}
