import { Component, OnInit } from '@angular/core';
import { MessgesService } from '../messeges.service';

@Component({
  selector: 'app-messeges',
  templateUrl: './messeges.component.html',
  styleUrls: ['./messeges.component.scss']
})
export class MessegesComponent implements OnInit {

  constructor(public messageService: MessgesService) { }

  ngOnInit(): void {
  }

}
