import { get } from 'axios'
import store from '../store/index'
import { locales } from '../utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

function getApiAccount ({ region, account }) {
  const resourse = `d3/profile/${account}`
  const API_URL = `${protocol}${region}${host}${resourse}`
  const locale = locales[region]

  const params = {
    access_toke: store.state.oauth.accessToken,
    locale
  }
  return get(API_URL, { params })
}

export {
  getApiAccount
}
