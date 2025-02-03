function addTechnology() {
  const technologySection = document.getElementById ('technology')

  const textTecnology = document.createElement ('h3')
  textTecnology.innerText = "Add Technology"

  const technologies = document.createElement ('ul')

  const technologyName = document.createElement ('li')
  technologyName.innerText = "Technology Name: "
  const technologyNameInput = document.createElement ('input')
  technologyNameInput.type = 'text'
  technologyNameInput.name = 'technologyName'

  technologyName.appendChild (technologyNameInput)
  technologies.appendChild (technologyName)

  const experienceTime = createElement ('li')
  experienceTime.innerText = "Experience time"
  const radioTime = document.createElement ('input')
  radioTime.type = 'radio'
  


  technologySection.append (textTecnology, technologies)
}