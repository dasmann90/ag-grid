import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingState } from 'src/app/core/components/loading/loading.component';
import { ProductsService } from 'src/app/core/services/products.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public loading: LoadingState = LoadingState.NotReady;
  product:any;
  productId:number;
  constructor(private productsService:ProductsService,private route: ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.productId = parseInt(data.id);
    })

    this.getProductDetails();
  }

  getProductDetails(){
    this.loading = LoadingState.Processing;
    this.productsService.getProductDetails(this.productId).subscribe(data=>{
      this.product = data;
      this.loading = LoadingState.Ready;
    },error=>{
      this.loading = LoadingState.Ready;
    })
  }

  back(){
    this.location.back();
  }
}
