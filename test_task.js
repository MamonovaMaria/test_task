$(".btn_submit_tast3").click(function(){
  $("#task3_result").val('');
  var tmp_string = $("#task3").val();
  var array = tmp_string.split(" ");
  var tmp_dictionary = new Array;
  var dictionary = new Array;

  for (var i = 0; i < array.length; i++){
    var tmp_arr = new Array;
    var index = $.inArray(array[i], tmp_dictionary);
    if(index == -1){
      tmp_dictionary.push(array[i]);
      tmp_arr.push(array[i]);
      tmp_arr.push(1);
      dictionary.push(tmp_arr);
    }
    else dictionary[index][1]++;
  }

  var floor = Math.floor(array.length/2);

  for(var i = 0; i < dictionary.length; i++){
    if (dictionary[i][1] >= floor)
      $("#task3_result").val($("#task3_result").val() + dictionary[i][0] + "; ")
  }

  if ($("#task3_result").val() == '')
    $("#task3_result").val("not result for this array");
});

$(".btn_submit_tast2").click(function(){
  $("#task2_result").val('');
  var result = 0;
  var count_of_open = 0;
  var count_of_close = 0;
  var tmp_string = $("#task2").val();
  for (var i = 0; i < tmp_string.length; i++){
    if (tmp_string[i] == '('){
      count_of_open++;
      if(tmp_string[i+1] == '(')
        for (var j = i+2; j < tmp_string.length-1; j++){
          if (tmp_string[j] == ')')
            if (tmp_string[j+1] == ')') result = 1;
            else break;
        }
    }
    else if (tmp_string[i] == ')') count_of_close++;
  }
  if(count_of_open != count_of_close) result = 1;
  if (result == 0) $("#task2_result").val("Нет лишних скобок");
  else $("#task2_result").val("Есть лишние скобки");
});
