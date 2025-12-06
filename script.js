// -----------------------------
// PET DATA
// -----------------------------
const PETS = [
  {
    id: "dog1",
    name: "Biscuit",
    type: "Dog",
    age: "2 years",
    gender: "Male",
    breed: "Beagle Mix",
    size: "Small",
    vaccinated: true,
    location: "Koramangala, Bangalore",
    image: "dog1.jpg",
    description: "Playful, people-friendly and loves short walks and squeaky toys."
  },
  {
    id: "dog2",
    name: "Leo",
    type: "Dog",
    age: "3 years",
    gender: "Male",
    breed: "Labrador Mix",
    size: "Large",
    vaccinated: true,
    location: "Whitefield, Bangalore",
    image: "dog2.jpg",
    description: "Gentle, kid-friendly and enjoys being around families."
  },
  {
    id: "dog3",
    name: "Oreo",
    type: "Dog",
    age: "2 years",
    gender: "Male",
    breed: "Shih Tzu",
    size: "Medium",
    vaccinated: true,
    location: "HSR Layout, Bangalore",
    image: "dog3.jpg",
    description: "Smart, easy to train and already knows basic commands."
  },
  {
    id: "dog4",
    name: "Maple",
    type: "Dog",
    age: "4 years",
    gender: "Female",
    breed: "Poodle",
    size: "Large",
    vaccinated: true,
    location: "JP Nagar, Bangalore",
    image: "dog4.jpg",
    description: "Calm temperament, perfect for first-time pet parents."
  },
  {
    id: "dog5",
    name: "Jimmy",
    type: "Dog",
    age: "10 months",
    gender: "Male",
    breed: "German Shepherd",
    size: "Medium",
    vaccinated: false,
    location: "Electronic City, Bangalore",
    image: "dog5.jpg",
    description: "Goofy puppy energy, loves to run and play fetch."
  },
  {
    id: "dog6",
    name: "Luna",
    type: "Dog",
    age: "2.5 years",
    gender: "Female",
    breed: "Husky Mix",
    size: "Medium",
    vaccinated: true,
    location: "Yelahanka, Bangalore",
    image: "dog6.jpg",
    description: "Talkative husky girl who enjoys cooler evenings and long walks."
  },
  {
    id: "cat1",
    name: "Muffin",
    type: "Cat",
    age: "1 year",
    gender: "Female",
    breed: "Maine Coon Mix",
    size: "Medium",
    vaccinated: true,
    location: "Indiranagar, Bangalore",
    image: "cat1.jpg",
    description: "Fluffy cuddle bug who enjoys window-sunbathing."
  },
  {
    id: "cat2",
    name: "Pixel",
    type: "Cat",
    age: "8 months",
    gender: "Male",
    breed: "Tabby",
    size: "Small",
    vaccinated: false,
    location: "BTM Layout, Bangalore",
    image: "cat2.jpg",
    description: "Curious, playful and loves chasing feather toys."
  },
  {
    id: "cat3",
    name: "Nori",
    type: "Cat",
    age: "2 years",
    gender: "Female",
    breed: "Short Hair",
    size: "Small",
    vaccinated: true,
    location: "Marathahalli, Bangalore",
    image: "cat3.jpg",
    description: "Independent but affectionate once she trusts you."
  },
  {
    id: "cat4",
    name: "Bella",
    type: "Cat",
    age: "3 years",
    gender: "Female",
    breed: "Tuxedo",
    size: "Medium",
    vaccinated: true,
    location: "Kengeri, Bangalore",
    image: "cat4.jpg",
    description: "Laid-back gentleman who loves quiet homes."
  },
  {
    id: "cat5",
    name: "Snow",
    type: "Cat",
    age: "6 months",
    gender: "Female",
    breed: "White DSH",
    size: "Small",
    vaccinated: false,
    location: "RR Nagar, Bangalore",
    image: "cat5.jpg",
    description: "Shy at first but playful with gentle people."
  },
  {
    id: "rabbit1",
    name: "Marshmallow",
    type: "Rabbit",
    age: "1 year",
    gender: "Male",
    breed: "Dwarf Rabbit",
    size: "Small",
    vaccinated: true,
    location: "Banashankari, Bangalore",
    image: "rab1.jpg",
    description: "Soft, calm and enjoys gentle head scratches."
  },
  {
    id: "rabbit2",
    name: "Meeku",
    type: "Rabbit",
    age: "2 years",
    gender: "Female",
    breed: "Lop",
    size: "Small",
    vaccinated: false,
    location: "Hebbal, Bangalore",
    image: "rab2.jpg",
    description: "Loves munching greens and exploring cardboard tunnels."
  },
  {
    id: "bird1",
    name: "Pico",
    type: "Bird",
    age: "1.5 years",
    gender: "Male",
    breed: "Parakeet",
    size: "Small",
    vaccinated: false,
    location: "Jayanagar, Bangalore",
    image: "bird1.jpg",
    description: "Chirpy, social and enjoys being around other birds."
  },
  {
    id: "bird2",
    name: "Mibu",
    type: "Bird",
    age: "1.5 years",
    gender: "Female",
    breed: "Cockatiel",
    size: "Small",
    vaccinated: false,
    location: "Jayanagar, Bangalore",
    image: "bird2.jpg",
    description: "Social little cockatiel who loves whistling and staying close to people."
  },
  {
    id: "ham1",
    name: "Peanut",
    type: "Other",
    age: "7 months",
    gender: "Female",
    breed: "Hamster",
    size: "Tiny",
    vaccinated: true,
    location: "Malleshwaram, Bangalore",
    image: "ham1.jpg",
    description: "Little explorer who loves running on her wheel at night."
  },
  {
    id: "turtle1",
    name: "Shelly",
    type: "Other",
    age: "8 months",
    gender: "Female",
    breed: "Red-eared Slider",
    size: "Tiny",
    vaccinated: false,
    location: "KR Puram, Bangalore",
    image: "turtle1.jpg",
    description: "A calm little turtle who loves basking in warm light."
  },
  {
    id: "fish1",
    name: "Bubbles",
    type: "Other",
    age: "8 months",
    gender: "Unknown",
    breed: "Betta Fish",
    size: "Tiny",
    vaccinated: false,
    location: "KR Puram, Bangalore",
    image: "fish1.jpg",
    description: "A vibrant, peaceful fish who enjoys swimming around plants."
  }
];

