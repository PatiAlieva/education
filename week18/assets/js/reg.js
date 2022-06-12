function formValidation1() {
    const passid = document.querySelector('#passid');
    const uname = document.querySelector('#username');
    const ucountry = document.querySelector('#country');
    const uemail = document.querySelector('#email');
    const umsex = document.querySelector('#msex');
    const ufsex = document.querySelector('#fsex');

    if(allLetter(uname)) {
        if(ValidateEmail(uemail)) {
            if(passid_validation(passid,7,12)) {
                if(countryselect(ucountry)) {
                    if(validsex(umsex,ufsex)) {

                    }
                }
            }
        }
    }
    return false;
} 
function passid_validation(passid,mx,my)
{
    document.querySelector('#errorPassword').innerHTML="";
    const passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len>= my || passid_len<mx)
    {
        document.querySelector('#errorPassword').innerHTML = 'Пароль не должен быть пустым / длина должна быть между 7 и 12!';
        passid.focus();
        return false;
    }
    return true;
}
function allLetter(uname)
{ 
    document.querySelector('#errorName').innerHTML="";
    const letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        document.querySelector('#errorName').innerHTML = 'Имя пользователя должно содержать латинские буквы алфавита!';
        uname.focus();
        return false;
    }
}
function countryselect(ucountry)
{
    document.querySelector('#errorCountry').innerHTML="";
    if(ucountry.value == "Default")
    {
        document.querySelector('#errorCountry').innerHTML = 'Выберите свою страну из списка!';
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function ValidateEmail(uemail)
{
    document.querySelector('#errorEmail').innerHTML="";
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        document.querySelector('#errorEmail').innerHTML = 'Пожалуйста, введите правильный email!';
        uemail.focus();
        return false;
    }
}
function validsex(umsex,ufsex)
{
    document.querySelector('#errorSex').innerHTML="";
    x=0;
    if(umsex.checked) 
    {
        x++;
    }
    if(ufsex.checked)
    {
        x++; 
    }
    if(x==0)
    {
        document.querySelector('#errorSex').innerHTML = 'Выберите пол Мужской/Женский!';
        umsex.focus();
        return false;
    }
    else
    {
        alert('Форма успешно отправлена');
        window.location.reload()
        return true;
    }
}