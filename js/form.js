class Form{
    constructor(){
       this.input = createInput("Nombre");
       this.button = createButton('Jugar');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reiniciar');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("NAVIDAD 2021");
        this.title.position(580, 100);
        this.title.style('font-size', '90px');
        this.title.style('color', 'red');
        this.input.position(750,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightgreen');
        this.button.position(760,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightyellow');
        this.reset.position(1200, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'orange');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Bienvenido " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '80px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}
