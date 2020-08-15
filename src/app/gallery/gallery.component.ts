import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  x;

  constructor() {
     this.x = 4;
   }

  ngOnInit(): void {
    
  }

  private urls: string[] = [
    'assets/gallery/family sketch/f1.png',
    'assets/gallery/family sketch/f2.png',
    'assets/gallery/family sketch/f3.png',
    'assets/gallery/family sketch/f4.png',
    'assets/gallery/family sketch/f5.png',
    'assets/gallery/family sketch/f6.png',
    'assets/gallery/family sketch/f7.png',
    'assets/gallery/family sketch/f8.png',
    'assets/gallery/family sketch/f9.png'
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

 
  public getWidth(windowWidth) {
    if (this.photoWidth(windowWidth, this.x) < 100) {
      this.x--;
      if (this.x > 1)
        this.getWidth(windowWidth);
      else
        return 100;
    }
    return this.photoWidth(windowWidth,this.x);
  }

  public photoWidth(windowWidth, x) {
    return (windowWidth / x) -5 ;
  }

}
