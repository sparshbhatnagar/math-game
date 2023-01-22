function login() {
    player1_name = document.getElementById("player1").value ;
    player2_name = document.getElementById("player2").value ;
    localStorage.setItem("player1_info" , player1_name);
    localStorage.setItem("player2_info" , player2_name);
    window.location = "game_page.html" ;
}

