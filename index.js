let countries = [];

const asia = [
  { country: "ОАЭ", capital: "Абу Даби" },
  { country: "Иордания", capital: "Амман" },
  { country: "Турция", capital: "Анкара" },
  { country: "Туркмения", capital: "Ашхабад" },
  { country: "Ирак", capital: "Багдад" },
  { country: "Азербайджан", capital: "Баку" },
  { country: "Таиланд", capital: "Бангкок" },
  { country: "Бруней", capital: "Бандар Сери Бегаван" },
  { country: "Ливан", capital: "Бейрут" },
  { country: "Киргизия", capital: "Бишкек" },
  { country: "Лаос", capital: "Вьентьян" },
  { country: "Бангладеш", capital: "Дакка" },
  { country: "Сирия", capital: "Дамаск" },
  { country: "Индия", capital: "Дели" },
  { country: "Индонезия", capital: "Джакарта" },
  { country: "Восточный", capital: "Тимор Дили" },
  { country: "Катар", capital: "Доха" },
  { country: "Таджикистан", capital: "Душанбе" },
  { country: "Армения", capital: "Ереван" },
  { country: "Израиль", capital: "Иерусалим" },
  { country: "Пакистан", capital: "Исламабад" },
  { country: "Афганистан", capital: "Кабул" },
  { country: "Непал", capital: "Катманду" },
  { country: "Малайзия", capital: "Куала Лумпур" },
  { country: "Мальдивы", capital: "Мале" },
  { country: "Бахрейн", capital: "Манама" },
  { country: "Филиппины", capital: "Манила" },
  { country: "Оман", capital: "Маскат" },
  { country: "Мьянма", capital: "Нейпьидо" },
  { country: "Кипр", capital: "Никосия" },
  { country: "Казахстан", capital: "Нур Султан" },
  { country: "Китай", capital: "Пекин" },
  { country: "Камбоджа", capital: "Пномпень" },
  { country: "КНДР", capital: "Пхеньян" },
  { country: "Йемен", capital: "Сана" },
  { country: "Республика Корея", capital: "Сеул" },
  { country: "Сингапур", capital: "Сингапур" },
  { country: "Узбекистан", capital: "Ташкент" },
  { country: "Грузия", capital: "Тбилиси" },
  { country: "Иран", capital: "Тегеран" },
  { country: "Япония", capital: "Токио" },
  { country: "Бутан", capital: "Тхимпху" },
  { country: "Монголия", capital: "Улан Батор" },
  { country: "Вьетнам", capital: "Ханой" },
  { country: "Шри Ланка", capital: "Шри Джаяварденепура Котте" },
  { country: "Кувейт", capital: "Эль Кувейт" },
  { country: "Саудовская Аравия 	", capital: "Эр Рияд" },
];

const africa = [
  { country: "Нигерия", capital: "Абуджа" },
  { country: "Эфиопия", capital: "Аддис Абеба" },
  { country: "Гана", capital: "Аккра" },
  { country: "Алжир", capital: "Алжир" },
  { country: "Мадагаскар", capital: "Антананариву" },
  { country: "Эритрея", capital: "Асмэра" },
  { country: "Мали", capital: "Бамако" },
  { country: "ЦАР", capital: "Банги" },
  { country: "Гамбия", capital: "Банжул" },
  { country: "Гвинея Бисау", capital: "Бисау" },
  { country: "Республика Конго", capital: "Браззавиль" },
  { country: "Сейшельские Острова", capital: "Виктория" },
  { country: "Намибия", capital: "Виндхук" },
  { country: "Ботсвана", capital: "Габороне" },
  { country: "Бурунди", capital: "Гитега" },
  { country: "Сенегал", capital: "Дакар" },
  { country: "Джибути", capital: "Джибути" },
  { country: "Южный Судан", capital: "Джуба" },
  { country: "Танзания", capital: "Додома" },
  { country: "Египет", capital: "Каир" },
  { country: "Уганда", capital: "Кампала" },
  { country: "Руанда", capital: "Кигали" },
  { country: "ДР Конго", capital: "Киншаса" },
  { country: "Гвинея", capital: "Конакри" },
  { country: "Габон", capital: "Либревиль" },
  { country: "Малави", capital: "Лилонгве" },
  { country: "Того", capital: "Ломе" },
  { country: "Ангола", capital: "Луанда" },
  { country: "Замбия", capital: "Лусака" },
  { country: "Экваториальная Гвинея", capital: "Малабо" },
  { country: "Мозамбик", capital: "Мапуту" },
  { country: "Лесото", capital: "Масеру" },
  { country: "Эсватини", capital: "Мбабане" },
  { country: "Сомали", capital: "Могадишо" },
  { country: "Либерия", capital: "Монровия" },
  { country: "Коморы", capital: "Морони" },
  { country: "Кения", capital: "Найроби" },
  { country: "Чад", capital: "Нджамена" },
  { country: "Нигер", capital: "Ниамей" },
  { country: "Мавритания", capital: "Нуакшот" },
  { country: "Маврикий", capital: "Порт Луи" },
  { country: "Бенин", capital: "Порто Ново" },
  { country: "Кабо Верде", capital: "Прая" },
  { country: "ЮАР", capital: "Претория" },
  { country: "Марокко", capital: "Рабат" },
  { country: "Сан Томе и Принсипи ", capital: "Сан Томе" },
  { country: "Ливия ", capital: "Триполи" },
  { country: "Тунис", capital: "Тунис" },
  { country: "Буркина Фасо", capital: "Уагадугу" },
  { country: "Сьерра Леоне", capital: "Фритаун" },
  { country: "Зимбабве", capital: "Хараре" },
  { country: "Судан", capital: "Хартум" },
  { country: "Кот дИвуар", capital: "Ямусукро" },
  { country: "Камерун", capital: "Яунде" },
];

