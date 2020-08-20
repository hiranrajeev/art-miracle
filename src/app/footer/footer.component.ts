import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $('.footer-menu li a').click(function (event) {
        console.log("inside script")
        event.preventDefault();
        $('body,html').animate({
          scrollTop: $($(this).attr('href')).offset().top - 40
        }, 50);
      });
    })(jQuery);

  }

}
