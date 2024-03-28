import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-sass-one-testimonial',
    templateUrl: './sass-one-testimonial.component.html',
    styleUrls: ['./sass-one-testimonial.component.scss']
})
export class SassOneTestimonialComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    testimonialSlides: OwlOptions = {
		loop: true,
		margin: 10,
		nav: false,
		navText:[
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		dots: true,
		smartSpeed: 2000,
		items: 1,
		
    }


	}

