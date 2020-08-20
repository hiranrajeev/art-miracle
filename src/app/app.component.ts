import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'art-miracle';
  public showLoader: boolean = true;
  imgs = new Array();

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
    this.pload(
      "https://theartmiracle.com/assets/herobackground.png",
      "assets/Hiran.png");
  }

  pload(...args: any[]): void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }
  }
}


