class Utility{
    START_POSITION = 0;
    END_POSITION = 100;

    rollDice = () => {
        var random_check = Math.floor( Math.random() * 6 ) + 1 ;
         console.log('Random check dice : '  +random_check);
    }

}
module.exports=new Utility();