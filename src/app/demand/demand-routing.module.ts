import { Routes } from '@angular/router';

import { ListDemandsComponent, DemandPageComponent } from './components';
import { HomeComponent } from './components';
import { AuthGuard } from '../guards';

export const DemandRoutes: Routes = [
    {path: 'admin/demandas', component: ListDemandsComponent,canActivate: [AuthGuard]},
    {path: '', component: HomeComponent},
    {path: 'demandas/:demandId', component: DemandPageComponent}
];
