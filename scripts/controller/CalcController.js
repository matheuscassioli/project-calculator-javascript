 class CalcController {

     constructor() {

         this._locale = 'pt-BT'
         this._displayCalcEl = document.querySelector("#display ");
         this._dateEl = document.querySelector("#data");
         this._timeEl = document.querySelector("#hora");
         this._currentDate;
         this.initialize();
     }

     initialize() {


         setInterval(() => { // SETA UM INTERVALO PARA ATUALIZAR A INFO

             this.setDisplayDateTime(); //CHAMA O METODO - CRIADO ABAIXO

         }, 1000); // ATUALIZA COM ESSE INTERVALO
     }

     setDisplayDateTime() { // CRIACAO DESSE METODO
         this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit", 
            month: "long",
            year:"numeric"
         });
         this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

     }

     get displayTime() { // RECUPERA A HORA
         return this._timeEl.innerHTML;
     }

     set displayTime(value) { //SETA A HORA
         this._timeEl.innerHTML = value;
     }

     get displayDate() { // RECUPERA A DATA
         return this._dateEl.innerHTML;
     }

     set displayDate(value) { //SETA A DATA
         this._dateEl.innerHTML = value;
     }

     get displayCalc() { // RECUPERA O VALOR
         return this._displayCalcEl.innerHTML;
     }

     set displayCalc(value) { //SETA UM NOVO VALOR
         this._displayCalcEl.innerHTML = value;
     }

     get currentDate() { // RECUPERA A DATA
         return new Date();
     }

     set currentDate(value) { //SETA UMA NOVA DATA
         this.currentDate = value;
     }
 }