import { Component, Input, OnInit } from "@angular/core";
import { ElementName } from "../element";
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero
  @Input() elements?: ElementName[]
  constructor() { }

  ngOnInit(): void { }
}
