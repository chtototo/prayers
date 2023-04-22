let fajrPrayer = Number(JSON.parse(localStorage.fajr).count);
let zuhrPrayer = Number(JSON.parse(localStorage.zuhr).count);
let asrPrayer = Number(JSON.parse(localStorage.asr).count);
let magribPrayer = Number(JSON.parse(localStorage.magrib).count);
let ishaPrayer = Number(JSON.parse(localStorage.isha).count);
let countPrayers = 0;
let code = ``;
let prayers = [
    {name: 'ФАДЖР', id:'fajr', count: fajrPrayer},
    {name: 'ЗУХР', id:'zuhr', count: zuhrPrayer},
    {name: 'АСР', id:'asr', count: asrPrayer},
    {name: 'МАГРИБ', id:'magrib', count: magribPrayer},
    {name: 'ИША', id:'isha', count: ishaPrayer},
]

function plus(id) {
    for (prayer of prayers) {
        if (prayer.id == id.id) {
            prayer.count++;
        }
    }
    storage();
    countPrayersFun()
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
    storage();
    countPrayersFun()
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
        countPrayers += prayer.count;
    }
    localStorage.setItem('count', JSON.stringify(countPrayers));
    document.getElementById('counter').innerHTML=`<p class="count">ИТОГО:</p>
    <p class="count" id="count">${localStorage.count}</p>`
    nul()
    update()
    countPrayers = 0;
}

function setID(id) {
    return 'input_' + id;
}

function setCount(id) {
    var input = document.getElementById(id);
    for (prayer of prayers) {
        if ((id == `input_${prayer.id}`) & (Number(input.value) >= 0)) {
            prayer.count = Number(input.value);
        }
    }
    storage();
    nul();
    update();
    countPrayersFun();
}

function enter(id) {
    var input = document.getElementById(id.id);
    input.addEventListener('keypress', function(e){
      if(e.which === 13){
      	e.preventDefault();
            setCount(id.id);
      }
    });
}

function storage() {
    for (prayer of prayers) {
        switch (prayer.id) {
            case 'fajr':
                setStorage(prayer, 'fajr');
                break;
            case 'zuhr':
                setStorage(prayer, 'zuhr')
                break;
            case 'asr':
                setStorage(prayer, 'asr')
                break;
            case 'magrib':
                setStorage(prayer, 'magrib')
                break;
            case 'isha':
                setStorage(prayer, 'isha')
                break;
                
        }
    }
}

function setStorage(pray, check) {
    let prayer = pray;
    localStorage.setItem(check, JSON.stringify(prayer));
}

