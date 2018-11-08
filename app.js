const drpc = require("discord-rpc");

const ID = "453702339921182721";

drpc.register(ID);

const rpc = new drpc.Client({ transport: 'ipc' });

const startTimestamp = new Date();

rpc.on('ready', () => {
    console.log("fasfasf");
    rpc.setActivity({
        state: "In Nightmare Zone",
        details : "Training Strength",
        startTimestamp,
        largeImageText : "Runescape",
        largeImageKey : "rs",
        partyId : "ae488379-351d-4a4f-ad32-2b9b01c91657",
        partySize : 1,
        partyMax : 6,
        spectateSecret : "MTIzNDV8MTIzNDV8MTMyNDU0",
        joinSecret : "MTI4NzM0OjFpMmhuZToxMjMxMjM= "
    });
});

rpc.login({ clientId : ID }).catch(console.error);