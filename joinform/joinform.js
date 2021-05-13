function idCheck() {
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var idResult = document.getElementById('idCheck');
    if(id.length == 0) {
        idResult.style.color = 'red';
        idResult.innerHTML = '필수 입력입니다.';
    } else if(id.match(exp)) {
        idResult.style.color = 'green';
        idResult.innerHTML = '유효한 id 형식입니다.';
    } else {
        idResult.style.color = 'red';
        idResult.innerHTML = '형식에 맞지 않습니다.';
    }
}

function pwCheck() {
    var exp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$*])[a-zA-Z\d!#$*]{8,16}$/;
    var pw = document.getElementById('pw').value;
    var pwResult = document.getElementById('pwCheck');
    if(pw.length == 0) {
        pwResult.style.color = 'red';
        pwResult.innerHTML = '필수 입력입니다.';
    } else if(!pw.match(exp1)) {
        pwResult.style.color = 'red';
        pwResult.innerHTML = '형식에 맞지 않습니다.';
    } else {
        pwResult.style.color = 'green';
        pwResult.innerHTML = '유효한 pw 형식입니다.';
    }
}

function pwConfirm() {
    var pw = document.getElementById('pw').value;
    var pwConfirm = document.getElementById('pw-confirm').value;
    var pwConfirmResult = document.getElementById('pw-confirmResult');
    if(pw == pwConfirm){
        pwConfirmResult.style.color = 'green';
        pwConfirmResult.innerHTML = '일치합니다.';
    } else {
        pwConfirmResult.style.color = 'red';
        pwConfirmResult.innerHTML = '일치하지 않습니다.';
    }
}

function nameCheck() {
    var name = document.getElementById('name').value;
    var nameResult = document.getElementById('nameCheck');
    if(name.length == 0) {
        nameResult.style.color = 'red';
        nameResult.innerHTML = '필수 입력입니다.';
    } else {
        nameResult.style.color = 'gray';
        nameResult.innerHTML = '';
    }
}

function emailSelect() {
    var email = document.getElementById('emailCheck').value;
    var domainValue = document.getElementById('domain');
    domainValue.value = email;
}

function phoneCheck() {
    var exp2 = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone').value;
    var pResult = document.getElementById('pCheck');
    if(phone.length == 0) {
        pResult.style.color = 'red';
        pResult.innerHTML = '필수 입력입니다.';
    } else if(phone.match(exp2)) {
        pResult.style.color = 'green';
        pResult.innerHTML = '유효한 phone 형식입니다.';
    } else {
        pResult.style.color = 'red';
        pResult.innerHTML = '형식에 맞지 않습니다.';
    }
}