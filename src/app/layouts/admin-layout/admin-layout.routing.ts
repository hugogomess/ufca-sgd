import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { ShowUsersComponent } from 'src/app/user';
import { HomeComponent } from 'src/app/statics/components';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin', component: AdminLayoutComponent },
    { path: 'usuarios', component: ShowUsersComponent },
];
