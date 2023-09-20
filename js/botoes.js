class Botoes{

    constructor(){
        this.startButton1 = createButton('Start');
        this.startButton1.position(75, 120);
        this.startButton1.style('background', 'lightgrey');    

        this.startButton2 = createButton('Start');
        this.startButton2.position(75, 120);
        this.startButton2.style('background', 'lightgrey');    

        this.endButton = createButton('Controls');
        this.endButton.position(625, 250);
        this.endButton.style('background', 'lightgrey');

        this.optionsButton = createButton('Options');
        this.optionsButton.position(75, 320);
        this.optionsButton.style('background', 'lightgrey'); 
    }

    display(){

        this.startButton1.mousePressed(() => {
            
        });

        this.startButton2.mousePressed(() => {
            
        });

        this.endButton.mousePressed(() => {
            
        });

        this.optionsButton.mousePressed(() => {
            
        });

    }
}
