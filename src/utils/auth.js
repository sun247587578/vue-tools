import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'
const TokenKey = 'Web-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function toHome(){
  let homeUrl;
  if(process.env.NODE_ENV !== "development"){
    homeUrl= window.location.protocol+"//" + window.location.hostname+":8082/xzpt/dist/index.html";
    window.location.href = homeUrl
  }else{
    homeUrl = window.location.origin
    window.location.href = homeUrl
  }
}