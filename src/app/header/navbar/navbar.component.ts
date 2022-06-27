import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialIcon360Component }                    from "../../animations/material/icons/materialicon360/material-icon360.component";
import { OverlayContainer }                            from "@angular/cdk/overlay";

@Component({
             selector   : 'app-navbar',
             templateUrl: './navbar.component.html',
             styleUrls  : ['./navbar.component.scss']
           })
export class NavbarComponent implements OnInit, AfterViewInit
{
  @ViewChild('switch') mode: MaterialIcon360Component = null!

  constructor(private _overlayContainer: OverlayContainer)
  {

  }

  ngOnInit(): void
  {

  }

  ngAfterViewInit(): void
  {
    if( localStorage.getItem("theme") == "dark" )
    {
      this.mode.animate = true;
      document.getElementById("__root__")?.classList.add("theme-alternate")
      this._overlayContainer.getContainerElement().classList.add("theme-alternate")
    }
  }

  SwitchMode(mode: MaterialIcon360Component)
  {
    mode.toggle();
    if( mode.animate )
    {
      localStorage.setItem("theme", "dark")
      document.getElementById("__root__")?.classList.add("theme-alternate")
      this._overlayContainer.getContainerElement().classList.add("theme-alternate")
    } else
    {
      localStorage.setItem("theme", "light")
      document.getElementById("__root__")?.classList.remove("theme-alternate")
      this._overlayContainer.getContainerElement().classList.remove("theme-alternate")
    }
  }
}
