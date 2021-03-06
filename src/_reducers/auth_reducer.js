import { notify } from "./../_helpers/notify";

export function user(
  state = {
    userType: "UNAUTH_USER",
    isAuthenticated: false,
    userData: null
  },
  action
) {
  switch (action.type) {
    case "AUTH_USER": {
      return {
        ...state,
        userType: action.type,
        isAuthenticated: true
      };
    }
    case "UNAUTH_USER": {
      return {
        ...state,
        userType: action.type,
        isAuthenticated: false,
        userData: null
      };
    }
    case "SET_USER_DATA_FULFILLED": {
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload.data.result
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload.data.result
      };
    }
  }
  return state;
}

export function login(
  state = {
    processing: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        processing: true,
        error: null
      };
    }
    case "LOGIN_FULFILLED": {
      notify("Logged in successfully", "success");
      return {
        ...state,
        processing: false,
        error: null
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
  }
  return state;
}

export function signup(
  state = {
    processing: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "SIGNUP_PENDING": {
      return {
        ...state,
        processing: true,
        error: null
      };
    }
    case "SIGNUP_FULFILLED": {
      notify("Registered successfully", "success");
      return {
        ...state,
        processing: false,
        error: null
      };
    }
    case "SIGNUP_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
  }
  return state;
}

export function getToken(
  state = {
    processing: false,
    data: null,
    error: null
  },
  action
) {
  switch (action.type) {
    case "GET_TOKEN_PENDING": {
      return {
        ...state,
        processing: true,
        error: null
      };
    }
    case "GET_TOKEN_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload.data.result,
        error: null
      };
    }
    case "GET_TOKEN_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
  }
  return state;
}

export function updateSettings(
  state = {
    processing: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "UPDATE_SETTINGS_PENDING": {
      return {
        ...state,
        processing: true,
        error: null
      };
    }
    case "UPDATE_SETTINGS_FULFILLED": {
      return {
        ...state,
        processing: false,
        error: null
      };
    }
    case "UPDATE_SETTINGS_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
  }
  return state;
}
