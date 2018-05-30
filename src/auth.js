export default {
    login (identifiant, pass, cb) {
      cb = arguments[arguments.length - 1]
      if (localStorage.token) {
        if (cb) cb(true)
        this.onChange(true)
        return
      }
      pretendRequest(identifiant, pass, (res) => {
        if (res.authenticated) {
          localStorage.token = res.token
          if (cb) cb(true)
          this.onChange(true)
        } else {
          if (cb) cb(false)
          this.onChange(false)
        }
      })
    },
  
    getToken () {
      return localStorage.token
    },
  
    logout (cb) {
      delete localStorage.token
      if (cb) cb()
      this.onChange(false)
    },
  
    loggedIn () {
      return !!localStorage.token
    },
  
    onChange () {}
  }
  
  function pretendRequest (identifiant, pass, cb) {
    setTimeout(() => {
      if (identifiant === 'admin' && pass === 'admin') {
        cb({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        cb({ authenticated: false })
      }
    }, 0)
  }
  