// -----------------------------
// UTIL: LOCAL STORAGE
// -----------------------------
const FAVORITES_KEY = "petHavenFavorites";
const ADOPTIONS_KEY = "petHavenAdoptionsV2";
const THEME_KEY = "petHavenTheme";
const COMPARE_KEY = "petHavenCompare";
const PROFILE_KEY = "petHavenProfile";

function loadFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []);
  } catch {
    return new Set();
  }
}

function saveFavorites(set) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...set]));
}

function loadAdoptions() {
  try {
    return JSON.parse(localStorage.getItem(ADOPTIONS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveAdoptions(list) {
  localStorage.setItem(ADOPTIONS_KEY, JSON.stringify(list));
}

function loadCompare() {
  try {
    return new Set(JSON.parse(localStorage.getItem(COMPARE_KEY)) || []);
  } catch {
    return new Set();
  }
}

function saveCompare(set) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify([...set]));
}

function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

const AUTH_KEY = "petHavenUserAuth";

function loadAuth() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAuth(auth) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

function isUserLoggedIn() {
  const auth = loadAuth();
  return !!auth.email;
}

async function apiCreateRequest(payload) {
  const list = loadAdoptions();
  const newReq = {
    id: Date.now().toString(),
    petName: payload.petName,
    adopterName: payload.adopterName,
    adopterEmail: payload.adopterEmail,
    adopterReason: payload.adopterReason || "",
    status: "Pending",
    date: new Date().toISOString(),
    adminMessage: "",
    appointment: null
  };
  list.push(newReq);
  saveAdoptions(list);
  return newReq;
}

async function apiFetchAllRequests() {
  return loadAdoptions();
}

async function apiUpdateRequest(id, update) {
  const list = loadAdoptions();
  const idx = list.findIndex(r => r.id === id);
  if (idx === -1) return null;
  list[idx] = {
    ...list[idx],
    ...update
  };
  saveAdoptions(list);
  return list[idx];
}

// -----------------------------
// NAV + THEME
// -----------------------------
// -----------------------------
// NAV + THEME
// -----------------------------
function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
}

function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");

  // FIX: If there is no theme toggle on this page (admin pages), stop here.
  if (!toggle) return;

  const saved = localStorage.getItem(THEME_KEY);

  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  });
}


