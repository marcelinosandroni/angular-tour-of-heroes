import { Component, OnInit } from '@angular/core';
import { ElementName } from '../element';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero
  elements = Object.values(ElementName)

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponents: Selected hero id = ${hero.id}`)
  }


  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
