let api = "https://www.breakingbadapi.com/api/characters"

async function getBreakingBad(){
    const response = await fetch(api);
    const data = await response.json();
    data.map(function(actors){
        console.log(actors.name);
    })
    data.map(function(actors){

        document.querySelector('#selectActor').innerHTML = 
        `<select onchange="selectedActor(this.value)">
            ${
                data.map(actors => `<option>${actors.name} </option>`)
            }
        </select>`
    })

}
 async function selectedActor(ac){
      const response = await fetch(`${api}?name=${ac}`);
      const data = await response.json();
      console.log(data[0])
     document.querySelector('#actroName').innerText= data[0].name;
     document.querySelector('#actornickname').innerText= data[0].nickname;
     document.querySelector('#actorbirthday').innerText= data[0].birthday;
     document.querySelector('#actorImg').src = data[0].img;
     }


getBreakingBad();





    
    
    