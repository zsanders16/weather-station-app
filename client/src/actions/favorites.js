const FAVORITES = 'FAVORITES'

export const favoritesIndex = () => {
  // NOTE: FOR TESTING ONLY
  let favorites = ['A','B','C','D']
  return { type: FAVORITES, favorites }
}
