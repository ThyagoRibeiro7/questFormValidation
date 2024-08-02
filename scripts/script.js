const inputs = document.querySelectorAll('.input');
const submitBtn = document.querySelector('.submitBtn');

// console.log(submitBtn);

function checkInput() {
    submitBtn.addEventListener('click', btn => {

        btn.preventDefault();
        
        inputIsFalse();
            
    });
};

checkInput();

function inputIsFalse() {
    
    inputs.forEach(input => {
            const inputV = input.value.trim();

            if (inputV === '') {
                input.classList.remove('greenBdr');
                input.classList.add('redBdr');
                input.nextElementSibling.classList.add('showError');
            } else {
                input.classList.remove('redBdr');
                input.classList.add('greenBdr');
                input.nextElementSibling.classList.remove('showError');
            };
            
        });
};