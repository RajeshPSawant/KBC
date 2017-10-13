var a, b, c;
var countClick = 0;
var alert2 = kbcData.alert2;
var alert1 = kbcData.alert1;
$(document).ready(function() {
  jsonData = kbcData;
});

source = $("#entry-template").html();
template = Handlebars.compile(source);
html = template(kbcData);
$("#resultboxRender").html(html);

$(".calculate").click(function() {
  if (!$("input[name=num]:checked").length) {
    alert("Please choose one option.")
  } else {
    var x = $(".control input[name=num]:checked").val();
    console.log(x);

    if (x === "true") {
      alert(alert1);
      $(".step1").remove();
      $(".step2").fadeIn();
      countClick = 0;

    } else {
      console.log(123);
      alert(alert2);
      countClick++;
      if (countClick === 2) {
      var qno=$(this).data('val')-1;
      for (i = 0; i < kbcData.questions[qno].options.length; i++) {
          if(kbcData.questions[qno].options[i].type == true){
            alert("Correct answer is " + (kbcData.questions[qno].options[i].value));
          }

        }
        // alert("Correct answer is " + (kbcData.questions[0].options[1].value));
        $(".step1").remove();
        $(".step2").fadeIn();
        countClick = 0;
      }else{
        return false;
      }
    }

  }
});
