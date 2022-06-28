import { Component, OnInit }        from '@angular/core';
import { MaterialIcon360Component } from "../animations/material/icons/materialicon360/material-icon360.component";

/**
 * Footer component
 */
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

  /**
   * helper function to open a given link
   * @param url the url to open
   * @constructor
   */
  OpenLink(url: string)
  {
    window.open(url, "_blanc")
  }

  /**
   * @deprecated unused
   * @param btn the button to animate
   * @constructor
   */
  OnHover(btn: MaterialIcon360Component)
  {
    btn.toggle();
  }

  /**
   * @deprecated unused
   * @param btn the button to animate
   * @constructor
   */
  OnLeave(btn: MaterialIcon360Component)
  {
    btn.toggle();

  }
}
