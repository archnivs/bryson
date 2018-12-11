
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const RandomItem = array => {
    const randomIndex = rand(0, array.length - 1)
    return array[randomIndex]
}

const MonsterTamers = [
        'techno', 
        'shan', 
        'solar', 
        'pitch', 
        'gon', 
        'chaden'
]

const spawnMonster = () => {

    const dsize = [
        'small', 
        'normal', 
        'large'
    ]

    const dtype = [
        'ice', 
        'fire', 
        'lightning', 
        'earth', 
        'storm', 
        'wood', 
        'air' , 
        'crystal', 
        'shadow', 
        'light',
        'ice'
    ]

    const dmonster = [
        'dragon', 
        'cyclop', 
        'orc', 
        'ghoul', 
        'imp', 
        'seraph', 
        'goblin', 
        'kizen', 
        'mermaid', 
        'centaur', 
        'gremlin', 
        'banshee', 
        'manticore', 
        'demon',
        'basilisk',
        'vampire'
    ]

    let tamer = RandomItem(MonsterTamers)

    return {
        tamer,
        monster: RandomItem(dsize) + ' ' + RandomItem(dtype)  + ' ' + RandomItem(dmonster) 
    }
            
}


let spawnMonsters = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughMonstersSpawned = Math.random() > 0.99
                
                if (!enoughMonstersSpawned)          
                    return {
                        value: spawnMonster(),
                        done: false
                    }

                return { done: true }
            }
        }
    }
}

let spawnTheArmy = () => {

    const battleFieldDOM = document.getElementById("MonsterArmy")   
    battleFieldDOM.innerHTML = ''; 

    for ( const tamer of MonsterTamers) {
        
        let tamerDOM = document.createElement('div')
        tamerDOM.className = "monster-tamer"
        tamerDOM.setAttribute("id", "tamer-" + tamer)
        tamerDOM.innerHTML = "<h3>" + tamer + " <br><span class='monster-count'>0</span></h3>"
        battleFieldDOM.appendChild(tamerDOM)

    }

    for (const spawn of spawnMonsters) {
        
        let tamer = document.getElementById("tamer-" + spawn.tamer)

        let monster = document.createElement('p')

        monster.innerText = spawn.monster

        tamer.appendChild(monster)

        battleFieldDOM.appendChild(tamer)

    }
      
    let mt = document.getElementsByClassName("monster-tamer")

    for (const m of mt ) {

        let id = m.id
        let t =  document.getElementById(id)
        t.querySelector(".monster-count").innerText = t.getElementsByTagName("p").length

    }
}

