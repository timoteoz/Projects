function Calculadora() {
  this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes();
        this.apertaEnter();
    };

    //Adiciona a função de realizar a conta pela tecla ENTER,desse modo:adiciona um evento ao documento(geral),'keyup' = quando a tecla é levantada, e depois diz, if = Se o código da tecla for igual a 13(código da tecla ENTER),retornar o metodo calcula
       this.apertaEnter = () => {
        document.addEventListener('keypress' , event => {
             if ( event.keyCode === 13) {
                this.calcula();
            }
        });
       };

    //Método para adicionar um cliques,usando um evento(event.target que mostra  para realizar um evento ao ser clicado com o mouse.E usa o "contains",basicamente fala : se o -linha de código-.contains(conter), tal tal coisa)
    this.cliqueBotoes = () => {
        document.addEventListener('click' , event => {
            const el = event.target;
        if (el.classList.contains('btn-num')) this.addNumDisplay(el);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-calcula')) this.calcula();
        
        });
    };  

//Adiciona o item clicado ao display(Usando '+='  para iterar."el" como evento e innerText para adicionar como texto)
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
       this.display.focus();
    }



 //Exclui tudo no display
    this.clear = () => this.display.value = " ";

    //Exclui somente um número no display(slice decide quando começar a mostrar)
    this.del = () => this.display.value = this.display.value.slice(0 , -1);


     this.calcula = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
     };
    }
//Retornar a calculadora
const calculadora = new Calculadora();
calculadora.inicia();
     

