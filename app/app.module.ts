import { ListViewModule  } from '@syncfusion/ej2-angular-lists';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [   AppComponent ], imports: [ BrowserModule, CommonModule, ListViewModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
