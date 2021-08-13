"use strict";
const promoButtonYes = document.querySelector('#firstBtn'),
    promoButtonNo = document.querySelector('#secondBtn'),
    fearButtonYes = document.querySelectorAll('.goldButton_1')[1],
    fearButtonNo = document.querySelectorAll('.goldButton_2')[1],
    questionSection = document.querySelector('.question'),
    body = document.querySelector('body'),
    secret = document.querySelector('#secret'),
    elements = document.querySelectorAll('.element'),
    firstQuestionBtns = document.querySelectorAll('#firstQuestion a'),
    secondQuestion = document.querySelector('#secondQuestion'),
    thirdQuestion = document.querySelector('#thirdQuestion'),
    loading = document.querySelector('.loading'),
    questionInput = document.querySelectorAll('.question-item input'),
    questionBtn = document.querySelector('#questionBtn'),
    thirdQuestionBtns = document.querySelectorAll('#thirdQuestion a'),
    lastQuestion = document.querySelector('#lastQuestion'),
    lastQuestionBtns = document.querySelectorAll('#lastQuestion a'),
    dataAge = document.querySelectorAll('[data-age]'),
    voice = document.querySelector('.voice'),
    progressStatus = document.querySelector('.progressStatus'),
    theEnd = document.querySelector('.theEnd'),
    thanksModal = document.querySelector('#thanksModal'),
    endBtn = document.querySelector('.endBtn'),
    dataWrapper = document.querySelector('.dataWrapper'),
    firstQuestion = document.querySelector('#firstQuestion');
let counter = 0, choose;

firstQuestion.style.overflowY = "auto";
secondQuestion.style.overflowY = "auto";
thirdQuestion.style.overflowY = "auto";
lastQuestion.style.overflowY = "auto";
theEnd.style.overflowY = "auto";

promoButtonYes.addEventListener('click', (e) => {
    e.preventDefault();

    let i = window.pageYOffset;
    let int = setInterval(function () {
        window.scrollTo(0, i);
        i += 10;
        if (i >= 3700 - window.pageYOffset) {
            clearInterval(int);
        }
    }, 8);
});

promoButtonNo.addEventListener('click', (e) => {
    e.preventDefault();

    let i = window.pageYOffset;
    let int = setInterval(function () {
        window.scrollTo(0, i);
        i += 10;
        if (i >= 1400 - window.pageYOffset) {
            clearInterval(int);
        }
    }, 8);

});

fearButtonYes.addEventListener('click', fearBtnClicked);
fearButtonNo.addEventListener('click', fearBtnClicked);
function fearBtnClicked(e) {
    e.preventDefault();

    questionSection.style.display = "block";

    let i = 0;
    let int = setInterval(function () {
        questionSection.style.opacity = `${i}`;
        i += 0.1;
        if (i > 1) {
            clearInterval(int);
        }
    }, 8);
    document.body.style.overflow = 'hidden';
}

let count = 0;
elements.forEach((element, index) => {
    let bottom, top, left, right;
    if (count == 0) {

        bottom = 0;
        element.style.bottom = `${bottom}px`;
        left = 32.97;
        element.style.left = `${left}px`;
        count++;
    } else if (count == 1) {
        bottom = 4.47;
        element.style.bottom = `${bottom}px`;
        left = 16.51;
        element.style.left = `${left}px`;
        count++;
        element.style.transform = "rotate(30deg)";
    } else if (count == 2) {
        bottom = 16.48;
        element.style.bottom = `${bottom}px`;
        left = 4.38;
        element.style.left = `${left}px`;
        count++;
        element.style.transform = "rotate(60deg)";
    } else if (count == 3) {
        bottom = 29.97;
        element.style.bottom = `${bottom}px`;
        left = 0;
        element.style.left = `${left}px`;
        count++;
        element.style.transform = "rotate(90deg)";
    } else if (count == 4) {
        top = 16.51;
        element.style.top = `${top}px`;
        left = 4.5;
        element.style.left = `${left}px`;
        count++;
        element.style.transform = "rotate(120deg)";
    } else if (count == 5) {
        top = 4.5;
        element.style.top = `${top}px`;
        left = 16.51;
        element.style.left = `${left}px`;
        count++;
        element.style.transform = "rotate(150deg)";
    } else if (count == 6) {
        top = 0;
        element.style.top = `${top}px`;
        left = 32.97;
        element.style.left = `${left}px`;
        count++;
        element.style.transform = "rotate(180deg)";
    } else if (count == 7) {
        top = 4.5;
        element.style.top = `${top}px`;
        right = 16.51;
        element.style.right = `${right}px`;
        count++;
        element.style.transform = "rotate(210deg)";
    } else if (count == 8) {
        top = 16.51;
        element.style.top = `${top}px`;
        right = 4.5;
        element.style.right = `${right}px`;
        count++;
        element.style.transform = "rotate(240deg)";
    } else if (count == 9) {
        top = 29.97;
        element.style.top = `${top}px`;
        right = 0;
        element.style.right = `${right}px`;
        count++;
        element.style.transform = "rotate(270deg)";
    } else if (count == 10) {
        bottom = 16.48;
        element.style.bottom = `${bottom}px`;
        right = 4.5;
        element.style.right = `${right}px`;
        count++;
        element.style.transform = "rotate(300deg)";
    } else if (count == 11) {
        bottom = 4.47;
        element.style.bottom = `${bottom}px`;
        right = 16.51;
        element.style.right = `${right}px`;
        count++;
        element.style.transform = "rotate(330deg)";
    }



});


