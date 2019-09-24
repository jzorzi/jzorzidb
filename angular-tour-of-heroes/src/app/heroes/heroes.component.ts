import { Component, OnInit } from '@angular/core';
import { Hero } from '../utils/hero';
import { HEROES } from '../utils/mock-heroes';

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

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // ------- övriga metoder ---------
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('-->' + this.selectedHero.name);
  }

}
