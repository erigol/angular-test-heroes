import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
   title = 'Tour Of Heroes';
   //heroes = HEROES; Later will come from a web service
   //uninitialised
  heroes: Hero[];
  //Static hero property
  //hero: Hero = { id: 1, name: 'Windstorm' };
  selHero: Hero ;
  constructor(private heroService: HeroService) { }
 
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);

     //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(her: Hero): void {
   this.selHero = her;
 }
 

}

