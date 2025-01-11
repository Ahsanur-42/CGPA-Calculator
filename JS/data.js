const semesterData = {
    "CSE": {
        "1st Year - 1st Semester": [
            { code: "CSE 1101", title: "Structured Programming Language", credit: "3.00" },
            { code: "CSE 1102", title: "Structured Programming Language Sessional", credit: "1.00" },
            { code: "CSE 1103", title: "Discrete Mathematics", credit: "3.00" },
            { code: "EEE 1101", title: "Basic Electrical Engineering", credit: "3.00" },
            { code: "EEE 1102", title: "Basic Electrical Engineering Sessional", credit: "1.00" },
            { code: "MTH 1101", title: "Differential and Integral Calculus and Matrices", credit: "3.00" },
            { code: "PHY 1101", title: "Physics I", credit: "3.00" },
            { code: "ENG 1101", title: "Technical and Communicative English", credit: "3.00" },
            { code: "CE 1102", title: "Engineering Drawing and CAD Sessional", credit: "1.00" },
        ],
        "1st Year - 2nd Semester": [
            { code: "CSE 1201", title: "Data Structures", credit: 3.00 },
            { code: "CSE 1202", title: "Data Structures Sessional", credit: 1.00 },
            { code: "CSE 1203", title: "Object Oriented Programming Language", credit: 3.00 },
            { code: "CSE 1204", title: "Object Oriented Programming Language Sessional", credit: 1.00 },
            { code: "EEE 1201", title: "Electronic Devices and Circuits", credit: 3.00 },
            { code: "EEE 1202", title: "Electronic Devices and Circuits Sessional", credit: 1.00 },
            { code: "PHY 1201", title: "Physics II", credit: 3.00 },
            { code: "PHY 1202", title: "Physics Sessional", credit: 1.00 },
            { code: "MTH 1201", title: "Differential Equations and Transform Mathematics", credit: 3.00 },
            { code: "BAN 1201", title: "Functional Bengali Language", credit: 2.00 },
            { code: "ENG 1202", title: "Developing English Skills Sessional", credit: 1.00 }
        ],
        "2nd Year - 1st Semester": [
            { code: "CSE 2101", title: "Design and Analysis of Algorithms", credit: 3.00 },
            { code: "CSE 2102", title: "Design and Analysis of Algorithms Sessional", credit: 1.00 },
            { code: "CSE 2103", title: "Database Management Systems", credit: 3.00 },
            { code: "CSE 2104", title: "Database Management Systems Sessional", credit: 1.00 },
            { code: "CSE 2105", title: "Digital Electronics", credit: 3.00 },
            { code: "CSE 2106", title: "Digital Electronics Sessional", credit: 1.00 },
            { code: "MTH 2101", title: "Linear Algebra, Vector Analysis and Coordinate Geometry", credit: 3.00 },
            { code: "CHM 2101", title: "Chemistry", credit: 3.00 },
            { code: "CHM 2102", title: "Chemistry Sessional", credit: 1.00 },
            { code: "SS 2101", title: "Engineering Economics", credit: 2.00 }
        ],
        "2nd Year - 2nd Semester": [
            { code: "CSE 2201", title: "Web Engineering", credit: 3.00 },
            { code: "CSE 2202", title: "Web Engineering Sessional", credit: 1.00 },
            { code: "CSE 2203", title: "Data Communication", credit: 3.00 },
            { code: "CSE 2205", title: "Computer Architecture and Organization", credit: 3.00 },
            { code: "CSE 2206", title: "Computer Architecture and Organization Sessional", credit: 1.00 },
            { code: "CSE 2207", title: "Numerical Methods", credit: 2.00 },
            { code: "MTH 2201", title: "Complex Variable, Probability and Statistics", credit: 3.00 },
            { code: "BUS 2201", title: "Financial, Cost and Managerial Accounting", credit: 3.00 },
            { code: "HUM 2201", title: "Bangladesh Studies and History of Independence", credit: 2.00 }
        ],
        "3rd Year - 1st Semester": [
            { code: "CSE 3100", title: "Software Development Project I", credit: 1.00 },
            { code: "CSE 3102", title: "Mobile Application Development Sessional", credit: 1.00 },
            { code: "CSE 3103", title: "Operating Systems", credit: 3.00 },
            { code: "CSE 3104", title: "Operating Systems Sessional", credit: 1.00 },
            { code: "CSE 3105", title: "Microprocessors, Microcontrollers and Embedded Systems", credit: 3.00 },
            { code: "CSE 3106", title: "Microprocessors, Microcontrollers and Embedded Systems Sessional", credit: 1.00 },
            { code: "CSE 3107", title: "Software Design Pattern", credit: 2.00 },
            { code: "CSE 3110", title: "Technical Writing and Presentation", credit: 1.00 },
            { code: "BUS 3101", title: "Technology Entrepreneurship for Business", credit: 3.00 },
            { code: "HUM 3101", title: "Professional Ethics and Environmental Protection", credit: 2.00 },
            { code: "CSE 3250", title: "Industrial Training", credit: 1.00 }
        ],
        "3rd Year - 2nd Semester": [
            { code: "CSE 3200", title: "Software Development Project II", credit: 1.00 },
            { code: "CSE 3201", title: "Compiler Design", credit: 3.00 },
            { code: "CSE 3202", title: "Compiler Design Sessional", credit: 1.00 },
            { code: "CSE 3203", title: "Digital Signal Processing", credit: 3.00 },
            { code: "CSE 3204", title: "Digital Signal Sessional", credit: 1.00 },
            { code: "CSE 3205", title: "Computer Networks", credit: 3.00 },
            { code: "CSE 3206", title: "Computer Networks Sessional", credit: 1.00 },
            { code: "LAW 3201", title: "Cyber and Intellectual Property Law", credit: 2.00 }
        ],
        "4th Year - 1st Semester": [
            { code: "CSE 4000(A)", title: "Thesis / Project", credit: 2.00 },
            { code: "CSE 4101", title: "Big Data Analysis", credit: 3.00 },
            { code: "CSE 4102", title: "Big Data Analysis Sessional", credit: 1.00 },
            { code: "CSE 4103", title: "Cryptography and Network Security", credit: 3.00 },
            { code: "CSE 4104", title: "Cryptography and Network Security Sessional", credit: 1.00 },
            { code: "CSE 4105", title: "Artificial Intelligence", credit: 3.00 },
            { code: "CSE 4106", title: "Artificial Intelligence Sessional", credit: 1.00 },
            { code: "CSE 41XX", title: "CSE Option-I", credit: 3.00 },
            { code: "CSE 41XX", title: "CSE Option-I Sessional", credit: 1.00 }
        ],
        "4th Year - 2nd Semester": [
            { code: "CSE 4000(B)", title: "Thesis and Project", credit: 4.00 },
            { code: "CSE 4201", title: "Computer Graphics", credit: 3.00 },
            { code: "CSE 4202", title: "Computer Graphics Sessional", credit: 1.00 },
            { code: "CSE 4203", title: "Machine Learning", credit: 3.00 },
            { code: "CSE 4204", title: "Machine Learning Sessional", credit: 1.00 },
            { code: "CSE 4205", title: "Digital Image Processing", credit: 3.00 },
            { code: "CSE 4206", title: "Digital Image Processing Sessional", credit: 1.00 },
            { code: "CSE 423X", title: "CSE Option III", credit: 3.00 },
            { code: "CSE 423X", title: "CSE Option III Sessional", credit: 1.00 },
            { code: "CSE 42XX", title: "CSE Option-IV", credit: 3.00 },
            { code: "CSE 42XX", title: "CSE Option-IV Sessional", credit: 1.00 }
        ]
    }
     // Add other departments and semesters here...
};

   

function loadSemesters() {
    const department = document.getElementById('department').value;
    const semesterDropdown = document.getElementById('semester');
    semesterDropdown.innerHTML = '<option value="">--Select Semester--</option>';
    semesterDropdown.disabled = true;

    if (semesterData[department]) {
        Object.keys(semesterData[department]).forEach(semester => {
            const option = document.createElement('option');
            option.value = semester;
            option.textContent = semester;
            semesterDropdown.appendChild(option);
        });
        semesterDropdown.disabled = false;
    }
}

function loadCourses() {
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const tableBody = document.querySelector('#coursesTable tbody');
    tableBody.innerHTML = '';

    if (semesterData[department] && semesterData[department][semester]) {
        semesterData[department][semester].forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.code}</td>
                <td>${course.title}</td>
                <td>${parseFloat(course.credit).toFixed(2)}</td>
                <td>
                    <select name="grade">
                        <option value="">--Select--</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}
