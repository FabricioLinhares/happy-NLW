const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-27.2198158,-49.6477953], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

L
.marker([-27.2198158,-49.6477953], {icon})
.addTo(map)


function selectImage({currentTarget}) {
    function removeActiveClass(button) {
        button.classList.remove('active')
    }
    
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    const image = currentTarget.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    imageContainer.src = image.src
    currentTarget.classList.add('active')
}