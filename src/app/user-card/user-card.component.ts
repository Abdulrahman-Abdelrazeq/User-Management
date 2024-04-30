import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import VanillaTilt from 'vanilla-tilt';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements AfterViewInit {

  @Input() user : any;

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit() {
    // Initialize Vanilla Tilt on the element
    VanillaTilt.init(this.elementRef.nativeElement.querySelectorAll(".tilt"), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    });
  }

  onHover(): void {
    setTimeout(()=>{
      this.elementRef.nativeElement.querySelector(".flip-box").classList.add('tilt');
      this.ngAfterViewInit()
    }, 700)
  }

  onMouseOut(): void {
    this.elementRef.nativeElement.querySelector(".flip-box").classList.remove('tilt');
  }

  onUserClick(id : any) {
    this.router.navigate(['/user-details', id]); // Replace with your actual route path
  }
}
