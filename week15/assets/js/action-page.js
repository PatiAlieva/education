let modal = document.getElementById('mod_form');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    email.onblur = function() {
        if (!email.value.includes('@')) {
            email.classList.add('invalid');
            error.innerHTML = 'Пожалуйста, введите правильный email!'
        }
    };
    email.onfocus = function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error.innerHTML = "";
        }
    };
    pswrd.onblur = function() {
        document.getElementById('pswrd_length').innerHTML="";

        if (pswrd.value.length <=6) {
            document.getElementById('pswrd_length').innerHTML = 'Ваш пароль слишком короткий!';
        }
    };
    function srav() {
        let pas1 = document.getElementById('pswrd')
        let pas2 = document.getElementById('pswrd-repeat')

        document.getElementById('pswrd_error').innerHTML="";

        if (pas1.value != pas2.value) {
            document.getElementById('pswrd_error').innerHTML='Ваши пароли не совпадают!';
        }
    };
    document.oninput = function () {
        let input = document.querySelector('.input-0');
        input.value = input.value.replace(/[^\+\d]/g,'');
    };
    

                // onlyNumbers(event) {
        //     let keyCode=event.keyCode ? event.keyCode : event.which;
        //     if (event.keyCode < 48 || event.keyCode > 57) {
        //         event.preventDefault();
        //     }
        // } код должен запретить ввод букв в инпут, но не работает (разобраться почему)
        // let input = document.getElementById('tel_number');
        // input.addEventListener('keydown', function(event)) {
        //     if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        //         event.preventDefault();
        //     }
        // } код должен запретить ввод букв в инпут, но не работает (разобраться почему)

        // tel_number.onblur = function() {
        //     document.getElementById('number').innerHTML="";

        //     if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        //         event.preventDefault();
        //     }
        //} аналогично предыдущим 