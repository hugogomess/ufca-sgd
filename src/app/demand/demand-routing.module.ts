import { Routes } from '@angular/router';

import { ListDemandsComponent } from './components';
import { AuthGuard } from '../guards';

export const DemandRoutes: Routes = [
    {path: 'admin/demandas', component: ListDemandsComponent, canActivate: [AuthGuard]},
];
