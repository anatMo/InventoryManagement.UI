import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service/products.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{

  productDetails: Product = {
    productId: '',
    productName: '',
    category: '',
    price: 0,
    unitsInStock: 0
  };

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const productId = params.get('productId');

        if(productId) {
          this.productService.getProduct(productId)
          .subscribe({
            next: (response) => {
              this.productDetails = response;
            }
          })
        }
      }
    })
  }

  updateProduct() {
    this.productService.updateProduct(this.productDetails.productId, this.productDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products']);
      }
    });
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products']);
      }
    })
  }
}
