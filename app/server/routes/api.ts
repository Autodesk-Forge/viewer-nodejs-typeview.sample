import * as express from 'express'
import config from '../../config/config'
import AuthInfo from '../authinfo'
import { AuthClientTwoLegged } from 'forge-apis'

const router = express.Router()

const authInfo = new AuthInfo(
  config.consumerKey,
  config.consumerSecret).Credentials

router.get('/token', (req:express.Request, res:express.Response) => {
  const clientId = authInfo.client_id
  		const clientSecret = authInfo.client_secret

  		const apiInstance = new AuthClientTwoLegged(clientId, clientSecret, authInfo.scope)
  		apiInstance.authenticate().then((data:any) => res.send(data))
})

export = router;
