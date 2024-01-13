let screen = document.getElementById('screen');

    function appendValue(value) {
        if (screen.innerHTML === '0' && value !== '.') {
            screen.innerHTML = value;
        } else {
            screen.innerHTML += value;
        }
    }

    function clearScreen() {
        screen.innerHTML = '0';
    }

    function calculate() {
        try {
            screen.innerHTML = eval(screen.innerHTML).toFixed(2);
        } catch (error) {
            screen.innerHTML = 'Error';
        }
    }