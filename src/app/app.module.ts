import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SearchBarComponent } from './subscription/search-bar/search-bar.component';
import { CardComponent } from './subscription/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    SearchBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
