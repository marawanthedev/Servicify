import * as api from "./posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(_id);

    dispatch({ type: "FETCH_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
