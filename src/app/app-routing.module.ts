import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ProductsCategoryComponent.routeName, component: ProductsCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
