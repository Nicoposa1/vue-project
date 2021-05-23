import { post } from 'axios'

const clientId = 'f05f5f82f09c4ac29d12260a8acff778'
const clientScret = 'hr5S1KAMrAVdYG3VF9HGKZ7IZhuy45Gd'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientScret }
  }
  return post(API_URL, body, config)
}

export {
  getToken
}
