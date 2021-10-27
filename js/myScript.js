"use strict"

alert("Привет! Сейчас будет калькулятор!!!");
let clin = [0, 0, 0];
let i = 0,
    p = 0,
	t = 0;

function collect() {
while (clin[i] <= 0 || clin[i] > 4) {
	clin[i] = prompt("Тип сайта: 1 - Сайт-визитка, 2 - Корпоративный, 3 - Интернет магазин, 4 - Лэндинг");
}
i++;

while (clin[i] <= 0 || clin[i] > 4) {
	clin[i] = prompt("Дизайн сайта: 1 - Минимализм, 2 - Корпоративный, 3 - Информационный, 4 - Классический");
}
i++;

while (clin[i] <= 0 || clin[i] > 3) {
	clin[i] = prompt("Адаптивность: 1 - Адаптивный, 2 - Только ПК, 3 - Только телефоны");
}


}
    function priceType () {
	if (clin[1] == 1){
		p += 1000;
		t += 3;
	}
	else if (clin[1] == 2){
		p += 2000;
		t += 5;
	}
	else if (clin[1] == 3){
		p += 3000;
		t += 14;
	}
	else if (clin[1] == 4){
		p += 4000;
		t +=4;
	}
	}
	function priceDesign () {
		if (clin[2] == 1){
		p += 1000;
		t += 1;
	}
	else if (clin[2] == 2){
		p += 1500;
		t += 3;
	}
	else if (clin[2] == 3){
		p += 2000;
		t += 4;
	}
	else if (clin[2] == 4){
		p += 1750;
		t +=2;
	}
		
	}
	function priceAdapt () {
		if (clin[3] == 1){
		p += 2000;
		t += 1;
	}
	else if (clin[3] == 2){
		p += 1000;
		t += 0;
	}
	else if (clin[3] == 3){
		p += 1000;
		t += 0;
	}
	}


function price (){
	priceType();
	priceDesign();
	priceAdapt();
}

collect();
price();
alert('Примерная цена: '+(p)+'р. '+'Примерные сроки: '+(t)+' дня.');