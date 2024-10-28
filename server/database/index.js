const path = require('path');
const appDir = path.dirname(require.main.filename);
const NeDB = require('nedb-promise')
const users = new NeDB({filename:path.join(appDir, 'users.db'), autoload: true})
const products = new NeDB({filename:path.join(appDir, 'products.db'), autoload: true})
const orders = new NeDB({filename:path.join(appDir, 'orders.db'), autoload: true})

const productsSeed = require('./productsSeed.json')
const usersSeed = require('./usersSeed.json')


(async ()=>{
    await orders.remove({},{multi:true})
    await users.remove({},{multi:true})
    await products.remove({},{multi:true})
    await users.insert(usersSeed)
    await products.insert(productsSeed)
})()