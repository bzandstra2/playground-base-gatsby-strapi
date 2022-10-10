
const company = {
  name: "East Coast Granite & Tile",
  siteUrl: "https://eastcoast-granite.com",
  region: "Greenville, Spartanburg and surrounding areas in Upstate South Carolina"
}

const metaData = {
  defaultTitle: `${company.name} Countertop Sales and Installation`,
  defaultDescription: `Leading provider of countertops in ${company.region}. Complete kitchen and bath remodel services. Cabinets, tile, countertops and appliances. `, 
  defaultAuthor: company.name
}

const products = {
  countertops: [
    'Granite, Quartz, Marble'
  ],
  cabinets: 'cabinets',
  tile: 'tile',
  sealer: 'sealer', 
}

module.exports = {
  company: company.name,
  region: company.region,
  title: metaData.defaultTitle,
  description: metaData.defaultDescription,
  author: metaData.defaultAuthor,
  siteUrl: company.siteUrl,
  products: products,
}