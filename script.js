function calculateAge() {
    const day = parseInt(document.getElementById('dob-day').value, 10);
    const month = parseInt(document.getElementById('dob-month').value, 10) - 1; // Months are 0-based in JavaScript
    const year = parseInt(document.getElementById('dob-year').value, 10);

    if (!day || !month || !year || year > new Date().getFullYear() || day < 1 || month < 0 || month > 11) {
        document.getElementById('age-output').innerText = 'Please enter a valid date.';
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month, day);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('age-output').innerText = `You are ${age} years old.`;
}
