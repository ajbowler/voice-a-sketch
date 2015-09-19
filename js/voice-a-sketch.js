var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";
recognition.maxAlternative = 1;

recognition.onresult = function(event) {
  // make sure it isn't fucked first
  if (typeof(event.results) == "undefined") {
    recognition.stop();
    return;
  }

  for (var i = event.resultIndex; i < event.results.length; i++) {
    // check the callback
    if (event.results[i].isFinal) {
      console.log("Text recieved: " + event.results[i][0].transcript);
      drawDirection(event.results[i][0].transcript);
    }
  }
};