let int = setInterval(function () {
    let i = 0;

    elements.forEach((item, index) => {
        if (elements[index].classList.contains('notActive')) {
            elements[index].classList.remove('notActive');
            if (index != 0) {
                elements[index - 1].classList.add('notActive');
            }
            return;
        } else {
            elements[index].classList.add('notActive');
            return;
            // if (index != 0) {
            //     elements[index - 1].classList.add('notActive');
            // }
        }
    });
    if (i == 1) {
        clearInterval(int);
    }
}, 200);


firstQuestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        questionSection.style.display = 'none';
        showLoad(secondQuestion);
    });
});


questionBtn.addEventListener('click', (e) => {
    e.preventDefault();

    questionInput.forEach(input => {
        if (input.value == '') {
            input.style.border = '2px solid red';
        }

        questionInput.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value != '') {
                    input.style.border = '2px solid orange';
                } else {
                    input.style.border = '2px solid red';
                }
            });

        });

    });


    if (questionInput[0].value != '' &&
        questionInput[1].value != '' &&
        questionInput[2].value != '') {
        secondQuestion.style.display = 'none';
        showLoad(thirdQuestion);
    }
    const newUser = new User(
        questionInput[0].value,
        questionInput[1].value,
        questionInput[2].value
    );
    if (newUser.getAge() > 18 && newUser.getAge() <= 35) {
        dataAge[0].style.display = 'block';
        choose = 0;
    } else if (newUser.getAge() > 35 && newUser.getAge() <= 45) {
        dataAge[1].style.display = 'block';
        choose = 1;
    } else if (newUser.getAge() > 46 && newUser.getAge() != 2021) {
        dataAge[2].style.display = 'block';
        choose = 2;
    }

});

questionInput.forEach(input => {
    input.addEventListener('blur', () => {

        if (`${input.value}`.slice(0, 1) == '0') {
            const newValue = `${input.value}`.slice(`${input.value}`.length - 1, `${input.value}`.length);
            input.value = newValue;
        }

        if (input.value > 0 && input.value < 10) {
            input.value = `0${input.value}`;
        }

        if (questionInput[0].value > 31) {
            questionInput[0].value = 31;
        }
        if (questionInput[1].value > 12) {
            questionInput[1].value = 12;
        }
        if (questionInput[2].value > 2019) {
            questionInput[2].value = '';
            questionInput[2].style.border = "2px solid red";
        }
        if (questionInput[2].value > 0 && questionInput[2].value < 1900 || questionInput[2].value < 0) {
            questionInput[2].style.border = "2px solid red";
            questionInput[2].value = '';
        } else {
            questionInput[2].style.border = "2px solid orange";
        }

    });

});

thirdQuestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        thirdQuestion.style.display = 'none';
        showLoad(lastQuestion);
        setTimeout(() => {
            let i = 0;
            let int = setInterval(function () {
                dataAge[choose].style.opacity = `${i}`;
                i += 0.1;
                if (i > 1) {
                    clearInterval(int);
                }
            }, 20);
        }, 2500);
    });
});

let progressCounter = 0, end = 0;


lastQuestionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        lastQuestion.style.display = 'none';
        showLoad(voice);
        const progressbar = document.querySelector(".progress");
        const changeProgress = (progress) => {

            progressbar.style.width = `${progress}%`;
        };

        setTimeout(() => {
            progressCounter += 20;
            changeProgress(progressCounter);
            progressStatus.textContent = `${progressCounter}%`;
        }, 3000);
        setTimeout(() => {
            progressCounter += 20;
            changeProgress(progressCounter);
            progressStatus.textContent = `${progressCounter}%`;
        }, 4000);
        setTimeout(() => {
            progressCounter += 20;
            changeProgress(progressCounter);
            progressStatus.textContent = `${progressCounter}%`;
        }, 5600);
        setTimeout(() => {
            progressCounter += 20;
            changeProgress(progressCounter);
            progressStatus.textContent = `${progressCounter}%`;
        }, 7266);
        setTimeout(() => {
            progressCounter += 20;
            changeProgress(progressCounter);
            progressStatus.textContent = `${progressCounter}%`;
            lastQuestion.style.display = 'none';
            showLoad(theEnd);
            setTimeout(() => {
                let i = 0;
                let int = setInterval(function () {
                    thanksModal.style.opacity = `${i}`;
                    i += 0.1;
                    if (i > 1) {
                        clearInterval(int);
                    }
                }, 20);
            }, 4000);
        }, 9000);
    });
});

endBtn.addEventListener('click', async function(event) {
    event.preventDefault();

    await fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json())
    .then(json => {
        for (let key in json){
            const data = document.createElement('div');
            data.classList.add('data');
            data.style =`
            color: #fff;
            `;
            data.innerHTML = `
            <div style="flex: 0 1 50%; padding: 0 5px"><span class="dataOrange">${key}</span>: ${json[key]}</div>
            `;
            dataWrapper.append(data);
        }
    });
});




class User {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getAge() {
        if (`${this.day}`.slice(0, 1) == '0') {
            const newValue = `${this.day}`.slice(1, `${this.day}`.length);
            this.day = newValue;
        }
        if (`${this.month}`.slice(0, 1) == '0') {
            const newValue = `${this.month}`.slice(1, `${this.month}`.length);
            this.month = newValue;
        }
        const currentDate = new Date();
        const age = ((currentDate.getFullYear() * 365) -
            (+this.day + 30 + (+this.year * 365))) / 365;
        return Math.round(age);
    }
}

function showLoad(classSelector) {
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        classSelector.style.display = "block";
        classSelector.style.opacity = 1;
    }, 2000);
}


