import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry }          from "@angular/material/icon";
import { DomSanitizer }             from "@angular/platform-browser";

@Component({
             selector   : 'app-materialicon360',
             templateUrl: './material-icon360.component.html',
             styleUrls  : ['./material-icon360.component.scss']
           })
export class MaterialIcon360Component implements OnInit
{
  @Input() svgIconStart: string | undefined;
  @Input() svgIconEnd: string | undefined;
  @Input() start: string               = "";
  @Input() end: string                 = "";
  @Input() colorStart: string          = "";
  @Input() colorEnd: string            = "";
  @Input() animate: boolean            = false;
  @Input() animateFromParent?: boolean = true;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer)
  {
    this.matIconRegistry.addSvgIcon("linkedin", this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/linkedin.svg"))
  }

  ngOnInit()
  {
    // console.log(this.colorStart);
    // console.log(this.colorEnd);
  }

  toggle()
  {
    if( !this.animateFromParent ) this.animate = !this.animate;
  }

  enableAnimation()
  {
    if( this.animateFromParent ) this.animate = true;
  }

  disableAnimation()
  {
    if( this.animateFromParent ) this.animate = false;
  }

}
