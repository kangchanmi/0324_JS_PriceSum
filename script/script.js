$(function() {

    $("button#calcBtn").click(function() {

        var basicPrice = 16000;
        var grinding = 0;
        var cnt = 0;

        grinding = $("#grinding").val();
        cnt = $("#cnt").val();

        var priceSum = parseInt(basicPrice) * parseInt(cnt) + parseInt(grinding);

        $("#priceSum").text(priceSum);

    });

});