const america = [
  { capital: "Сан Хуан", country: "Пуэрто Рико" },
  { country: "Парагвай", capital: "Асунсьон" },
  { country: "Сент Кит и Невис", capital: "Бастер" },
  { country: "Белиз", capital: "Бельмопан" },
  { country: "Колумбия", capital: "Богота" },
  { country: "Бразилия", capital: "Бразилиа" },
  { country: "Барбадос", capital: "Бриджтаун" },
  { country: "Аргентина", capital: "Буэнос Айрес" },
  { country: "США", capital: "Вашингтон" },
  { country: "Куба", capital: "Гавана" },
  { country: "Гватемала", capital: "Гватемала" },
  { country: "Гайана", capital: "Джорджтаун" },
  { country: "Венесуэла", capital: "Каракас" },
  { country: "Сент Люсия", capital: "Кастри" },
  { country: "Сент Винсен и Гренадины", capital: "Кингстаун" },
  { country: "Ямайка", capital: "Кингстон" },
  { country: "Эквадор", capital: "Кито" },
  { country: "Перу", capital: "Лима" },
  { country: "Никарагуа", capital: "Манагуа" },
  { country: "Мексика", capital: "Мехико" },
  { country: "Уругвай", capital: "Монтевидео" },
  { country: "Багамские Острова", capital: "Нассау" },
  { country: "Канада", capital: "Оттава" },
  { country: "Панама", capital: "Панама" },
  { country: "Суринам", capital: "Парамарибо" },
  { country: "Гаити", capital: "Порт о Пренс" },
  { country: "Тринида и Тобаго", capital: "Порт оф Спейн" },
  { country: "Доминика", capital: "Розо" },
  { country: "Сальвадор", capital: "Сан Сальвадор" },
  { country: "Коста Рика", capital: "Сан Хосе" },
  { country: "Доминиканска Республика", capital: "Санто Доминго" },
  { country: "Чили", capital: "Сантьяго" },
  { country: "Антигу и Барбуда", capital: "Сент Джонс" },
  { country: "Гренада", capital: "Сент Джорджес" },
  { country: "Боливия", capital: "Сукре" },
  { country: "Гондурас", capital: "Тегусигальпа" },
];

