import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guards/login.guard';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '', component: HomePage, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule), canLoad: [LoginGuard] },
            { path: 'order', loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule), canLoad: [LoginGuard] },
        ], canActivateChild: [LoginGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomePageRoutingModule { }
