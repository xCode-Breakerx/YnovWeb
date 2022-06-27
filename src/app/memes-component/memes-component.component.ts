import { Component, OnInit } from '@angular/core';
import { MemesModel }        from "../models/MemesModel";
import { ApiServiceService } from "../Services/api-service.service";
import { CatsModel }         from "../models/CatsModel";

@Component({
             selector   : 'app-memes-component',
             templateUrl: './memes-component.component.html',
             styleUrls  : ['./memes-component.component.scss']

           })
export class MemesComponentComponent implements OnInit
{

  memes: MemesModel | undefined;
  cats: CatsModel[] | undefined;
  MaxSize: number = 0;
  Index: number   = 0;

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
    this.httpService.getCats()
        .subscribe(value =>
                   {
                     this.cats = value as CatsModel[];
                     console.log(this.cats)
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

  Prev()
  {
    this.Index = (++this.Index) % this.cats!.length;
  }

  Next()
  {
    this.Index = --this.Index == -1 ? this.cats!.length - 1 : this.Index;
  }
}
