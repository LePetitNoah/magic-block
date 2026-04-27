const SPIRITS = [
    "malum:sacred_spirit",
    "malum:wicked_spirit",
    "malum:arcane_spirit",
    "malum:eldritch_spirit",
    "malum:aerial_spirit",
    "malum:aqueous_spirit",
    "malum:earthen_spirit",
    "malum:infernal_spirit",
]

ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "malum:void_favor",
            "input": {
                "item": "malum:hex_ash"
            },
            "result": {
                "count": 1,
                "id": "kubejs:mystery_spirit"
            }
        }
    )
})

EntityEvents.spawned('item', event => {
    if (event.entity.item.id !== 'kubejs:mystery_spirit') return

    let entity = event.entity
    let level = entity.level

    level.server.scheduleInTicks(1, () => {
        if (!entity.isAlive() || entity.isRemoved()) return

        let pos = entity.position()
        let motion = entity.getDeltaMovement()
        let count = entity.item.getCount()

        entity.discard()

        for (let i = 0; i < count; i++) {
            let randomIndex = level.random.nextInt(SPIRITS.length)
            let randomSpirit = SPIRITS[randomIndex]

            let newItem = level.createEntity('item')
            newItem.item = Item.of(randomSpirit)

            newItem.setPos(pos.x(), pos.y(), pos.z())
            newItem.setDeltaMovement(motion)
            newItem.spawn()
        }
    })
})

