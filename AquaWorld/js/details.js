// ========================================
// FISH DETAILS
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
        image: "image/betta.jpg",
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
        image: "image/guppy.jpg",
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
        image: "image/neon-tetra.jpg",
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
        image: "image/goldfish.jpg",
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
        image: "image/angelfish.jpg",
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
        image: "image/oscar.jpg",
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
// GET ID FROM URL
// ========================================

const params =
    new URLSearchParams(window.location.search);

const id =
    Number(params.get("id"));


// ========================================
// FIND FISH
// ========================================

const fish =
    fishData.find(
        item => item.id === id
    );


// ========================================
// HTML ELEMENTS
// ========================================

const details =
    document.getElementById("fishDetails");

const careSection =
    document.getElementById("careSection");


// ========================================
// DISPLAY DETAILS
// ========================================

if (!fish) {

    details.innerHTML = `

        <div class="not-found">

            <h1>
                🐟 Fish Not Found
            </h1>

            <p>
                Please go back and select a fish.
            </p>

            <a
                href="fish.html"
                class="btn"
            >
                View Fish
            </a>

        </div>

    `;

} else {

    document.title =
        `AquaWorld | ${fish.name}`;


    details.innerHTML = `

        <div class="details-image">

            <img
                src="${fish.image}"
                alt="${fish.name}"
            >

        </div>


        <div class="details-content">

            <span class="fish-type">
                ${fish.type}
            </span>


            <h1>
                ${fish.name}
            </h1>


            <p class="scientific">
                ${fish.scientificName}
            </p>


            <p class="description">
                ${fish.description}
            </p>


            <div class="details-grid">

                <div>
                    <span>🌡️ Temperature</span>
                    <strong>${fish.temperature}</strong>
                </div>


                <div>
                    <span>💧 pH Range</span>
                    <strong>${fish.ph}</strong>
                </div>


                <div>
                    <span>⏳ Lifespan</span>
                    <strong>${fish.lifespan}</strong>
                </div>


                <div>
                    <span>🏠 Tank Size</span>
                    <strong>${fish.tankSize}</strong>
                </div>


                <div>
                    <span>🍽️ Diet</span>
                    <strong>${fish.diet}</strong>
                </div>


                <div>
                    <span>⭐ Difficulty</span>
                    <strong>${fish.difficulty}</strong>
                </div>


                <div>
                    <span>📏 Size</span>
                    <strong>${fish.size}</strong>
                </div>


                <div>
                    <span>🐟 Temperament</span>
                    <strong>${fish.temperament}</strong>
                </div>

            </div>


            <button
                class="btn"
                onclick="addFavorite(${fish.id})"
            >
                ❤️ Add to Favorites
            </button>

        </div>

    `;


    careSection.innerHTML = `

        <div class="care-card">

            <div class="care-icon">
                🧪
            </div>

            <h2>
                Care Information
            </h2>

            <p>
                ${fish.care}
            </p>

        </div>


        <div class="care-card">

            <div class="care-icon">
                🐠
            </div>

            <h2>
                Compatibility
            </h2>

            <p>
                ${fish.compatibility}
            </p>

        </div>


        <div class="care-card">

            <div class="care-icon">
                🍽️
            </div>

            <h2>
                Feeding
            </h2>

            <p>
                Feed an appropriate amount of ${fish.diet.toLowerCase()}
                food according to the fish size and aquarium conditions.
                Avoid overfeeding.
            </p>

        </div>

    `;

}


// ========================================
// FAVORITE
// ========================================

function addFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );


    if (!favorites.includes(id)) {

        favorites.push(id);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("Added to Favorites ❤️");

    } else {

        alert("This fish is already in your Favorites ❤️");

    }

}