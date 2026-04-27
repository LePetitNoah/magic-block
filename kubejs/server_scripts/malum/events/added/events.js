BlockEvents.rightClicked(event => {
    const { block, player, hand } = event
    
    const mainHandItem = player.mainHandItem
    
    if (!player.isCrouching()) return
    if (block.id != 'malum:blighted_earth') return
    if (hand != 'MAIN_HAND') return
    if (mainHandItem && !mainHandItem.isEmpty()) return
    
    
    const itemEntity = block.level.createEntity('item')
    itemEntity.item = 'malum:hex_ash'
    itemEntity.setPosition(block.x + 0.5, block.y + 1, block.z + 0.5)
    itemEntity.setMotion(
        (Math.random() - 0.5) * 0.2,
        0.3,
        (Math.random() - 0.5) * 0.2
    )
    itemEntity.spawn()

    player.level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.item.pickup', 'blocks', 1.0, 1.0)
})