export const errorValidator = props => {
  const errorOccur = {};

  if (props.hasOwnProperty('gender')) {
    if (props.gender.length === 0) {
      errorOccur['gender'] = '*required';
    }
  }

  if (props.hasOwnProperty('conditions')) {
    if (props.conditions.length === 0) {
      errorOccur['conditions'] = '*required';
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
