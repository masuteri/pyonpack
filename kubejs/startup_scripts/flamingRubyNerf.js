ItemEvents.modification(event => {
    event.modify('betternether:flaming_ruby_sword', item => {
        item.attackDamage = 8.2
        item.attackSpeed = 1.9
    })
    event.modify('betternether:flaming_ruby_pickaxe', item => {
        item.attackSpeed = 1.2
    })
    event.modify('betternether:flaming_ruby_shovel', item => {
        item.attackSpeed = 1.1
    })
    event.modify('betternether:flaming_ruby_axe', item => {
        item.attackSpeed = 1
    })
});