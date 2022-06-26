import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from "@angular/router";
import { MemesComponentComponent } from "./memes-component/memes-component.component";

const routes: Routes = [
  {
    path      : "",
    redirectTo: 'index',
    pathMatch : "full"
  },
  {
    path     : "index",
    component: MemesComponentComponent
  }
]

@NgModule({
            declarations: [],
            imports     : [
              RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'top'})
            ],
            exports     : [RouterModule]
          })
export class AppRoutingModule
{
}
