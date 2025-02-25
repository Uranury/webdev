import { Component, OnInit, signal } from '@angular/core';
import { Product, products } from '../products';
import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Route, ActivatedRoute} from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [NgFor, NgIf, NgbRatingModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // Store all products as a signal
  allProducts = products;
  // Store filtered products as a signal
  products = signal<Product[]>(this.allProducts);
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      const categoryId = Number(params.get('category_id'));
      
      // If we have a valid category ID, filter products
      if (categoryId) {
        this.products.set(this.allProducts.filter(p => p.category === categoryId));
      } else {
        // If no category ID or invalid, show all products
        this.products.set(this.allProducts);
      }
    });
  }

  shareWA(productName: string) {
    const shareMessage = `Check out this product: ${productName}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }

  shareTG(productName: string) {
    const shareMessage = `Check out this product: ${productName}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  IncreaseLikes(product: Product) {
    product.likes += 1;
  }

  removeProduct(product: Product) {
    this.allProducts = this.allProducts.filter(p => p.id !== product.id);
    this.products.set(this.allProducts.filter(p => p.category === Number(this.route.snapshot.paramMap.get('category_id')))); 
  }
  
}

