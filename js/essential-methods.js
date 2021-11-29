$(document).ready(function() {
    var heading = $("#heading").html();
    // alert(heading);
    var cardContents = $(".card").html();
    // alert(cardContents);

    $(".card").html("<h2>Howdy from JavaScript</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis dolorem enim eum facilis illo incidunt laboriosam laborum, mollitia nam perferendis perspiciatis, quisquam sequi tempora ut voluptatibus voluptatum! Minima, sed.</p>");

    // alert($("#box").css("width"));

    $("#box").css("background", "cadetblue");
    $("#box").css("background", "orangered").css("border-color", "darkslateblue");
    $("#box").css({
        'background': 'papayawhip',
        'border-color': 'saddlebrown',
        'width': '150px'
    });

    $("p").addClass("highlighted").addClass("underline");

    $(".highlighted").click(function() {
        $(this).removeClass("highlighted");
    });

    $("p").click(function () {
        $(this).toggleClass("underline");
    });

});