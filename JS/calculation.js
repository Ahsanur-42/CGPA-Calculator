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

    grades.forEach((select, index) => {
        const gradeValue = select.value.trim();
        if (gradeValue) {
            gradesEntered = true;
        }

        const credit = parseFloat(courses[index].credit);
        const gradePoints = getGradePoints(gradeValue);

        if (gradeValue === "F") failedCount++;
        if (gradePoints !== null) {
            totalPoints += gradePoints * credit;
            totalCredits += credit;
        }
    });

    if (!gradesEntered) {
        alert('Please enter at least one grade.');
        return;
    }

    if (failedCount >= 3) {
        document.getElementById('sgpaResult').innerText = "You are disallowed. SGPA is 0.";
        document.getElementById('resultPopup').style.display = 'block';
        return;
    }

    if (totalCredits > 0) {
        const sgpa = (totalPoints / totalCredits).toFixed(2);
        document.getElementById('sgpaResult').innerText = `Your SGPA is ${sgpa}`;
        document.getElementById('resultPopup').style.display = 'block';
    } else {
        alert('Please select grades for all courses.');
    }
}

function getGradePoints(grade) {
    const gradeMap = { "A+": 4.0, "A": 3.75, "A-": 3.5, "B+": 3.25, "B": 3.0, "B-": 2.75, "C+": 2.5, "C": 2.25, "D": 2.0, "F": 0.0 };
    return gradeMap[grade] || null;
}

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}


function showPopup(message) {
    const popup = document.getElementById('resultPopup');
    const resultText = document.getElementById('sgpaResult');
    resultText.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}
