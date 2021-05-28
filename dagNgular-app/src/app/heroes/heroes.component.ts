import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

titel: string = "Your name";
selectedHero: Hero | undefined;

 heroes: Hero[] = [
   {id: 10, name: "Dag"},
   {id: 12, name: "Petri"},
   {id: 13, name: "Mattias"},
   {id: 14, name: "Oskar"},
   {id: 15, name: "Wilde"},
   {id: 16, name: "Jocke"}
  ];

  constructor() { }

  ok(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
