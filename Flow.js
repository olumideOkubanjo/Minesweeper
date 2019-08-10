$(document).ready(function() {
    $("canvas").show(1);
    $(".wInImg").hide(1);
    $(".loSeImg").hide(1);
    $(".Play").hide(1);
    var wins = 0;
    var loses = 0;


    $("body").click(function() {
        if (gameWon == true) {
            $("canvas").hide(1);
            $(".wInImg").show(100);
            $(".loSeImg").hide(1);
            $(".Play").show(100);
            wins++;
            $(".resultsw").html("Wins : " + wins);

        }

        if (gameLost == true) {
            $("canvas").hide(1);
            $(".wInImg").hide(1);
            $(".loSeImg").show(100);
            $(".Play").show(100);
            loses++;
            $(".resultsL").html("Loses: " + loses);
        }

        $(".Play").click(function() {
            gameLost = false;
            gameWon = false;
            setup();
            $("canvas").show(100);
            $(".wInImg").hide(1);
            $(".loSeImg").hide(1);
            $(".Play").hide(1);
            count = 0 ;
        });
    });



});
