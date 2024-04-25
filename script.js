const input = document.getElementById('telephone');
const check = document.getElementById('check');
const history = document.getElementById('history');
const clear = document.getElementById('clear');
const historyContent = document.getElementById('history-content');
const output = document.getElementById('output');
const outputContent = document.getElementById('output-content');
const historyItems = document.getElementById('history-items');

const checkTelephone = (telephone) => {
    const regex = /^1?\s*(\(\d{3}\)|\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    return regex.test(telephone);
}

check.addEventListener('click', () => {
    const telephone = input.value;
    if (telephone === '') {
        alert("Please provide a phone number");
        return;
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('history-item');
    const newParagraph = document.createElement('p');

    if (checkTelephone(telephone)) {
        outputContent.innerHTML = `Valid US number: ${telephone}`;
    } else {
        outputContent.innerHTML = `Invalid US number: ${telephone}`;
    }
    newParagraph.textContent = outputContent.innerHTML;
    newDiv.appendChild(newParagraph);
    historyItems.appendChild(newDiv);
    output.classList.remove('hidden');

});

clear.addEventListener('click', () => {
    historyItems.innerHTML = '';
});

history.addEventListener('click', () => {
    historyContent.classList.toggle('hidden');
});