import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

export const routes: Routes = [
  { path: "", redirectTo: "ecommerce", pathMatch: "full" },
  { path: "ecommerce", component: EcommerceComponent },
];
