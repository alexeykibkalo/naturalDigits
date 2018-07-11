function natDigShow (begin, end) {
	for (var i = begin; i <= end; i++) {
		for (var j = 2 ; j <= i; j++) {
			if(i%j==0 && j!= i)
				break; // число не натуральное, дальше проверять не иммет смысла.
			else if(j == i){
				console.log( i + ' ');
			}
		}
	}
}

var begin = Number(prompt('Введите начало диапазона. Число должно быть больше 1'));
var end = Number(prompt('Введите конец диапазона. Число должно быть больше начала диапазона'));

natDigShow(begin, end);