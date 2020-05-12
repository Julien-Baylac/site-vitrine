import { capitalize } from 'lodash'

export function initFilters(vueInstance) {
    vueInstance.filter('capitalize', string => {
      return capitalize(string)
    })
  }
  