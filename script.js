const music = (infomusic) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'song')
    img.setAttribute('src', 'https://api.institutoalfa.org/api/songs/image/' + infomusic.image.filename)

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




let scroll = 0
document.addEventListener('wheel', (e) => {
    const container = document.getElementById('section-scrolling')
    if (e.deltaY < 0) {
        scroll = scroll > 60 ? scroll - 60 : 0
        container.style.transform = `translateX(-${scroll}px)`
    } else if (e.deltaY > 0) {
        scroll = scroll > container.scrollWidth - container.clientWidth / 2 ? scroll : scroll += 60
        container.style.transform = `translateX(-${scroll}px)`
    }
})