const countries = [
	{"capital": "Амстердам", "country": "Нидерланды"},
	{"capital": "Андорра ла Велья", "country": "Андорра"},
	{"capital": "Афины", "country": "Греция"},
	{"capital": "Белград", "country": "Сербия"},
	{"capital": "Берлин", "country": "Германия"},
	{"capital": "Берн", "country": "Швейцария"},
	{"capital": "Братислава", "country": "Словакия"},
	{"capital": "Брюссель", "country": "Бельгия"},
	{"capital": "Будапешт", "country": "Венгрия"},
	{"capital": "Бухарест", "country": "Румыния"},
	{"capital": "Вадуц", "country": "Лихтенштейн"},
	{"capital": "Валлетта", "country": "Мальта"},
	{"capital": "Варшава", "country": "Польша"},
	{"capital": "Ватикан", "country": "Ватикан"},
	{"capital": "Вена", "country": "Австрия"},
	{"capital": "Вильнюс", "country": "Литва"},
	{"capital": "Дублин", "country": "Ирландия"},
	{"capital": "Загреб", "country": "Хорватия"},
	{"capital": "Киев", "country": "	Украина"},
	{"capital": "Кишинев", "country": "	Молдавия"},
	{"capital": "Копенгаген", "country": "Дания"},
	{"capital": "Лиссабон", "country": "Португалия"},
	{"capital": "Лондон", "country": "Великобритания"},
	{"capital": "Любляна", "country": "Словения"},
	{"capital": "Люксембург", "country": "Люксембург"},
	{"capital": "Мадрид", "country": "Испания"},
	{"capital": "Минск", "country": "Белоруссия"},
	{"capital": "Монако", "country": "Монако"},
	{"capital": "Москва", "country": "Российская Федерация"},
	{"capital": "Осло", "country": "Норвегия"},
	{"capital": "Париж", "country": "Франция"},
	{"capital": "Подгорица", "country": "Черногория"},
	{"capital": "Прага", "country": "Чехия"},
	{"capital": "Рейкьявик", "country": "Исландия"},
	{"capital": "Рига", "country": "Латвия"},
	{"capital": "Рим", "country": "Италия"},
	{"capital": "Сан Марино", "country": "Сан Марино"},
	{"capital": "Сараево", "country": "Босния и Герцеговина"},
	{"capital": "Скопье", "country": "Северная Македония"},
	{"capital": "София", "country": "Болгария"},
	{"capital": "Стокгольм", "country": "Швеция"},
	{"capital": "Таллин", "country": "Эстония"},
	{"capital": "Тирана", "country": "Албания"},
	{"capital": "Хельсинки", "country": "Финляндия"},
]
let availableNumbers = [];
let questionDiv = document.getElementById('question');
let answerDiv = document.getElementById('answer');
let box = document.getElementById('boxxy');
let countryNumber = null;
let answerIsCorrect = false;
let usedCountries = [];

for (let i = 0; i < countries.length; i++) {
	availableNumbers.push(i);
}

answerDiv.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("answerButton").click();
		if (answerIsCorrect) {
			document.getElementById('knopa').click();
		}
	}
})

function btnClick() {
	if (availableNumbers.length === 0) {
		document.getElementById('label').innerHTML++;
		for (let i = 0; i < countries.length; i++) {
			availableNumbers.push(i);
		}
	}
	answerDiv.value = "";
	box.style.backgroundColor = "grey";
	let randomNumber = Math.floor(Math.random() * (availableNumbers.length));
	countryNumber = availableNumbers[randomNumber];
	let selectedCountry = countries[countryNumber]["country"]
	questionDiv.innerHTML = selectedCountry;

}

function checkAnswer() {
	if (answerDiv.value.toLowerCase() === countries[countryNumber]["capital"].toLowerCase()) {
		box.style.backgroundColor = "green";
		answerIsCorrect = true;
		availableNumbers = availableNumbers.filter((value) => countryNumber !== value);
	} else {
		box.style.backgroundColor = "red";
		answerIsCorrect = false;
	}
}
