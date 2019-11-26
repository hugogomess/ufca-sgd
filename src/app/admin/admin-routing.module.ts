import { Routes } from '@angular/router';

import { DashboardComponent } from './components';
import { AuthGuard } from '../guards';

export const AdminRoutes: Routes = [
    {path: 'admin', component: DashboardComponent,canActivate: [AuthGuard]},
];
