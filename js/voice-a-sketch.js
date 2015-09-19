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
      drawDirection(even.results[i][0].transcript);
    } else {
      drawDirection(even.results[i][0].transcript);
    }
  }
};