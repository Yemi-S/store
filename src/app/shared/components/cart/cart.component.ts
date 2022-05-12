import { Component } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
    selector:'app-cart',
    templateUrl:'cart.component.html'
})

export class CartComponent{
    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cart$ = this.shoppingCartSvc.cartAction$;
  
    
    constructor(private shoppingCartSvc: ShoppingCartService) { }
}