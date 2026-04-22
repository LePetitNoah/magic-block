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
        'malum:create/washing/crushed_soulstone',
    ]

    customRecipesToRemove.forEach(id => {
        event.remove({ id: id })
    })
})