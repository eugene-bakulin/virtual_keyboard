class VirtualKeyboard {
    constructor () {
        this.bodyInner = `<div class="virtual_keyboard">
        <div class="header_1">
            RSS virtual keyboard
        </div>

        <textarea class = "view_panel" rows="10" name="text"></textarea>
        
        <div class="keyboard">

            <div class="line"> <!-- первый сверху ряд -->

                <div class="button">&lsquo;</div>
                <div class="button number">1</div>
                <div class="button number">2</div>
                <div class="button number">3</div>
                <div class="button number">4</div>
                <div class="button number">5</div>
                <div class="button number">6</div>
                <div class="button number">7</div>
                <div class="button number">8</div>
                <div class="button number">9</div>
                <div class="button number">0</div>
                <div class="button">-</div>
                <div class="button">=</div>
                <div class="button backspace">Backspace</div>

            </div>

            <div class="line"> <!-- второй сверху ряд -->

                <div class="button tab">Tab</div>
                <div class="button letter">q</div>
                <div class="button letter">w</div>
                <div class="button letter">e</div>
                <div class="button letter">r</div>
                <div class="button letter">t</div>
                <div class="button letter">y</div>
                <div class="button letter">u</div>
                <div class="button letter">i</div>
                <div class="button letter">o</div>
                <div class="button letter">p</div>
                <div class="button">[</div>
                <div class="button">]</div>
                <div class="button">\</div>
                <div class="button del">Del</div>

            </div>

            <div class="line"> <!-- третий сверху ряд -->

                <div class="button capslock">CapsLock</div>
                <div class="button letter">a</div>
                <div class="button letter">s</div>
                <div class="button letter">d</div>
                <div class="button letter">f</div>
                <div class="button letter">g</div>
                <div class="button letter">h</div>
                <div class="button letter">j</div>
                <div class="button letter">k</div>
                <div class="button letter">l</div>
                <div class="button">;</div>
                <div class="button">'</div>
                <div class="button enter">ENTER</div>

            </div>

            <div class="line"> <!-- четвертый сверху ряд -->

                <div class="button shift leftshift">Shift</div>
                <div class="button letter">z</div>
                <div class="button letter">x</div>
                <div class="button letter">c</div>
                <div class="button letter">v</div>
                <div class="button letter">b</div>
                <div class="button letter">n</div>
                <div class="button letter">m</div>
                <div class="button">,</div>
                <div class="button">.</div>
                <div class="button">/</div>
                <div class="button">&#8593;</div>
                <div class="button shift">Shift</div>

            </div>

            <div class="line"> <!-- пятый сверху ряд -->

                <div class="button cntrl">Ctrl</div>
                <div class="button wind">Win</div>
                <div class="button alt">Alt</div>
                <div class="button space"></div>
                <div class="button alt">Alt</div>
                <div class="button cntrl">Ctrl</div>
                <div class="button">&#8592;</div>
                <div class="button">&#8595;</div>
                <div class="button">&#8594;</div>

            </div>

        </div>

    </div>`;
    
    this.headInner = `    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RSS Virtual Keyboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">`;

    }

    releaseVK() {

        document.getElementsByTagName("head")[0].insertAdjacentHTML('afterbegin', this.headInner);

        document.body.insertAdjacentElement('afterbegin', this.bodyInner);

    }
}