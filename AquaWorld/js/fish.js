// ========================================
// AQUAWORLD FISH DATA
// ========================================

const fishData = [

    {
        id: 1,
        name: "Betta Fish",
        scientificName: "Betta splendens",
        type: "Freshwater",
        temperature: "24–30°C",
        ph: "6.0–8.0",
        lifespan: "2–5 years",
        tankSize: "20 Litres+",
        diet: "Carnivore",
        difficulty: "Easy",
        temperament: "Semi-aggressive",
        size: "6–7 cm",
        image: "images/betta.jpg",

        description:
            "Betta fish are beautiful freshwater fish known for their colorful bodies and flowing fins.",

        care:
            "Keep the aquarium clean and maintain stable temperature. Avoid keeping two male bettas together.",

        compatibility:
            "Can sometimes live with peaceful community fish when the aquarium is properly planned."
    },


    {
        id: 2,
        name: "Guppy",
        scientificName: "Poecilia reticulata",
        type: "Freshwater",
        temperature: "22–28°C",
        ph: "6.8–8.0",
        lifespan: "1–3 years",
        tankSize: "40 Litres+",
        diet: "Omnivore",
        difficulty: "Easy",
        temperament: "Peaceful",
        size: "3–6 cm",
        image: "images/guppy.jpg",

        description:
            "Guppies are colorful and active freshwater fish that are excellent for beginners.",

        care:
            "Provide clean water, good filtration and a balanced diet. Guppies prefer groups.",

        compatibility:
            "Excellent community fish and can live with many peaceful species."
    },


    {
        id: 3,
        name: "Neon Tetra",
        scientificName: "Paracheirodon innesi",
        type: "Freshwater",
        temperature: "20–26°C",
        ph: "5.5–7.5",
        lifespan: "3–5 years",
        tankSize: "40 Litres+",
        diet: "Omnivore",
        difficulty: "Easy",
        temperament: "Peaceful",
        size: "3–4 cm",
        image: "images/neon-tetra.jpg",

        description:
            "Neon Tetras are small schooling fish famous for their bright blue and red colors.",

        care:
            "Keep them in groups of at least six and provide plants and hiding places.",

        compatibility:
            "Excellent community fish when kept with peaceful species."
    },


    {
        id: 4,
        name: "Goldfish",
        scientificName: "Carassius auratus",
        type: "Freshwater",
        temperature: "18–24°C",
        ph: "6.5–8.0",
        lifespan: "10–15+ years",
        tankSize: "100 Litres+",
        diet: "Omnivore",
        difficulty: "Medium",
        temperament: "Peaceful",
        size: "15–25 cm",
        image: "images/goldfish.jpg",

        description:
            "Goldfish are one of the most popular aquarium fish in the world.",

        care:
            "Goldfish produce significant waste and require strong filtration and regular water changes.",

        compatibility:
            "Best kept with other suitable goldfish varieties."
    },


    {
        id: 5,
        name: "Angelfish",
        scientificName: "Pterophyllum scalare",
        type: "Freshwater",
        temperature: "24–30°C",
        ph: "6.0–7.5",
        lifespan: "8–10 years",
        tankSize: "120 Litres+",
        diet: "Omnivore",
        difficulty: "Medium",
        temperament: "Semi-aggressive",
        size: "15 cm",
        image: "images/angelfish.jpg",

        description:
            "Angelfish are elegant freshwater cichlids with tall bodies and beautiful fins.",

        care:
            "Provide a tall aquarium with plants, hiding areas and stable water parameters.",

        compatibility:
            "Can live with suitable peaceful fish but may eat very small fish."
    },


    {
        id: 6,
        name: "Oscar Fish",
        scientificName: "Astronotus ocellatus",
        type: "Freshwater",
        temperature: "23–28°C",
        ph: "6.0–8.0",
        lifespan: "10–15 years",
        tankSize: "250 Litres+",
        diet: "Carnivore",
        difficulty: "Hard",
        temperament: "Territorial",
        size: "30–35 cm",
        image: "images/oscar.jpg",

        description:
            "Oscar fish are large intelligent cichlids that can recognize their owners.",

        care:
            "Oscar fish require a very large aquarium, powerful filtration and suitable nutrition.",

        compatibility:
            "Should be kept with carefully selected large fish."
    },


    {
        id: 7,
        name: "Molly",
        scientificName: "Poecilia sphenops",
        type: "Freshwater",
        temperature: "24–28°C",
        ph: "7.0–8.5",
        lifespan: "3–5 years",
        tankSize: "60 Litres+",
        diet: "Omnivore",
        difficulty: "Easy",
        temperament: "Peaceful",
        size: "6–10 cm",
        image: "image/molly.jpg",

        description:
            "Mollies are active livebearers available in many colors and body shapes.",

        care:
            "Provide clean water, plants and a balanced diet.",

        compatibility:
            "Very good community aquarium fish."
    },


    {
        id: 8,
        name: "Platy",
        scientificName: "Xiphophorus maculatus",
        type: "Freshwater",
        temperature: "21–27°C",
        ph: "7.0–8.2",
        lifespan: "3–5 years",
        tankSize: "40 Litres+",
        diet: "Omnivore",
        difficulty: "Easy",
        temperament: "Peaceful",
        size: "5–7 cm",
        image: "image/platy.jpg",

        description:
            "Platies are colorful, peaceful and beginner-friendly livebearers.",

        care:
            "Maintain clean water and feed a balanced diet.",

        compatibility:
            "Excellent choice for community aquariums."
    },


    {
        id: 9,
        name: "Discus",
        scientificName: "Symphysodon",
        type: "Freshwater",
        temperature: "28–31°C",
        ph: "5.5–7.0",
        lifespan: "8–10 years",
        tankSize: "200 Litres+",
        diet: "Omnivore",
        difficulty: "Hard",
        temperament: "Peaceful",
        size: "15–20 cm",
        image: "image/discus.jpg",

        description:
            "Discus fish are famous for their round body shape and stunning colors.",

        care:
            "Discus require warm, clean and stable water with excellent filtration.",

        compatibility:
            "Best kept with other peaceful warm-water fish."
    },


    {
        id: 10,
        name: "Corydoras",
        scientificName: "Corydoras paleatus",
        type: "Freshwater",
        temperature: "22–26°C",
        ph: "6.0–7.5",
        lifespan: "5–8 years",
        tankSize: "60 Litres+",
        diet: "Omnivore",
        difficulty: "Easy",
        temperament: "Peaceful",
        size: "5–7 cm",
        image: "image/corydoras.jpg",

        description:
            "Corydoras are peaceful bottom-dwelling catfish that enjoy living in groups.",

        care:
            "Use smooth substrate and keep them in groups of at least six.",

        compatibility:
            "Excellent community aquarium fish."
    }

];


