function calculateAge() {
    const input = document.getElementById('calculator-input').value;
    const result = document.getElementById('calculator-result');
    
    // Check if a date is entered
    if (!input) {
        result.textContent = "Please enter a valid date.";
        alert("Please enter a valid date");
        result.style.color = "red";
        return;
    }
    
    // Get the current date and birthdate
    const birthDate = new Date(input);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Display the result
    if (age >= 0) {
        result.textContent = `Your Age is ${age} years old.`;
        result.style.color = "green";
    } else {
        result.textContent = "The entered date is in the future. Please enter a valid date.";
        result.style.color = "red";
    }
}