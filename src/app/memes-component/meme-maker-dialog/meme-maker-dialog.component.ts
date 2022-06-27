import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Meme }                          from "../../models/MemesModel";
import { Subject, takeUntil }            from "rxjs";
import { ApiServiceService }             from "../../Services/api-service.service";
import { BoxesModel, CaptionMemeModel }  from "../../models/CaptionMemeModel";

export interface DialogData
{
  meme: Meme
}

class Sugoma
{
  success: boolean = false;
  error_message: string | undefined;
  data: {
          url: string,
          page_url: string
        } | undefined;
}

@Component({
             selector   : 'app-meme-maker-dialog',
             templateUrl: './meme-maker-dialog.component.html',
             styleUrls  : ['./meme-maker-dialog.component.scss']
           })
export class MemeMakerDialogComponent
{

  bIsProcessing: boolean                   = false;
  bIsMemeReady: boolean                    = false;
  private CancellationToken: Subject<void> = new Subject<void>();
  public created_meme: Sugoma | undefined;

  constructor(
    public dialogRef: MatDialogRef<MemeMakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api: ApiServiceService
  )
  {
  }

  ResetState()
  {
    this.CancellationToken.next();
    this.bIsProcessing = false;
    this.bIsMemeReady  = false;
    this.created_meme  = undefined;
  }

  GenerateMeme(DynamicForm: HTMLFormElement)
  {
    let input: HTMLInputElement[] = [];

    for( let i = 0; i < this.data.meme.box_count; i++ )
    {
      input.push(document.getElementById(`__dynamic__[${i}]`) as HTMLInputElement)
    }

    this.ResetState();
    this.bIsProcessing = true;
    this.api.CreateMeme({
                          template_id: this.data.meme.id,
                          username   : "codebreakerumbra",
                          password   : "%coffee%#69",
                          boxes      : input.map(i =>
                                                 {
                                                   let boxesModel: BoxesModel = new BoxesModel();
                                                   boxesModel.text            = i.value;
                                                   return boxesModel;
                                                 })
                        } as CaptionMemeModel)
        .pipe(takeUntil(this.CancellationToken))
        .subscribe(
          {
            next    : value =>
            {
              this.bIsMemeReady = true;
              this.created_meme = value as Sugoma;
            },
            error   : error =>
            {

            },
            complete: () =>
            {
              this.bIsProcessing = false;
            }
          }
        );
  }

  OpenMeme()
  {
    if( this.created_meme )
      window.open(this.created_meme.data?.url, "_blanc")
  }
}
