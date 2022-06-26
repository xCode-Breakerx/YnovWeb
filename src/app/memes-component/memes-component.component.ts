import { Component, OnInit } from '@angular/core';
import { MemesModel }        from "../models/MemesModel";
import { ApiServiceService } from "../api-service.service";

@Component({
             selector   : 'app-memes-component',
             templateUrl: './memes-component.component.html',
             styleUrls  : ['./memes-component.component.scss']

           })
export class MemesComponentComponent implements OnInit
{

  memes: MemesModel | undefined;
  MaxSize: number = 0;

  constructor(private httpService: ApiServiceService)
  {

  }

  ngOnInit(): void
  {
    this.httpService.getMemes()
        .subscribe(value =>
                   {
                     this.memes = value as MemesModel;
                     console.log(this.memes)
                     this.MaxSize = Math.max(...this.memes.data.memes.map(m => m.height));
                   })
  }

  ScrollTop()
  {
    window.scroll({
                    top     : 100,
                    left    : 100,
                    behavior: 'smooth'
                  })
  }
}
