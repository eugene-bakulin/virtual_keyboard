class VirtualKeyboard { // опишем класс виртуальной клавиатуры
    constructor () { // опишем содержимое head и body, объектов с клавишами

        this.storage = window.localStorage, // хранилище для хранения языка раскладки

        this.keyObj = [ // массив из объектов для каждой клавиши
            { // `
                "en": "&#96;",
                "ru": "ё",
                "shifted_en": "~",
                "shifted_ru": "Ё",
                "code": "Backquote",
            },
            { // 1
                "en": "1",
                "ru": "1",
                "shifted_en": "!",
                "shifted_ru": "!",
                "code": "Digit1",
            },
            { // 2
                "en": "2",
                "ru": "2",
                "shifted_en": "@",
                "shifted_ru": '"',
                "code": "Digit2",
            },
            { // 3
                "en": "3",
                "ru": "3",
                "shifted_en": "#",
                "shifted_ru": "№",
                "code": "Digit3",
            },
            { // 4
                "en": "4",
                "ru": "4",
                "shifted_en": "$",
                "shifted_ru": ";",
                "code": "Digit4",
            },
            { // 5
                "en": "5",
                "ru": "5",
                "shifted_en": "%",
                "shifted_ru": "%",
                "code": "Digit5",
            },
            { // 6
                "en": "6",
                "ru": "6",
                "shifted_en": "^",
                "shifted_ru": ":",
                "code": "Digit6",
            },
            { // 7
                "en": "7",
                "ru": "7",
                "shifted_en": "&",
                "shifted_ru": "?",
                "code": "Digit7",
            },
            { // 8
                "en": "8",
                "ru": "8",
                "shifted_en": "*",
                "shifted_ru": "*",
                "code": "Digit8",
            },
            { // 9
                "en": "9",
                "ru": "9",
                "shifted_en": "(",
                "shifted_ru": "(",
                "code": "Digit9",
            },
            { // 0
                "en": "0",
                "ru": "0",
                "shifted_en": ")",
                "shifted_ru": ")",
                "code": "Digit0",
            },
            { // -
                "en": "-",
                "ru": "-",
                "shifted_en": "_",
                "shifted_ru": "_",
                "code": "Minus",
            },
            { // =
                "en": "=",
                "ru": "=",
                "shifted_en": "+",
                "shifted_ru": "+",
                "code": "Equal",
            },
            { // bsp
                "en": "Backspace",
                "ru": "Backspace",
                "shifted_en": "Backspace",
                "shifted_ru": "Backspace",
                "code": "Backspace",
            },
            { // tab
                "en": "Tab",
                "ru": "Tab",
                "shifted_en": "Tab",
                "shifted_ru": "Tab",
                "code": "Tab",
            },
            { // q
                "en": "q",
                "ru": "й",
                "shifted_en": "Q",
                "shifted_ru": "Й",
                "code": "KeyQ",
            },
            { // w
                "en": "w",
                "ru": "ц",
                "shifted_en": "W",
                "shifted_ru": "Ц",
                "code": "KeyW",
            },
            { // e
                "en": "e",
                "ru": "у",
                "shifted_en": "E",
                "shifted_ru": "У",
                "code": "KeyE",
            },
            { // r
                "en": "r",
                "ru": "к",
                "shifted_en": "R",
                "shifted_ru": "К",
                "code": "KeyR",
            },
            { // t
                "en": "t",
                "ru": "е",
                "shifted_en": "T",
                "shifted_ru": "Е",
                "code": "KeyT",
            },
            { // y
                "en": "y",
                "ru": "н",
                "shifted_en": "Y",
                "shifted_ru": "Н",
                "code": "KeyY",
            },
            { // u
                "en": "u",
                "ru": "г",
                "shifted_en": "U",
                "shifted_ru": "Г",
                "code": "KeyU",
            },
            { // i
                "en": "i",
                "ru": "ш",
                "shifted_en": "I",
                "shifted_ru": "Ш",
                "code": "KeyI",
            },
            { // o
                "en": "o",
                "ru": "щ",
                "shifted_en": "O",
                "shifted_ru": "Щ",
                "code": "KeyO",
            },
            { // p
                "en": "p",
                "ru": "з",
                "shifted_en": "P",
                "shifted_ru": "З",
                "code": "KeyP",
            },
            { // {
                "en": "[",
                "ru": "х",
                "shifted_en": "{",
                "shifted_ru": "Х",
                "code": "BracketLeft",
            },
            { // }
                "en": "]",
                "ru": "ъ",
                "shifted_en": "}",
                "shifted_ru": "Ъ",
                "code": "BracketRight",
            },
            { // \
                "en": "&#92;",
                "ru": "&#92;",
                "shifted_en": "|",
                "shifted_ru": "/",
                "code": "Backslash",
            },
            { // del
                "en": "Del",
                "ru": "Del",
                "shifted_en": "Del",
                "shifted_ru": "Del",
                "code": "Delete",
            },
            { // caps
                "en": "CapsLock",
                "ru": "CapsLock",
                "shifted_en": "CapsLock",
                "shifted_ru": "CapsLock",
                "code": "CapsLock",
            },
            { // a
                "en": "a",
                "ru": "ф",
                "shifted_en": "A",
                "shifted_ru": "Ф",
                "code": "KeyA",
            },
            { // s
                "en": "s",
                "ru": "ы",
                "shifted_en": "S",
                "shifted_ru": "Ы",
                "code": "KeyS",
            },
            { // d
                "en": "d",
                "ru": "в",
                "shifted_en": "D",
                "shifted_ru": "В",
                "code": "KeyD",
            },
            { // f
                "en": "f",
                "ru": "а",
                "shifted_en": "F",
                "shifted_ru": "А",
                "code": "KeyF",
            },
            { // g
                "en": "g",
                "ru": "п",
                "shifted_en": "G",
                "shifted_ru": "П",
                "code": "KeyG",
            },
            { // h
                "en": "h",
                "ru": "р",
                "shifted_en": "H",
                "shifted_ru": "Р",
                "code": "KeyH",
            },
            { // j
                "en": "j",
                "ru": "о",
                "shifted_en": "J",
                "shifted_ru": "О",
                "code": "KeyJ",
            },
            { // k
                "en": "k",
                "ru": "л",
                "shifted_en": "K",
                "shifted_ru": "Л",
                "code": "KeyK",
            },
            { // l
                "en": "l",
                "ru": "д",
                "shifted_en": "L",
                "shifted_ru": "Д",
                "code": "KeyL",
            },
            { // ;
                "en": ";",
                "ru": "ж",
                "shifted_en": ":",
                "shifted_ru": "Ж",
                "code": "Semicolon",
            },
            { // '
                "en": "'",
                "ru": "э",
                "shifted_en": '"',
                "shifted_ru": "Э",
                "code": "Quote",
            },
            { // Enter
                "en": "ENTER",
                "ru": "ENTER",
                "shifted_en": "ENTER",
                "shifted_ru": "ENTER",
                "code": "Enter",
            },
            { // shift
                "en": "Shift",
                "ru": "Shift",
                "shifted_en": "Shift",
                "shifted_ru": "Shift",
                "code": "ShiftLeft",
            },
            { // z
                "en": "z",
                "ru": "я",
                "shifted_en": "Z",
                "shifted_ru": "Я",
                "code": "KeyZ",
            },
            { // x
                "en": "x",
                "ru": "ч",
                "shifted_en": "X",
                "shifted_ru": "Ч",
                "code": "KeyX",
            },
            { // c
                "en": "c",
                "ru": "с",
                "shifted_en": "C",
                "shifted_ru": "С",
                "code": "KeyC",
            },
            { // v
                "en": "v",
                "ru": "м",
                "shifted_en": "V",
                "shifted_ru": "М",
                "code": "KeyV",
            },
            { // b
                "en": "b",
                "ru": "и",
                "shifted_en": "B",
                "shifted_ru": "И",
                "code": "KeyB",
            },
            { // n
                "en": "n",
                "ru": "т",
                "shifted_en": "N",
                "shifted_ru": "Т",
                "code": "KeyN",
            },
            { // m
                "en": "m",
                "ru": "ь",
                "shifted_en": "M",
                "shifted_ru": "Ь",
                "code": "KeyM",
            },
            { // ,
                "en": ",",
                "ru": "б",
                "shifted_en": "<",
                "shifted_ru": "Б",
                "code": "Comma",
            },
            { // .
                "en": ".",
                "ru": "ю",
                "shifted_en": ">",
                "shifted_ru": "Ю",
                "code": "Period",
            },
            { // /
                "en": "/",
                "ru": ".",
                "shifted_en": "?",
                "shifted_ru": ",",
                "code": "Slash",
            },
            { // up
                "en": "&#8593;",
                "ru": "&#8593;",
                "shifted_en": "&#8593;",
                "shifted_ru": "&#8593;",
                "code": "ArrowUp",
            },
            { // shift
                "en": "Shift",
                "ru": "Shift",
                "shifted_en": "Shift",
                "shifted_ru": "Shift",
                "code": "ShiftRight",
            },
            { // ctrl
                "en": "Ctrl",
                "ru": "Ctrl",
                "shifted_en": "Ctrl",
                "shifted_ru": "Ctrl",
                "code": "ControlLeft",
            },
            { // wind
                "en": "Win",
                "ru": "Win",
                "shifted_en": "Win",
                "shifted_ru": "Win",
                "code": "MetaLeft",
            },
            { // alt
                "en": "Alt",
                "ru": "Alt",
                "shifted_en": "Alt",
                "shifted_ru": "Alt",
                "code": "AltLeft",
            },
            { // space
                "en": "",
                "ru": "",
                "shifted_en": "",
                "shifted_ru": "",
                "code": "Space",
            },
            { // alt
                "en": "Alt",
                "ru": "Alt",
                "shifted_en": "Alt",
                "shifted_ru": "Alt",
                "code": "AltRight",
            },
            { // ctrl
                "en": "Ctrl",
                "ru": "Ctrl",
                "shifted_en": "Ctrl",
                "shifted_ru": "Ctrl",
                "code": "ControlRight",
            },
            { // left
                "en": "&#8592;",
                "ru": "&#8592;",
                "shifted_en": "&#8592;",
                "shifted_ru": "&#8592;",
                "code": "ArrowLeft",
            },
            { // down
                "en": "&#8595;",
                "ru": "&#8595;",
                "shifted_en": "&#8595;",
                "shifted_ru": "&#8595;",
                "code": "ArrowDown",
            },
            { // right
                "en": "&#8594;",
                "ru": "&#8594;",
                "shifted_en": "&#8594;",
                "shifted_ru": "&#8594;",
                "code": "ArrowRight",
            },
        ]

        this.bodyInner = `<div class="virtual_keyboard">
        <div class="header_1">
            RSS virtual keyboard
        </div>

        <textarea class = "view_panel" id = "output" rows="10" name="text"></textarea>
        
        <div class="keyboard">

            <div class="line">

                <div class="button letter"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button number"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button backspace"></div>

            </div>

            <div class="line">

                <div class="button tab"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button del"></div>

            </div>

            <div class="line">

                <div class="button capslock"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button enter"></div>

            </div>

            <div class="line">

                <div class="button shift leftshift"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button shift rightshift"></div>

            </div>

            <div class="line">

                <div class="button cntrl"></div>
                <div class="button wind"></div>
                <div class="button alt"></div>
                <div class="button space"></div>
                <div class="button alt"></div>
                <div class="button cntrl"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>
                <div class="button letter"></div>

            </div>

        </div>

        <div class="comments">
            <div>Комбинация для переключения языка: Ctrl + Alt</div>
            <div>Клавиатура создана в ОС Windows</div>
        </div>

        </div>`;
    
        this.headInner = `<meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RSS Virtual Keyboard</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="index.css">`;
    }

    releaseVK() { // добавление клавиатуры в документ

        document.getElementsByTagName("head")[0].insertAdjacentHTML('afterbegin', this.headInner);

        document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', this.bodyInner);

    }

    capitalize(key) { // приведение к верхнему регистру для capslock
        return key.innerText.toUpperCase();
    }

    uncapitalize(key) { // приведение к нижнему решистру для capslock
        return key.innerText.toLowerCase();
    }
}

