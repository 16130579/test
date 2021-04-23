import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Heroo } from 'src/hero';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  clock!: Observable<Date>;
  colorControl = '';
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Heroo(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  @Output() testRequest = new EventEmitter();

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
  }
  test(): void {
    this.testRequest.emit('thanh');
  }
  onSubmit(hero: Heroo): void {
    this.submitted = true;
    // alert('@@@@' + hero);
    hero.toString();
  }
  newHero(): void {
    this.model = new Heroo(42, '', '');
  }
}
