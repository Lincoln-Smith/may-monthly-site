// Team Member Data

const teamMembers = [
    {
      name: 'George Washington',
      age: 67,
      alive: false,
      party: 'Non-Applicable',
      biography:
        'First President, led Revolutionary War.',
        image: 'imgs/GW-300x300.png'
    },
    {
      name: 'Thomas Jefferson',
      age: 83 ,
      alive: false,
      party: 'Democrat',
      biography:
        'Wrote Declaration of Independence.',
        image: 'imgs/TJ-300x300.png'
    },
    {
      name: 'Abraham Lincoln',
      age: 56,
      alive: false,
      party: 'Republican',
      biography:
        'Led during Civil War, abolished slavery.',
        image: 'imgs/AL-300x300.png'
    },
    {
      name: 'Ulyesses S. Grant',
      age: 63,
      alive: false,
      party: 'Republican',
      biography:
        'Civil War General, 18th President.',
        image: 'imgs/UG-300x300.png'
    },
    {
      name: 'Theodore Roosevelt',
      age: 60,
      alive: false,
      party: 'Republican',
      biography:
        'Conservation advocate, led Rough Riders.',
        image: 'imgs/TR-300x300.png'
    },
    {
      name: 'William Howard Taft',
      age: 72,
      alive: false,
      party: 'Republican',
      biography:
        '27th President, later Chief Justice.',
        image: 'imgs/WT-300x300.png'
    },
    {
      name: 'Franklin D. Roosevelt',
      age: 63,
      alive: false,
      party: 'Democrat',
      biography:
        ' New Deal architect, WWII leader.',
        image: 'imgs/FR-300x300.png'
    },
    {
      name: 'Dwight D. Eisenhower',
      age: 78,
      alive: false,
      party: 'Republican',
      biography:
        'WWII General, 34th President.',
        image: 'imgs/DE-300x300.png'
    },
    {
      name: 'John F. Kennedy',
      age: 46,
      alive: false,
      party: 'Democrat',
      biography:
        'Cuban Missile Crisis, moon landing vision.',
        image: 'imgs/JK-300x300.png'
    },
    {
      name: 'Barack Obama',
      age: 61,
      alive: true,
      party: 'Democrat',
      biography:
        'First Black President, Affordable Care Act.',
        image: 'imgs/BO-300x300.png'
    }
    
  ]
  
  function generateTeamCards () {
    const teamCardsContainer = document.getElementById('teamCards')
  
    teamMembers.forEach(member => {
      const card = document.createElement('div')
      card.classList.add('col-md-4')
  
      //style the BGColor of my card based on pos
      let backgroundColor
  
      switch (member.party.toLowerCase()) {
        case 'republican':
          backgroundColor = 'red'
          break
        case 'democrat':
          backgroundColor = 'blue'
          break
        case 'other':
          backgroundColor = 'green'
          break
        default:
          backgroundColor = 'purple'
      }
      
  
      card.innerHTML = `
              <div class="card">
                  <div class = "card-header">
                      ${member.name}
                  </div>

                  <div id="cardBody" class="card-body"
                  <p><strong>Age:</strong> ${member.age}</p>
              </div>

              <div id="cardBody" class="card-body"
              <p><strong>Alive:</strong> ${member.alive}</p>
          </div>

          <img src="${member.image}">

              <div id="cardBody" class="card-body"
              <p><strong>Biography:</strong> ${member.biography}</p>
          </div>

                  <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                      <p><strong>Political Party:</strong> ${member.party}</p>
                  </div>
              </div>
          `
  //will update the BG style on each child of the card
      for (let i = 0; i < card.children.length; i++) {
        card.children[i].style.backgroundColor = backgroundColor
      }
  
      teamCardsContainer.appendChild(card)
    })
  }
  
  window.onload = generateTeamCards()

  //add image aspect to each card, thats all u have to do