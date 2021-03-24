class Player {
  constructor(){
    this.index=null
    this.name=null
    this.distance=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance 
    });
  }

  static getPlayerinfo (){
    var playerInforef=database.ref('players')
    playerInforef.on('value',(data)=>{
      allPlayers=data.val()
    })
  }

  
}
