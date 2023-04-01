import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper, { SwiperInstance } from 'tiny-swiper'

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements AfterViewInit {

  @ViewChild('element') scrolbar!: ElementRef<HTMLElement>;

  slider?: SwiperInstance;

  ngAfterViewInit(): void {
      if(this.scrolbar.nativeElement){
        const sliderInstance =new Swiper(this.scrolbar.nativeElement);
        console.log(sliderInstance);
        this.slider=sliderInstance;
      }
  }
}
