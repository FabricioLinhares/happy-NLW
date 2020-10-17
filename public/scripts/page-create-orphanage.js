const map = L.map('mapid').setView([-27.2198158,-49.6477953], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

let marker;
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

function addPhotoField() {
    const imagesContainer = document.querySelector('#images')
    const uploadFields = imagesContainer.querySelectorAll('.new-upload')

    const newUploadField = uploadFields[uploadFields.length - 1].cloneNode(true)
    const input = newUploadField.querySelector('input')

    if (!input.value) return

    input.value = ''
    imagesContainer.appendChild(newUploadField)
}

function deleteField({currentTarget}) {
    const imagesContainer = document.querySelector('#images')
    const uploadFields = imagesContainer.querySelectorAll('.new-upload')
    
    if(uploadFields.length <= 1) {
        currentTarget.parentNode.children[0].value = ''
        return
    }

    const uploadField = currentTarget.parentNode

    uploadField.remove()
}

function toggleSelect({currentTarget}) {
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    currentTarget.classList.add('active')


    const input = document.querySelector('[name="open_on_weekends"]')
    const value = currentTarget.dataset.value

    input.value = value
}