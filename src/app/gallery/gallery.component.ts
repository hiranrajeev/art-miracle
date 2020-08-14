import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

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

}
