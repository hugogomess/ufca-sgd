import { Routes } from '@angular/router';

import { ListDemandsComponent, DemandPageComponent } from './components';
import { HomeComponent } from './components';

export const DemandRoutes: Routes = [
    {path: 'admin/demandas', component: ListDemandsComponent},
    {path: '', component: HomeComponent},
    {path: 'demandas/:demandId', component: DemandPageComponent}
];
