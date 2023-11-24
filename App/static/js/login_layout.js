const $ = document.querySelector.bind(document);
const priviledgeChosen = false;

function editPriviledge(priviledge){    
    $('#form-wrapper #priviledge').innerHTML = priviledge;
    $('#submit').removeAttribute('disabled');
}
