import { generateAuthActions } from "redux-token-auth"

const config = {
  authUrl: 'https://classy-news-backend.herokuapp.com/auth',
  userAttributes: {
    uid: "uid",
    name: "name",
  },
  userRegistrationAttributes: {
    uid: "uid",
    name: "name"
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}