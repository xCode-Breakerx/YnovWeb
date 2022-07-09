import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from "@angular/router";
import { MemesComponentComponent } from "./memes-component/memes-component.component";
import { MemeMakerComponent }      from "./mememaker/meme-maker.component";

const routes: Routes = [
  {
    path     : "index",
    component: MemesComponentComponent
  },
  {
    path     : "meme_maker",
    component: MemeMakerComponent
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
