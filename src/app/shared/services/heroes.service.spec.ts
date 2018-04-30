import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroesService } from './heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('HeroesService', () => {
    const api = 'https://udem.herokuapp.com';
    let service: HeroesService;
    let getHeroListSpy: jasmine.Spy;
    const data = [
        {
            _name: 'Tony Stark',
            _height: 6.1,
            _picture: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
            _nickname: 'Iron Man'
        },
        {
            _name: 'Peter Parker',
            _height: 5.1,
            _picture: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg',
            _nickname: 'Spider-Man'
        },
        {
            _name: 'James Howlett',
            _height: 5.3,
            _picture: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
            _nickname: 'Wolverine'
        },
        {
            _name: 'Robert Bruce ',
            _height: 5.9,
            _picture: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
            _nickname: 'Hulk'
        },
        {
            _name: 'Thor Odinson',
            _height: 6.6,
            _picture: 'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
            _nickname: 'Thor'
        },
        {
            _name: ' Piotr Rasputin',
            _height: 6,
            _picture: 'http://x.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf4b996f/standard_xlarge.jpg',
            _nickname: 'COLOSSUS'
        },
        {
            _name: 'Ororo Munroe',
            _height: 5.11,
            _picture: 'http://x.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg',
            _nickname: 'Storm'
        },
        {
            _name: 'Remy Etienne ',
            _height: 6.1,
            _picture: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/537baad144c79/standard_xlarge.jpg',
            _nickname: 'Gambit'
        },
        {
            _name: 'Norrin Radd',
            _height: 6.4,
            _picture: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png',
            _nickname: 'Silver Surfer'
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroesService]
        });

        service = TestBed.get(HeroesService);
        getHeroListSpy = spyOn(service, 'getHeroList').and.returnValue(Observable.of(data));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should has been defined an Api', () => {
        expect(service.API_PATH).toEqual(api);
    });

    it('should have been called', (done) => { 
        service.getHeroList();
        expect(getHeroListSpy).toHaveBeenCalledTimes(1);
        done();
    });

    it('should return an array with 9 items', (done) => { 
        service.getHeroList().subscribe((res: any) => {
            expect(res.length).toEqual(data.length);
            done(); 
        }); 
    });
});
