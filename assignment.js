// 1-- Kilometer to Meter :

function kilometerToMeter(kilometer) {

    var meter = kilometer * 1000;
    return meter;

}
var calculatedMeter = kilometerToMeter(375);
console.log(calculatedMeter);



// 2-- Budget Calculator :


function budgetCalculator(numOfWatches, numOfMobiles, numOfLaptops) {

    mobilePrice = 100;
    watchPrice = 50;
    laptopPrice = 500;
    mobileCost = numOfMobiles * 100;
    watchCost = numOfWatches * 50;
    laptopCost = numOfLaptops * 500;
    TotalCost = mobileCost + watchCost + laptopCost;
    return TotalCost;

}

var allExpenses = budgetCalculator(7, 5, 2);
console.log(allExpenses);



// 3 -- Hotel Cost :

function hotelCost(accomodation) {

    var cost = 0;


    if (accomodation <= 10) {

        firstTenDays = 100 * 10;

    } else if (accomodation <= 20) {

        var firstTenDays = 100 * 10;
        remaining = accomodation - 10;
        secondTenDays = remaining * 80;
        totalCost = firstTenDays + secondTenDays;

    } else {
        var firstTenDays = 100 * 10;
        var secondTenDays = 80 * 10;
        remaining = accomodation - 20;
        lastDays = remaining * 50;
        var totalCost = firstTenDays + secondTenDays + lastDays;

    }

    return totalCost;

}
var cost = hotelCost(31);
console.log(cost);



// 4 -- Mega Friend :
var friendList = ["Titu", "Mithu", "Mahbub", "Solayman", "Khadijatul", "Muhammad"];

function megaFriend(friendList) {
    var largestElement = "";

    if (friendList.length < 1) {
        return "Error : Please provide a valid friend list.";
    } else {

        for (i = 0; i < friendList.length; i++) {

            if (friendList[i].length > largestElement.length) {

                largestElement = friendList[i];
            }

        }
        return largestElement;

    }

}
var maxLength = megaFriend(friendList);
console.log(maxLength);