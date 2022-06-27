import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable }              from "rxjs";
import { MemesModel } from "./models/MemesModel";
import { CatsModel }  from "./models/catsModel";

const APIKEY: string = "1e9157f9-f4c8-4ed4-9f27-d3d5bd6b1815";

@Injectable({
              providedIn: 'root'
            })
export class ApiServiceService
{

  constructor(private httpClient: HttpClient)
  {
  }

  private api_url: string     = `https://api.imgflip.com`;
  private cat_api_url: string = `https://api.thecatapi.com/v1/images`;

  public getMemes(): Observable<MemesModel>
  {
    return this.httpClient
               .get<MemesModel>(`${this.api_url}/get_memes`);
  }

  public getCats(limit: number = 30): Observable<CatsModel[]>
  {
    return this.httpClient
               .get<CatsModel[]>(`${this.cat_api_url}/search?limit=${limit}`, {
                 headers: {
                   "x-api-key": APIKEY
                 }
               });
  }
}
