import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Meme }                          from "../../models/MemesModel";

export interface DialogData
{
  meme: Meme
}

@Component({
             selector   : 'app-meme-maker-dialog',
             templateUrl: './meme-maker-dialog.component.html',
             styleUrls  : ['./meme-maker-dialog.component.scss']
           })
export class MemeMakerDialogComponent
{

  constructor(
    public dialogRef: MatDialogRef<MemeMakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  )
  {
  }

  onNoClick(): void
  {

  }

  GenerateMeme(DynamicForm: HTMLFormElement)
  {

  }
}
