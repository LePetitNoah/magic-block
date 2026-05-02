ServerEvents.recipes(event => {
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:spirit_combiner"]', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'minecraft:clay',
        B: 'malum:refined_soulstone',
        C: 'malum:runewood_log',
        D: [
            'malum:tainted_rock',
            'malum:twisted_rock'
        ]
    })
})