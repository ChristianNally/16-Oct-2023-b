function checkVictory(){

    // 
    // $newElement = $(`<article><header></header><div>${firstname}</div><footer></footer>`);
    // $('span').append($newElement);

    const player = $('#player').html();

    const listOfValidVictorySets = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let victorySet of listOfValidVictorySets) {
        let victory = true;
        for (let squareId of victorySet) {
          console.log(`squareId:`, squareId);
          $elementBeingTested = $(`td[data-cn=${squareId}]`);
          const checkID = $elementBeingTested.attr('data-cn');
          console.log('checkID', checkID);
          if (!$elementBeingTested.hasClass(player)) { // a square does NOT have player as a class then victory => false 
            victory = false;
          }
        }
        if (victory) {
          return true;
        }
      }
      return false;
    
}

$(document).ready(function(){

    console.log('Hello Monkey Fuzz!');
    // alert('Hello Monkey Fuzz 2!');

    $('td').click(function(){
        const player = $('#player').html();
        console.log(`It is ${player}'s turn.`);
        $(this).addClass(player);

        if (checkVictory()) {
            $('h3').html(`The game has been won. <a href="">Play again</a>.`);
            $('td').off();
        } else {
            $(this).off();
            if (player === 'X') {
                $('#player').html('O');
            } else {
                $('#player').html('X');
            }    
        }

    });

});
