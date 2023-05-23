import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingState } from 'src/app/core/components/loading/loading.component';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public loading: LoadingState = LoadingState.NotReady;
  productsData:any = [];

  constructor(
    private productsService:ProductsService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.loading = LoadingState.Processing;
    this.productsService.getProductList().subscribe(data=>{
      this.productsData = data;
      this.loading = LoadingState.Ready;
    },error=>{
      this.loading = LoadingState.Ready;
    })
  }

  productDetails(id:number){
    this.router.navigate(['products',id]);
  }
}
