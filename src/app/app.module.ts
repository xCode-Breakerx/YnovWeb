import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }                   from './app.component';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { FooterComponent }                from './footer/footer.component';
import { HttpClientModule }               from "@angular/common/http";
import { MemesComponentComponent }        from './memes-component/memes-component.component';
import { MemesComponentDisplayComponent } from './memes-component/memes-component-display/memes-component-display.component';
import { MatCardModule }                  from "@angular/material/card";
import { MatButtonToggleModule }          from "@angular/material/button-toggle";
import { AppRoutingModule }               from './app-routing.module';
import { HeaderComponent }                from './header/header.component';
import { RouterModule }                   from "@angular/router";
import { MatGridListModule }              from "@angular/material/grid-list";
import { MatButtonModule }                from "@angular/material/button";
import { MatIconModule }                  from "@angular/material/icon";
import { ScrollingModule }                from "@angular/cdk/scrolling";
import { MatToolbarModule }               from "@angular/material/toolbar";
import { MatListModule }                  from "@angular/material/list";
import { MatTabsModule }                  from "@angular/material/tabs";
import { NavbarComponent }                from './header/navbar/navbar.component';
import { MaterialIcon360Component }       from './animations/material/icons/materialicon360/material-icon360.component';
import { InfiniteScrollModule }           from "ngx-infinite-scroll";
import { MatInputModule }                 from "@angular/material/input";
import { ServiceWorkerModule }            from '@angular/service-worker';
import { environment }                    from '../environments/environment';
import { MemeMakerComponent }             from './mememaker/meme-maker.component';
import { MemeMakerDialogComponent }       from './memes-component/meme-maker-dialog/meme-maker-dialog.component';
import { MatDialogModule }                from "@angular/material/dialog";

@NgModule({
            declarations: [
              MemeMakerDialogComponent,
              AppComponent,
              FooterComponent,
              MemesComponentComponent,
              MemesComponentDisplayComponent,
              HeaderComponent,
              NavbarComponent,
              MaterialIcon360Component,
              MemeMakerComponent,
              MemeMakerDialogComponent
            ],
            imports     : [
              MatDialogModule,
              BrowserModule,
              BrowserAnimationsModule,
              HttpClientModule,
              MatCardModule,
              MatButtonToggleModule,
              AppRoutingModule,
              RouterModule,
              MatGridListModule,
              MatButtonModule,
              MatIconModule,
              ScrollingModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              InfiniteScrollModule,
              InfiniteScrollModule,
              MatInputModule,
              ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
              })
            ],
            exports     : [],
            providers   : [],
            bootstrap   : [AppComponent]
          })
export class AppModule
{
}
