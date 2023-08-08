const cardGrid = document.getElementById("card-grid");

function addCard(image, name, position, degree, year) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = image;
    cardImage.alt = "Card Image";

    const cardName = document.createElement("p");
    cardName.textContent = name;
    cardName.classList.add("card-name");

    const cardPosition = document.createElement("p");
    cardPosition.textContent = position;
    cardPosition.classList.add("card-text");

    const cardDegree = document.createElement("p");
    cardDegree.textContent = degree;
    cardDegree.classList.add("card-text");

    const cardYear = document.createElement("p");
    cardYear.textContent = year;
    cardYear.classList.add("card-year");

    newCard.appendChild(cardImage);
    newCard.appendChild(cardName);
    newCard.appendChild(cardPosition);
    newCard.appendChild(cardDegree);
    newCard.appendChild(cardYear);

    return newCard;
}

const cardData = [
    {
        image: "images/Rectangle 114.png",
        name: "Adrienne Chan",
        position: "General Member",
        degree: "Masters of Entrepreneurship",
        year: "2023 - present"
    },
    {
        image: "images/Rectangle 104.png",
        name: "Amy Sun",
        position: "General Member",
        degree: "Art (IVA) + Informatics",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 105.png",
        name: "Anna Finch",
        position: "General Member",
        degree: "Oceanography + Biochemistry",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 106.png",
        name: "Annie Yao",
        position: "Artistic Director",
        degree: "HCDE",
        year: "Founding Member"
    },
    {
        image: "images/Rectangle 107.png",
        name: "Bella Yuan",
        position: "General Member",
        degree: "Biochemistry",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 113.png",
        name: "Elle Bai",
        position: "General Member",
        degree: "School of Dentistry",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 108.png",
        name: "Evelynn Li",
        position: "CO-VP of Publicity",
        degree: "Interaction Design",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 109.png",
        name: "Ghislaine Ng",
        position: "General Member",
        degree: "Computer Science + Early Childhood Family Education",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 110 (1).png",
        name: "Gloria Shen",
        position: "VP of Internal Affairs",
        degree: "Neuroscience",
        year: "Founding Member"
    },
    {
        image: "images/Rectangle 111.png",
        name: "Jasmine Schoch",
        position: "General Member",
        degree: "Computer Science",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 112 (1).png",
        name: "Kelly Pao",
        position: "VP of Finance",
        degree: "Communications",
        year: "Founding Member"
    },
    {
        image: "images/Rectangle 115.png",
        name: "Linda Lam",
        position: "General Member",
        degree: "Psychology",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 118 (1).png",
        name: "Melissa Cai",
        position: "Co-VP of Publicity",
        degree: "Political Science",
        year: "Founding Member"
    },
    {
        image: "images/Rectangle 116.png",
        name: "Michelle Zhang",
        position: "General Member",
        degree: "Psychology",
        year: "2022 - present"
    },
    {
        image: "images/Rectangle 117.png",
        name: "Vanessa Lee",
        position: "President",
        degree: "Business Administration",
        year: "Founding Member"
    }
];

let currentRow = document.createElement("div");
currentRow.classList.add("card-row");
cardGrid.appendChild(currentRow);

let cardsInCurrentRow = 0;

cardData.forEach(card => {
    if (cardsInCurrentRow === 5) {
        currentRow = document.createElement("div");
        currentRow.classList.add("card-row");
        cardGrid.appendChild(currentRow);
        cardsInCurrentRow = 0;
    }

    const newCard = addCard(card.image, card.name, card.position, card.degree, card.year);
    currentRow.appendChild(newCard);
    cardsInCurrentRow++;
});

const foundingMembersData = [
    {
        image: "images/Rectangle 117.png",
        name: "Vanessa Lee",
        position: "Co-Captain",
        degree: "Business Administration",
        year: "2024",
        additionalInfo: "Founding Member"
    },
    {
        image: "images/Rectangle 106.png",
        name: "Annie Yao",
        position: "Co-Captain",
        degree: "HCDE",
        year: "2025",
        additionalInfo: "Founding Member"
    },
    {
        image: "images/Rectangle 110 (1).png",
        name: "Gloria Shen",
        position: "Creative Director/VP",
        degree: "Neuroscience",
        year: "2025",
        additionalInfo: "Founding Member"
    },
    {
        image: "images/Rectangle 112 (1).png",
        name: "Kelly Pao",
        position: "Director of Internal Affairs",
        degree: "Communications",
        year: "2024",
        additionalInfo: "Founding Member"
    },
    {
        image: "images/Rectangle 118 (1).png",
        name: "Melissa Cai",
        position: "Director of Public Relations",
        degree: "Political Science",
        year: "2023",
        additionalInfo: "Founding Member"
    }
];

let foundingMembersRow = document.createElement("div");
foundingMembersRow.classList.add("card-row", "founding-members-row");
cardGrid.appendChild(foundingMembersRow);

foundingMembersData.forEach(member => {
    const newCard = addCard(member.image, member.name, member.position, `${member.year}, ${member.degree}`, member.additionalInfo);
    foundingMembersRow.appendChild(newCard);
});

