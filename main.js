$(document).ready(function(){
    $('#buscar-usuario').click(function(){
        const usuario = $('#usuario').val();
        const api = `https://api.github.com/users/${usuario}`;
        const name = document.querySelector('#name');
        const username = document.querySelector('#username');
        const avatar = document.querySelector('#avatar');
        const reposit = document.querySelector('#reposit');
        const followers = document.querySelector('#followers');
        const following = document.querySelector('#following');
        const link = document.querySelector('#link');
        
        fetch(api)
            .then(function(resposta){
                return resposta.json();
            }) 
            .then(function(json){
                name.innerText = json.name;
                username.innetText = json.login;
                avatar.src = json.avatar_url;
                following.innerText = json.following;
                followers.innerText = json.followers;
                reposit.innerText = json.public_repos;
                link.href = json.html_url;
            })
    })
})

//Falta tratativa de erro para caso não informe um usuario.