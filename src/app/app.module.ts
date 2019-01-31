import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { GetdataService } from './services/getdata.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TruncatePipe } from './shared/truncate.pipe';
import { ItemCounterComponent } from './components/item-counter/item-counter.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'products', component:ProductListComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    TruncatePipe,
    ItemCounterComponent,
    CartComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
