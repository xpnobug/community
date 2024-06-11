import { reactive, readonly } from 'vue';

const state = reactive({
  isLoading: false
});

const setLoading = (isLoading) => {
  state.isLoading = isLoading;
  // console.log('setLoading', state.isLoading)
};

export default readonly({
  state,
  setLoading
});