// Team Member Data

const teamMembers = [
    {
      name: 'George Washington',
      age: 67,
      alive: false,
      party: 'Non-Applicable',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'First President, led Revolutionary War.'
    },
    {
      name: 'Thomas Jefferson',
      age: 83 ,
      alive: false,
      party: 'Democrat',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Wrote Declaration of Independence.'
    },
    {
      name: 'Abraham Lincoln',
      age: 56,
      alive: false,
      party: 'Republican',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Led during Civil War, abolished slavery.'
    },
    {
      name: 'Ulyesses S. Grant',
      age: 63,
      alive: false,
      party: 'Republican',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Civil War General, 18th President.'
    },
    {
      name: 'Theodore Roosevelt',
      age: 60,
      alive: false,
      party: 'Republican',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Conservation advocate, led Rough Riders.'
    },
    {
      name: 'William Howard Taft',
      age: 72,
      alive: false,
      party: 'Republican',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        '27th President, later Chief Justice.'
    },
    {
      name: 'Franklin D. Roosevelt',
      age: 63,
      alive: false,
      party: 'Democrat',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        ' New Deal architect, WWII leader.'
    },
    {
      name: 'Dwight D. Eisenhower',
      age: 78,
      alive: false,
      party: 'Republican',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'WWII General, 34th President.'
    },
    {
      name: 'John F. Kennedy',
      age: 46,
      alive: false,
      party: 'Democrat',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Cuban Missile Crisis, moon landing vision.'
    },
    {
      name: 'Barack Obama',
      age: 61,
      alive: true,
      party: 'Democrat',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'First Black President, Affordable Care Act.'
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