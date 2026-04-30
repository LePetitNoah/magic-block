ServerEvents.recipes(event => {
    event.remove({ output: "malum:hex_ash" })
    event.remove({ input: "malum:hex_ash" })
    event.remove({ id: 'malum:spirit_infusion/hex_ash' })
})