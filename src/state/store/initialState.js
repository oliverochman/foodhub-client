const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: "uid",
        name: "name",
        email: "email",
      },
    },
  },
}

export default initialState