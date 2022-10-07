const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const submitButton = document.getElementById('submitEmail')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })    
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })    
})

function openModal(modal) {
    if (modal == null) {
        return;
    }

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

submitButton.addEventListener('click', () => {
    const subscribeModal = document.getElementById('modal');
    const emailInput = document.getElementById('emailInput')
    
    if (emailInput.value === ''){
        alert("Please enter a valid email address!")
    }
    else {
        closeModal(subscribeModal);
        alert("Thank you for subscribing!")
    }
});