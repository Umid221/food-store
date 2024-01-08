import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodComponent } from './components/pages/food/food.component';

const routes: Routes = [
  { path: 'food/:foodId', component: FoodComponent },
  { path: 'search/:searchValue', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
