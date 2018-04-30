import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { HeroesEffects } from './effects/heroes';
import { HeroesService } from './shared/services/heroes.service';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './components/herores-list/heroes-list.component';
import { HeroesListItemComponent } from './components/hero-list-item/hero-list-item.component';
import { RankPipe } from './shared/pipes/rank';
import { UnitPipe } from './shared/pipes/unit-convertion';
import { HeroDetailComponent } from './components/hero-detail/hero-detail-component';

const appRoutes: Routes = [
    {
        path: '',
        component: HeroesListComponent
    },
    {
        path: 'hero/:heroName',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([HeroesEffects])
    ],
    declarations: [
        AppComponent,
        HeroesListComponent,
        HeroesListItemComponent,
        HeroDetailComponent,
        RankPipe,
        UnitPipe
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        HeroesService
    ]
})
export class AppModule { }