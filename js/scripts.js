var caseFindReplace = function(string,find,replace){
    var result = string.replace(find, replace);
    return result;
}

var string = function(string,find,replace){
    return string;
}

var findReplace = function(string,find,replace){
    var regEx = new RegExp(find, "ig");
    var result = string.replace(regEx, replace);

    return result;
}

$(document).ready(function() {
    $("form#fandr").submit(function(event){
        var string = $("input#string").val();
        var find = $("input#find").val();
        var replace = $("input#replace").val();
        var result = findReplace(string, find, replace);
        $(".result").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