// -----------------------------
// HERO RANDOM PET
// -----------------------------
function setupHeroRandomPet() {
  const heroImg = document.getElementById("hero-img");
  const heroName = document.getElementById("hero-name");
  const heroTag = document.getElementById("hero-tag");

  if (!heroImg) return;

  // FIXED: vaccinated is boolean
  const vaccinatedPets = PETS.filter(p => p.vaccinated === true);

  const pet = vaccinatedPets[Math.floor(Math.random() * vaccinatedPets.length)];

  heroImg.src = pet.image;
  heroName.textContent = `${pet.name} • ${pet.age}`;

  const msgs = [
    "I found my forever home 💛",
    "Living happily ever after!",
    "Adopted & loved ❤️",
    "New family, new life!",
    "I'm finally home 🏡"
  ];

  heroTag.textContent = msgs[Math.floor(Math.random() * msgs.length)];
}

// -----------------------------
// PET RENDERING
// -----------------------------
let currentFilter = "All";
let currentSearch = "";
let favouritesSet = loadFavorites();
let compareSet = loadCompare();
let selectedPetName = null;

function renderPets() {
  const grid = document.querySelector(".pets-grid");
  const noResults = document.getElementById("noResults");

  if (!grid) return;

  grid.innerHTML = "";

  let filtered = PETS;

  // filter by type
  if (currentFilter !== "All") {
    filtered = filtered.filter(p => p.type === currentFilter);
  }

  // search
  if (currentSearch.trim() !== "") {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.breed.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
    );
  }

  
  // wishlist page: show only favourites
  if (document.body.classList.contains("page-wishlist")) {
    filtered = filtered.filter(p => favouritesSet.has(p.id));
  }

  // compare page: show only compared pets
  if (document.body.classList.contains("page-compare")) {
    filtered = filtered.filter(p => compareSet.has(p.id));
  }

