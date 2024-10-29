const NeDB = require("nedb-promise");
const products = new NeDB({filename: "database/products.db", autoload: true});

const categorySort = (a, b) => (a.category < b.category ? -1 : 1);





module.exports = {
  async find(params) {
    if (params.length) {
      return await products.find({_id: {$in: params}});
    } else {
      return await products.find(params);
    }
  },

  async get(id) {ç
    return await products.findOne({_id: id});
  },

  async all (){
    try {
      let prods = await products.find({});
  
      prods = prods.sort(categorySort);
  
      return prods;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
};


