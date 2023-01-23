const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

if ('SpeechRecognition' in window) {} else out("this browser is not supported");

const recognition = new window.SpeechRecognition();
recognition.continuous = true;
recognition.start();

recognition.onresult = (event) => {
    var voiceInput = event.results[event.results.length -1][0].transcript;
    determine(voiceInput)
}

recognition.onend = () => {
    recognition.start();
}