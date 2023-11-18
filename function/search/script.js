// 포켓몬 데이터
const pokemonData = [
    {
        id: 1,
        name: '이상해씨',
        type: '풀',
        url: './assets/000101.png'
    },
    {
        id: 2,
        name: '파이리',
        type: '불',
        url: './assets/000401.png'
    },
    {
        id: 3,
        name: '꼬부기',
        type: '물',
        url: './assets/000701.png'
    },
    {
        id: 4,
        name: '삐삐',
        type: '페어리',
        url: './assets/003501.png'
    },
    {
        id: 5,
        name: '팬텀',
        type: '고스트 & 독',
        url: './assets/009401.png'
    },
    {
        id: 6,
        name: '내루미',
        type: '노말',
        url: './assets/010801.png'
    },
    {
        id: 7,
        name: '잠만보',
        type: '노말',
        url: './assets/014301.png'
    },
    {
        id: 8,
        name: '망나뇽',
        type: '드래곤 & 비행',
        url: './assets/014901.png'
    }
];

// 포켓몬 데이터 뿌려주기
function showPokemonData (pokemonList) {
    const spreadData = document.querySelector(".pokemonContainer");
    
    pokemonData.forEach(pokemon => {
        
            const pokemonElement = document.createElement("div")
            pokemonElement.innerHTML = `
                <img src="${pokemon.url}" alt = "${pokemon.name}" />
                <div class="pokemonText">
                    <h1>${pokemon.name}</h1>
                    <h3>${pokemon.type}</h3>
                </div>
            `;
            spreadData.appendChild(pokemonElement);
        
    });
}
showPokemonData(pokemonData);

// 포켓몬 검색 기능
const searchInput = document.querySelector(".inputBox");
const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", () => {
    const str = searchInput.value;
    console.log(str);
    const correct = pokemonData.filter(pokemon => 
        pokemon.name.includes(str)
    );
    console.log(correct);
    showPokemonData(correct);
});