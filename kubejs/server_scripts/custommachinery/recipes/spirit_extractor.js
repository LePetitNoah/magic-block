ServerEvents.recipes(event => {
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:spirit_extractor"]', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: [
            'malum:tainted_rock',
            'malum:twisted_rock'
        ],
        B: 'malum:living_flesh',
        C: 'malum:runewood_log',
        D: 'malum:alchemical_calx'
    })
})