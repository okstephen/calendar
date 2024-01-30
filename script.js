const calendar = document.querySelector('.calendar');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const monthYear = document.getElementById('month-year');
const days = document.querySelector('.days');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    monthYear.textContent = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
    }).format(currentDate);

    days.innerHTML = '';

    for (let i = 0; i < firstDay.getDay(); i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'empty');
        days.appendChild(dayElement);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        days.appendChild(dayElement);
    }
}

renderCalendar();

prevButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    currentDate = new Date(currentYear, currentMonth, 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    currentDate = new Date(currentYear, currentMonth, 1);
    renderCalendar();
});
