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

    grades.forEach((select, index) => {
        const gradeValue = select.value.trim();
        const credit = parseFloat(courses[index].credit);
        const gradePoints = getGradePoints(gradeValue);

        if (gradeValue === "F") failedCount++;
        if (gradePoints !== null) {
            totalPoints += gradePoints * credit;
            totalCredits += credit;
        }
    });

    const sgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('sgpaResult').innerText = failedCount > 4
        ? "You are disallowed. SGPA is 0."
        : `Your SGPA is ${sgpa}`;
    document.getElementById('resultPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}

function getGradePoints(grade) {
    const gradeMap = { "A+": 4.0, "A": 3.75, "A-": 3.5, "B+": 3.25, "B": 3.0, "B-": 2.75, "C+": 2.5, "C": 2.25, "D": 2.0, "F": 0.0 };
    return gradeMap[grade] || null;
}
