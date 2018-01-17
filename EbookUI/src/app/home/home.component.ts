import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import {ServerrequestsService} from '../servicerequests.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    if (sessionStorage.getItem('login')===null || sessionStorage.getItem('login')==='false'){

    }
    this.products = this.productService.getProducts();
  }

}
