const music = (infomusic) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'song')
    img.setAttribute('src', 'https://api.institutoalfa.org/api/songs/image/'+infomusic.image.filename)

    return img
}

console.log(axios)
axios.get('https://api.institutoalfa.org/api/songs')
    .then((res) => {

        const canciones = res.data.songs

        canciones.map((canción) => {
            document.getElementById('container')
            .appendChild(music(canción))
        })

    }) 