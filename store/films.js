export const state = () => ({
  list: []
})

export const actions = {
  async getFilms({commit}) {
    const { data } = await this.$axios.get('https://kitsu.io/api/edge/anime')
    commit('SET_FILMS', { films: data.data })
  }
}

export const mutations = {
  SET_FILMS(state, { films }) {
    state.list = films
  }
}
