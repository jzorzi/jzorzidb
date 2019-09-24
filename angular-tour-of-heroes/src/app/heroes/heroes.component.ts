import { Component, OnInit } from '@angular/core';
import { Hero } from '../utils/hero';
import { HEROES } from '../utils/mock-heroes';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // ------- övriga metoder ---------
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('-->' + this.selectedHero.name);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
