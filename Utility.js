class Utility{
    START_POSITION = 0;
    END_POSITION = 100;
    SNAKE = 1;
    LADDER = 2;
    NO_PLAY = 0;
    current_position = 0;

    rollDice = () => {
        let dice_count = 0;
        this.current_position = this.START_POSITION;       
        while(this.current_position<this.END_POSITION){
        var dice = Math.floor( Math.random() * 6 ) + 1 ;
        console.log('Random check dice :'+dice);
        let check_option = Math.floor(Math.random()*3)+1;

            switch(check_option){
                case this.SNAKE:
                    console.log('SNAKE');
                    if(this.current_position - dice >= this.STARTING_POSITION){
                        this.current_position = this.current_position - dice;   
                    }
                     break;

                    case this.LADDER :
                        console.log(' LADDER ');
                        if(this.current_position + dice <= this.ENDING_POSITION){
                            this.current_position = this.current_position + dice;
                        }
                        break;

                    default:
                        console.log('NO PLAY');
                            this.current_position = this.current_position;
                            break;
                }  
                dice_count++;
            }
                console.log('Current position :${this.current_position}');     
                console.log('Dice count is :'+dice_count);
    }
}
module.exports=new Utility();