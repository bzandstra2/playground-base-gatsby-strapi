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

module.exports = {
  company: company.name,
  title: metaData.defaultTitle,
  description: metaData.defaultDescription,
  author: metaData.defaultAuthor,
  siteUrl: company.siteUrl
}