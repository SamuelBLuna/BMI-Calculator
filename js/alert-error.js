export const AletError = {
    elemet: document.querySelector('.alert-error'),
    open() {
        AletError.elemet.classList.add('open')        
    },
    close() {        
        AletError.elemet.classList.remove('open')        
    }
}