// no results
  if (filtered.length === 0) {
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  // build cards
  filtered.forEach(pet => {
    const isFav = favouritesSet.has(pet.id);

    const card = document.createElement("div");
    card.className = "pet-card";

    card.innerHTML = `
      <div class="pet-image-wrapper">
        <img src="${pet.image}">
        <span class="pet-tag">${pet.type}</span>
        <button class="fav-btn ${isFav ? "active" : ""}" data-fav-id="${pet.id}">
          ${isFav ? "❤" : "♡"}
        </button>
      </div>

      <div class="pet-body">
        <div class="pet-name-row">
          <h3>${pet.name}</h3>
          <span class="pet-badge">${pet.age}</span>
        </div>

        <div class="pet-meta">
          <span>${pet.gender}</span>
          <span>${pet.breed}</span>
          <span>${pet.size}</span>
          <span>${pet.vaccinated ? "Vaccinated" : "Not vaccinated"}</span>
        </div>

        <p class="pet-description">${pet.description}</p>

        <div class="pet-footer">
          <span class="pet-location">📍 ${pet.location}</span>
          <div class="pet-footer-actions">
            <button class="btn subtle" data-compare-id="${pet.id}">
              ${compareSet.has(pet.id) ? "In Compare" : "Compare"}
            </button>
            <button class="btn primary" data-adopt-name="${pet.name}">
              Adopt
            </button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // favorite button logic
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.favId;
      if (favouritesSet.has(id)) favouritesSet.delete(id);
      else favouritesSet.add(id);

      saveFavorites(favouritesSet);
      renderPets();
    });
  });

  // adopt modal
  document.querySelectorAll("[data-adopt-name]").forEach(btn => {
    btn.addEventListener("click", () => openAdoptModal(btn.dataset.adoptName));
  });


  // compare button logic
  document.querySelectorAll("[data-compare-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.compareId;
      if (compareSet.has(id)) {
        compareSet.delete(id);
      } else {
        compareSet.add(id);
      }
      saveCompare(compareSet);

      if (document.body.classList.contains("page-compare")) {
        renderCompareTable();
      } else {
        renderPets();
      }
    });
  });

}
// -----------------------------
// FILTERS + SEARCH
// -----------------------------
function setupFilters() {
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      currentFilter = chip.dataset.filter;
      renderPets();
    });
  });
}

function setupSearch() {
  const input = document.getElementById("petSearch");
  if (!input) return;

  input.addEventListener("input", () => {
    currentSearch = input.value;
    renderPets();
  });
}

// -----------------------------
// ADOPTION LOGIC
// -----------------------------
const adoptModal = document.getElementById("adoptModal");
const modalPetNameEl = document.getElementById("modalPetName");
const adoptToast = document.getElementById("adoptSuccess");
const adoptForm = document.getElementById("adoptForm");

function openAdoptModal(name) {
  selectedPetName = name;
  modalPetNameEl.textContent = name;
  adoptModal.classList.add("open");
}

function closeAdoptModal() {
  adoptModal.classList.remove("open");
}

window.closeAdoptModal = closeAdoptModal;


async function addAdoptionRecord(petName, adopterName, adopterEmail, adopterReason) {
  const payload = { petName, adopterName, adopterEmail, adopterReason };
  const created = await apiCreateRequest(payload);
  return created;
}


function getAdoptionStatusClass(statusRaw) {
  const status = (statusRaw || "Pending").toLowerCase();
  let base = "adoption-status";
  if (status === "approved") return base + " adoption-status--approved";
  if (status === "rejected") return base + " adoption-status--rejected";
  return base + " adoption-status--pending";
}

function formatAppointment(appointment) {
  if (!appointment) return "";
  const d = new Date(appointment);
  if (isNaN(d.getTime())) return appointment;
  return d.toLocaleString();
}


function downloadAppointmentSlip(id) {
  const list = loadAdoptions();
  const item = list.find(r => r.id === id);
  if (!item) return alert("Could not find request.");

  const pet = PETS.find(p => p.name === item.petName);
  const petLocation = pet ? pet.location : "Pet Haven Adoption Center";
  const appointmentText = item.appointment ? formatAppointment(item.appointment) : "Not scheduled";

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // ---------------------------------------
  // PREMIUM SOFT BROWN HEADER BAR
  // ---------------------------------------
  doc.setFillColor(150, 110, 70);           // caramel header
  doc.rect(0, 0, 210, 25, "F");

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("PET HAVEN • APPOINTMENT SLIP", 105, 15, { align: "center" });

  let y = 40;

  // ---------------------------------------
  // SECTION HEADER (Soft Beige Ribbon)
  // ---------------------------------------
  function sectionHeader(title, yy) {
    doc.setFillColor(210, 180, 130);        // warm beige
    doc.roundedRect(20, yy, 170, 10, 2, 2, "F");
    doc.setFontSize(12);
    doc.setTextColor(60, 50, 30);           // deep brown
    doc.text(title, 25, yy + 7);
  }

  // ---------------------------------------
  // PREMIUM BOX (Soft Brown Border)
  // ---------------------------------------
  function drawBox(startY, height) {
    doc.setDrawColor(160, 120, 80);         // soft brown
    doc.setLineWidth(0.6);
    doc.roundedRect(20, startY, 170, height, 3, 3);
  }

  // ---------------------------------------
  // PET DETAILS
  // ---------------------------------------
  sectionHeader("PET DETAILS", y);
  y += 15;

  drawBox(y, 30);
  doc.setFontSize(11);
  doc.setTextColor(50, 40, 30);

  doc.text(`Name: ${item.petName}`, 30, y + 10);
  doc.text(`Location: ${petLocation}`, 30, y + 17);
  doc.text(`Request ID: ${item.id}`, 30, y + 24);

  y += 45;

  // ---------------------------------------
  // APPOINTMENT DETAILS
  // ---------------------------------------
  sectionHeader("APPOINTMENT DETAILS", y);
  y += 15;

  drawBox(y, 30);

  doc.text(`Status: ${item.status}`, 30, y + 10);
  doc.text(`Appointment:`, 30, y + 17);

  const formattedAppt = doc.splitTextToSize(appointmentText, 150);
  doc.text(formattedAppt, 30, y + 24);

  y += 45;

  // ---------------------------------------
  // ADOPTER DETAILS
  // ---------------------------------------
  sectionHeader("ADOPTER DETAILS", y);
  y += 15;

  drawBox(y, 30);

  doc.text(`Name: ${item.adopterName}`, 30, y + 10);
  doc.text(`Email: ${item.adopterEmail}`, 30, y + 17);

  y += 45;

  // ---------------------------------------
  // ADMIN MESSAGE
  // ---------------------------------------
  sectionHeader("ADMIN MESSAGE", y);
  y += 15;

  const msg = item.adminMessage || "No special instructions.";
  const wrappedMessage = doc.splitTextToSize(msg, 160);
  const msgBoxHeight = Math.max(30, wrappedMessage.length * 6 + 10);

  drawBox(y, msgBoxHeight);
  doc.text(wrappedMessage, 30, y + 10);

  // ---------------------------------------
  // FOOTER (Soft Brown)
  // ---------------------------------------
  doc.setFontSize(10);
  doc.setTextColor(120, 90, 60);          // muted brown
  doc.text(
    "Thank you for choosing responsible adoption <3",
    105,
    285,
    { align: "center" }
  );

  doc.save(`Appointment_${item.id}.pdf`);
}



function renderAdoptionList() {
  const container = document.getElementById("adoptionList");
  if (!container) return;

  container.innerHTML = "";
  const list = loadAdoptions();
  if (!list || list.length === 0) {
    container.innerHTML = `<p class="adoption-empty">No adoption requests yet.</p>`;
    return;
  }

  list.slice().reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "adoption-item";

    const createdDate = item.date ? new Date(item.date).toLocaleString() : "";
    const statusRaw = item.status || "Pending";
    const statusClass = getAdoptionStatusClass(statusRaw);
    const appointmentText = item.appointment ? formatAppointment(item.appointment) : null;

    let detailsHtml = "";
    if (appointmentText || item.adminMessage) {
      detailsHtml = `
        <div class="adoption-details">
          ${appointmentText ? `<p><strong>Appointment:</strong> ${appointmentText}</p>` : ""}
          ${item.adminMessage ? `<p><strong>Note from admin:</strong> ${item.adminMessage}</p>` : ""}
        </div>
      `;
    }

    const showSlipButton = statusRaw.toLowerCase() === "approved";

    div.innerHTML = `
      <div class="adoption-main">
        <div class="adoption-meta">
          <strong>${item.petName}</strong>
          <span>Requested on: ${createdDate}</span>
        </div>
        <span class="${statusClass}">${statusRaw}</span>
      </div>
      ${detailsHtml}
      ${
        showSlipButton
          ? `<button class="btn ghost adoption-slip-btn" data-slip-id="${item.id}">Download Appointment Slip</button>`
          : ""
      }
    `;

    container.appendChild(div);
  });

  container.querySelectorAll(".adoption-slip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-slip-id");
      if (id) {
        downloadAppointmentSlip(id);
      }
    });
  });
}


if (adoptForm) {
  adoptForm.addEventListener("submit", async e => {
    e.preventDefault();

    const profile = loadProfile();
    const auth = loadAuth();

    let adopterName = document.getElementById("adopterName")?.value.trim() || "";
    let adopterEmail = document.getElementById("adopterEmail")?.value.trim() || "";
    const adopterReason = document.getElementById("adopterReason")?.value.trim() || "";

    // Prefer saved profile / login info if available
    if (profile.name) adopterName = profile.name;
    if (profile.email) adopterEmail = profile.email;
    if (auth.email && !adopterEmail) adopterEmail = auth.email;
    if (auth.name && !adopterName) adopterName = auth.name;

    if (!adopterName || !adopterEmail) {
      alert("Please fill in your name and email, or login first.");
      return;
    }

    try {
      await addAdoptionRecord(selectedPetName, adopterName, adopterEmail, adopterReason);
      closeAdoptModal();

      adoptToast.classList.add("show");
      setTimeout(() => adoptToast.classList.remove("show"), 2000);

      adoptForm.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong while sending your request.");
    }
  });
}
// -----------------------------
// GIVE PET FORM
// -----------------------------
const givePetForm = document.getElementById("givePetForm");
const givePetToast = document.getElementById("givePetSuccess");

if (givePetForm) {
  givePetForm.addEventListener("submit", e => {
    e.preventDefault();
    givePetToast.classList.add("show");
    setTimeout(() => givePetToast.classList.remove("show"), 2000);
    givePetForm.reset();
  });
}

// -----------------------------
// PAW TRAIL
// -----------------------------
function setupPawTrail() {
  let last = 0;
  document.addEventListener("mousemove", e => {
    if (Date.now() - last < 40) return;
    last = Date.now();

    const span = document.createElement("span");
    span.className = "paw-trail";
    span.textContent = "🐾";
    span.style.left = e.clientX + "px";
    span.style.top = e.clientY + "px";

    document.body.appendChild(span);

    requestAnimationFrame(() => span.classList.add("fade"));
    setTimeout(() => span.remove(), 600);
  });
}


// -----------------------------
// CATEGORIES PAGE
// -----------------------------
function setupCategoriesPage() {
  const container = document.getElementById("categoriesContainer");
  if (!container) return;

  const groups = {};
  PETS.forEach(p => {
    if (!groups[p.type]) groups[p.type] = [];
    groups[p.type].push(p);
  });

  container.innerHTML = "";
  Object.keys(groups).forEach(type => {
    const section = document.createElement("section");
    section.className = "section";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `<h2>${type}s</h2>`;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "pets-grid";

    groups[type].forEach(pet => {
      const card = document.createElement("div");
      card.className = "pet-card";
      card.innerHTML = `
        <div class="pet-image-wrapper">
          <img src="${pet.image}">
          <span class="pet-tag">${pet.type}</span>
        </div>
        <div class="pet-body">
          <div class="pet-name-row">
            <h3>${pet.name}</h3>
            <span class="pet-badge">${pet.age}</span>
          </div>
          <p class="pet-description">${pet.description}</p>
          <div class="pet-footer">
            <span class="pet-location">📍 ${pet.location}</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// -----------------------------
// MATCH QUIZ PAGE
// -----------------------------
function setupMatchQuizPage() {
  const form = document.getElementById("quizForm");
  const result = document.getElementById("quizResult");
  if (!form || !result) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const activity = document.getElementById("quizActivity").value;
    const space = document.getElementById("quizSpace").value;
    const allergy = document.getElementById("quizAllergy").value;

    let recommended = "Dog";
    if (allergy === "yes" || allergy === "mild") {
      if (space === "small" || space === "medium") {
        recommended = "Fish";
      } else {
        recommended = "Bird";
      }
    } else if (activity === "low") {
      recommended = "Cat";
    } else if (space === "small") {
      recommended = "Cat";
    } else if (space === "large" && activity === "high") {
      recommended = "Dog";
    }

    const matches = PETS.filter(p => p.type.toLowerCase() === recommended.toLowerCase()).slice(0, 3);

    let html = `<p>Based on your answers, a <strong>${recommended}</strong> might be a good fit for you.</p>`;
    if (matches.length > 0) {
      html += "<p>Here are a few you could check out:</p><ul>";
      matches.forEach(p => {
        html += `<li>${p.name} (${p.age}) - ${p.location}</li>`;
      });
      html += "</ul>";
    }

    result.innerHTML = html;
  });
}


// -----------------------------
// USER LOGIN PAGE
// -----------------------------
function setupLoginPage() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const nameInput = document.getElementById("loginName");
  const emailInput = document.getElementById("loginEmail");

  // Pre-fill from existing auth/profile if available
  const auth = loadAuth();
  const profile = loadProfile();
  if (auth.name) nameInput.value = auth.name;
  if (auth.email) emailInput.value = auth.email;
  if (!nameInput.value && profile.name) nameInput.value = profile.name;
  if (!emailInput.value && profile.email) emailInput.value = profile.email;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    saveAuth({ name, email });

    // Also sync into profile if it's empty
    const currentProfile = loadProfile();
    if (!currentProfile.name || !currentProfile.email) {
      saveProfile({
        ...currentProfile,
        name,
        email
      });
    }

    alert("Logged in successfully!");
    window.location.href = "user-requests.html";
  });
}

