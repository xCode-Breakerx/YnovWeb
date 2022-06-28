import { Component, Input, OnInit } from '@angular/core';
import { Meme }                     from "../../models/MemesModel";
import { MatDialog }                from "@angular/material/dialog";
import { MemeMakerDialogComponent } from "../meme-maker-dialog/meme-maker-dialog.component";

/**
 * A component used to display a single meme inside a card
 */
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

  /**
   * Opens the meme creator dialog
   * @constructor
   */
  OpenMemeEditor()
  {
    this.dialog.open(MemeMakerDialogComponent, {
      width : "auto",
      height: "auto",
      data  : {
        meme: this.Meme
      }
    });
  }
}
