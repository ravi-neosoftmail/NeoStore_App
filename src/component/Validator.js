/**
 *
 * @param {*} param0 props in which we get an obect of data
 * val in whcih we get the user text input character
 * initialValue as an object which have the data of state
 * @description This is error Validator function which is used to validate the error of text input.
 * @author Ravi Ranjan
 * @returns the errors as per user Text Input field.
 */

export const errorValidator = props => {
  const errorOccur = {};

  if (props.hasOwnProperty('email')) {
    if (props.email.length === 0) {
      errorOccur['email'] = '*required';
    }
  }

  if (props.hasOwnProperty('password')) {
    if (props.password.length === 0) {
      errorOccur['password'] = '*required';
    }
  }

  if (props.hasOwnProperty('firstName')) {
    if (props.firstName.length === 0) {
      errorOccur['firstName'] = '*required';
    }
  }

  if (props.hasOwnProperty('lastName')) {
    if (props.lastName.length === 0) {
      errorOccur['lastName'] = '*required';
    }
  }

  if (props.hasOwnProperty('confirm_password')) {
    if (props.confirm_password.length === 0) {
      errorOccur['confirm_password'] = '*required';
    }
  }

  if (props.hasOwnProperty('mobile')) {
    if (props.mobile.length === 0) {
      errorOccur['mobile'] = '*required';
    }
  }

  if (props.hasOwnProperty('gender')) {
    if (props.gender.length === 0) {
      errorOccur['gender'] = '*required';
    }
  }

  if (props.hasOwnProperty('conditions')) {
    if (!props.conditions) {
      errorOccur['conditions'] = '*required';
    }
  }

  if (props.hasOwnProperty('addressLine')) {
    if (props.addressLine.length === 0) {
      errorOccur['addressLine'] = '*required';
    }
  }

  if (props.hasOwnProperty('landMark')) {
    if (props.landMark.length === 0) {
      errorOccur['landMark'] = '*required';
    }
  }

  if (props.hasOwnProperty('pincode')) {
    if (props.pincode.length === 0) {
      errorOccur['pincode'] = '*required';
    }
  }

  if (props.hasOwnProperty('city')) {
    if (props.city.length === 0) {
      errorOccur['city'] = '*required';
    }
  }

  if (props.hasOwnProperty('state')) {
    if (props.state.length === 0) {
      errorOccur['state'] = '*required';
    }
  }

  if (props.hasOwnProperty('country')) {
    if (props.country.length === 0) {
      errorOccur['country'] = '*required';
    }
  }

  if (props.hasOwnProperty('address')) {
    if (props.address.length === 0) {
      errorOccur['address'] = '*required';
    }
  }

  if (props.hasOwnProperty('newPassword')) {
    if (props.newPassword.length === 0) {
      errorOccur['newPassword'] = '*required';
    }
  }

  if (props.hasOwnProperty('confirmNewPassword')) {
    if (props.confirmNewPassword.length === 0) {
      errorOccur['confirmNewPassword'] = '*required';
    }
  }

  return errorOccur;
};

export const emailValidator = (val, initialValue) => {
  var mailformat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (val.length === 0) {
    initialValue.error['email'] = '*required';
  } else if (!mailformat.test(val)) {
    initialValue.error['email'] = '*invalid email';
  } else {
    initialValue.error['email'] = '';
  }
};

export const firstNameValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['firstName'] = '*required';
  } else if (val.length < 3) {
    initialValue.error['firstName'] = '*atleast 3 character';
  } else {
    initialValue.error['firstName'] = '';
  }
};

export const lastNameValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['lastName'] = '*required';
  } else if (val.length < 3) {
    initialValue.error['lastName'] = '*atleast 3 character';
  } else {
    initialValue.error['lastName'] = '';
  }
};

export const passwordValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['password'] = '*required';
  } else if (val.length < 8) {
    initialValue.error['password'] = '*atleast 8 character';
  } else {
    initialValue.error['password'] = '';
  }
};

export const confirmPasswordValidator = (val, initialValue) => {
  console.log(val, 'initialValue', initialValue);
  if (val.length === 0) {
    console.log('at here');
    initialValue.error['confirm_Password'] = '*required';
  } else if (initialValue.password != val) {
    initialValue.error['confirm_Password'] = '*password not match';
  } else {
    initialValue.error['confirm_Password'] = '';
  }
};

export const mobileValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['mobile'] = '*required';
  } else if (val.length < 10) {
    initialValue.error['mobile'] = '*invalid phone number';
  } else {
    initialValue.error['mobile'] = '';
  }
};

export const genderValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['gender'] = '*required';
  } else {
    initialValue.error['gender'] = '';
  }
};

export const conditionsValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['conditions'] = '*required';
  } else {
    initialValue.error['conditions'] = '';
  }
};

export const addressValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['addressLine'] = '*required';
  } else {
    initialValue.error['addressLine'] = '';
  }
};

export const editAddressValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['address'] = '*required';
  } else {
    initialValue.error['address'] = '';
  }
};

export const landMarkValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['landMark'] = '*required';
  } else {
    initialValue.error['landMark'] = '';
  }
};

export const pinCodeValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['pincode'] = '*required';
  } else {
    initialValue.error['pincode'] = '';
  }
};

export const cityValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['city'] = '*required';
  } else {
    initialValue.error['city'] = '';
  }
};

export const stateValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['state'] = '*required';
  } else {
    initialValue.error['state'] = '';
  }
};

export const countryValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['country'] = '*required';
  } else {
    initialValue.error['country'] = '';
  }
};

export const newPasswordValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['newPassword'] = '*required';
  } else if (val.length < 8) {
    initialValue.error['newPassword'] = '*atleast 8 character';
  } else {
    initialValue.error['newPassword'] = '';
  }
};

export const ConfirmNewPasswordValidator = (val, initialValue) => {
  if (val.length === 0) {
    initialValue.error['confirmNewPassword'] = '*required';
  } else if (initialValue.newPassword != val) {
    initialValue.error['confirmNewPassword'] = '*password not match';
  } else {
    initialValue.error['confirmNewPassword'] = '';
  }
};
