import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }                   from './app.component';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { FooterComponent }                from './footer/footer.component';
import { HttpClient, HttpClientModule }   from "@angular/common/http";
import { MemesComponentComponent }        from './memes-component/memes-component.component';
import { MemesComponentDisplayComponent } from './memes-component-display/memes-component-display.component';
import { MatCardModule }                  from "@angular/material/card";
import { MatButtonToggleModule }          from "@angular/material/button-toggle";

@NgModule({
            declarations: [
              AppComponent,
              FooterComponent,
              MemesComponentComponent,
              MemesComponentDisplayComponent
            ],
            imports: [
              BrowserModule,
              BrowserAnimationsModule,
              HttpClientModule,
              MatCardModule,
              MatButtonToggleModule
            ],
            providers   : [],
            bootstrap   : [AppComponent]
          })
export class AppModule
{
}
