import { Component, Input, OnInit } from '@angular/core';
import { Meme }                     from "../../models/MemesModel";
import { MatDialog }                from "@angular/material/dialog";
import { MemeMakerDialogComponent } from "../meme-maker-dialog/meme-maker-dialog.component";

@Component({
             selector   : 'app-memes-component-display',
             templateUrl: './memes-component-display.component.html',
             styleUrls  : ['./memes-component-display.component.scss']
           })
export class MemesComponentDisplayComponent implements OnInit
{
  @Input() Meme: Meme = null!;

  constructor(private dialog: MatDialog)
  {

  }

  ngOnInit(): void
  {
  }

  OpenMemeEditor()
  {
    this.dialog.open(MemeMakerDialogComponent, {
      width : "600px",
      height: "600px",
      data  : {
        meme: this.Meme
      }
    });
  }
}
