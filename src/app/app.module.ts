import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './components/herores-list/heroes-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HeroesListComponent
    }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(reducers),
    ],
    declarations: [
        AppComponent,
        HeroesListComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }