function determine(voiceInput) {

    var input = voiceInput.toLowerCase();
    console.log("Speech Interpreted As : " + input);

    if (!(input.includes("bernard"))) {
        listenToConversation(input)
    } else {

        

    }

}