import { TooltipModule } from '@syncfusion/ej2-angular-popups';

import { SpeedDialModule } from '@syncfusion/ej2-angular-buttons';

import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ SpeedDialModule, TooltipModule, BrowserModule, TextBoxModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