// -----------------------------
// PROFILE PAGE
// -----------------------------
function setupProfilePage() {
  const form = document.getElementById("profileForm");
  if (!form) return;

  const nameInput = document.getElementById("profileName");
  const emailInput = document.getElementById("profileEmail");
  const phoneInput = document.getElementById("profilePhone");
  const prefInput = document.getElementById("profilePref");

  const profile = loadProfile();
  if (profile.name) nameInput.value = profile.name;
  if (profile.email) emailInput.value = profile.email;
  if (profile.phone) phoneInput.value = profile.phone;
  if (profile.pref) prefInput.value = profile.pref;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const updated = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      pref: prefInput.value
    };
    saveProfile(updated);
    alert("Profile saved.");
  });
}

// -----------------------------
// ADMIN LOGIN + DASHBOARD
// -----------------------------
function setupAdminLogin() {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value.trim();

    if (email === "admin@pethaven.com" && password === "admin123") {
      localStorage.setItem("petHavenAdminToken", "ok");
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Invalid admin credentials.");
    }
  });
}

async function setupAdminDashboard() {
  const container = document.getElementById("adminRequests");
  if (!container) return;

  const token = localStorage.getItem("petHavenAdminToken");
  if (!token) {
    window.location.href = "admin-login.html";
    return;
  }

  const logout = document.getElementById("adminLogout");
  if (logout) {
    logout.addEventListener("click", e => {
      e.preventDefault();
      localStorage.removeItem("petHavenAdminToken");
      window.location.href = "admin-login.html";
    });
  }

  async function renderAdminList() {
    container.innerHTML = "<p class='adoption-empty'>Loading requests...</p>";
    const list = await apiFetchAllRequests();

    if (!list || list.length === 0) {
      container.innerHTML = "<p class='adoption-empty'>No adoption requests yet.</p>";
      return;
    }

    container.innerHTML = "";
    list.slice().reverse().forEach(item => {
      const card = document.createElement("div");
      card.className = "admin-request-card";

      card.innerHTML = `
        <div class="admin-request-main">
          <h3>${item.petName}</h3>
          <p class="admin-request-user"><strong>${item.adopterName || ""}</strong> · ${item.adopterEmail || ""}</p>
          <p class="admin-request-reason">${item.adopterReason || ""}</p>
        </div>
        <div class="admin-request-controls">
          <label>Status
            <select data-field="status">
              <option value="Pending"${item.status === "Pending" ? " selected" : ""}>Pending</option>
              <option value="Approved"${item.status === "Approved" ? " selected" : ""}>Approved</option>
              <option value="Rejected"${item.status === "Rejected" ? " selected" : ""}>Rejected</option>
            </select>
          </label>

          <label>Appointment
            <input type="datetime-local" data-field="appointment" value="${item.appointment ? item.appointment : ""}">
          </label>

          <label>Message to adopter
            <textarea data-field="adminMessage" rows="2">${item.adminMessage || ""}</textarea>
          </label>

          <button class="btn primary" data-save-id="${item.id}">Save</button>
        </div>
      `;

      container.appendChild(card);

      const statusEl = card.querySelector("[data-field='status']");
      const apptEl = card.querySelector("[data-field='appointment']");
      const msgEl = card.querySelector("[data-field='adminMessage']");
      const saveBtn = card.querySelector("[data-save-id]");

      saveBtn.addEventListener("click", async () => {
        const update = {
          status: statusEl.value,
          appointment: apptEl.value || null,
          adminMessage: msgEl.value
        };

        saveBtn.disabled = true;
        saveBtn.textContent = "Saving...";

        await apiUpdateRequest(item.id, update);

        saveBtn.textContent = "Saved";
        setTimeout(() => (saveBtn.textContent = "Save"), 1200);

        if (update.status === "Approved") {
          alert("Status set to Approved. Please remember to email " + (item.adopterEmail || "the adopter") + " with appointment details.");
        }
      });
    });
  }

  renderAdminList();
}


