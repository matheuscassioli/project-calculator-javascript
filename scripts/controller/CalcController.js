 class CalcController {

     constructor() {
         this._operation = [];
         this._locale = 'pt-BT'
         this._displayCalcEl = document.querySelector("#display ");
         this._dateEl = document.querySelector("#data");
         this._timeEl = document.querySelector("#hora");
         this._currentDate;
         this.initialize();
         this.initButtonsEvents();
     }

     initialize() { // QUANDO ABRO A PAGINA - INICIALIZO ELA

         setInterval(() => { // SETA UM INTERVALO PARA ATUALIZAR A INFO

             this.setDisplayDateTime(); //CHAMA O METODO - CRIADO ABAIXO

         }, 1000); // ATUALIZA COM ESSE INTERVALO
     }

     addEventListenerAll(element, events, fn) { // CRIACAO DESSE METODO

         events.split(' ').forEach(event => {

             element.addEventListener(event, fn, false);

         });
     }


     clearAll() {
         this._operation = [];

     }
     clearEntry(){
         this._operation.pop();
     }

     addOperation(value) {
         this._operation.push(value);

         console.log(this._operation);

     }

     setError() {
         this.displayCalc = "Error";
     }

     execBtn(value) {
         switch (value) {
             case 'ac':
                 this.clearAll();
                 break;

             case 'ce':
                 this.clearEntry();
                 break;

             case 'soma':
                  
                 break;

             case 'subtracao':
                  
                 break;

             case 'divisao':
                  
                 break;

             case 'multiplicacao':
                  
                 break;

             case 'porcento':
                  
                 break;

             case 'igual':
                  
                 break;

             case '0':
             case '1':
             case '2':
             case '3':
             case '4':
             case '5':
             case '6':
             case '7':
             case '8':
             case '9':
                 this.addOperation(parseInt(value));
                    break;

             default:
              
                 break;

         }
     }

     initButtonsEvents() { // CRIACAO DESSE METODO

         let buttons = document.querySelectorAll("#buttons > g , #parts > g"); // ARMAZENO OS BOTOES NA VARIAVEL BUTTONS

         buttons.forEach((btn, index) => { // PERCORRE TODOS OS BOTOES

             this.addEventListenerAll(btn, 'click drag', e => { // TODAS VEZ QUE FOR CLICADO OU ARRASTADO
                 let textBtn = console.log(btn.className.baseVal.replace("btn-", "")); // IMPRIMI O QUE FOI CLICADO RETIRANDO A PALAVRA BTN- DA CLASSE

                 this.execBtn(textBtn);
             });


             this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => { // SE O MOUSE FOR PASSADO EM CIMA DOS BTNS 
                 btn.style.cursor = "pointer"; //MOSTRA MAO DE CLICK
             });
         })
     }


     setDisplayDateTime() { // CRIACAO DESSE METODO
         this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
             day: "2-digit",
             month: "long",
             year: "numeric"
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