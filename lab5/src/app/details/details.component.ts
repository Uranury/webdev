import { Component, signal, OnInit, computed } from '@angular/core';
import { products, Product } from '../products';
import { Route, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [NgIf, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // Store all products as a signal
  allProducts = products;
  // Store filtered products as a signal
  products = signal<Product[]>(this.allProducts);
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('product_id'));
      
      // If we have a valid category ID, filter products
      if (productId) {
        this.products.set(this.allProducts.filter(p => p.id === productId));
      } else {
        // If no category ID or invalid, show all products
        this.products.set(this.allProducts);
      }
    });
  }
}