// -----------------------------
// COMPARE TABLE (SIDE BY SIDE)
// -----------------------------
function renderCompareTable() {
  const container = document.getElementById("compareTableContainer");
  const empty = document.getElementById("compareEmpty");
  if (!container) return;

  const ids = [...compareSet];
  const pets = PETS.filter(p => ids.includes(p.id));

  if (!pets.length) {
    container.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;

  const featureRows = [
    { icon: "🐾", label: "Type", key: "type" },
    { icon: "🎂", label: "Age", key: "age" },
    { icon: "♂️♀️", label: "Gender", key: "gender" },
    { icon: "🏷️", label: "Breed", key: "breed" },
    { icon: "⚖️", label: "Size", key: "size" },
    { icon: "📍", label: "Location", key: "location" },
  ];

  function yesNo(value) {
    return value ? "Yes" : "No";
  }

  const vaccinatedRow = {
    icon: "💉",
    label: "Vaccinated",
    render: p => yesNo(p.vaccinated),
  };

  const descRow = {
    icon: "📝",
    label: "Summary",
    render: p => p.description || "",
  };

  const allRows = [...featureRows, vaccinatedRow, descRow];

  const headerCells = pets
    .map(
      p => `
      <th scope="col">
        <div class="cmp-head">
          <div class="cmp-head-image">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="cmp-head-name">${p.name}</div>
          <button class="cmp-remove" data-remove-id="${p.id}">Remove</button>
        </div>
      </th>
    `
    )
    .join("");

  const rowsHtml = allRows
    .map(row => {
      const cells = pets
        .map(p => {
          const value = row.key ? p[row.key] : row.render(p);
          return `<td>${value || ""}</td>`;
        })
        .join("");
      return `
        <tr>
          <th scope="row" class="cmp-feature">
            <span class="cmp-icon">${row.icon}</span>
            <span>${row.label}</span>
          </th>
          ${cells}
        </tr>
      `;
    })
    .join("");

  container.innerHTML = `
    <div class="compare-table-wrapper">
      <table class="compare-table">
        <thead>
          <tr>
            <th scope="col" class="cmp-feature"></th>
            ${headerCells}
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
      <div class="compare-actions">
        <button class="btn subtle" id="clearCompare">Clear all</button>
      </div>
    </div>
  `;

  // wire up remove buttons
  container.querySelectorAll(".cmp-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.removeId;
      compareSet.delete(id);
      saveCompare(compareSet);
      renderCompareTable();
    });
  });

  // clear all
  const clearBtn = document.getElementById("clearCompare");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      compareSet = new Set();
      saveCompare(compareSet);
      renderCompareTable();
    });
  }
}