keyb = new VirtualKeyboard; // создаем экземпляр класса VirtualKeyboard
keyb.releaseVK();           // выпускаем Кракена

window.onload = function () { // будет работать после загрузки страницы (на всякий случай)

    let capsLockIsOn = false; // переменная-переключатель для caps lock
    let langSwitch = keyb.storage; // переменная для информации о раскладке из storage

    const ALL_BUTTONS = document.getElementsByClassName("button"); // константа для всех клавиш
    const TEXT_AREA = document.getElementById("output");          // константа для вывода
    const LETTER_BUTTONS = document.getElementsByClassName("letter"); // константа для кнопок с буквами
    const NUM_BUTTONS = document.getElementsByClassName("number");  // константа для кнопок с цифрами
    const ENTER = document.getElementsByClassName("enter")[0];  // константа для enter
    const BSPACE = document.getElementsByClassName("backspace")[0]; // константа для backspace
    const DEL = document.getElementsByClassName("del")[0]; // константа для delete
    const SPACE = document.getElementsByClassName("space")[0];  // константа для space
    const CAPS = document.getElementsByClassName("capslock")[0];    // константа для caps lock
    const TAB = document.getElementsByClassName("tab")[0];  // константа для tab
    const LSHIFT = document.getElementsByClassName("leftshift")[0]; // константа для левого shift
    const RSHIFT = document.getElementsByClassName("rightshift")[0]; // константа для правого shift

    if (langSwitch["lang"] === "en") { // выбор значений клавиш в зависимости от текущего языка при загрузке
        for (let i=0; i < keyb.keyObj.length; i ++) {
            ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["en"];
        }
    } else if (langSwitch["lang"] === "ru") {
        for (let i=0; i < keyb.keyObj.length; i ++) {
            ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["ru"];
        }
    } else {                           // если язык ещё не установлен, то используем значение lang из html
        for (let i=0; i < keyb.keyObj.length; i ++) {
            ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][document.documentElement.lang];
        }
    }

    // -- ОБРАБОТКА НАЖАТИЙ НА ВИРТУАЛЬНУЮ КЛАВИАТУРУ --

    TEXT_AREA.focus();  // делаем focus на textarea при загрузке
    document.addEventListener ("mousedown", () => { // при mousedown фокусируемся на textarea
        TEXT_AREA.focus();
    });
    document.addEventListener ("mouseup", () => {   // при mouseup фокусируемся на textarea
        TEXT_AREA.focus();
    });

    function insertText(text) {   // опишем функцию для нормального ввода текста в textarea
        let start = TEXT_AREA.selectionStart;   //ищем первое положение выделенного символа
        let end = TEXT_AREA.selectionEnd; //ищем последнее положение выделенного символа
        let finalText = TEXT_AREA.value.substring(0, start) + text + TEXT_AREA.value.substring(end); // текст до + вставка + текст после
        TEXT_AREA.value = finalText; // подмена значения
        TEXT_AREA.focus();  // возвращаем фокус на элемент
        TEXT_AREA.selectionEnd = ( start == end )? (end + text.length) : end ; // возвращаем курсор на место - учитываем выделили ли текст или просто курсор поставили
    }

    function removeTextBSP() { // опишем функцию для нормальной работы backspace в textarea
        let start = TEXT_AREA.selectionStart;   //ищем первое положение выделенного символа
        let end = TEXT_AREA.selectionEnd; //ищем последнее положение выделенного символа
        let finalText = TEXT_AREA.value.substring(0, start-1) + TEXT_AREA.value.substring(end);
        TEXT_AREA.value = finalText; // заменяем значение
        TEXT_AREA.focus();  // возвращаем фокус на элемент
        TEXT_AREA.selectionEnd = end-1; // двигаем курсор
    }

    function removeTextDEL() {
        let start = TEXT_AREA.selectionStart;   //ищем первое положение выделенного символа
        let end = TEXT_AREA.selectionEnd; //ищем последнее положение выделенного символа
        let finalText = TEXT_AREA.value.substring(0, start) + TEXT_AREA.value.substring(start+1);
        TEXT_AREA.value = finalText; // заменяем значение
        TEXT_AREA.focus();  // возвращаем фокус на элемент
        TEXT_AREA.selectionEnd = end; // двигаем курсор
    }

    [...LETTER_BUTTONS].forEach(a => {  // вешаем слушатель событий на кнопки с буквами
        a.addEventListener("click", () => {
            insertText(a.innerText); // для нажатой клавиши с текстом вызываем функцию вставки её содержимого в textarea
        });
    });

    [...NUM_BUTTONS].forEach(a => { // вешаем слушатель событий на кнопки с цифрами
        a.addEventListener("click", () => {
            insertText(a.innerText); // для нажатой клавиши с цифрой вызываем функцию вставки её содержимого в textarea
        });
    });

    ENTER.addEventListener("click", () => { // вешаем слушатель событий на enter
        insertText("\n");   // для нажатого enter вызываем функцию вставки текста с аргументом перехода на новую строку
    });

    BSPACE.addEventListener("click", () => { // вешаем слушатель событий на backspace
        removeTextBSP();    // вызываем функцию удаления текста для backspace
    });

    DEL.addEventListener("click", () => { // вешаем слушатель событий на backspace
        removeTextDEL();    // вызываем функцию удаления текста для del
    });

    SPACE.addEventListener("click", () => { // вешаем слушатель событий на space
        insertText(" ");    // вызываем функцию вставки текста с аргументом - пробел
    });

    TAB.addEventListener("click", () => { // вешаем слушатель событий на space
        insertText("\t"); // вызываем функцию вставки текста с аргументом - \t
    });

    CAPS.addEventListener("click", () => { // вешаем слушатель событий на caps lock
        if (capsLockIsOn === false) { // проверяем, включен ли caps; если не включен, то поднимем регистр букв в клавишах и переключим capsLockIsOn...
            [...LETTER_BUTTONS].forEach( a => {
                a.innerText = keyb.capitalize(a);
                CAPS.classList.add("hovered");
                capsLockIsOn = true;
            });
        } else { // ...если caps уже включен, то делаем всё наоборот
            [...LETTER_BUTTONS].forEach( a => {
                a.innerText = keyb.uncapitalize(a);
                CAPS.classList.remove("hovered");
                capsLockIsOn = false;

            });
        }
    });

    LSHIFT.addEventListener("mousedown", () => { // вешаем слушатель событий на левый shift
        if (capsLockIsOn === true) {             // проверяем, включен ли caps
            if (langSwitch["lang"] === "en") {   // проверяем язык раскладки
                for (let i=0; i < keyb.keyObj.length; i ++) { // заполняем клавиши shifted символами с нужной раскладки
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_en"];
                };
                [...LETTER_BUTTONS].forEach( a => { // а потом понижаем регистр у буквенных символов, если caps включен
                    a.innerText = keyb.uncapitalize(a);
                });
            } else if (langSwitch["lang"] === "ru") {   // то же для русской раскладки
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_ru"];
                };
                [...LETTER_BUTTONS].forEach( a => {
                    a.innerText = keyb.uncapitalize(a);
                });
            }
            document.addEventListener ("mouseup", () => {    // вешаем слушатель событий на отпускание кнопки мыши
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][langSwitch["lang"]]; // при отпускании кнопки возращаем символы с обычной нужной раскладки...
                };
                [...LETTER_BUTTONS].forEach( a => {     // и, если caps включен, то поднимаем их регистр обратно
                    a.innerText = keyb.capitalize(a);
                });
            })
        } else if (capsLockIsOn === false) {    // если caps выключен, 
            if (langSwitch["lang"] === "en") {  // проверяем язык и заполняем клавиши shifted символами
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_en"];
                };                   
            } else if (langSwitch["lang"] === "ru") {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_ru"];
                };                    
            }
            document.addEventListener ("mouseup", event => { // и вешаем слушатель: если кнопку мыши отпустили, то вернём в клавиши обычные символы из нужной раскладки
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][langSwitch["lang"]];
                }
            })
        }
    });

    RSHIFT.addEventListener("mousedown", () => { // вешаем слушатель событий на правый shift (все по аналогии с левым shift)
        if (capsLockIsOn === true) {
            if (langSwitch["lang"] === "en") {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_en"];
                };
                [...LETTER_BUTTONS].forEach( a => {
                    a.innerText = keyb.uncapitalize(a);
                });
            } else if (langSwitch["lang"] === "ru") {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_ru"];
                };
                [...LETTER_BUTTONS].forEach( a => {
                    a.innerText = keyb.uncapitalize(a);
                });
            }
            document.addEventListener ("mouseup", event => {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][langSwitch["lang"]];
                };
                [...LETTER_BUTTONS].forEach( a => {
                    a.innerText = keyb.capitalize(a);
                });
            })
        } else if (capsLockIsOn === false) {
            if (langSwitch["lang"] === "en") {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_en"];
                };                   
            } else if (langSwitch["lang"] === "ru") {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_ru"];
                };                    
            }
            document.addEventListener ("mouseup", event => {
                for (let i=0; i < keyb.keyObj.length; i ++) {
                    ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][langSwitch["lang"]];
                }
            })
        }
    });
    
    // -- теперь к обработке событий реальной клавиатуры! --

    document.addEventListener ("keydown", (event) => {  // обработаем нажатие на Tab и Alt, исключив их поведение по умолчанию
        if (event.code === "Tab") {
            event.preventDefault();
            insertText("\t");
        }
        if (event.altKey) {
            event.preventDefault();
        }
    });

    function languageSwitcher() {   // функция по переключению языка
        if (langSwitch["lang"] === "en") {  // если язык уже установлен
            Object.defineProperty(langSwitch, "lang", {value: "ru"}); // изменяем значение ключа в localStorage
            for (let i=0; i < keyb.keyObj.length; i ++) {
                ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["ru"];    // заполняем клавиши содержимым с нужным языком
            }
            if (capsLockIsOn === true) {
                [...LETTER_BUTTONS].forEach( a => { // и повышаем у буквенных значений регистр, если caps включен
                    a.innerText = keyb.capitalize(a);
                });
            }
        } else  if (langSwitch["lang"] === "ru") {  // если язык уже установлен
            Object.defineProperty(langSwitch, "lang", {value: "en"}); // изменяем значение ключа в localStorage
            for (let i=0; i < keyb.keyObj.length; i ++) {
                ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["en"];    // заполняем клавиши содержимым с нужным языком
            }
            if (capsLockIsOn === true) {
                [...LETTER_BUTTONS].forEach( a => { // и повышаем у буквенных значений регистр, если caps включен
                    a.innerText = keyb.capitalize(a);
                });
            }
        } else {                                  // если язык не установлен, то пляшем от информации в lang html
            if (document.documentElement.lang === "en") {
                langSwitch.setItem("lang", "ru"); // добавляем в storage объект, содержащий информацию о раскладке
                for (let i=0; i < keyb.keyObj.length; i ++) {
                        ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["ru"];    // заполняем клавиши содержимым с нужным языком
                }
                if (capsLockIsOn === true) {
                    [...LETTER_BUTTONS].forEach( a => { // и повышаем у буквенных значений регистр, если caps включен
                        a.innerText = keyb.capitalize(a);
                    });
                }
            } else if (document.documentElement.lang === "ru") {
                langSwitch.setItem("lang", "en"); // добавляем в storage объект, содержащий информацию о раскладке
                for (let i=0; i < keyb.keyObj.length; i ++) {
                        ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["en"];    // заполняем клавиши содержимым с нужным языком
                }
                if (capsLockIsOn === true) {
                    [...LETTER_BUTTONS].forEach( a => { // и повышаем у буквенных значений регистр, если caps включен
                        a.innerText = keyb.capitalize(a);
                    });
                }
            }
        }      
    }

    document.addEventListener("keydown", (event) => { // слушатель на переключение языка
        if ((event.ctrlKey) && (event.altKey)) {
            languageSwitcher();
        }
    });

    document.addEventListener('keydown', (event) => {  // эмуляция нажатия клавиш
        for (let i = 0; i < keyb.keyObj.length; i++) {
            if (keyb.keyObj[i]['code'] === event.code) {
                ALL_BUTTONS[i].classList.add("pushed");
            }
        }    
        document.addEventListener('keyup', (event) => {  // эмуляция отжатия клавиш
            for (let i = 0; i < keyb.keyObj.length; i++) {
                if (keyb.keyObj[i]['code'] === event.code) { 
                    ALL_BUTTONS[i].classList.remove("pushed");
                }
            }
        })
    })

    document.addEventListener ("keydown", event => {    // слушатель для нажатия Caps на физической клавиатуре
        if (event.code === "CapsLock") {
            if (capsLockIsOn === false) { // проверяем, включен ли caps; если не включен, то поднимем регистр букв в клавишах и переключим capsLockIsOn...
                [...LETTER_BUTTONS].forEach( a => {
                    a.innerText = keyb.capitalize(a);
                    CAPS.classList.add("hovered");  // подсветим клавишу
                    capsLockIsOn = true;
                });
            } else {                      // ...если caps уже включен, то делаем всё наоборот
                [...LETTER_BUTTONS].forEach( a => {
                    a.innerText = keyb.uncapitalize(a);
                    CAPS.classList.remove("hovered");
                    capsLockIsOn = false;
                });
            }
        }
    });

    document.addEventListener ("keydown", event => {    // вешаем на document слушатель событий для shift
        if (event.key === "Shift") {    // если нажали любой Shift
            if (capsLockIsOn === true) {    // если caps включен
                if (langSwitch["lang"] === "en") {  // в соответствии с раскладкой заполняем клавиши shifted значениями
                    for (let i=0; i < keyb.keyObj.length; i ++) {
                        ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_en"];
                    };
                    [...LETTER_BUTTONS].forEach( a => { // и понижаем у буквенных значений регистр
                        a.innerText = keyb.uncapitalize(a);
                    });
                } else if (langSwitch["lang"] === "ru") { // ...
                    for (let i=0; i < keyb.keyObj.length; i ++) {
                        ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_ru"];
                    };
                    [...LETTER_BUTTONS].forEach( a => { // ...
                        a.innerText = keyb.uncapitalize(a);
                    });
                }
                document.addEventListener ("keyup", event => {  // добавляем слушатель событий на keyup
                    if (event.key === "Shift") {    // если отпустили shift
                        for (let i=0; i < keyb.keyObj.length; i ++) {   // заполняем клавиши символами из обычной раскладки нужного языка...
                            ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][langSwitch["lang"]];
                        };
                        [...LETTER_BUTTONS].forEach( a => { // ...и возвращаем caps (повышаем регистр)
                            a.innerText = keyb.capitalize(a);
                        });
                    }
                })
            } else if (capsLockIsOn === false) {    // если caps выключен
                if (langSwitch["lang"] === "en") {  // заполняем клавиши shifted символами из раскладки нужного языка
                    for (let i=0; i < keyb.keyObj.length; i ++) {
                        ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_en"];
                    };                   
                } else if (langSwitch["lang"] === "ru") {
                    for (let i=0; i < keyb.keyObj.length; i ++) {
                        ALL_BUTTONS[i].innerHTML = keyb.keyObj[i]["shifted_ru"];
                    };                    
                }
                document.addEventListener ("keyup", event => {  // вешаем обработчик событий на keyup: отпустили shift - вернули обычные символы из раскладки нужного языка
                    if (event.key === "Shift") {
                        for (let i=0; i < keyb.keyObj.length; i ++) {
                            ALL_BUTTONS[i].innerHTML = keyb.keyObj[i][langSwitch["lang"]];
                        };
                    }
                })
            }
        }
    })

    document.addEventListener ("keydown", event => {    // обработка ввода текста с физической клавиатуры
        if (event.code.includes("Key")||event.code.includes("Backquote")||event.code.includes("Quote")||event.code.includes("Bracket")||event.code.includes("Semicolon")||event.code.includes("Comma")||event.code.includes("Period")||event.code.includes("Slash")||event.code.includes("Arrow")) {
            event.preventDefault();     // для некоторых клавиш вводим preventDefault
            let index;
            for (let i=0; i < keyb.keyObj.length; i++) {
                if (keyb.keyObj[i]["code"] == event.code) { // берём index из массива объектов для клавиш
                    index = i;
                    break;
                }
            }
            insertText([...ALL_BUTTONS][index].innerHTML); // и вводим текст из текущего содержимого клавиши в html
        }       
    })

    /*document.addEventListener ("keydown", (event) => {    // обработчик для анимации нажатия физических клавиш на виртуальной клавиатуре
        try {                                             // будем ловить ошибки при попытке нажатия клавиши, не реализованной в виртуальной клавиатуре
            let index;
            for (let i = 0; i < keyb.keyObj.length; i ++) { // ищем по key code объект в массиве объектов для клавиш, из которого делали заполнение "значений" клавиш...
                if (keyb.keyObj[i]["code"] == event.code) {
                    index = i;                              // ...запоминаем индекс в массиве объектов...
                    break;
                }
            }
            ALL_BUTTONS[index].classList.add("pushed");         // ...и подсвечиваем нужную
            ALL_BUTTONS[index].addEventListener("keyup", (event) => {
                event.target.classList.remove("pushed");  // при keyup убираем подсветку
            })
        } catch (e) {
            console.log("Добрый день! Похоже, что Вы попытались нажать клавишу, реализации которой нет в виртуальной клавиатуре :(");
        }
    });*/
    
}
