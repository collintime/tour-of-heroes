import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    templateUrl: 'app/hero-detail.component.html',
})

export class HeroDetailComponent {
    
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    
    goBack() {
        window.history.back();
    }

    hero: Hero;
}