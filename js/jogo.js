
//Criando classe
class Game{

    constructor(){

        //Reset
        this.tituloreset = createElement("h2")
            this.reset = createButton("");

        //Ranking
        this.quadro = createElement("h2");
            this.lider1 = createElement("h2");
        this.lider2 = createElement("h2");

    }

        start(){

            formulario = new Form();
                formulario.show();
            jogador = new Player();
                n_jogadores = jogador.numero();

                    //Criando carros
                    carro1 = createSprite(width/2 - 50, height - 100);
                        carro2 = createSprite(width/2 + 100, height - 100);

                        //Adicionando imagens
                        carro1.addImage(carro1img);
                            carro2.addImage(carro2img);

                        carro1.scale = 0.074567890;
                            carro2.scale = 0.074567890;

                            //Matriz
                            m_carros = [carro1,carro2];

            //Grupo gasolina
            g_gasolina = new Group();

            //Grupo moedas
            g_moeda = new Group()
            
            //Grupo o1
            g_obstaculo1 = new Group()

            //Grupo o2
            g_obstaculo2 = new Group()



            this.adicionar_objetos(g_gasolina,6,gasolinaimg,0.0255836);
                this.adicionar_objetos(g_moeda,19,moedaimg,0.09);
            this.adicionar_objetos(g_obstaculo1,4,o1img,0.03466348283);
                this.adicionar_objetos(g_obstaculo2,4,o2img,0.0367248239);
        }
            verificar(){
                
                var estado_r = database.ref("estado")
                    estado_r.on("value",function(data){

                        estado = data.val()


                    })
            }
                atualizar_estado(n_estado){

                    database.ref("/").update({
                        estado:n_estado
                    })
                }
                    elementos(){

                        formulario.hide();
                            formulario.titulo.position(40,50);
                        formulario.titulo.class("gameTitleAfterEffect");
                
                            //Reset
                            this.tituloreset.html("Recomeçar!!!");
                                this.tituloreset.class("resetText");
                            this.tituloreset.position(width/2 + 200, 40);
                                this.reset.class("resetButton");
                            this.reset.position(width/2 + 230,100);

                            //Ranking
                            this.quadro.html("Placar!!!");
                                this.quadro.class("resetText");
                            this.quadro.position(width/3 - 60, 40);
                                this.lider1.class("leadersText");
                            this.lider1.position(width/3 - 50, 80);
                                this.lider2.class("leadersText");
                            this.lider2.position(width/3 - 50, 130);


                    }

                        play(){

                                this.f_reset();
                                    this.elementos();
                                        Player.informacoes();

                            if (allPlayers !== undefined){
                                image(pistaimg,0,- height*5, width, height*6);
                                    
                                    this.mostrarranking();
                                        this.barra_gasolina();

                                //Definindo posição no database
                                var index = 0;
                                for(var p in allPlayers){

                                    index = index + 1;

                                    var x = allPlayers[p].positionX;
                                        var y = height - allPlayers[p].positionY;
                                    m_carros[index-1].position.x = x;
                                        m_carros[index-1].position.y = y;

                                        //Indentificando jogador
                                        if (index === jogador.index){

                                            fill("lightgreen");
                                            ellipse(x,y,85,85);

                                this.coletar_gasolina(index);
                                this.coletar_moeda(index);

                                                //Camera de jogo
                                                //camera.position.x = m_carros[index - 1].position.x
                                                    camera.position.y = m_carros[index - 1].position.y
                                        }
                                }

                                        
                                    this.controle();
                                drawSprites();
                            }
                        }
                            controle(){

                                if (keyIsDown(UP_ARROW)){

                                    jogador.positionY = jogador.positionY + 10
                                        jogador.update();
                                }
                                if (keyIsDown(LEFT_ARROW)){

                                    jogador.positionX = jogador.positionX - 5
                                        jogador.update();
                                }
                                if (keyIsDown(RIGHT_ARROW)){

                                    jogador.positionX = jogador.positionX + 5
                                        jogador.update();
                                }
                            }

                                f_reset(){

                                    this.reset.mousePressed(()=>{

                                        //Repositório raiz
                                        database.ref("/").set({n_jogadores:0,estado:0,players:{}})
                                        
                                        window.location.reload();
                                    
                                    })

                                }

                                    mostrarranking(){

                                        var lider1;
                                            var lider2;
                                        var competidores = Object.values(allPlayers);

                                        if ((competidores[0].ranking === 0 && competidores[1].ranking === 0) || competidores[0].ranking === 1){

                                                lider1 = competidores[0].ranking + "&emsp;" + competidores[0].nome + "&emsp;" + competidores[0].pontuacao;
                                                lider2 = competidores[1].ranking + "&emsp;" + competidores[1].nome + "&emsp;" + competidores[1].pontuacao;                                                  
                                     
                                        }

                                        this.lider1.html(lider1);
                                            this.lider2.html(lider2);
                                    }

                                        adicionar_objetos(grupo, numero, imagem, escala){

                                            for(var qua = 1; qua<numero; qua+=1){

                                                var x = random(width/2 + 150, width/2 - 150);
                                                    var y = random(-height*4.5, height - 400)

                                                //Objeto
                                                var objeto = createSprite(x,y);
                                                    objeto.addImage(imagem)
                                                        objeto.scale = escala;
                                                            grupo.add(objeto);
                                            
                                            }
                                        }

                                            coletar_gasolina(index){

                                                m_carros[index-1].overlap(g_gasolina, function(coletor,coletado){

                                                    jogador.gasolina = 185;
                                                        coletado.remove();
                                                })

                                            }

                                                coletar_moeda(index){

                                                    m_carros[index-1].overlap(g_moeda, function(coletor,coletado){

                                                        jogador.pontuacao += 1;
                                                            jogador.update();
                                                              coletado.remove();
                                            
                                                    })

                                                };

                                                    barra_gasolina(){

                                                        push()
                                                            image(gasolinaimg,width/2 - 130, height - jogador.positionY - 350, 20, 20);
                                                                fill("red");
                                                                    rect(width/2 - 100, height - jogador.positionY - 350, 185, 20);
                                                                        fill("green");
                                                                            rect(width/2 - 100, height - jogador.positionY - 350, jogador.gasolina, 20);
                                                        pop();






                                                    }




};
