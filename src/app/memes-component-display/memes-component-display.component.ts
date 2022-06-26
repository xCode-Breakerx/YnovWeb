import { Component, Input, OnInit } from '@angular/core';

@Component({
             selector   : 'app-memes-component-display',
             templateUrl: './memes-component-display.component.html',
             styleUrls  : ['./memes-component-display.component.scss']
           })
export class MemesComponentDisplayComponent implements OnInit
{
  @Input() Title: string | undefined;
  @Input() MemeLink: string | undefined;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
