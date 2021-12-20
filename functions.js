


        //functions

        function playerPlay(){
            //Prompt for user 
            let playerChoice = prompt("Choose one Rock paper or scrissors ");
            return playerChoice;

        }
        function computerPlay(){
            const choices = ['Rock','Paper','Scrissors'];
            //random choice
            const item = Math.floor(Math.random() * choices.length);
            return choices[item];
        }
        function judge(player,computer){
            //logic
            // Rock -> Scrissors
            // Scrissors -> Paper
            // Paper -> Rock
            let P = player.toUpperCase();
            let C = computer.toUpperCase();
            //conditions for Player and Computer to Tie
            if ( P === C)
            {
                console.log("==Tie==");
                return 0;
            }
            //conditions for Player to lose
            else if(( P === "ROCK" && C==="PAPER") || ( P === "PAPER" && C=== "SCRISSORS") || ( P ==="SRISSORS" && C === "PAPER"))
                {
                    console.log("==You lose==");
                    return -1;
                }
                //conditions for Player to win
                else if(( C === "ROCK" && P==="PAPER") || ( C === "PAPER" && P=== "SCRISSORS") || ( C ==="SRISSORS" && P === "PAPER"))
                {
                    console.log("==You win==");
                    return 1;
                }
                    //unintended value
                    else console.log("==You introduced a wrong string==");
              
        }
        function game(){
            //win counters for Player and Computer
            let contorP = 0;
            let contorC = 0;
            let u = 0;
            let i = 0;
            //loop for n=5 times
            for(i=1;i<=5;i++)
            {   //Round counter
                console.log("Round: ", i);
                //computer decision
                let pc = computerPlay();
                //player decision
                let cc = playerPlay();
                
                console.log("Computer's choice:",cc);
                console.log("Your choice:",pc);
                //judge decides which one should win and returns -1, 0, 1 accordingly
                Winner = judge(cc, pc);
                console.log("Winner = ", Winner);

                if( Winner === -1)
                { 
                    contorC = contorC + 1; 
                }
                if( Winner === 1)
                { 
                       contorP++;
                }
                

            }
            if( contorP > contorC)
                console.log("You won the game!");
            else if( contorP < contorC)
                console.log("You lost the game!");
                else 
                console.log("\n\n>>>Tie<<<<")
        }
        //Function call
        game()