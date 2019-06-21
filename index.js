// var blocks = ["block1" ,"block2" ,"block3" , "block4", "block5" , "block6" , "block7" , "block8" , "block9"]
var rows = 5;
var cols = rows;
var user1_goal1 = rows;
var user2_goal2 = rows;
$(document).ready(function () {


    // blocks.forEach(function(block , index){
    //     if (index % 3 == 0){
    //         $div += `<br>`
    //     }
    //     $div += `<span class="block ${block}" data-id=${index}></span>`
    for (var i = 0; i < rows; i++) {
        $div1 = "<div class='row'></div>";
        $('.container').append($div1);
        // debugger
    }
    z = 0
    $('.container').find('.row').each(function () {


        for (j = 0; j < cols; j++) {
            $(this).append(`<div class='col-sm-3 block' data-id = ${z}></div>`);
            z++;
        }
        // div.appendTo(this.container);
    });

    // for(j=0;j<3;j++){
    //     $div2 = `<div class='col-sm-3'></div>`
    // }
    // $div1.append($div2);




});
// var arr = [[0,1,2],[3,4,5],[6,7,8]];
var arr = []
var arr_2 = []
var element = 0;
for (k = 0; k < rows; k++) {
    arr_2 = []
    for (m = 0; m < cols; m++) {
        arr_2.push(element);
        element++;
    }
    arr.push(arr_2);
}


var arr_new = [];

var arr1 = [];
for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
        if (i == j)
            // left diagonal
            arr1.push(arr[i][j]);
    }
}
arr_new.push(arr1);

for (i = 0; i < rows; i++) {
    // 
    arr1 = [];
    k = 0;
    for (j = 0; j < cols; j++) {

        arr1.push(arr[k][i]);
        k++;
    }
    arr_new.push(arr1);
    arr1 = [];

}
for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
        if ((i + j) == rows - 1)
            // right diagonal
            arr1.push(arr[i][j]);
    }
}
arr_new.push(arr1);
for (k = 0; k < rows; k++) {
    arr1 = []
    for (j = 0; j < cols; j++) {
        arr1.push(arr[k][j])
    }
    arr_new.push(arr1);
}
console.log(arr_new);









var array1 = new Array();
var moves = 0;
var goal = arr_new;
console.log(goal);

var user = ['user1', 'user2'];
var user1_goal = new Array();
var user2_goal = new Array();
var active_user = user[0];
var game_status = true;
var user2_goal_count = 0;

$(document).ready(function () {

    $('.block').hover(function () {
        if (game_status) {
            $('.player').text(active_user);
        }
    });

});
$(document).on('click', '.block', function () {
    if (game_status) {
        data_id = $(this).attr("data-id");
        if (!array1.includes(data_id)) {
            array1.push(data_id);
            console.log(active_user)
            if (active_user == user[0]) {
                console.log("active_user");
                $(this).html("0");
                user1_goal.push(data_id);
                moves++;
                if (moves < (rows * cols) - 1) {
                    if (user1_goal.length > rows - 1) {
                        for (var k = 0; k < ((rows * 2) + 2); k++) {
                            var user1_goal_count = 0;
                            for (var j = 0; j < cols; j++) {
                                if (user1_goal.includes(goal[k][j].toString())) {
                                    user1_goal_count++;
                                }
                            }
                            if (user1_goal_count == user1_goal1) {
                                $(this).html("O");
                                $('#status').text("User1 Won");
                                game_status = false
                                $('.playAgain').show();
                                $('.playAgain').click(function () {
                                    playAgain();
                                })
                            }

                        }
                    }
                    active_user = user[1];

                }
                else {
                    $('#status').text("Draw");
                    $('.playAgain').show();
                    game_status = false
                    $('.playAgain').click(function () {
                        playAgain();
                    })
                }


            }
            else {
                console.log("DASDASD");
                $(this).html("X");
                user2_goal.push(data_id);

                if (user2_goal.length > rows - 1) {
                    for (let k = 0; k < ((rows * 2) + 2); k++) {
                        var user2_goal_count = 0;
                        for (let j = 0; j < cols; j++) {
                            if (user2_goal.includes(goal[k][j].toString())) {
                                user2_goal_count++;
                            }
                        }
                        if (user2_goal_count == user2_goal2) {
                            $(this).html("X");
                            $('#status').text("User2 Won");
                            $('.playAgain').show();
                            game_status = false
                            $('.playAgain').click(function () {
                                playAgain();
                            })
                        }

                    }

                }
                active_user = user[0];
                moves++;
            }


        }
    }
    else {
        console.log("Draw");
    }


})


playAgain = () => {
    $('.block').text("");
    $('#status').html("");
    user1_goal = new Array();
    user2_goal = new Array();
    active_user = "user1";
    array1 = new Array();
    moves = 0;
    game_status = true;
    $('.player').text("");
    $('.playAgain').hide();
}


