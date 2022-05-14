function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
}

function draw()
{
  image(video, 0, 0 , 300 ,300);
}

function modelLoaded()
{
  console.log('model loaded');
}

function gotResult(error , result)
{
  if(error) {
    console.error(error)
  }
  else{
    if((result[0].confidence > 0.5) && (previous_result != result[0].label))
    {
      console.log(result);
      previous_result = result[0].label;

      var synth=window.speechSynthesis;
      speak_data=' Object is dejected -'+result[0].label;
      var UtterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(UtterThis);

      document.getElementById("result_object_name").innerHTML.result[0].label;
      document.getElementById("result_object_accuracy").innerHTML.result[0].confidence.toFixed(3);
    }
  }
}



