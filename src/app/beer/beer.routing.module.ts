import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerComponent } from './beer.component';
import { BeerResolver } from './resolver/beer.resolver';

const routes: Routes = [{
    path: '',
    component: BeerComponent,
    resolve: {
        beerData: BeerResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeerRoutingModule { }
