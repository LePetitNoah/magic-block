ServerEvents.recipes(event => {
    
    const itemsToRemove = [
        "malum:hex_ash",
    ]
    
    itemsToRemove.forEach(item => {
        event.remove({ output: item })
        event.remove({ input: item })
    })

    const customRecipesToRemove = [
        'malum:spirit_infusion/hex_ash',
        'malum:spirit_infusion/imitation_flesh',
        'malum:create/washing/crushed_soulstone',
        'malum:bonemeal_from_grim_talc',
    ]

    customRecipesToRemove.forEach(id => {
        event.remove({ id: id })
    })
})