
//Criando classe
class Form{

    constructor(){

        this.input = createInput("").attribute("placeholder","Digite seu nome");
            this.confirmar = createButton("Confirmar");
        this.titulo = createImg("./assets/TITULO.png");
            this.aguarde = createElement("h2");
    }
        posicoes(){

            this.titulo.position(120,50);
                this.input.position(width/2 - 110, height/2 - 80);
            this.confirmar.position(width/2 - 90, height/2 - 20);
                this.aguarde.position(width/2 - 300, height/2 - 100);
        }
            estilos(){

                this.titulo.class("gameTitle");
                    this.input.class("customInput");
                this.confirmar.class("customButton");
                    this.aguarde.class("greeting");
            }
                hide(){

                    this.aguarde.hide();
                        this.confirmar.hide();
                    this.input.hide();
                }
                    show(){

                        this.posicoes();
                            this.estilos();
                        this.clicar();
                    }
                        clicar(){

                            this.confirmar.mousePressed(() => { this.input.hide(); 
                                this.confirmar.hide(); 
                            var mensagem = ` Olá ${this.input.value()} </br>Espere o outro jogador entrar :) ...`; 
                                this.aguarde.html(mensagem); 
                            n_jogadores += 1;
                                jogador.nome = this.input.value();
                            jogador.index = n_jogadores;
                                jogador.adicionar();
                            jogador.atualizar(n_jogadores);
                                jogador.distancia();
                            });



                        }

}