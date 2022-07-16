import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = "Nosotros";
  datatext= "Somos una agencia de marketing digital y publicidad con una gran experiencia en el mercado, ayudando a empresas de distintos sectores a crecer en el medio digital incrementando sus clientes potenciales y su alcance comercial."

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMision(){
    this.data = "Misión";
    this.datatext = "Crear y desarrollar soluciones de marketing digital y publicidad que aporten valor a las empresas, brindando un servicio de calidad y profesionalismo."
  }
  cambiarVision(){
    this.data = "Visión";
    this.datatext = "Ser la principal agencia de marketing y publicidad en Playa del Carmen, reconocidos por nuestros resultados favorables y tratos personalizados con las empresas a las que se les trabaja.";
  }
  cambiarNosotros(){
    this.data = "Nosotros";
    this.datatext = "Ser el principal canal de comunicación entre empresa y cliente, generando soluciones a nuestros clientes de acuerdo a sus necesidades de forma eficaz y personalizada.";
  }
}
