const fighter = {
  name: 'Tony',
  strength: 8,
  intelligence: 1000,
  backpack: [
    'rusty knife',
    'gem',
    'bowling ball'
  ]
}

const cleric = {
  name: 'Zac',
  strength: 9,
  intelligence: 100,
  backpack: [
    'shiny knife',
    'notebook',
    'pool cue'
  ]
}

const wizard = {
  name: 'Med',
  strength: 10,
  intelligence: 200,
  backpack: [
    'wand',
    'fancy boots',
    'chop sticks'
  ]
}

const guild = [fighter, cleric, wizard];


console.log(guild.find((player) => {
  return player.backpack.find((item) => {
    return item === 'notebook';
  })
}))