// ========================================
// HTML ELEMENTS
// ========================================

const container =
    document.getElementById("fishContainer");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const noResults =
    document.getElementById("noResults");


// Current filter

let currentFilter = "All";


// ========================================
// DISPLAY FISH
// ========================================

function displayFish() {

    if (!container) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase();


    const filteredFish =
        fishData.filter(function (fish) {

            const matchesSearch =
                fish.name
                    .toLowerCase()
                    .includes(searchText) ||

                fish.scientificName
                    .toLowerCase()
                    .includes(searchText);


            let matchesFilter = true;


            if (currentFilter === "Freshwater") {

                matchesFilter =
                    fish.type === "Freshwater";

            }


            if (currentFilter === "Saltwater") {

                matchesFilter =
                    fish.type === "Saltwater";

            }


            if (currentFilter === "Easy") {

                matchesFilter =
                    fish.difficulty === "Easy";

            }


            return matchesSearch && matchesFilter;

        });


    container.innerHTML = "";


    if (filteredFish.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    filteredFish.forEach(function (fish) {

        const card =
            document.createElement("div");


        card.className = "fish-card";


        card.innerHTML = `

            <div class="fish-image-container">

                <img
                    src="${fish.image}"
                    alt="${fish.name}"
                >

                <button
                    class="favorite-btn"
                    onclick="toggleFavorite(${fish.id})"
                >
                    ❤️
                </button>

            </div>


            <div class="fish-card-content">

                <span class="fish-type">
                    ${fish.type}
                </span>


                <h3>
                    ${fish.name}
                </h3>


                <p class="scientific">
                    ${fish.scientificName}
                </p>


                <p>
                    ${fish.description}
                </p>


                <div class="fish-info">

                    <span>
                        🌡️ ${fish.temperature}
                    </span>

                    <span>
                        💧 pH ${fish.ph}
                    </span>

                </div>


                <div class="card-bottom">

                    <span class="difficulty">
                        ${fish.difficulty}
                    </span>


                    <a
                        href="details.html?id=${fish.id}"
                        class="details-btn"
                    >
                        View Details →
                    </a>

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


// ========================================
// SEARCH
// ========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        displayFish
    );

}


// ========================================
// FILTER
// ========================================

filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentFilter =
                button.dataset.filter;


            displayFish();

        }
    );

});


// ========================================
// FAVORITES
// ========================================

function toggleFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    alert("Favorite updated ❤️");

}


// ========================================
// INITIAL LOAD
// ========================================

displayFish();