const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}))

var speakers = [
    {
        name: "Sir Andrew Wiles",
        profession: "Royal Society Research Professor at the University of Oxford",
        image: "images/Andrew-Wiles.jpg",
        achievement: "Proved Fermat's Last Theorem and awarded the 2016 Abel Prize and the 2017 Copley Medal by the Royal Society. A Knight Commander of the Order of the British Empire. First Regius professor of mathematics at Oxford.",
    },
    {
        name: "Luis Caffarelli",
        profession: "Professor at the University of Texas, Austin",
        image: "images/Caffarelli.jpg",
        achievement: "Currently holds the Sid Richardson Chair at the University of Texas at Austin. Named a SIAM Fellow in 2018 and received the Shaw Prize in Mathematics. Awarded the 2023 Abel Prize",
    },
    {
        name: "John E Huh",
        profession: "Professor at Princeton University",
        image: "images/june-huh.jpg",
        achievement: "He was awarded the 2022 Fields Medal of the International Mathematical Union.",
    },
    {
        name: "Terence Tao (The 'Mozart' of Mathematics)",
        profession: "Professor of mathematics at the University of California, Los Angeles",
        image: "images/terence_tao.png",
        achievement: "Tao won the Fields Medal in 2006 and won the Royal Medal and Breakthrough Prize in Mathematics in 2014.",
    },
    {
        name: "Cédric Patrice Thierry Villani",
        profession: "French politician and mathematician.",
        image: "images/Cedric1.jpg",
        achievement: "He was awarded the Fields Medal in 2010, and he was the director of Sorbonne University's Institut Henri Poincaré from 2009 to 2017.",
    },
    {
        name: "Urmila Mahadev",
        profession: "American mathematician and theoretical computer scientist",
        image: "images/Urmilla.jpg",
        achievement: "Won the Machtey Award at the Symposium on Foundations of Computer Science in 2018, and in 2021 one of the three inaugural Maryam Mirzakhani New Frontiers Prizes for early-career achievements by women mathematicians.",
    }
];

var speakersTitle = document.createElement("h3");
speakersTitle.classList.add("speakers-title");
speakersTitle.textContent = "Featured Speakers";

var featuredSpeakers = document.getElementById("featured-speakers");
featuredSpeakers.insertAdjacentElement("beforebegin", speakersTitle);


// var titleElement = document.createElement("h3");
// titleElement.textContent = "Featured Speakers";
// titleElement.classList.add("speakers-title");
// featuredSpeakers.appendChild(titleElement);

speakers.forEach(function (speaker) {
    var speakerDetails = document.createElement("div");
    speakerDetails.classList.add("speaker-details");

    var imageContainer = document.createElement("div");
    imageContainer.classList.add("speaker-img");

    var imageElement = document.createElement("img");
    imageElement.src = speaker.image;
    imageElement.alt = speaker.name;
    imageContainer.appendChild(imageElement);
    speakerDetails.appendChild(imageContainer);

    var speakerInfo = document.createElement("div");
    speakerInfo.classList.add("speaker-info");

    var nameElement = document.createElement("h4");
    nameElement.textContent = speaker.name;
    speakerInfo.appendChild(nameElement);

    var professionElement = document.createElement("p");
    professionElement.textContent = speaker.profession;
    speakerInfo.appendChild(professionElement);

    var achievementElement = document.createElement("p");
    achievementElement.textContent = speaker.achievement;
    speakerInfo.appendChild(achievementElement);

    speakerDetails.appendChild(speakerInfo);
    featuredSpeakers.appendChild(speakerDetails);
});
