import axios from "axios"
import Qs from "qs"

class BaseApi {
  _checkCallMethod(method) {
    return ["get", "post", "put", "patch", "delete"].includes(method)
  }

  _checkCallPath(path) {
    if (typeof path !== "string" || path === "") {
      return false
    }
    if (this.baseUrl !== "" && !path.startsWith("/")) {
      return false
    }
    if (this.baseUrl === "" && !path.startsWith("http")) {
      return false
    }
    return true
  }

  _getFullUrl(path) {
    return this.baseUrl + path
  }

  _successHandler(response) {
    return Promise.resolve(response.data)
  }

  errorHandler(error) {
    return Promise.reject(error.response)
  }

  getAccessToken() {
    return null
  }

  get baseUrl() {
    return ""
  }

  async sendRequest(method, path, payload, headers = {}) {
    // Method check
    let isCallMethodValid = this._checkCallMethod(method)
    if (!isCallMethodValid) {
      window.console.error(`[Error] Call method not valid: ${method}`)
      return
    }

    // Path check
    let isCallPathValid = this._checkCallPath(path)
    if (!isCallPathValid) {
      window.console.error(`[Error] Call path not valid: ${path}`)
      return
    }

    // Base axios options
    let options = {
      method,
      url: this._getFullUrl(path),
      paramsSerializer: function (params) {
        return Qs.stringify(params, { indices: false })
      },
      headers: { "Content-Type": "application/json" }
    }

    // Token header
    let token = this.getAccessToken()
    if (token) {
      options.headers["x-access-token"] = token
    }

    // Extra headers
    if (headers) {
      Object.keys(headers).forEach(header => {
        options.headers[header] = headers[header]
      })
    }

    // Params/data axios options
    switch (method) {
      case "get":
        options.params = payload
        break

      default:
        options.data = payload
        break
    }

    // Effective axios call
    return axios(options)
      .then(this._successHandler)
      .catch(this.errorHandler)
  }
}

export default BaseApi
