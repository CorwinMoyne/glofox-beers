import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'beer', loadChildren: '../beer/beer.module#BeerModule', runGuardsAndResolvers: 'always' },
    { path: '', redirectTo: '/beer', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
