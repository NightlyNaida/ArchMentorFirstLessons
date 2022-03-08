import Input from './components/input/Input';
import Button from './components/button/Button';

let email = ' ';
let password = ' ';

function detectInputTypeAndUpdateValue(e){
    switch(e.target.type){
        case 'email': {
            email = e.target.value;
        } break;

        case 'password': {
            password = e.target.value;
        } break;
    }
}


    function handleSubmit(e) {
        e.preventDefault();
        if (checkInputs()){
            console.log(`Электропочта: ${email}`, `Пароль: ${password}`);
            clearInputs(e.target);
        }
        else{
            alert('Одно из полей не заполнено!');
        }

        function clearInputs(form){
            email = ' ';
            form[0].value = '';

            password = '';
            form[1].value = '';
        }
    }

function checkInputs() {
    if (email.trim().length > 0 && password.trim().length > 0){
        return true;
    }
    else {
        return false;
    } 
}

function Form(){
    return (
        <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Электропочта" onChange={(detectInputTypeAndUpdateValue)}></Input>
            <Input type="password" placeholder="Пароль" onChange={detectInputTypeAndUpdateValue}></Input>
            <Button>Отправить</Button>
        </form>
    )
}

export default Form;