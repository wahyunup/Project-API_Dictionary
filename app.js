const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").
    value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M4.158 13.93a3.752 3.752 0 0 1 0-3.86a1.5 1.5 0 0 1 .993-.7l1.693-.339a.45.45 0 0 0 .258-.153L9.17 6.395c1.182-1.42 1.774-2.129 2.301-1.938C12 4.648 12 5.572 12 7.42v9.162c0 1.847 0 2.77-.528 2.962c-.527.19-1.119-.519-2.301-1.938L7.1 15.122a.45.45 0 0 0-.257-.153L5.15 14.63a1.5 1.5 0 0 1-.993-.7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.536 8.464a5 5 0 0 1 .027 7.044"/></g></svg></button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <P class="word-meaning">${data[0].meanings[0].definitions[0].definition}</P>
            <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>`;
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
            console.log(sound)
    });
});
function playSound() {
    sound.play();
}