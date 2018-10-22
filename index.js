const aside = document.getElementById("h-aside")
const toggleSidebar = document.getElementById("toggle-sidebar")


toggleSidebar.addEventListener(
    "click",
    () => aside
            .setAttribute('data-state', aside.getAttribute('data-state') === 'open' ? 'closed' : 'open')
)




const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const RandomItem = array => {
    const randomIndex = rand(0, array.length - 1)
    return array[randomIndex]
}

const spawnMonster = () => {
    const dsize = ['extra-small', 'small', 'large', 'humongous']
    const dtype = ['ice', 'fire', 'lightning', 'earth']
    const dmonster = ['dragon', 'cyclop', 'orc', 'ghoul']

    return RandomItem(dsize) + ' ' + RandomItem(dtype) + ' ' + RandomItem(dmonster)
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

    for (const monster of spawnMonsters) {
        let v = document.createElement("p") 
        v.textContent = monster
        
        battleFieldDOM.appendChild(v)
    }
    
}
  