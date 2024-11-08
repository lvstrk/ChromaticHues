const music = (infomusic) => {
const img = document.createElement('img')
img.setAttribute('class', 'song')

img.setAttribute('src', 'assets/Are you bored yet.png')

return img
}

console.log(axios)
axios.get('https://api.institutoalfa.org/api/songs')
.then((res) => {

    console.log(res)
    
}) 