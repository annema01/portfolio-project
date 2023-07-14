/// EDUCATION

function displayEducation() {}

let educationElement = document.querySelector("#educationData");

let educationData = [
  {
    title: "B. Art et science de l’animation",
    location: "Laval University, Quebec, QC",
    date: "2015 - 2018",
  },
  {
    title: "DEC Graphic design",
    location: "Cégep of Sainte-Foy, Quebec, QC",
    date: "2012-2015",
  },
];

let educationHTML = "";
educationData.forEach(function (education) {
  educationHTML =
    educationHTML +
    `
      <div class="row table-2nd-row">
        <div class="col-lg-4 date">${education.date}</div>
        <div class="col-lg-5 title">
          ${education.title}<br />
          <div class="location">${education.location}</div>
         </div>
      </div>
      <hr /> `;
});

educationElement.innerHTML = educationHTML;

function displayWorkshop() {}

let workshopElement = document.querySelector("#workshopData");

let workshopData = [
  {
    title: "Web Development",
    location: "SheCodes.io",
    date: "February - April 23",
  },
  {
    title: "Intro to Coding",
    location: "SheCodes.io",
    date: "January 2023",
  },
  {
    title: "Advanced Compositing - TB Harmony",
    location: "Toon Boom Animation Inc., Montreal, QC",
    date: "February 2022",
  },
  {
    title: "Leadership and Team Management",
    location: "NAD-UQAC, Montreal, QC",
    date: "March - July 19",
  },
  {
    title: "Advanced Rigging - TB Harmony",
    location: "Toon Boom Animation Inc., Montreal, QC",
    date: "October 2021",
  },
];

let workshopHTML = "";
workshopData.forEach(function (workshop) {
  workshopHTML =
    workshopHTML +
    `
       <div class="row table-2nd-row">
        <div class="col-lg-4 date">${workshop.date}</div>
        <div class="col-lg-5 title">
          ${workshop.title}<br />
            <div class="location">${workshop.location}</div>
           </div>
        </div>
        <hr /> `;
});

workshopElement.innerHTML = workshopHTML;

///EXPERIENCE
function displayExperience() {}

let experienceElement = document.querySelector("#experienceData");

let experienceData = [
  {
    title: "Rigging Supervision",
    location: "Singing Frog Studios, Montreal, QC",
    date: "August - December 22",
  },
  {
    title: "Rigging Supervision",
    location: "Couleur.tv, Montreal, QC",
    date: "January - March 22",
  },
  {
    title: "Rigging Supervision",
    location: "Caribara, Montreal, QC",
    date: "February 21 - August 22",
  },
  {
    title: "Rigging & 2D Animation",
    location: "Couleur.tv, Montreal, QC",
    date: "November 20 - February 21",
  },
  {
    title: "Rigging & 2D Animation",
    location: "Caribara, Montreal, QC",
    date: "April - November 20",
  },
  {
    title: "2D Animation",
    location: "Singing Frog Studios, Montreal, QC",
    date: "November 19 - April 20",
  },
  {
    title: "2D Animation",
    location: "Couleur.tv, Montreal, QC",
    date: "July - October 19",
  },
  {
    title: "Rigging",
    location: "Productions Toondraw Montreal, Montreal, QC",
    date: "March - July 19",
  },
  {
    title: "2D Animation",
    location: "Oasis Animation Inc, Montreal, QC",
    date: "September 18 - March 19",
  },
  {
    title: "Rigging & 2D Animation",
    location: "Couleur.tv, Montreal, QC",
    date: "May - September 18",
  },
];

let experienceHTML = "";
experienceData.forEach(function (experience) {
  experienceHTML =
    experienceHTML +
    `
     <div class="row table-2nd-row">
        <div class="col-lg-4 date">${experience.date}</div>
        <div class="col-lg-5 title">
          ${experience.title}<br />
         <div class="location">${experience.location}</div>
        </div>
      </div>
    <hr /> `;
});

experienceElement.innerHTML = experienceHTML;

displayEducation();
displayWorkshop();
displayExperience();
