import { Routes } from '@angular/router';

import { ListDemandsComponent, DemandPageComponent } from './components';

export const DemandRoutes: Routes = [
    {path: 'admin/demandas', component: ListDemandsComponent},
    {path: 'demandas/:demandId', component: DemandPageComponent}
];
