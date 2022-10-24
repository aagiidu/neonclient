// import { Post, Get } from '../utils/AxiosUtility'

import SystemServices from './SystemServices'

export async function signIn(username, password) {
  try {
    return {
      isOk: true,
      data: {userFName: 'DefaultUser'}
    }
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
    const result = await SystemServices.getUserInfo()
    return result && result.data.isSuccess ? {
      isOk: true,
      data: result.data
    } : { isOk: false }
}

export async function createAccount(email, password) {
  try {
    console.log(email, password);
    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    console.log(email, recoveryCode);
    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);
    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
