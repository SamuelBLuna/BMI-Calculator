
export const inputWeight = document.querySelector('#weight')
export const inputHeight = document.querySelector('#height')

export const Modal = {
    wrapper:  document.querySelector('.modal-wrapper'),
    messege: document.querySelector('h2 span'),
    buttonClose: document.querySelector('.modal .close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
        inputWeight.value = ''
        inputHeight.value = ''
    }
}

Modal.wrapper.addEventListener('click', function closeModal() {
    Modal.close()
});

window.addEventListener('keydown', (event) => {
    if(event.key == 'Escape') {
        Modal.close()
    }
})