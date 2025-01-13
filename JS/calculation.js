// Calculate SGPA function
function calculateSGPA() {
    const grades = document.querySelectorAll('select[name="grade"]');
    const semester = document.getElementById('semester').value;
    const department = document.getElementById('department').value;

    if (!department || !semester) {
        alert('Please select a department and semester.');
        return;
    }

    const courses = semesterData[department][semester];
    let totalPoints = 0, totalCredits = 0, failedCount = 0;
    let gradesEntered = false;

    // Iterate over each course to calculate total points and total credits
    grades.forEach((select, index) => {
        const gradeValue = select.value.trim();
        if (gradeValue) {
            gradesEntered = true;
        }

        const credit = parseFloat(courses[index].credit); // Get the credit for the course
        const gradePoints = getGradePoints(gradeValue); // Get the grade points for the grade entered

        if (gradeValue === "F") failedCount++; // Count failed courses
        if (gradePoints !== null) {
            totalPoints += gradePoints * credit; // Calculate total points
            totalCredits += credit; // Sum up total credits
        }
    });

    // If no grades were entered, show an alert
    if (!gradesEntered) {
        alert('Please enter at least one grade.');
        return;
    }

    // If the student has failed 3 or more courses, show a disallowed message
    if (failedCount >= 3) {
        document.getElementById('sgpaResult').innerText = "You are disallowed. SGPA is 0.";
        showPopup("You are disallowed. SGPA is 0.");
        return;
    }

    // If the student has failed exactly 1 course, show "Conditionally Allowed"
    if (failedCount === 1) {
        document.getElementById('sgpaResult').innerText = "Conditionally Allowed";
        showPopup("Conditionally Allowed");
        return;
    }

    // Calculate SGPA only if total credits is greater than zero
    if (totalCredits > 0) {
        const sgpa = (totalPoints / totalCredits).toFixed(2); // Calculate SGPA
        document.getElementById('sgpaResult').innerText = `Your SGPA is ${sgpa}`;
        showPopup(`Your SGPA is ${sgpa}`);
    } else {
        alert('Please select grades for all courses.');
    }
}

// Function to get grade points from grade string
function getGradePoints(grade) {
    const gradeMap = {
        "A+": 4.0,
        "A": 3.75,
        "A-": 3.5,
        "B+": 3.25,
        "B": 3.0,
        "B-": 2.75,
        "C+": 2.5,
        "C": 2.25,
        "D": 2.0,
        "F": 0.0
    };
    return gradeMap[grade] || null;
}

// Show the popup with the calculated SGPA
function showPopup(message) {
    const popup = document.getElementById('resultPopup');
    const resultText = document.getElementById('sgpaResult');
    resultText.textContent = message;
    popup.classList.add('active');  // Add 'active' class to show popup
}

// Close the popup
function closePopup() {
    document.getElementById('resultPopup').classList.remove('active');  // Remove 'active' class to hide popup
}

// Dynamically adjust the popup position when scrolling
window.addEventListener('scroll', function () {
    var popup = document.getElementById('resultPopup');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;

    // Set the popup's top position dynamically
    popup.style.top = (scrollTop + windowHeight / 2 - popup.offsetHeight / 2) + 'px';
});

// Adjust popup position when the page initially loads
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('resultPopup');
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Adjust popup's initial position
    popup.style.top = (scrollTop + windowHeight / 2 - popup.offsetHeight / 2) + 'px';
});
