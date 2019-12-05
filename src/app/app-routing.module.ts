import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
{
  path: 'Anatta',
  component: ProductDetailComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'Anatta'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
