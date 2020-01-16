const consumerKey = process.env.FORGE_CLIENT_ID || 'key'
const consumerSecret = process.env.FORGE_CLIENT_SECRET || '<client-secret>'
const urn = '<urn>'

export default {consumerKey, consumerSecret, urn}
export {consumerKey, consumerSecret, urn}
