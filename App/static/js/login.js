const $ = document.querySelector.bind(document);
const priviledgeChosen = false;
const PRIVILEDGE = {
    "Sinh viên": 1,
    "Cán bộ quản lý (SPSO)": 0
}


function editPriviledge(priviledge) {
    $('#form-wrapper #priviledge').innerHTML = priviledge;
    $('input#priviledge').value = PRIVILEDGE[priviledge];
    $('#submit').removeAttribute('disabled');
}