function setupComparePage() {
  if (!document.body.classList.contains("page-compare")) return;
  renderCompareTable();
}

// -----------------------------
// CHATBOT (simple helper)
// -----------------------------
function setupChatbot() {
  // only add once
  if (document.getElementById("chatbotToggle")) return;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <button id="chatbotToggle" class="chatbot-toggle" aria-label="Open help chat">💬</button>
    <div id="chatbotWindow" class="chatbot-window" aria-hidden="true">
      <div class="chatbot-header">
        <span>Pet Haven Helper</span>
        <button type="button" id="chatbotClose" aria-label="Close">×</button>
      </div>
      <div id="chatbotMessages" class="chatbot-messages">
        <div class="chatbot-message bot">
          Hi! Ask me about adoption, timings or basic pet care.
        </div>
      </div>
      <form id="chatbotForm" class="chatbot-input-row">
        <input type="text" id="chatbotInput" placeholder="Type your question..." autocomplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  `;
  document.body.appendChild(wrapper);

  const toggle = document.getElementById("chatbotToggle");
  const win = document.getElementById("chatbotWindow");
  const close = document.getElementById("chatbotClose");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const messages = document.getElementById("chatbotMessages");

  function openWin() {
    win.classList.add("open");
    win.setAttribute("aria-hidden", "false");
  }

  function closeWin() {
    win.classList.remove("open");
    win.setAttribute("aria-hidden", "true");
  }

  toggle.addEventListener("click", () => {
    if (win.classList.contains("open")) closeWin();
    else openWin();
  });

  close.addEventListener("click", closeWin);

  function addMessage(text, from) {
    const div = document.createElement("div");
    div.className = "chatbot-message " + from;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function botReply(text) {
    const q = text.toLowerCase();

    if (q.includes("how") && q.includes("adopt")) {
      return "Browse pets, click Adopt and fill the form. Our team will review your request and schedule a visit.";
    }
    if (q.includes("time") || q.includes("timing") || q.includes("open")) {
      return "Shelter visits are usually between 10 AM and 5 PM, subject to confirmation by the team.";
    }
    if (q.includes("care") || q.includes("food") || q.includes("tips")) {
      return "For basic care, see the Pet Care Tips page. Fresh water, safe space and regular vet visits are key.";
    }
    if (q.includes("status") || q.includes("request")) {
      return "You can speak to the shelter staff for latest status. This demo site stores requests locally on this browser.";
    }

    return "I’m just a small helper bot 🤖 The shelter team will contact you after reviewing your request.";
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    const reply = botReply(text);
    setTimeout(() => addMessage(reply, "bot"), 250);
  });
}

// -----------------------------

// INIT
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupThemeToggle();
  setupHeroRandomPet();
  setupFilters();
  setupSearch();
  renderPets();
  renderAdoptionList();
  setupMatchQuizPage();
  setupLoginPage();
  setupProfilePage();
  setupAdminLogin();
  setupAdminDashboard();
  setupComparePage();
  setupChatbot();
  setupPawTrail();
});

