let countPrayers = 0;
let code = ``;
let prayers = [
    {name: 'ФАДЖР', id:'fajr', count: ''},
    {name: 'ЗУХР', id:'zuhr', count: ''},
    {name: 'АСР', id:'asr', count: ''},
    {name: 'МАГРИБ', id:'magrib', count: ''},
    {name: 'ИША', id:'isha', count: ''},
]

function plus(id) {
    for (prayer of prayers) {
        if (prayer.id == id.id) {
            prayer.count++;
        }
    }
    nul();
    update();
}

function minus(id) {
    for (prayer of prayers) {
        if (prayer.id == id.id) {
            if (prayer.count != 0) {
                prayer.count--;
            }
        }
    }
    nul();
    update();
}

function update() {
    for (prayer of prayers) {
        var id = prayer.id;
        var name = prayer.name;
        var count = prayer.count;
        code += `
    <div class="prayer" id="${id}">
        <p class="name">${name}</p>
        <div class="change">
            <input type="text" id="${setID(id)}" class="input" value="${count}" onclick="enter(${setID(id)})">
            <button class="changeCount" onclick="plus(${id}), countPrayersFun()">+</button>
            <button class="changeCount" onclick="minus(${id}), countPrayersFun()">-</button>
        </div>
    </div>
    `
    }
    document.getElementById('prayers').innerHTML=code;
    code=``;
}

function nul() {
    document.getElementById('prayers').innerHTML='';
}

function countPrayersFun() {
    for (prayer of prayers) {
        countPrayers += Number(prayer.count);
    }
    document.getElementById('counter').innerHTML=`<p class="count">ИТОГО:</p>
    <p class="count" id="count">${countPrayers}</p>`
    countPrayers = 0;
}

function setID(id) {
    return 'input_' + id;
}

function setCount(id) {
    var input = document.getElementById(id);
    for (prayer of prayers) {
        if ((id == `input_${prayer.id}`) & (input.value >= 0)) {
            prayer.count = input.value;
            
        }
    }
    nul();
    update();
    countPrayersFun();
}

function enter(id) {
    var input = document.getElementById(id.id);
    console.log(input)
    input.addEventListener('keypress', function(e){
      if(e.which === 13){
      	e.preventDefault();
            setCount(id.id);
      }
    });
}