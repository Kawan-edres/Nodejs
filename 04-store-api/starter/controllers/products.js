const Product = require("../models/product");
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields,numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured;
  }
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regx: name, $optoins: "i" };
  }
  // console.log(queryObject)

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(regEx,(match) => `-${operatorMap[match]}-`);
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);

  // sorting
  if (sort) {
    //we have to split it awaring of mulitple sort options
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createAt");
  }

  //fields
  if (fields) {
    //we have to split it awaring of mulitple fileds options
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page=Number(req.query.page);
  const limit=Number(req.query.limit);
  const skip=(page-1) * limit;
  result=result.skip(skip).limit(limit)


  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
