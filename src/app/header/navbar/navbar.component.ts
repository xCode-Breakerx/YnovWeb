import { Component, OnInit }        from '@angular/core';
import { MaterialIcon360Component } from "../../animations/material/icons/materialicon360/material-icon360.component";

@Component({
             selector   : 'app-navbar',
             templateUrl: './navbar.component.html',
             styleUrls  : ['./navbar.component.scss']
           })
export class NavbarComponent implements OnInit
{

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  SwitchMode(mode: MaterialIcon360Component)
  {
    mode.toggle();
    if( mode.animate )
    {
      document.getElementById("__root__")?.classList.add("theme-alternate")
    } else
    {
      document.getElementById("__root__")?.classList.remove("theme-alternate")
    }
  }
}
