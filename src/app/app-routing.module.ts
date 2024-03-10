import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products/all', pathMatch: 'full' },
  { path: ProductsComponent.routeName, component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
