// js폴더 만들어서 joinform.js 파일 만들기
// 순수하게 js code만 가져오기(script태그 ㄴㄴ)
function idCheck() {
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var idResult = document.getElementById('idCheck');
    if(id.length == 0) {
        idResult.style.color = 'red';
        idResult.innerHTML = '필수 입력 정보입니다.';
    } else if(id.match(exp)) {
        idResult.style.color = 'green';
        idResult.innerHTML = '유효한 id 형식입니다.';
    } else {
        idResult.style.color = 'red';
        idResult.innerHTML = '영소문자, 숫자 포함 6~10자리를 사용.';
    }
}

function pwCheck() {
    // 8~16자리, 대/소문자,특수문자,숫자포함
    var exp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$-])[a-zA-Z\d!#$-]{8,16}$/;
    var pw = document.getElementById('pw').value;
    var pwResult = document.getElementById('pwCheck');
    if(pw.length == 0) {
        pwResult.style.color = 'red';
        pwResult.innerHTML = '필수 입력 정보입니다.';
    } else if(!pw.match(exp1)) {
        pwResult.style.color = 'red';
        pwResult.innerHTML = '영 대/소문자, 특수문자, 숫자 포함 8~16자리를 사용.';
    } else {
        pwResult.style.color = 'green';
        pwResult.innerHTML = '유효한 형식입니다.';
    }
}
function pwConfirm() {
    var pw = document.getElementById('pw').value;
    var pwConfirm = document.getElementById('pw-confirm').value;
    var pwConfirmResult = document.getElementById('pw-confirmResult');
    if(pw == pwConfirm){
        pwConfirmResult.style.color = 'green';
        pwConfirmResult.innerHTML = '비밀번호 일치';
    } else {
        pwConfirmResult.style.color = 'red';
        pwConfirmResult.innerHTML = '비밀번호 불일치';
    }
}

function nameCheck() {
    var name = document.getElementById('name').value;
    var nameResult = document.getElementById('nameCheck');
    if(name.length == 0) {
        nameResult.style.color = 'red';
        nameResult.innerHTML = '필수 입력 정보입니다.';
    } else {
        nameResult.style.color = 'white';
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
        pResult.innerHTML = '필수 입력 정보입니다.';
    } else if(phone.match(exp2)) {
        pResult.style.color = 'green';
        pResult.innerHTML = '유효한 형식';
    } else {
        pResult.style.color = 'red';
        pResult.innerHTML = '유효하지 않은 형식';
    }
}

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}