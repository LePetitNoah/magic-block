ServerEvents.tick(event => {
    const server = event.server
    
    if (server.persistentData.gamerules_set) return
    
    if (!server.players) return
    
    server.runCommandSilent('gamerule keepInventory true')
    server.runCommandSilent('gamerule doImmediateRespawn true')
    server.runCommandSilent('gamerule doDaylightCycle false')
    server.runCommandSilent('gamerule doWeatherCycle false')
    server.runCommandSilent('gamerule mobGriefing true')
    server.runCommandSilent('gamerule doFireTick true')
    server.runCommandSilent('gamerule doEntityDrops true')
    server.runCommandSilent('gamerule randomTickSpeed 3')
    server.runCommandSilent('gamerule doMobSpawning false')
    
    server.persistentData.gamerules_set = true
})