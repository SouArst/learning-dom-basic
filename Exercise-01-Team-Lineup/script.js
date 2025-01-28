const position = [
{position : "Defender", players : []},
{position : "Midfielder" , players : [] },
{position : "Striker", players : []}]

function addPlayer(){
  const playerSection = document.getElementById ('players-list') 

  const player = document.createElement ('h3')
  player.innerText = "Player"

  const lineup = document.createElement ('ul')

  
  //Seleciona a posição do jogador
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


  //Adiciona o nome do jogador
  const playerName = document.createElement ('li')
  playerName.innerText = "Name: "
  const nameInput = document.createElement ('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  playerName.appendChild (nameInput)
  lineup.appendChild(playerName)

  //Adiciona o numero de jogador
  const playerNumber = document.createElement('li')
  playerNumber.innerText = "Number: "
  const numberInput = document.createElement ('input')
  numberInput.type = 'number'
  numberInput.name = 'number'
  playerNumber.appendChild(numberInput)
  lineup.appendChild (playerNumber)


  playerSection.append (player, lineup)
}
