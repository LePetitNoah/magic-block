StartupEvents.registry('block', event => {
    event.create('spirit_extractor_idle')
        .displayName('§5Spirit Extractor (Idle)')

    event.create('spirit_extractor_running')
        .displayName('§5Spirit Extractor (Running)')

    event.create('spirit_extractor_errored')
        .displayName('§5Spirit Extractor (Errored)')
})