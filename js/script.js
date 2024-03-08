const adviceId = document.getElementById('id');
const adviceText = document.getElementById('advice-text');

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceId.innerHTML = data.slip.id;  
            adviceText.innerHTML = data.slip.advice;
        }).catch(error => {
            console.error('Error:', error)
        });
}

getAdvice()