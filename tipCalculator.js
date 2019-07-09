window.addEventListener('load', function() {

    //this is to manipulate de Dom
    function calculate() {
        let totalBill = document.getElementById("total-bill").value;
        if (isNaN(totalBill) || (totalBill <= 0)) {
            alert(`Plase enter a valid amount!`);
            return;
        }
        let tipPercentage = 0;
        let tipSelection = document.getElementsByClassName('service')[0].value;
        if (tipSelection === 'excellent') {
            tipPercentage = 20;
        } else if (tipSelection === 'good') {
            tipPercentage = 15;
        } else if (tipSelection === 'poor') {
            tipPercentage = 10;
        } else {
            alert(`Please select an option!`);
        }

        let totalTip = totalBill * tipPercentage / 100;

        let totalPersons = Number(document.getElementById('people-form').value);
        if (isNaN(totalPersons) || (totalPersons <= 0)) {
            alert(`Plase enter a valid number of persons!`);
            return;
        }

        if (Number.isInteger(totalPersons)) {
            let tipPerPerson = totalTip / totalPersons;
            let tipPerPersoninDollar = tipPerPerson.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            document.getElementById('tips').innerHTML = tipPerPersoninDollar;
            document.getElementById('total').style = 'display: inline';
        } else { alert('Plase enter an interger number') }
    }

    let submitButton = document.querySelector('#calculate-button');

    submitButton.onclick = function() {
        calculate();
        event.preventDefault();
    };

});