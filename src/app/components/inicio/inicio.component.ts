import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(private router: Router) {}
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'masculino';

  cambiarMasculino() {
    this.sexo = 'masculino';
  }

  cambiarFemenino() {
    this.sexo = 'femenino';
  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  calcularBMI() {

    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(2)])
  }


  ngOnInit(): void {}
}
