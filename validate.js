function onLoad() {
	document.getElementById('submit').disabled = true;
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, error) {
        document.getElementById('error').innerText = error;
}

function showSuccess(input, success) {
        document.getElementById('error').innerText = success;
}

function checkEmail() {
    input = document.getElementById('email');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]\)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
    if (re.test(input.value.trim())) {
	document.getElementById('submit').disabled = true;
	showSuccess(input, '');
    } else {
	document.getElementById('submit').disabled = false;
	showError(input, 'Email is not valid');
    }
}

function checkFirstName() {
  let x = document.getElementById("firstName").value;
  if (x == "") {
      document.getElementById('submit').disabled = true;
      showError(input, 'First name must be filled out');
  } else {
      document.getElementById('submit').disabled = false;
      showSuccess(input, '');
  }
}

function checkLastName() {
  let x = document.getElementById("lastName").value;
  if (x == "") {
      document.getElementById('submit').disabled = true;
      showError(input, 'Last name must be filled out');
  } else {
      document.getElementById('submit').disabled = false;
      showSuccess(input, '');
  }
}

function checkAgb() {
    if (document.getElementById('c1').checked == true) {
	document.getElementById('submit').disabled = false;
        showSuccess(input, '');
    } else {
	document.getElementById('submit').disabled = true;
        showError(input, 'Accept AGB');
    }
}

function checkPassword() {
	let x = document.getElementById("password").value;

	//check empty password field
	if (x == "") {
		document.getElementById('submit').disabled = true;
                showError(input, 'Das Passwort muss ausgefüllt werden');
  	} else {
      		document.getElementById('submit').disabled = false;
      		showSuccess(input, '');
  	}

 	//minimum password length validation
 	if(pw.length < 8) {
 		document.getElementById('submit').disabled = true;
      		showError(input, 'Das Passwort ist zu kurz');
  	} else {
      		document.getElementById('submit').disabled = false;
      		showSuccess(input, '');
  	}

	//maximum length of password validation
  	if(pw.length > 15) {
 		document.getElementById('submit').disabled = true;
      		showError(input, 'Das Passwort ist zu lang');
  	} else {
      		document.getElementById('submit').disabled = false;
      		showSuccess(input, '');
  	}
}
