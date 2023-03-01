import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnComponent } from './components/turn/turn.component';
import { CountryCommandComponent } from './components/country-command/country-command.component';
import { StepComponent } from './components/step/step.component';
import { CommandComponent } from './components/command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnComponent,
    CountryCommandComponent,
    StepComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
