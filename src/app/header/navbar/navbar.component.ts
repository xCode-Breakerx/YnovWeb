import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialIcon360Component }                    from "../../animations/material/icons/materialicon360/material-icon360.component";
import { OverlayContainer }                            from "@angular/cdk/overlay";

/**
 * The navbar component
 */
@Component({
             selector   : 'app-navbar',
             templateUrl: './navbar.component.html',
             styleUrls  : ['./navbar.component.scss']
           })
export class NavbarComponent implements OnInit, AfterViewInit
{
  /**
   * holds a reference to the icon that toggles the website theme
   */
  @ViewChild('switch') mode: MaterialIcon360Component = null!

  constructor(private _overlayContainer: OverlayContainer)
  {

  }

  ngOnInit(): void
  {

  }

  /**
   * called after the view has been initialized and the child view is set
   */
  ngAfterViewInit(): void
  {
    if( localStorage.getItem("theme") == "dark" )
    {
      this.mode.animate = true;
      document.getElementById("__root__")?.classList.add("theme-alternate")
      // must set theme on the overlay container in order for dialogs to capture the current theme
      this._overlayContainer.getContainerElement().classList.add("theme-alternate")
    }
  }

  /**
   * Switches the website theme
   * @param icon the icon handling the theme switch
   * @constructor
   */
  SwitchMode(icon: MaterialIcon360Component)
  {
    icon.toggle();
    if( icon.animate ) //  is dark theme enabled?
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
