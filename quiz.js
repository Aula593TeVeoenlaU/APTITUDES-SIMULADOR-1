// ==========================
// SIMULADOR DE INGRESO
// ==========================

// Preguntas (ACTUALIZADAS A 20 PREGUNTAS SEGÚN EL WORD)
const questions = [
    { id: 1, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Considere la siguiente secuencia: -1, 1, 0, 1, 1, 2, __, 5, __ ¿Qué valores deben ir en los espacios vacíos?', options: ['a) 3 y 6', 'b) 4 y 6', 'c) 3 y 8', 'd) 4 y 7'], answer: 'c' }, //
    { id: 2, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Si K es un número natural, ¿cuáles expresiones representan dos números naturales impares consecutivos?', options: ['a) 2K-1 y 2K', 'b) 2K-1 y 2K+3', 'c) 2K+1 y 2K+2', 'd) 2K+1 y 2K+3'], answer: 'd' }, //
    { id: 3, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Dispongo de $80 y gasto 3/5 de lo que no gasto. ¿Cuánto gasto?', options: ['a) 42', 'b) 30', 'c) 48', 'd) 32'], answer: 'b' }, //
    { id: 4, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En el rectángulo ABCD, el punto E es el punto medio de BC. Si el área del cuadrilátero ABED es 2/3; ¿cuál es el área del rectángulo ABCD?', image: 'imagenes/ejercicio4.jpg', imageStyle: 'max-width: 250px;', options: ['a) 8/9', 'b) 1/2', 'c) 3/4', 'd) 1'], answer: 'a' }, //
    { id: 5, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Sea la función f definida por \\(f(x) = 2x - 1\\). Si \\(\\frac{1}{2}f(\\sqrt{t}) = 4\\); ¿cuál es el valor de t?', options: [ 'a) \\(\\frac{3}{\\sqrt{2}}\\)', 'b) \\(\\frac{7}{2}\\)', 'c) \\(\\frac{49}{4}\\)', 'd) \\(\\frac{81}{4}\\)' ], answer: 'd' }, //
    { id: 6, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Victoria está empacando para un viaje: de las toallas que tiene en el closet, 6 son de color café. Ella aleatoriamente coge una para empacar, si la probabilidad que ella coja la toalla café es de 2/5. ¿Cuántas toallas hay en el closet?', options: ['a) 9', 'b) 15', 'c) 12', 'd) 18'], answer: 'b' }, //
    { id: 7, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Dado el conjunto A={1;2;3;6;8;12}. ¿Cuál de los siguientes números, cuando añadido al conjunto dado, haría que el promedio del nuevo conjunto sea igual a la mediana del nuevo conjunto?', options: ['a) 6', 'b) 8', 'c) 10', 'd) 12'], answer: 'c' }, //
    { id: 8, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Alberto puede hacer un trabajo en 12 días. Luis es 50% más eficiente que Alberto. ¿Cuántos días empleará Luis en hacer dicho trabajo?', options: ['a) 6', 'b) 7', 'c) 8', 'd) 9'], answer: 'c' }, //
    
    // ===== PREGUNTA 9 MODIFICADA =====
    { 
      id: 9, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Considere las siguientes figuras:', // <-- Texto ANTES
      image: 'imagenes/ejercicio6.jpg', imageStyle: 'max-width: 400px;', 
      textAfterImage: '¿Cuál figura tiene un patrón diferente de las otras?', // <-- Texto DESPUÉS
      options: ['a) Figura 2', 'b) Figura 1', 'c) Figura 4', 'd) Figura 3'], 
      answer: 'd' 
    }, //
    
    { id: 10, block: 'RAZONAMIENTO ESPACIAL', text: 'Seleccione la mejor alternativa que establezca la secuencia', image: 'imagenes/ejercicio8_nuevo.jpg', imageStyle: 'max-width: 275px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'c' }, //
    { id: 11, block: 'RAZONAMIENTO ESPACIAL', text: '¿Qué opción va en el lugar del signo de interrogación?', image: 'imagenes/ejercicio7.jpg', imageStyle: 'max-width: 250px;', options: ['a) Opción 1', 'b) Opción 3', 'c) Opción 2', 'd) Opción 4'], answer: 'b' }, //

    // ===== PREGUNTA 12 MODIFICADA =====
    { 
      id: 12, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Considere la siguiente figura:', // <-- Texto ANTES
      image: 'imagenes/ejercicio8.jpg', 
      imageStyle: 'max-width: 250px;', 
      textAfterImage: '¿Cuál opción corresponde a la cuarta fila?', // <-- Texto DESPUÉS
      options: ['a)', 'b)', 'c)', 'd)'], 
      optionImages: ['imagenes/ejercicio8a.jpg', 'imagenes/ejercicio8b.jpg', 'imagenes/ejercicio8c.jpg', 'imagenes/ejercicio8d.jpg'], 
      answer: 'a' 
    }, //

    { id: 13, block: 'RAZONAMIENTO ESPACIAL', text: 'Que figura de las cuatro opciones dadas representa una vista desde arriba de la forma dada?', image: 'imagenes/ejercicio13.jpg', imageStyle: 'max-width: 400px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'b' }, //
    { id: 14, block: 'RAZONAMIENTO VERBAL', text: 'En el siguiente ítem escoja la opción cuyo significado sea ajeno (diferente) al campo de significación común a las demás palabras y a la escrita en letras mayúsculas (que no comparta relación semántica). <p>ALZAR', options: ['a) Levantar', 'b) Crecer', 'c) Elevar', 'd) Ascender'], answer: 'b' }, //
    { id: 15, block: 'RAZONAMIENTO VERBAL', text: 'Seleccione la opción que contenga el par de palabras que den sentido a la oración. <p>_________ la tormenta, no podíamos salir de nuestras casas hasta que ________.', options: ['a) Inundaba – acabara', 'b) Destruía – mitigara', 'c) Arreciaba – amainara', 'd) Apercibía – finalizara'], answer: 'c' }, //
    { id: 16, block: 'RAZONAMIENTO VERBAL', text: 'En el siguiente ítem, usted deberá elegir la palabra de significado más opuesto a la escrita con letras mayúsculas. <p>REMEMBRANZA', options: ['a) Recuerdo', 'b) Olvido', 'c) Añoranza', 'd) Evocación'], answer: 'b' }, //
    { id: 17, block: 'RAZONAMIENTO VERBAL', text: 'Considere el siguiente texto: <p><mark>Disculpen esta impericia, esta torpeza al escribir. Me atropello, nada va en orden. No soy escritor...<mark> <p>Según el texto, ¿cuál palabra es equivalente a “impericia”?', options: ['a) Desorden', 'b) Accidente', 'c) Negligencia', 'd) Incompetencia'], answer: 'd' }, //
    { id: 18, block: 'RAZONAMIENTO VERBAL', text: 'En el siguiente ejercicio, seleccione la alternativa que establezca la misma relación que hay entre las dos primeras palabras escritas con mayúsculas. <p>ABUCHEO es a MURMURACIÒN como:', options: ['a) Aclamación es a aplauso', 'b) Silbatina es a odio', 'c) Vocerío es a griterío', 'd) Ensalzamiento es a alabanza'], answer: 'a' }, //
    { id: 19, block: 'RAZONAMIENTO VERBAL', text: 'A continuación, usted encontrará un fragmento de lectura, lea el texto y responda a la pregunta planteada, de acuerdo con lo expresado en dicho texto. <p><mark>“Julio Cortázar se jactaba en sus últimos años de escribir “cada vez más mal”. Quería decir que, para expresar lo que anhelaba en sus cuentos y novelas, se sentía obligado a buscar formas de expresión cada vez menos sometidas a la forma canónica, a desafiar el genio de la lengua y tratar de imponerle ritmos, pautas, vocabularios, de modo que su prosa pudiera representar con más verosimilitud aquellos personajes y sucesos de su invención”.<mark> <p>En el texto, no someterse a las formas canónicas quiere decir:', options: ['a) Entender erróneamente la importancia de la inspiración.', 'b) Sacrificar la verosimilitud por la rebeldía del escritor.', 'c) Transgredir las formas tradicionales de la prosa literaria.', 'd) Desafiar decididamente la sutileza y la pomposidad clásicas.'], answer: 'c' }, //
    { id: 20, block: 'RAZONAMIENTO VERBAL', text: 'El siguiente enunciado tiene dos espacios en blanco. Cada espacio indica que se ha omitido un conector lógico. Debajo del enunciado hay cuatro opciones. Seleccione la opción que, al insertarse en el enunciado, complete mejor su significado. <p>La computadora no reemplaza al ser humano __________ aquella no es capaz de jerarquizar rigurosamente la información; __________ el cerebro humano sí analiza y sistematiza el conocimiento que recibe y asimila.', options: ['a) debido a – que luego', 'b) porque – mientras que', 'c) pues – en consecuencia', 'd) en vista de que – a pesar de que'], answer: 'b' } //
];


// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 24 minutos (ACTUALIZADO)
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// **FUNCIÓN MODIFICADA**
function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    // Verificar intentos antes de empezar
    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    // **CAMBIO AQUÍ: Si los intentos se acabaron, se muestra el mensaje y se cierra la sesión.**
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload(); // Llama a la función para cerrar sesión y recargar
      return;
    }
    // **FIN DEL CAMBIO**

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    document.getElementById('math-nav-buttons').innerHTML = '';
    document.getElementById('spatial-nav-buttons').innerHTML = '';
    document.getElementById('verbal-nav-buttons').innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        const blockContainerId = 
            q.block.includes('MATEMÁTICO') ? 'math-nav-buttons' :
            q.block.includes('ESPACIAL') ? 'spatial-nav-buttons' :
            'verbal-nav-buttons';
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        document.getElementById(blockContainerId).appendChild(button);
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';
    
    // ===== INICIO DE MODIFICACIÓN (PREGUNTAS 9 y 12) =====
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text.replace(/\n/g, '<br>')}</p>`; // Se añade replace para saltos de línea
    
    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }
    
    // Nueva lógica para mostrar texto DESPUÉS de la imagen
    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage.replace(/\n/g, '<br>')}</p>`;
    }
    // ===== FIN DE MODIFICACIÓN =====

    html += '<div class="options">';
    if (q.optionImages) {
        // IDs 11 y 13 usan opciones de imagen horizontales, 12 usa vertical
        const containerClass = q.id === 12 ? 'image-options-container-vertical' : 'image-options-container';
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>';
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        // ===== MODIFICACIÓN EN RESULTADOS (PREGUNTAS 9 y 12) =====
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text.replace(/\n/g, '<br>')}</p>`; // Se añade replace
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        // Nueva lógica para mostrar texto DESPUÉS de la imagen
        if (q.textAfterImage) {
            html += `<p>${q.textAfterImage.replace(/\n/g, '<br>')}</p>`;
        }
        // ===== FIN DE MODIFICACIÓN =====

        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = q.id === 12 ? 'image-options-container-vertical' : 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

// LÓGICA DE INICIO CENTRALIZADA (sin cambios)
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});
