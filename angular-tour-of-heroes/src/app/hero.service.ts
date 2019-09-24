import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './utils/hero';
import { HEROES } from './utils/mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // ----- övriga metoder -----
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
