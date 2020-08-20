import { Component, OnInit, HostListener } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $('#collapsibleNavbar ul li a').click(function (event) {
        console.log("inside script")
        event.preventDefault();
        $('body,html').animate({
          scrollTop: $($(this).attr('href')).offset().top - 40},50);

          $( "#collapsibleNavbar" ).removeClass( "show" );
        // or use return false;
      });
    })(jQuery);
  }

  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 10) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

}
