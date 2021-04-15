import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cathombres',
  templateUrl: './cathombres.page.html',
  styleUrls: ['./cathombres.page.scss'],
})
export class CathombresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  regresar() {
    this.router.navigate(['/home']);
  }
}
