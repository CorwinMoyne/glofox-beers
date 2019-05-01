import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/beer', pathMatch: 'full' },
    { path: 'beer', loadChildren: '../beer/beer.module#BeerModule', runGuardsAndResolvers: 'always' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
