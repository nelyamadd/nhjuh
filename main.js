let previousStep = "step1", htmlString;

function changeStep(step) {
    document.getElementById(previousStep).style.backgroundColor = "#636363"; 
    document.getElementById(step).style.backgroundColor = "#C0DD1A";

    if(step === "step1") {
        document.getElementById("titleContainer").innerHTML = `<p class="instructionTitle">Наші тренери</p>`;
        htmlString = `
                        <p>Цей крок необовʼязковий, і ви можете приєднатися до нашого клубу і без тренера, але якщо ви новачок і ви потребуєтесь в навчанні правильної техніки у виконанні тренажерних вправ, або ви хочете займатись боксингом, карате, або іншим видом спорту - то обирайте наших висококваліфікованих тренерів</p>
                        <button class="descriptionButton"><a href="coaches/index.html#header" target="_blank"><span class="descriptionButtonText">Тренери</span></a></button>`;
    }
    else if(step === "step2") {
        document.getElementById("titleContainer").innerHTML = `<p class="instructionTitle">Наші абонементи</p>`;
        htmlString = `
                        <p>Наші абонементи не тільки продаються по вигідним цінам, а ще абонементи тривалістю пів року вигідніше щомісячних на 10%. Обирайте ідеальний абонемент для вас, під ваш бюджет та під ваші потреби, прямо зараз</p>
                        <button class="descriptionButton" id="buttonStep2"><a href="services/index.html#header" target="_blank"><span class="descriptionButtonText">Абонементи</span></a></button>`;
    }
    else if(step === "step3") {
        document.getElementById("titleContainer").innerHTML = `<p class="instructionTitle">Оформлення</p>`;
        htmlString = `
                        <p>Як обрали свій ідеальний абонемент, то для оформлення ви можете звʼязатися з нами в наших соціальних мережах, по телефону, через email, або на місті</p>
                        <button class="descriptionButton" id="buttonStep3"><a href="services/index.html#copyright" target="_blank"><span class="descriptionButtonText">Придбати</span></a></button>`;
    }
    else if(step === "step4") {
        document.getElementById("titleContainer").innerHTML = `<p class="instructionTitle">Вітаю!</p>`;
        htmlString = `
                        <p>Починайте тренування прямо зараз. Ми будемо раді побачити вас вже сьогодні :)</p>
                        <button class="descriptionButton" id="buttonStep4"><a href="https://www.google.com/maps" target="_blank"><span class="descriptionButtonText">Як дібратися?</span></a></button>`;
    }

    document.getElementById("descriptionText").innerHTML = htmlString;
    previousStep = step;
}
