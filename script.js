const showError = document.getElementById('error-message');
const button = document.querySelector('button');
const result = document.getElementById('result');
const inputBirthday = document.getElementById('birthday');

function calculatesDaysToBirthday() {
    const selectedDate = new Date(inputBirthday.value);
    if (!selectedDate || isNaN(selectedDate)) {
        showError.style.display = 'block';
        return;
    }
showError.style.display = 'none';
const currentDate = new Date();
selectedDate.setFullYear(currentDate.getFullYear());
if(selectedDate < currentDate){
    selectedDate.setFullYear(currentDate.getFullYear() + 1)
};
const daysToBirthday = Math.ceil((selectedDate - currentDate)/(1000*60*60*24));

let daysText;
if (daysToBirthday === 1) {
    daysText = 'день'
} else if (daysToBirthday > 1 && daysToBirthday < 5) {
    daysText = 'дня'
} else {
    daysText = 'дней'
};
result.textContent = `До дня рождения осталось ${daysToBirthday} ${daysText}`;
};
button.addEventListener('click', calculatesDaysToBirthday);
    





