let speech = new SpeechSynthesisUtterance() //creates a new instance(object) of SpeechSynthesisUtterance (interface of the Web Speech API) which will hold the text that you want the browser to speak
let voices = [] //empty array that will later hold the list of available voices
let voiceSelect = document.querySelector("select") //selects the first <select> element, which will be used to display the list of voices

window.speechSynthesis.onvoiceschanged = () => { //this event is fired when the list of available voices changes, which typically happens when the page is first loaded
    voices = window.speechSynthesis.getVoices() //retrieves an array of SpeechSynthesisVoice objects representing the available voices and puts them in voices
    speech.voice = voices[0] //sets the initial voice of the speech object to the first voice in the list

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))) //for each voice, it creates a new <option> element using the Option constructor, which takes the voice's name as the display text and the index i as the value (<option> is added to the dropdown)
}

voiceSelect.addEventListener("change", () => { //when the user selects a different voice from the dropdown, this event is triggered
    speech.voice = voices[voiceSelect.value] //the selected voice is determined by 'voiceSelect.value', which is the index of the selected option and then updates the speech object's voice property to the selected voice
})

document.querySelector("button").addEventListener("click", () =>{ //selects the first <button> element, then adds an event listener for the click event - when the button is clicked, the anonymous arrow function (() => { ... }) is executed
    speech.text = document.querySelector("textarea").value //selects and retrieves the value of the <textarea> - assigns this value to the text property of the speech object (sets the text that will be spoken)
    window.speechSynthesis.speak(speech) //converts the text in the speech object into audible speech (window.speechSynthesis is the interface that allows the web application to use the speech synthesis (text-to-speech) capabilities of the browser)
})

