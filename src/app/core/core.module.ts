import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  exports:[
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [
    ProductsService,
    UsersService
  ]
})
export class CoreModule {}
