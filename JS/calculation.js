function calculateSGPA() {
    const grades = document.querySelectorAll('select[name="grade"]');
    const semester = document.getElementById('semester').value;
    const department = document.getElementById('department').value;
    const resultPopup = document.getElementById('resultPopup');
    const sgpaResult = document.getElementById('sgpaResult');

    if (!department || !semester) {
        alert('Please select both a department and a semester.');
        return;
    }

    const courses = semesterData[department]?.[semester];
    if (!courses) {
        alert('Invalid department or semester selection.');
        return;
    }

    let totalPoints = 0,
        totalCredits = 0,
        failedCount = 0,
        gradesEntered = false;

    grades.forEach((select, index) => {
        const gradeValue = select.value.trim();
        if (gradeValue) gradesEntered = true;

        const credit = parseFloat(courses[index]?.credit || 0);
        const gradePoints = getGradePoints(gradeValue);

        if (gradeValue === "F") failedCount++;
        if (gradePoints !== null) {
            totalPoints += gradePoints * credit;
            totalCredits += credit;
        }
    });

    if (!gradesEntered) {
        alert('Please enter at least one grade for the calculation.');
        return;
    }

    if (failedCount >= 3) {
        sgpaResult.innerText = "You are disallowed. SGPA is 0.";
        resultPopup.style.display = 'block';
        return;
    }

    if (totalCredits > 0) {
        const sgpa = (totalPoints / totalCredits).toFixed(2);
        sgpaResult.innerText = `Your SGPA is ${sgpa}`;
        resultPopup.style.display = 'block';
    } else {
        alert('Please enter grades for all courses.');
    }
}

function getGradePoints(grade) {
    const gradeMap = { "A+": 4.0, "A": 3.75, "A-": 3.5, "B+": 3.25, "B": 3.0, "B-": 2.75, "C+": 2.5, "C": 2.25, "D": 2.0, "F": 0.0 };
    return gradeMap[grade] ?? null;
}

function closePopup() {
    const resultPopup = document.getElementById('resultPopup');
    if (resultPopup) {
        resultPopup.style.display = 'none';
    }
}
