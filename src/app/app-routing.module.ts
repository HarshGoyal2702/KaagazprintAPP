import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule) },
  { path: 'kaagaz', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canLoad: [LoginGuard] },
  {
    path: 'payment',
    loadChildren: () => import('./pages/home/orders/payment/payment.module').then( m => m.PaymentPageModule),canLoad:[LoginGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
