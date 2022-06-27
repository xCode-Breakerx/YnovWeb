import { Component, OnInit } from '@angular/core';
import { Meme }              from "../models/MemesModel";
import { ActivatedRoute }    from "@angular/router";

@Component({
             selector   : 'app-mememaker',
             templateUrl: './meme-maker.component.html',
             styleUrls  : ['./meme-maker.component.scss']
           })
export class MemeMakerComponent implements OnInit
{
  Meme: Meme | undefined;

  constructor(private route: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {

    this.route.params.subscribe((value: any) =>
                                {
                                  try
                                  {
                                    this.Meme = JSON.parse(value.meme) as Meme;
                                  } catch( e )
                                  {

                                    window.open("/");
                                  }
                                })
  }

}
