$.get("header.html", function(data){
    $("#header-placeholder").replaceWith(data);
});

$.get("footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});