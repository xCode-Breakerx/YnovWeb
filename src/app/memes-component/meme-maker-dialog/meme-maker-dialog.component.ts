import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Meme }                          from "../../models/MemesModel";
import { Subject, takeUntil }            from "rxjs";
import { ApiServiceService }             from "../../Services/api-service.service";
import { BoxesModel, CaptionMemeModel }  from "../../models/CaptionMemeModel";
import { environment }                   from "../../../environments/environment";

/**
 * Dialog data interface
 */
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

/**
 * Dialog component used to create memes from the selected template
 */
@Component({
             selector   : 'app-meme-maker-dialog',
             templateUrl: './meme-maker-dialog.component.html',
             styleUrls  : ['./meme-maker-dialog.component.scss']
           })
export class MemeMakerDialogComponent
{

  bIsProcessing: boolean                   = false;
  bIsProcessingInitialDisplay: boolean     = true;
  bIsMemeReady: boolean                    = false;
  private CancellationToken: Subject<void> = new Subject<void>(); // Subject used to control the http request
  public created_meme: Sugoma | undefined;

  constructor(
    public dialogRef: MatDialogRef<MemeMakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api: ApiServiceService
  )
  {
    api.CreateMeme({
                     template_id: this.data.meme.id,
                     username   : environment.user, // unsafe code
                     password   : environment.pwd, // unsafe code
                     boxes      : [...Array(this.data.meme.box_count).keys()].map(i => ({text: (i + 1).toString()} as BoxesModel)) // map the input text to the box structure
                   } as CaptionMemeModel)
       .pipe(takeUntil(this.CancellationToken)) // cancellation token
       .subscribe(
         {
           next    : value =>
           {
             this.created_meme = value as Sugoma;
           },
           error   : error =>
           {

           },
           complete: () =>
           {
             this.bIsMemeReady                = true
             this.bIsProcessingInitialDisplay = false;
           }
         }
       );
  }

  /**
   * Resets the dialog state
   * @constructor
   */
  ResetState()
  {
    this.CancellationToken.next(); // cancel pending request(s)
    this.bIsProcessing = false;
    this.bIsMemeReady  = false;
    this.created_meme  = undefined;
  }

  GenerateMeme()
  {
    if( this.bIsProcessingInitialDisplay ) return;
    let input: HTMLInputElement[] = [];

    // retrieve all the text boxes
    for( let i = 0; i < this.data.meme.box_count; i++ )
    {
      input.push(document.getElementById(`__dynamic__[${i}]`) as HTMLInputElement)
    }

    this.ResetState();
    this.bIsProcessing = true;
    // call the api endpoint to that creates a meme
    this.api.CreateMeme({
                          template_id: this.data.meme.id,
                          username   : environment.user, // unsafe code
                          password   : environment.pwd, // unsafe code
                          boxes      : input.map(i => ({text: i.value} as BoxesModel)) // map the input text to the box structure
                        } as CaptionMemeModel)
        .pipe(takeUntil(this.CancellationToken)) // cancellation token
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

  // opens the created meme on a new tab
  OpenMeme()
  {
    if( this.created_meme )
      window.open(this.created_meme.data?.url, "_blanc")
  }
}
