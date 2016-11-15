import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  //moduleId:'module.id',
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

  constructor(
    private router:Router,
    private heroService: HeroService) { }
 
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
  gotoDetail(): void {
      let link = ['/detail', this.selHero.id];
      this.router.navigate(link);
  }
 

}

