"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortuneText(fortune) {
    $('#fortune-text').html(fortune);
}

function showFortune(evt) {
    $.get('/fortune', replaceFortuneText);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function replaceWeatherText(weather) {
    var weather = weather['forecast'];
    $('#weather-info').html(weather);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    // TODO: request weather with that URL and show the forecast 
    // in #weather-info
    $.get(url,  replaceWeatherText);
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function replaceOrderText(order) {
    var message = order.msg;
    var code = order.code;

    $('#order-status').html(message);

    if (code === 'ERROR') {
        $('#order-status').addClass('order-error');
    }
    else {
        $('#order-status').removeClass('order-error');
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, 
    // make it show up in red (see our CSS!)
    var formInputs = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val()
    };

    $.post('order-melons.json', formInputs, replaceOrderText);
    console.log(evt);
}

$("#order-form").on('submit', orderMelons);


