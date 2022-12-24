import "moment/dist/locale/fr"
import moment from "moment"

export function useMoment(time = Date.now()) {
  return moment(time).locale("fr")
}