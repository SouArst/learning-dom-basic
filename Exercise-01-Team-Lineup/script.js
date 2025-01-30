const position = [
{position : "Defenders", players : []},
{position : "Midfielders" , players : [] },
{position : "Strikers", players : []}]


const rosterSection = document.getElementById ('roster')

function displayRoster (){
rosterSection.innerHTML = ''  
position.forEach(obj => {
  const playerLi = document.createElement ('li')
  playerLi.textContent = `Position: ${obj.position}, Player: ${obj.players.length ? obj.players.map(player => `${player.name} - Number: ${player.number}`).join(', ') : 'No players'}`
  rosterSection.appendChild(playerLi)
})
}

displayRoster ()

function addPlayer(){
  const playerSection = document.getElementById ('players-list') 

  const player = document.createElement ('h3')
  player.innerText = "Player"

  const lineup = document.createElement ('ul')

  

  const playerPosition = document.createElement('li')
  playerPosition.innerText = "Position: "
  const selectPosition = document.createElement ('select')
  selectPosition.id = 'position'
  selectPosition.name = 'position'
  position.forEach(pos =>{
    const option = document.createElement('option')
    option.value = pos.position
    option.textContent = pos.position
    selectPosition.appendChild (option)
    lineup.appendChild(playerPosition)
    playerPosition.appendChild(selectPosition)

  })


  const playerName = document.createElement ('li')
  playerName.innerText = "Name: "
  const nameInput = document.createElement ('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  playerName.appendChild (nameInput)
  lineup.appendChild(playerName)


  const playerNumber = document.createElement('li')
  playerNumber.innerText = "Number: "
  const numberInput = document.createElement ('input')
  numberInput.type = 'number'
  numberInput.name = 'number'
  playerNumber.appendChild(numberInput)
  lineup.appendChild (playerNumber)

  const saveButton = document.createElement('button')
  saveButton.innerText = "Save Player"
  saveButton.onclick = function () {
    const selectedPosition = selectPosition.value;
    const playerNameValue = nameInput.value
    const playerNumberValue = numberInput.value

    const positionObject = position.find (pos => pos.position === selectedPosition)
    if (positionObject) {
    positionObject.players.push({name: playerNameValue, number: playerNumberValue})
    
    displayRoster ()

    nameInput.value = "";
    numberInput.value = "";
    console.log(positionObject.players);
  }

  }


  lineup.appendChild (saveButton)
  playerSection.append (player, lineup)
}

