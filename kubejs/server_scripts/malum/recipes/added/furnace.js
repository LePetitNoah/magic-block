ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:furnace',
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: [
                'malum:tainted_rock',
                'malum:twisted_rock'
            ]
        }
    )
})