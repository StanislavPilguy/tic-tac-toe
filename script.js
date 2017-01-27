window.onload = function() {                             // Ждет загрузки окна  перед выподнением скрипта
	
	
	var doc = document;									// Чтоб не грузило память
	var turn = 'X';										
	var h1 = doc.createElement('h1'); 					// Создание <h1></h1>
		h1.style.textAlign = "center";
		h1.style.marginTop = '200px';
		h1.style.display = 'block';
		h1.style.fontFamily = 'verdana';
	  doc.body.appendChild(h1);
	 	h1.textContent = "Игра, крестики - нолики";		// В ставляем текст в h1

	var div1 = doc.createElement('div');				// создание оберточного div
		div1.style.marginLeft = "45%";
		div1.style.marginTop = '20px';
		div1.style.width = '156px';
		div1.style.height = '156px';
		div1.style.border = 'solid 1px black';
		div1.style.display = 'block';
	doc.body.appendChild(div1);

	var arr = getMatrix(3);								// Создаем многомерный массив,что бы записывать в него ходы.			
	  Create(3);											// что бы поле было универсальным, могло увеличиваться насколько хочешь клеток
    function getMatrix(size) {
		var arr = [];
			for (var i = 0; i < size; i++) {
				arr[i] = [];
					for (var j = 0; j < size; j++) {
						arr[i][j] = '';
			}
		}
		return arr;
	}


	function Create(size) {                              // Создаем колекцию и провешиваем событие
		for (var i = 0; i < size; i++) {
			 var row = doc.createElement('div');
		for (var j = 0; j < size; j++) {
			 var div = doc.createElement('div');
				div.addEventListener('click', play);
				div.style.border = 'solid 1px black';
				div.style.textAlign = 'center';
				div.style.float = 'left';
				div.style.width = '50px';
				div.style.height = '50px';
				div.style.fontSize = '30px';
				div.style.lineHeight = '50px';
				div.style.fontFamily = 'verdana';
				div.style.display = 'block';
			row.appendChild(div);
		}
			div1.appendChild(row);
	}
}


  function play() {																// Обозначаем координаты.
	var x, y;
	var self = this;
	event.target.parentNode.parentNode.childNodes.forEach(function (item, i) {
		if (item === event.target.parentNode) {
			x = i;
		}
	});
	event.target.parentNode.childNodes.forEach(
		function (item, i) {
			if (item === self) {
				y = i;
			}

		});


	if(self.textContent != ''){														// Делаем проверку на ход, чтобы Х и О выставлялись по очереди
		return
	};
	   self.textContent = turn;
		 arr[x][y] = turn;
  check();
	if(turn === 'X'){
		 turn = 'O';
  } else {
		 turn = 'X';
	};	
};

  function check() {																		//Проверка на победу или ничью
	var size = 3;
		for (var i = 0; i < size; i++) {
			if((arr[i][0] == turn) && (arr[i][1] == turn) && (arr[i][2] == turn)) {
				return alert('Победа!!!');
				
			};
			if((arr[0][i] == turn) && (arr[1][i] == turn) && (arr[2][i] == turn)) {
				return alert('Победа!!!');
				 
			};
			if((arr[0][0] == turn) && (arr[1][1] == turn) && (arr[2][2] == turn)) {
				return alert('Победа!!!');
				
			};
			if((arr[2][0] == turn) && (arr[1][1] == turn) && (arr[0][2] == turn)) {
				return  alert('Победа!!!');
				
			};
			if(arr[0][0] && arr[1][0] && arr[2][0] &&  arr[0][1] && arr[1][1] && arr[2][0] && arr[0][2] && arr[1][2] && arr[2][2]){
				return alert('Ничья!!!');	
				
			};
		};
	};



}
 
