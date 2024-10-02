import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guards/login.guard';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '', component: HomePage, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule),
                canLoad: [LoginGuard]
            },
            {
                path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule),
                canLoad: [LoginGuard]
            },
            {
                path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
                canLoad: [LoginGuard]
            },
            {
                path: 'my-orders', loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersPageModule),
                canLoad: [LoginGuard]
            },
        ], canActivateChild: [LoginGuard]
    },
    {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
    },
    {
        path: 'my-orders',
        loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomePageRoutingModule { }
