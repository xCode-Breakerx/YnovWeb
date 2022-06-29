import { Injectable }                          from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable }                          from "rxjs";
import { MemesModel }                          from "../models/MemesModel";
import { CatsModel }                           from "../models/CatsModel";
import { CaptionMemeModel }                    from "../models/CaptionMemeModel";

/**
 * This api should not be here
 */
const APIKEY: string = "1e9157f9-f4c8-4ed4-9f27-d3d5bd6b1815";

/**
 * A service provided in the root which handles API calls
 */
@Injectable({
              providedIn: 'root'
            })
export class ApiServiceService
{

  constructor(private httpClient: HttpClient)
  {
  }

  private api_url: string             = `https://api.imgflip.com`;
  private create_meme_api_url: string = `https://api.imgflip.com/caption_image`;
  private cat_api_url: string         = `https://api.thecatapi.com/v1/images`;

  /**
   * retrieve a list of memes
   */
  public getMemes(): Observable<MemesModel>
  {
    return this.httpClient
               .get<MemesModel>(`${this.api_url}/get_memes`);
  }

  /**
   * Retrieve a list of cats
   * @param limit the max amount of cats to retrieve
   */
  public getCats(limit: number = 50): Observable<CatsModel[]>
  {
    console.assert(limit > 0);
    return this.httpClient
               .get<CatsModel[]>(`${this.cat_api_url}/search?limit=${limit}`, {
                 headers: {
                   "x-api-key": APIKEY
                 }
               });
  }

  /**
   * Create a meme using imglfip caption endpoint
   * @param caption the caption model to send in the POST request
   * @constructor
   */
  public CreateMeme(caption: CaptionMemeModel): Observable<{success: boolean, error_message: string}>
  {
    // set the http params because the body is x-www-form-urlencoded and not json
    let params: HttpParams = new HttpParams()
      .set("username", caption.username)
      .set("password", caption.password)
      .set("template_id", caption.template_id)

    //  set the optional fields if they exist
    if( caption.text0 )
      params = params.set("text0", caption.text0)
    if( caption.text1 )
      params = params.set("text1", caption.text1)
    if( caption.font )
      params = params.set("font", caption.font)
    if( caption.boxes )
    {
      for( let i = 0; i < caption.boxes.length; i++ )
      {
        params = params.set(`boxes[${i}][text]`, caption.boxes[i].text)
        if( caption.boxes[i].color )
          params = params.set(`boxes[${i}][color]`, caption.boxes[i].color!)
        if( caption.boxes[i].outline_color )
          params = params.set(`boxes[${i}][outline_color]`, caption.boxes[i].outline_color!)
        if( caption.boxes[i].x )
          params = params.set(`boxes[${i}][x]`, caption.boxes[i].x!.toString())
        if( caption.boxes[i].y )
          params = params.set(`boxes[${i}][y]`, caption.boxes[i].y!.toString())
        if( caption.boxes[i].width )
          params = params.set(`boxes[${i}][width]`, caption.boxes[i].width!.toString())
        if( caption.boxes[i].height )
          params = params.set(`boxes[${i}][height]`, caption.boxes[i].height!.toString())
      }
    }
    if( caption.max_font_size )
      params = params.set("max_font_size", caption.max_font_size)

    return this.httpClient
               .post<{success: boolean, error_message: string}>
               (this.create_meme_api_url,
                params.toString(), {
                  headers: new HttpHeaders()
                    .set("Content-Type", "application/x-www-form-urlencoded") // content is x-www-form-urlencoded
                }) // api key is not required as we use user credentials
  }
}
