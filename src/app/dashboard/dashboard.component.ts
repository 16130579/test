import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void{
    this.heroService.getHero().subscribe(he => this.heroes = he.slice(1, 5));
  }
  test(name: string): void {
    alert('@@@@' + name);
  }
}
