const consumerKey = process.env.FORGE_CLIENT_ID || '<your consumer key>'
const consumerSecret = process.env.FORGE_CLIENT_SECRET || '<your client secret>'
const urn = '<your urn>'

export default {consumerKey, consumerSecret, urn}
export {consumerKey, consumerSecret, urn}
