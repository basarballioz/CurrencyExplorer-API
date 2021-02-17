//GET SELECTED CURRENCY
// $().ready(function(){
//     $('a').click(function(){
//         var selectedMoney = $(this).text();
//         document.getElementById('selectedCurrency').innerHTML = selectedMoney;
//     });
// });

//CLICK TO COPY
document.getElementById("convertedResult").addEventListener("click", clickToCopy);
function clickToCopy() {
    var copyText = document.getElementById("convertedResult");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent.replace(' TRY', '');
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

//TOOLTIP FUNCTION
$(function () {
    $('#convertedResult').tooltip()
})

let siteUrl = 'https://api.exchangeratesapi.io/latest?base=USD';
//const properties = Object.getOwnPropertyNames(currency);

//AJAX
document.getElementById('convertedResult').innerText = '0.00 TRY';
document.querySelector('#currencyName').addEventListener('keyup', fethCurrency);
document.querySelector('#cur1').addEventListener('change', fethCurrency);
document.querySelector('#cur2').addEventListener('change', fethCurrency);

//Load Currencies
function fethCurrency(event) {
    let cur1 = document.getElementById('cur1').value;
    let siteUrl = 'https://api.exchangeratesapi.io/latest?base=';
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', siteUrl + cur1);

    xhr.onload = function () {
        if (xhr.status == 200) {

            let currency = JSON.parse(xhr.responseText);
            let inputValue = document.getElementById("currencyName").value;
            let cur2 = document.getElementById('cur2').value;
            document.getElementById('convertedResult').innerHTML = `${inputValue * currency.rates[cur2].toFixed(3) + ' '}` + cur2;
            document.getElementById('status').innerHTML = `<h6><span class="badge badge-primary">Lastly Updated: ${currency.date}</span></h6>`;

            console.log(currency);
        }
    }
    xhr.send();
}