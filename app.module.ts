import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HowToInstallComponent } from './how-to-install.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent,
        HowToInstallComponent
    ],
    bootstrap:[AppComponent]
})
export class AppModule{}
