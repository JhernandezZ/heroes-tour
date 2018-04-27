import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from './reducers';
import * as fromHeroes from './reducers/heroes';
import * as Heroes from './actions/heroes'
import { Hero } from './shared/models/heroes';

@Component({
    selector: "app-component",
    templateUrl: './app.component.html',
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    constructor(private store: Store<fromRoot.State>) {}

    ngOnInit(){ 
        this.store.dispatch( new Heroes.GetList);
    }

}