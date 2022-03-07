import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    const chanceToFail = 10
    const randomChance = Math.floor(Math.random() * 100)
    const hasFailed = chanceToFail > randomChance

    if (hasFailed) {
      this.messageService.add('HeroService: error fetching heroes, no result')
      return new Observable()
    }
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }
}
