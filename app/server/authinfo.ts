interface Credentials {
    client_id: string;
    client_secret: string;
    grant_type: string;
    scope: string[]
}

export default class AuthInfo {
    private _client_id: string;
    private _client_secret: string;
    private _grant_type: string;
    private _baseUrl: string;
    private _version: string;

    constructor (client_id: string, client_secrect: string) {
      this._client_id = client_id
      this._client_secret = client_secrect
      this._grant_type = 'client_credentials'
      this._baseUrl = 'https://developer.api.autodesk.com'
      this._version = 'v1'
    }

    get Authentication () : string {
      return this._baseUrl + '/authentication/' + this._version + '/authenticate'
    }

    get Credentials () : Credentials {
      return {
        client_id: this._client_id,
        client_secret: this._client_secret,
        grant_type: this._grant_type,
        scope: ['data:read', 'viewables:read']
      }
    }
}
