
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const output = document.getElementById('output');

    // Check if the browser supports speech recognition
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();

        recognition.onstart = function () {
            output.textContent = 'Listening...';
        };

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            output.textContent = 'You said: ' + transcript;
        };

        recognition.onerror = function (event) {
            output.textContent = 'Error occurred: ' + event.error;
        };

        recognition.onend = function () {
            output.textContent = 'Press the button and start speaking!';
        };

        startButton.addEventListener('click', function () {
            recognition.start();
        });
    } else {
        output.textContent = 'Speech recognition is not supported in this browser.';
    }
});
