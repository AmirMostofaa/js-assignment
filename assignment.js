


// Kilometer to Meter
function kilometerToMeter(km){
    var meter = 0;
    if(km > 0 ){
       // 1 kilometer = 1000 meter
        meter = km * 1000;
    }
    return meter;
}
kilometerToMeter(10); // Output will be 10000



// Budget Calculator
function budgetCalculator(watch, phone, laptop){
    // a watch price is 50
    var watchPrice = watch * 50;
    // a phone price is 100
    var phonePrice = phone * 100;
    // a laptop price is 500
    var laptopPrice = laptop * 500;

    var totalPrice = watchPrice + phonePrice + laptopPrice;

    return totalPrice;
}
budgetCalculator(5, 1, 2);  // Output will be 1350


// Hotel Cost
function hotelCost(days) {
    var cost = 0;
    if(days <= 10){
        // First 10 days will Cost 100 for each day.
        cost = days * 100;
    }else if(days <= 20){
        var first10Days = 10 * 100;
        var remaining = days - 10;
        // Second 10 will Cost 80 for eac day.
        var second10Days = remaining * 80;
        cost = first10Days + second10Days;
    }else{
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = days - 20;
        // 50 for each day after 20 days to infinite
        var thirdInfiniteDays = remaining * 50;
        cost = first10Days + second10Days + thirdInfiniteDays;
    }
    return cost
}
hotelCost(22) // Output will be 1900


// Mega Friend
function megaFriend(array){
    var megaFriend = "";
    array.forEach(function (friend) {
        if(friend.length > megaFriend.length){
            megaFriend = friend;
        }
    });
    return megaFriend;
}
megaFriend(['Mostafa', 'amir', 'AmirMostofaa']); // Output will be AmirMostofaa
