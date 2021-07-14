const gallery = document.getElementById('gallery')
const popup = document.getElementById('popup')
const selectedImage = document.getElementById('selectedImage')
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const selectedIndex = null

imageIndexes.forEach(i => {
    const image = document.createElement('img')
    image.src = `/images/cover__episode-${i}.jpg`
    image.alt = `Photos of horizon ${i}`
    image.classList.add('galleryImg')

    image.addEventListener('click', () => {
        //popup stuff
        popup.style.transform = `translateY(0)`
        selectedImage.src = `/images/cover__episode-${i}.jpg`
        selectedImage.alt = `Photos of horizon ${i}`
    })

    gallery.appendChild(image)
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`
    popup.src = ''
    popup.alt = ''
})