import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeroesService {
    private API_PATH = 'https://udem.herokuapp.com/';

    constructor(private http: HttpClient) { }

    getHeroList() {
        return this.http.get(`${this.API_PATH}/heroes`);
    }
}
