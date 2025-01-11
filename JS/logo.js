function updateDynamicLogo() {
    const department = document.getElementById('department').value;
    const logo2 = document.querySelector('.logo2');

    // Clear existing logo
    logo2.innerHTML = '';

    // Map department to logos and links
    const logos = {
        "CSE": {
            src: "images/CSE.jpg",
            link: "http://pundrauniversity.ac.bd/departments/computer-science-and-engineering"
        },
        "EEE": {
            src: "images/EEE-Logo.png",
            link: "http://pundrauniversity.ac.bd/departments/electrical-and-electronic-engineering"
        },
        "CE": {
            src: "images/CE-Logo.png",
            link: "http://pundrauniversity.ac.bd/departments/civil-engineering"
        }
    };

    if (logos[department]) {
        const img = document.createElement('img');
        img.src = logos[department].src;
        img.alt = `${department} Logo`;
        img.style.maxHeight = '80px';
        img.style.maxWidth = '100px';

        // Create the link element
        const link = document.createElement('a');
        link.href = logos[department].link;
        link.target = "_blank"; // Opens link in a new tab
        link.appendChild(img);

        logo2.appendChild(link);
    } else {
        const defaultText = document.createElement('p');
        defaultText.textContent = 'No logo available for this department';
        logo2.appendChild(defaultText);
    }
}

// Update logo on department change
document.getElementById('department').addEventListener('change', updateDynamicLogo);
