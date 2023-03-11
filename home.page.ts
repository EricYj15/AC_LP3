import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sexo: string = 'homem';
  altura: string = '';
  pesoIdeal: number = 0;
  radioSelecionada: string = '';
  valor: string = '';
  valorFinal: number = 0;
  valorFinal2: number=0;
  conta: number = 0;
  numero: string = '';

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {
    this.conta = 0;
    this.numero = "";
    this.valorFinal2 = 0;

 }


  calcularPesoIdeal() {
    if (this.sexo === 'homem') {
      this.pesoIdeal = 72.7 * parseFloat(this.altura) - 58;
    } else {
      this.pesoIdeal = 62.1 * parseFloat(this.altura) - 44,7

}
}


pagar(){
  if(this.radioSelecionada == 'option1'){
    this.conta = parseFloat(this.numero) / 10 ;
    this.valorFinal2 = this.conta;
  }
  if(this.radioSelecionada == 'option2'){
    this.valorFinal2 = parseFloat(this.numero);
  }
  if(this.radioSelecionada == 'option3'){
    this.conta = parseFloat(this.numero) / 10;
    this.valorFinal2 = parseFloat(this.numero) + this.conta;
  }
}

}
