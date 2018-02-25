$(document).ready(function() {
  $(".evaluate").click(function() {
	  var input = $(".textEntered").val();
	  if(input == ""){
		 $(".display").text("Please enter a value");
	  }else{
		  $(".display").text(is_unique(input));
	  }
	});
});

function is_unique(str) {
  var obj = {};
  for(var z=0;z<str.length;++z) {
    var ch = str[z];
    if(obj[ch]) return "Not Unique"; else obj[ch] = "Unique";
  }
  return "Unique";
}
