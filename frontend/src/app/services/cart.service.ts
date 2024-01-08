import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(food: Food): void {
    const cartItem = this.cart.items.find((item) => item.food.id === food.id);

    if (cartItem) {
      return;
    } else {
      this.cart.items.push(new CartItem(food));
    }
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string) {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    const cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.food.price;
    }
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage() {
    this.cart.totalPrice = this.cart.items.reduce(
      (prev, curr) => prev + curr.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prev, curr) => prev + curr.quantity,
      0
    );
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

  // private
}
