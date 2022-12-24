import coreApiClient from "@/providers/core-api/CoreApi"

export default {
  createExample(payload) {
    return coreApiClient.sendRequest("get", "/v1/example", payload)
  },
}
