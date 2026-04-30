ServerEvents.recipes(event => {
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:spirit_combiner"]', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:clay',
        B: 'malum:refined_soulstone',
        C: 'malum:runewood_log'
    })
})