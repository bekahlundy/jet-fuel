require ('../styles.scss');

const urlBtn = $('.url-btn')
const folderBtn = $('.folder-btn')

urlBtn.on('click', () => {
  event.preventDefault()
  let input = $('.url-input').val()
  $('.url-list').append(
    `<p>${input}<p>`
  )
})

const saveFolder = (input) => {
  fetch('http://localhost:3000/api/folders', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))
}

folderBtn.on('click', () => {
  event.preventDefault()
  let input = $('.folder-input').val()
  $('.url-folder').append(
    `<p>${input}<p>`
  )
  saveFolder(input)
})
