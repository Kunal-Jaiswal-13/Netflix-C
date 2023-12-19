let movies = [
    {
      name: "Animal",
      poster: "./image/animal.jpg",
      rating: 7.3,
      description:
        "A son undergoes a remarkable transformation as the bond with his father begins to fracture and he becomes consumed by a quest for vengeance.",
    },
    {
      name: "Kabir Singh ",
      poster: "./image/kabirsingh.jpg",
      rating: 7,
      description:
        "Kabir, a genius yet hostile medical student, falls in love with Preeti from his college. When Preeti's father spots the couple kissing, he opposes their relationship and decides to marry her off.",
    },
    {
      name: "shershaah",
      poster: "./image/shershaah.jpg",
      rating: 8.3,
      description:
        "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
    },
    {
      name: "chhichhore",
      poster: "./image/chhichhore.jpg",
      rating: 8.3,
      description:
        "A tragic incident forces Anirudh, a middle-aged man, to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers.",
    },
    {
      name: "M.S. Dhoni : The Untold Story",
      poster: "./image/M.S. Dhoni.jpg",
      rating: 8,
      description:
        "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    },
    {
      name: "satyaprem ki katha",
      poster: "./image/Satyaprem Ki Katha.jpg",
      rating: 7.2,
      description:
        "Satyaprem, a middle-class man, falls in love with Katha, a young woman who is overwhelmed by her breakup. However, when he is asked to marry her, he tries hard to restore her faith in love and prove himself as a worthy person.",
    },
    {
      name: "Rocky Aur Rani Kii Prem Kahaani",
      poster: "./image/RARKPK.jpg",
      rating: 6.7,
      description:
        "Flamboyant Punjabi Rocky and intellectual Bengali journalist Rani fall in love despite their differences. After facing family opposition, they decide to live with each other's families for three months before getting married.",
    },
    {
      name: "Good newwz",
      poster: "./image/good newwz.jpg",
      rating: 6.8,
      description:
        "Two married couples are unsuccessful in conceiving and seek medical treatment. However, they end up in a complicated situation after their doctor makes a blunder.",
    },
    {
      name: "Tiger 3",
      poster: "./image/tiger 3.jpg",
      rating: 7.4,
      description:
        "Tiger 3 is a 2023 Indian Hindi-language action thriller film directed by Maneesh Sharma and produced by Aditya Chopra under Yash Raj Films. The film stars Salman Khan, Katrina Kaif and Emraan Hashmi in lead roles. A sequel to Tiger Zinda Hai, it is the fifth installment in the YRF Spy Universe.",
    },
    {
      name: "Gadar 2",
      poster: "./image/gadar 2.jpg",
      rating: 5.3,
      description:
        "When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs.",
    },
    {
      name: "Mission Majnu",
      poster: "./image/mission majnu.jpg",
      rating: 7.1,
      description:
        "Amid the Indo-Pakistani War of 1971, a RAW agent enters Pakistan to prove the country's complicity in nuclear weapons. To succeed, he must alert his nation and avoid an attack on the wrong location.",
    },
    {
      name: "Avengers Endgame",
      poster:
        "./image/avengers endgame.jpg",
      rating: 8.4,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      name: "Lagaan",
      poster:
        "./image/lagaan.jpg",
      rating: 8.1,
      description:
        "During the British Raj, a farmer named Bhuvan accepts the challenge of Captain Andrew Russell to beat his team in a game of cricket and enable his village to not pay taxes for the next three years.",
    },
    {
      name: "Oppenheimer",
      poster:
        "./image/oppenheimer.jpg",
      rating: 8.4,
      description:
        "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945."
    },
    {
      name: "Moon Light",
      poster:
        "./image/moonlight.jpg",
      rating: 7.4,
      description:
        "Chiron, a young African-American boy, finds guidance in Juan, a drug dealer, who teaches him to carve his own path. As he grows up in Miami, Juan's advice leaves a lasting impression on him.",
    },
    {
      name: "Bohemian Raphsody",
      poster:
        "./image/bohemian.jpg",
      rating: 7.9,
      description:
        "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
    },
    {
      name: "The Avengers",
      poster:
        "./image/the avengers.jpeg",
      rating: 8,
      description:
        "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    },
    {
      name: "Jhon Wick",
      poster:
        "./image/john wick.jpg",
      rating: 7.9,
      description:
        "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is drawn back into the criminal underworld he had previously abandoned. ",
    },
    {
      name: "Maleficient",
      poster:
        "./image/angelina.jpg",
      rating: 6.4,
      description:
        "Co-produced by Walt Disney Pictures and Roth Films, the film is a live-action retelling of Walt Disney's 1959 animated film Sleeping Beauty, itself an adaptation of Charles Perrault's 1697 fairy tale, but tells the story from the perspective of the evil fairy Maleficent, played by Angelina Jolie.",
    },
    {
      name: "Leo",
      poster:
        "./image/leo.jpg",
      rating: 7.4,
      description:
        "Google users Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.",
    },
  ];
  
  function searchMovie() {
    let movieName = document.getElementById("search").value;
  
    if (movieName !== "") {
      let result = movies.filter(function (movie) {
        return movie.name.toUpperCase().includes(movieName.toUpperCase());
      });
      displayMovies(result);
    } else {
      displayMovies(movies);
    }
  }
  
  function displayMovies(data) {
    document.getElementById("movies").innerHTML = "";
  
    let htmlString = ``;
  
    for (let i = 0; i < data.length; i++) {
      htmlString =
        htmlString +
        `<div class="movie">
              <div class="overlay">
                  <div class="video">
                  </div>
  
                  <div class="details">
                      <h1>${data[i].name}</h1>
                      <h2>IMDB : ${data[i].rating}</h2>
                      <p>${data[i].description}</p>
                  </div>
              </div>
              <img src="${data[i].poster}" alt="no image found" class="poster"/>
          </div> `;
    }
  
    document.getElementById("movies").innerHTML = htmlString;
  }
  displayMovies(movies);
  
  // let movie = document.createElement("div");
  // movie.className = "movie";
  
  // let overlay = document.createElement("div");
  // overlay.className = "overlay";
  // movie.appendChild(overlay);
  
  // let video = document.createElement("div");
  // video.className = "video";
  // overlay.appendChild(video);
  
  // let details = document.createElement("div");
  // details.className = "details";
  // overlay.appendChild(details);
  
  // let heading1 = document.createElement("h1");
  // details.appendChild(heading1);
  
  // let heading2 = document.createElement("h2");
  // details.appendChild(heading2);
  
  // let para = document.createElement("p");
  // details.appendChild(para)
  
  // console.log(movie);
  