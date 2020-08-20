import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { MatTabsModule } from '@angular/material/tabs';


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
    'assets/gallery/couple portrait/cp1.png',
    'assets/gallery/couple portrait/cp2.png',
    'assets/gallery/couple portrait/cp3.png',
    'assets/gallery/couple portrait/cp4.png',
    'assets/gallery/couple portrait/cp5.png',
    'assets/gallery/couple portrait/cp6.png',
    'assets/gallery/couple portrait/cp7.png',
    'assets/gallery/couple portrait/cp8.png',
    'assets/gallery/couple portrait/cp9.png',
    'assets/gallery/couple portrait/cp10.png',
    'assets/gallery/couple portrait/cp11.png'
   
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }


  private urls1: string[] = [
    'assets/gallery/single portrait/sp1.png',
    'assets/gallery/single portrait/sp2.png',
    'assets/gallery/single portrait/sp3.png',
    'assets/gallery/single portrait/sp4.png',
    'assets/gallery/single portrait/sp5.png',
    'assets/gallery/single portrait/sp6.png',
    'assets/gallery/single portrait/sp7.png',
    'assets/gallery/single portrait/sp8.png'
    
  ];

 
  public get images1(): IMasonryGalleryImage[] {
    return this.urls1.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

  private urls2: string[] = [
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

 
  public get images2(): IMasonryGalleryImage[] {
    return this.urls2.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

  private urls3: string[] = [
    'assets/gallery/save the date/s1.png',
    'assets/gallery/save the date/s2.png',
    'assets/gallery/save the date/s3.png',
    'assets/gallery/save the date/s4.png',
    'assets/gallery/save the date/s5.png'
  
  ];

 
  public get images3(): IMasonryGalleryImage[] {
    return this.urls3.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

  private urls4: string[] = [
    'assets/gallery/theme based art/t1.png',
    'assets/gallery/theme based art/t2.png',
    
  ];

 
  public get images4(): IMasonryGalleryImage[] {
    return this.urls4.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

  private urls5: string[] = [
    'assets/gallery/caricature/c1.png',
  ];

 
  public get images5(): IMasonryGalleryImage[] {
    return this.urls5.map(m => <IMasonryGalleryImage>{
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
