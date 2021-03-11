function getMenu(){
  $(".fa-bars").click(function(){
    $("#dropdown-menu").toggle();
  })
  $("#jumbo").click(function(){
    $("#dropdown-menu").hide();
  })
  $("#close").click(function(){
    $("#dropdown-menu").hide();
  })
  $("#phone-section").click(function(){
    $("#dropdown-menu").hide();
  })
  $("#main-prefix").click(function(){
    $("#dropdown-menu").hide();
  })
}
function getContentJumbo(){
  var top = $("#cont-top");
  var middle = $("#cont-middle");
  var bottom = $("#cont-bottom");

  setTimeout(showTop, 2000);
  setTimeout(showMiddle, 4000);
  setTimeout(showBottom, 6000);

  function showTop(){
    top.show();
  }
  function showMiddle(){
    middle.show();
  }
  function showBottom(){
    bottom.show();
  }
}
var btn = $("#btn");
btn.click(function(){
  var num = $("#input").val();
  if (isNaN(num)) {
    $(".output-section").append("<br>" + "<p>Please, enter a number.</p>")
  }
    $.ajax({
      url: 'http://apilayer.net/api/validate?access_key=a8022c940c27a7a180f2d023b08fc137&number=' + num,
      method: "GET",
      data: {
        api_key: "a8022c940c27a7a180f2d023b08fc137",
        // query: query
      },
      success: function(data){
        console.log("OK");

        var valid = "<br>" + "<span>Valid: </span>" + data["valid"] + "<br>" + "<br>";
        var number = "<span>Number: </span>" + data["number"] + "<br>" + "<br>";
        var local_format = "<span>Local Format: </span>" + data["local_format"] + "<br>" + "<br>";
        var international_format = "<span>International Format: </span>" + data["international_format"] + "<br>" + "<br>";
        var country_prefix = "<span>Country Prefix: </span>" + data["country_prefix"] + "<br>" + "<br>";
        var country_code = "<span>Country Code: </span>" + data["country_code"] + "<br>" + "<br>";
        var country_name = "<span>Country Valid </span>" + data["country_name"] + "<br>" + "<br>";
        var location = "<span>Location: </span>" + data["location"] + "<br>" + "<br>";
        var carrier = "<span>Carrier: </span>" + data["carrier"] + "<br>" + "<br>";
        var line_type = "<span>Line Type: </span>" + data["line_type"] + "<br>";

        var countries = data["countries"];

        if (isNaN(num) == false) {
          $(".output-section").empty();
          $(".output-section").append(valid, number, local_format, international_format, country_prefix, country_code, country_name, location, carrier, line_type);
        }
      },
      error: function(){
        console.log("ERROR");
      }
    });
})
function getPrefix(){
  $.ajax({
    url: 'http://apilayer.net/api/countries?access_key=a8022c940c27a7a180f2d023b08fc137',
    method: "GET",
    data: {
      api_key: "a8022c940c27a7a180f2d023b08fc137",
      // query: query
    },
    success: function(data){
     console.log("OK");

      var data = data;
      // for (var i = 0; i < 232; i++) {
      //   $("#prefix-list").append("<h3>AF Afghanistan +99</h3>" + "<br>")
      // }
      for (var key in data) {
        console.log(key  + " " + data[key]["country_name"]  + " " + data[key]["dialling_code"]);
        for (var i = 0; i < 1; i++) {
          $("#prefix-list").append(key  + " " + data[key]["country_name"]  + " " + data[key]["dialling_code"] + "<br>");
        }
      }

      // var initials = Object.keys(data);
      // var values = Object.values(data["AF"]["country_name"]);
      // var j = JSON.stringify(data);
      // console.log(j);
    },
    error: function(){
      console.log("ERROR");
    }
  });

}

function init(){
  getPrefix();
  getMenu();
  getContentJumbo();
}
$(document).ready(init);
