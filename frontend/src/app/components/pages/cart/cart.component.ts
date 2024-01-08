import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(foodId: string) {
    this.cartService.removeFromCart(foodId);
  }

  changeQuantity(cartItem: CartItem, quantity: string) {
    this.cartService.changeQuantity(cartItem.food.id, parseInt(quantity));
  }
}
