const BitMEXClient = require('bitmex-realtime-api');
const client = new BitMEXClient({
    testnet: false,
    apiKeyID: process.env.BITMEX_API_KEY_ID,
    apiKeySecret: process.env.BITMEX_API_KEY_SECRET,
    maxTableLen: process.env.BITMEX_MAX_TABLE_LEN
});

var bitmexService = {};
bitmexService.getPosition = getPosition;
bitmexService.getOrders = getOrders;

// Get position from bitmex
function getPosition() {
    client.addStream('XBTUSD', 'position', (data) => {
        console.log(data);
    }); 
};


function getOrders() {
    client.addStream('XBTUSD', 'order', (data) => {
        console.log(data);
    });
}
module.exports = bitmexService;