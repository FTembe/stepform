let steps = document.querySelectorAll('.step'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        submit = document.querySelector('.submit'),
        currentStep = 0,
        totalSteps = steps.length - 1;
        steps[currentStep].classList.add('active')

//array parter de 0 entao esse array com tamanho tres tera ate 2 posicoes 0 1 2 

next.addEventListener('click', function () {
    if (totalSteps > currentStep) {
        steps[currentStep].classList.remove('active')
        currentStep++
        steps[currentStep].classList.add('active')
        prev.style.display = "block";
    }
    if (totalSteps == currentStep) {
        next.style.display = "none";
        submit.style.display = "block";
    }
});

prev.addEventListener('click', function () {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active')
        --currentStep
        steps[currentStep].classList.add('active')
        submit.style.display = "none";
        next.style.display = "block";
    } else {
        prev.style.display = "none";
    }
});

document.querySelector('#date').innerText='@'+new Date().getFullYear();