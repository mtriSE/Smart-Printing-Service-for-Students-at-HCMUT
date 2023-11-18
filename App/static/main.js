const $ = document.querySelector.bind(document);


var box = $('#my-box');
box.addEventListener('click', function(){
    $('#my-box').innerHTML = 'thanks';
    box.style.backgroundColor = 'green';
})