const europe = [
  { capital: "Эдинбург", country: "Шотландия" },
  { capital: "Амстердам", country: "Нидерланды" },
  { capital: "Андорра ла Велья", country: "Андорра" },
  { capital: "Афины", country: "Греция" },
  { capital: "Белград", country: "Сербия" },
  { capital: "Берлин", country: "Германия" },
  { capital: "Берн", country: "Швейцария" },
  { capital: "Братислава", country: "Словакия" },
  { capital: "Брюссель", country: "Бельгия" },
  { capital: "Будапешт", country: "Венгрия" },
  { capital: "Бухарест", country: "Румыния" },
  { capital: "Вадуц", country: "Лихтенштейн" },
  { capital: "Валлетта", country: "Мальта" },
  { capital: "Варшава", country: "Польша" },
  { capital: "Ватикан", country: "Ватикан" },
  { capital: "Вена", country: "Австрия" },
  { capital: "Вильнюс", country: "Литва" },
  { capital: "Дублин", country: "Ирландия" },
  { capital: "Загреб", country: "Хорватия" },
  { capital: "Киев", country: "	Украина" },
  { capital: "Кишинев", country: "	Молдавия" },
  { capital: "Копенгаген", country: "Дания" },
  { capital: "Лиссабон", country: "Португалия" },
  { capital: "Лондон", country: "Великобритания" },
  { capital: "Любляна", country: "Словения" },
  { capital: "Люксембург", country: "Люксембург" },
  { capital: "Мадрид", country: "Испания" },
  { capital: "Минск", country: "Белоруссия" },
  { capital: "Монако", country: "Монако" },
  { capital: "Москва", country: "Российская Федерация" },
  { capital: "Осло", country: "Норвегия" },
  { capital: "Париж", country: "Франция" },
  { capital: "Подгорица", country: "Черногория" },
  { capital: "Прага", country: "Чехия" },
  { capital: "Рейкьявик", country: "Исландия" },
  { capital: "Рига", country: "Латвия" },
  { capital: "Рим", country: "Италия" },
  { capital: "Сан Марино", country: "Сан Марино" },
  { capital: "Сараево", country: "Босния и Герцеговина" },
  { capital: "Скопье", country: "Северная Македония" },
  { capital: "София", country: "Болгария" },
  { capital: "Стокгольм", country: "Швеция" },
  { capital: "Таллин", country: "Эстония" },
  { capital: "Тирана", country: "Албания" },
  { capital: "Хельсинки", country: "Финляндия" },
];

const oceania = [
  { country: "Самоа", capital: "Апиа" },
  { country: "Новая Зеландия", capital: "Веллингтон" },
  { country: "Австралия", capital: "Канберра" },
  { country: "Маршалловы Острова", capital: "Маджуро" },
  { country: "Палау", capital: "Нгерулмуд" },
  { country: "Тонга", capital: "Нукуалофа" },
  { country: "Микронезия", capital: "Паликир" },
  { country: "Вануату", capital: "Порт Вила" },
  { country: "Папуа — Новая Гвинея", capital: "Порт Морсби" },
  { country: "Фиджи", capital: "Сува" },
  { country: "Тувалу", capital: "Фунафути" },
  { country: "Соломоновы Острова", capital: "Хониара" },
  { country: "Кирибати", capital: "Южная Тарава" },
];

const govno = {
  asia: asia,
  europe: europe,
  america: america,
  africa: africa,
  oceania: oceania,
};

let availableNumbers = [];
let questionDiv = document.getElementById("question");
let answerDiv = document.getElementById("answer");
let countryNumber = null;
let answerIsCorrect = false;
let usedCountries = [];
let resultEmoji = document.getElementById("result-emoji");
let buttonWasPressed = false;

const checkboxes = document.getElementsByClassName("chbx");
for (checkbox of checkboxes) {
  if (checkbox.checked) {
    countries.push(...govno[checkbox.name]);
  }
}

function addPart(checkbox) {
  if (checkbox.checked) {
    countries.push(...govno[checkbox.name]);
  } else {
    document.getElementById("label").innerHTML = 0;
    countries = countries.filter((e) => {
      return !govno[checkbox.name].includes(e);
    });
  }
  availableNumbers = [];
  for (let i = 0; i < countries.length; i++) {
    availableNumbers.push(i);
  }
}

answerDiv.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
    if (answerIsCorrect) {
      btnClick();
    }
  }
});

function btnClick() {
  // should check if some of the checkboxes are checked
  if (countries.length === 0) {
    return;
  }

  if (availableNumbers.length === 0) {
    if (buttonWasPressed) {
      document.getElementById("label").innerHTML++;
    }
    for (let i = 0; i < countries.length; i++) {
      availableNumbers.push(i);
    }
  }

  answerDiv.value = "";
  let randomNumber = Math.floor(Math.random() * availableNumbers.length);
  countryNumber = availableNumbers[randomNumber];
  let selectedCountry = countries[countryNumber]["country"];
  questionDiv.innerHTML = selectedCountry;
  answerDiv.focus();
  buttonWasPressed = true;
}

function checkAnswer() {
  if (
    answerDiv.value.toLowerCase() ===
    countries[countryNumber]["capital"].toLowerCase()
  ) {
    resultEmoji.innerHTML = "&#9989;";
    answerIsCorrect = true;
    availableNumbers = availableNumbers.filter(
      (value) => countryNumber !== value
    );
  } else {
    resultEmoji.innerHTML = "&#10062;";
    answerIsCorrect = false;
  }
}

function showAnswer() {
  alert(countries[countryNumber]["capital"]);
  answerDiv.focus();
}
