let devTechnologiesArray = []
let technologiesArray = []


function captureDevName () {
  const nameInput = document.getElementById ('name')
  return nameInput.value
}

function captureExperience (){
  const experienceRadios = document.getElementsByName ('timeExperience')
  for (const radioOptions of experienceRadios){
    if (radioOptions.checked) {
      return radioOptions.value
    }
  } return null 
}


function saveData (){
  const devName = captureDevName ()
  const experience = captureExperience ()


  const devData = {
    name: devName,
    technologies: [technologiesArray],
    experience : experience
    
  }

  devTechnologiesArray.push(devData)
  console.log (devTechnologiesArray)
}


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

  technologyNameInput.addEventListener('change', () => {
    const technologyNameValue = technologyNameInput.value;
    technologiesArray.push(technologyNameValue); 
  });

  const radioOptions = ['0-2 anos', '3-4 anos', '5+ anos']

  radioOptions.forEach ((text, index) => {
  const experienceTime = document.createElement ('li')
  
  const radioExperience = document.createElement ('input')
  radioExperience.type = 'radio'
  radioExperience.name = 'timeExperience'
  radioExperience.value = text
  radioExperience.id = 'radioExperience${index +1}'

  const labelExperience = document.createElement ('label')
  labelExperience.htmlFor = radioExperience.id
  labelExperience.textContent = text

  experienceTime.append (radioExperience, labelExperience)
  technologies.appendChild (experienceTime)
})

  technologySection.append (textTecnology, technologies)
}

function removeTechnology () {
  const technologySection = document.getElementById ('technology')

  const title = document.getElementsByTagName ('h3')
  const technologiesSection = document.getElementsByTagName ('ul')

  technologySection.removeChild (title[title.length - 1])
  technologySection.removeChild (technologiesSection[technologiesSection.length - 1])
}