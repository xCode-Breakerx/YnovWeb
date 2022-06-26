import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MemesModel } from "./models/MemesModel";

const APIKEY: string = "k_12345678";

@Injectable({
              providedIn: 'root'
            })
export class ApiServiceService
{

  constructor(private httpClient: HttpClient)
  {
  }

  private api_url = `https://api.imgflip.com`;

  public getMemes(): Observable<MemesModel>
  {
    return this.httpClient
               .get<MemesModel>(`${this.api_url}/get_memes`);
  }
}
