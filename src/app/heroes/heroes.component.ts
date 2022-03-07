import { Component, OnInit } from '@angular/core';
import { ElementName } from '../element';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero
  elements = Object.values(ElementName)

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }


  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
