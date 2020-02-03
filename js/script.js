document.getElementById('srav').onclick = function() {
    var firstNum = document.getElementById('firstNum').value;
    var secondNum = document.getElementById('secondNum').value;
    
    if (firstNum == -0) {
        firstNum = 0;
    };

    if (secondNum == -0) {
        secondNum = 0;
    };

    if (firstNum > secondNum) {
        document.getElementById('out').innerHTML = '>';
    } else if (firstNum < secondNum) {
        document.getElementById('out').innerHTML = '<';
    } else {
        document.getElementById('out').innerHTML = '='; 
    };
};