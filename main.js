// Write your JavaScript here
var sale = "";
var payment = "";
var change = "";
var money = [
    ['dollar', 100, 0],
    ['quarter', 25, 0],
    ['dime', 10, 0],
    ['nickel', 5, 0],
    ['pennies', 1,0]
];

$('#calculate-change').click(function () {
    for(var i =0; i<money.length; i++){
        money[i][2] = 0;
    }

    sale = $('#amount-due').val();
    sale = parseFloat(sale);
    // console.log(sale);

    payment = $('#amount-received').val();
    payment = parseFloat(payment);
    // console.log(payment);

    if (sale > payment) {
        sale = sale - payment;
        alert('You still owe ' + sale);
        $('#amount-due').val(sale);
        $('#amount-received').val('');
        return sale;
    } else {
        change = payment - sale;
        change = change.toFixed(2);
        console.log(change);
        $('#total').text('$'+ change);
        console.log(change);
        change = change * 100;
        for (var i = 0; i < money.length; i++) {
            while (change >= money[i][1]) {
                change = change - money[i][1];
                money[i][2]++;
                change = Math.ceil(change);
                console.log(change);
            }
        }
        $('#dollars-output').text(money[0][2]);
        $('#quarters-output').text(money[1][2]);
        $('#dimes-output').text(money[2][2]);
        $('#nickels-output').text(money[3][2]);
        $('#pennies-output').text(money[4][2]);
        $('#amount-received').val('');
        $('#amount-due').val('');
        $('#total').val('');
    }

}) 






// use parseFloat
// if payment is more subtract payment from sale
// break down difference into change
// if payment is less alert that difference is needed














