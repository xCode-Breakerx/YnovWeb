import { Component, OnInit }        from '@angular/core';
import { MaterialIcon360Component } from "../animations/material/icons/materialicon360/material-icon360.component";

@Component({
             selector   : 'app-footer',
             templateUrl: './footer.component.html',
             styleUrls  : ['./footer.component.scss']
           })
export class FooterComponent implements OnInit
{

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  OpenLink(url: string)
  {
    window.open(url, "_blanc")
  }

  OnHover(btn: MaterialIcon360Component)
  {
    btn.toggle();

  }

  OnLeave(btn: MaterialIcon360Component)
  {
    btn.toggle();

  }
}
