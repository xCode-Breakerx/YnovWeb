import { Component, OnInit } from '@angular/core';
import { MemesModel }        from "../models/MemesModel";
import { ApiServiceService } from "../Services/api-service.service";
import { CatsModel }         from "../models/CatsModel";

/**
 * . Structures the memes page and handles the memes display layout
 */
@Component({
             selector   : 'app-memes-component',
             templateUrl: './memes-component.component.html',
             styleUrls  : ['./memes-component.component.scss']

           })
export class MemesComponentComponent implements OnInit
{

  memes: MemesModel | undefined; // all the memes retrieved from the api
  cats: CatsModel[] | undefined; // the cats to distract the user
  MaxSize: number = 0;
  Index: number   = 0; // current selected cat index

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

  /**
   * Scroll to the top of the page with a smooth animation
   * @constructor
   */
  ScrollTop()
  {
    window.scroll({
                    top     : 100,
                    left    : 100,
                    behavior: 'smooth'
                  })
  }

  /**
   * Display the previous cat
   * @constructor
   */
  PrevCat()
  {
    this.Index = (++this.Index) % this.cats!.length;
  }

  /**
   * Display the next cat
   * @constructor
   */
  NextCat()
  {
    this.Index = --this.Index == -1 ? this.cats!.length - 1 : this.Index;
  }
}
