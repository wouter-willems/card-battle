import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayingFieldComponent} from "./playing-field/playing-field.component";
import {DbComponent} from "./db/db.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'game'
    },
    {
        path: 'game',
        component: PlayingFieldComponent,
    },
    {
        path: 'db',
        component: DbComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
