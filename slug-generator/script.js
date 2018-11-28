let source = document.getElementById('inp');
let confirm = document.getElementById('conf');
let output = document.getElementById('outp');
const whitespace = /\s/g;
const dash = '-' 
let cop = document.getElementById('copy');



confirm.onclick = function(){
    let outbox = inp.value;
    box = outbox.toLowerCase();
    box = box.replace(/\bis\b|\bthe\b|\bto\b|\bin\b|\bin\b|\ba/g, '');
    box = box.replace(/а/g, 'a');
    box = box.replace(/б/g, 'b');
    box = box.replace(/в/g, 'v');
    box = box.replace(/г/g, 'g');
    box = box.replace(/д/g, 'd');
    box = box.replace(/э/g, 'е');
    box = box.replace(/е/g, 'e');
    box = box.replace(/ж/g, 'jh');
    box = box.replace(/з/g, 'z');
    box = box.replace(/й/g, 'y');
    box = box.replace(/к/g, 'k');
    box = box.replace(/л/g, 'l');
    box = box.replace(/м/g, 'm');
    box = box.replace(/н/g, 'n');
    box = box.replace(/о/g, 'o');
    box = box.replace(/п/g, 'p');
    box = box.replace(/р/g, 'r');
    box = box.replace(/с/g, 's');
    box = box.replace(/т/g, 't');
    box = box.replace(/у/g, 'u');
    box = box.replace(/ф/g, 'f');
    box = box.replace(/х/g, 'h');
    box = box.replace(/ц/g, 'c');
    box = box.replace(/ч/g, 'ch');
    box = box.replace(/ш/g, 'sh');
    box = box.replace(/щ/g, 'sch');
    box = box.replace(/и/g, 'i');
    box = box.replace(/ъ/g, '');
    box = box.replace(/ы/g, 'u');
    box = box.replace(/ь/g, '');
    box = box.replace(/ю/g, 'yu');
    box = box.replace(/я/g, 'ya');
    box = box.replace(/^[\d -]+/g, '');
    box = box.replace(whitespace, dash);
    box = box.replace('--', dash)
    box = box.replace('---', dash);
    output.value = box ;
};
cop.onclick = function(){
    output.select();
    document.execCommand('copy');
};