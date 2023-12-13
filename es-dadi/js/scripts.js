



const input = document.querySelector('button');

input.addEventListener('click' , function() {

    const player = document.getElementById('user-number');
    const cpu = document.getElementById('pc-number');
    let numberUser = Math.floor(Math.random() * (6) + 1);
    let numberPc = Math.floor(Math.random() * (6) + 1);
    let winner = document.getElementById('result');

    player.innerHTML = numberUser;
    cpu.innerHTML = numberPc;

    if(numberUser == numberPc){
        winner.innerHTML = ('Pareggio');
        
    }else if (numberUser > numberPc){
        winner.innerHTML = ('Hai Vinto!!');

    }else {
        winner.innerHTML = ('Hai Perso..');        

    }

}
);