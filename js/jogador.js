
//Criando classe
class Player{

    constructor(){

        this.nome = null;
            this.index = null;
        this.positionX = 0;
            this.positionY = 0;
        this.ranking = 0;
            this.pontuacao = 0;
        this.gasolina = 185; 
    }
        numero(){

            var n_jogadoresR = database.ref("n_jogadores")
                n_jogadoresR.on("value",function(data){
                    n_jogadores = data.val();
                });
        }
            atualizar(quant){

                database.ref("/").update({
                    n_jogadores:quant
                });
            }
                adicionar(){

                    var id = "players/player" + this.index;
                        if(this.index==1){
                            this.positionX = width/2 - 100;
                        } else{
                            this.positionX = width/2 + 100;
                        }
                            database.ref(id).set({

                                nome:this.nome,
                                    positionX:this.positionX,
                                positionY:this.positionY,
                                    ranking:this.ranking,
                                pontuacao:this.pontuacao
                            });
                }
                    static informacoes(){

                        var informacao = database.ref("players")
                            informacao.on("value",data =>{

                                allPlayers = data.val();
                            });
                    }
                        update(){

                            var jogadorID = "players/player" + this.index;
                            database.ref(jogadorID).update({
                                positionX:this.positionX,
                                    positionY:this.positionY,
                                pontuacao:this.pontuacao,
                                    ranking:this.ranking
                            });
                            
                        }
                            distancia(){

                                var r_dist = database.ref("players/player" + this.index)
                                    r_dist.on("value",data =>{

                                        var data = data.val();
                                            this.positionX = data.positionX;
                                                this.positionY = data.positionY;
                                    })
                            }


}