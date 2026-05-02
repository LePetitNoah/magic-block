ServerEvents.recipes(event => {
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:hex_ash_generator"]', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: [
            'malum:tainted_rock',
            'malum:twisted_rock'
        ],
        B: 'malum:refined_soulstone'
    })
})