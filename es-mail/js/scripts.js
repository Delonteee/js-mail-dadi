


const input = document.querySelector('button');

input.addEventListener('click' , function(){

    const userEmail = document.getElementById('user-email').value;
    const database = ['davide@mail.com' , 'gianni@mail.com' , 'pino@mail.com', 'pippo@mail.com'];
    const container = document.querySelector('main > div');

    let result = `<h6> Inserire un'email valida </h6>`;

    for(let i = 0; i < database.length; i++){
        
        if (userEmail == database[i]){

            result =`<h6> Email inserita correttamente </h6> `;

        }

    }

    
    const resultContainer = document.getElementById('validation');
    resultContainer.innerHTML = result;
 
}
);