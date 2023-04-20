let countPrayers = 0;
let code = ``;
let prayers = [
    {name: 'ФАДЖР', id:'fajr', count: 0},
    {name: 'ЗУХР', id:'zuhr', count: 0},
    {name: 'АСР', id:'asr', count: 0},
    {name: 'МАГРИБ', id:'magrib', count: 0},
    {name: 'ИША', id:'isha', count: 0},
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
    code += `
    <div class="prayer" id="${prayer.id}">
        <p class="name">${prayer.name}</p>
        <div class="change">
            <input type="text" class="input" value="${prayer.count}">
            <button class="changeCount" onclick="plus(${prayer.id}), countPrayersFun()">+</button>
            <button class="changeCount" onclick="minus(${prayer.id}), countPrayersFun()">-</button>
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
        countPrayers += prayer.count;
    }
    document.getElementById('counter').innerHTML=`<p class="count">ИТОГО:</p>
    <p class="count" id="count">${countPrayers}</p>`
    countPrayers = 0;
}