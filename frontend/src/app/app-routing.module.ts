import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodComponent } from './components/pages/food/food.component';
import { CartComponent } from './components/pages/cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
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
