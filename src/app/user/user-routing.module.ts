import { Routes } from '@angular/router';

import { AddUserComponent } from './components';
import { ShowUsersComponent } from './components';

export const UserRoutes: Routes = [
    {path: 'admin/usuarios/novo', component: AddUserComponent},
    {path: 'admin/usuarios', component: ShowUsersComponent}
];
