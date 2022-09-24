import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly routher: Router
  ) { }

  ngOnInit(): void {
  }

  goToContact() {
    this.routher.navigate(['./contact']);
  }
  downLoadResume() {
    window.open('assets/ResumeNITK.pdf', '_blank');
  }

}
