import { Modal } from './modal.js';
import { AletError } from './alert-error.js'
import { notNumber, imc } from './utils.js'

// VARIAVEIS
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


inputWeight.oninput = () => AletError.close()
inputHeight.oninput = () => AletError.close()
form.addEventListener('submit', function openModal(event) {
    event.preventDefault();

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height);

    if(showAlertError) {
        AletError.open()
        return;
    }
    AletError.close()

    const result = imc(weight, height)
    displayResultMesseger(result)
});

function displayResultMesseger(result) {
    Modal.messege.innerText = result
    Modal.open()
}
