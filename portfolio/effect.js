// Function to toggle the dropdown menu
function hamburg() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = 'flex'; // Show the dropdown
}

function cancel() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = 'none'; // Hide the dropdown
}

// Ensure the dropdown is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.style.display = 'none';
});

//Typewriter effect 

const texts = [
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer"
]
let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
  if(characterIndex<texts[textIndex].length){
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter,speed);
  }
  else{
    setTimeout(eraseText,1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length>0){
    textElements.innerHTML = textElements.innerHTML.slice(0,-1);
    setTimeout(eraseText,50)
  }
  else{
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter,500);
  }
}
window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

function toggleSkills(skillId) {
  const skillList = document.getElementById(skillId);
  const toggleIcon = skillList.previousElementSibling.querySelector('.toggle-icon');
  
  // Toggle visibility of skill list
  skillList.classList.toggle('hidden');
  
  // Rotate the toggle icon
  toggleIcon.classList.toggle('open');
}



const pages = document.querySelectorAll('.book-page');
let currentPage = 0;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updatePages() {
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === currentPage) {
            page.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

// Initialize the first page
updatePages();



// JavaScript for Slider Functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevIcon = document.querySelector('.prev');
const nextIcon = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  // Ensure index loops around
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event Listeners for Icons
prevIcon.addEventListener('click', () => showSlide(currentIndex - 1));
nextIcon.addEventListener('click', () => showSlide(currentIndex + 1));


  

  // JavaScript to handle modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".research-image");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal img");
  const closeBtn = document.querySelector(".modal .close");

  images.forEach(image => {
      image.addEventListener("click", () => {
          modal.style.display = "flex"; // Show the modal
          modalImg.src = image.src; // Set the clicked image as modal content
      });
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; // Hide the modal
  });

  modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
          modal.style.display = "none"; // Close modal on background click
      }
  });
});

function sendToWhatsApp(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Format the message for WhatsApp
  const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

  // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp phone number (with country code)
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/916379940534?text=${encodedMessage}`;
  

  // Open the WhatsApp link
  window.open(whatsappLink, '_blank');
}
