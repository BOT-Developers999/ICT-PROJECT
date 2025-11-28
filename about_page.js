const learnMoreBtn = document.getElementById('learnMoreBtn');
const extraInfo = document.getElementById('extraInfo');

learnMoreBtn.addEventListener('click', () => {
    extraInfo.classList.toggle('hidden');
    learnMoreBtn.textContent = extraInfo.classList.contains('hidden') ? 'Learn More' : 'Show Less';
});