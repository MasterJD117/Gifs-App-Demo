import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: []
})
export class CardListComponent implements OnInit {

  @Input()
  public gifs: Gif[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
