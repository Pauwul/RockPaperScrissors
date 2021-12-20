


        //functions

        function playerPlay(){
            let playerChoice = prompt("Choose one Rock paper or scrissors ");
            return playerChoice;

        }
        function computerPlay(){
            const choices = ['Rock','Paper','Scrissors'];
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
            if ( P === C)
            {
                console.log("==Tie==");
                return 0;
            }
            else if(( P === "ROCK" && C==="PAPER") || ( P === "PAPER" && C=== "SCRISSORS") || ( P ==="SRISSORS" && C === "PAPER"))
                {
                    console.log("==You lose==")
                    return -1;
                }
                else if(( C === "ROCK" && P==="PAPER") || ( C === "PAPER" && P=== "SCRISSORS") || ( C ==="SRISSORS" && P === "PAPER"))
                {
                    console.log("==You win==")
                    return 1;
                }
              
        }
        function game(){
            //win counters
            let contorP = 0;
            let contorC = 0;
            let u = 0;
            let i = 0;
            for(i=1;i<=5;i++)
            {   //Round header
                console.log("Round: ", i);
                //computer decision
                let pc = computerPlay();
                //player decision
                let cc = playerPlay();
                
                console.log("Computer's choice:",cc);
                console.log("Your choice:",pc);

                u =judge(cc, pc);
                console.log("u = ", u);
                if( u === -1)
                   { contorC = contorC + 1; }
                if( u === 1)
                   { contorP++;}
                

            }
            if( contorP > contorC)
                console.log("You won the game!");
            else if( contorP < contorC)
                console.log("You lost the game!");
                else 
                console.log("\n\n>>>Tie<<<<")
        }

        game()