/*
a validator service for forms;
param {} object with 1 or more validation rules
*/
class Validator {
  validateForm(fields) {
    let errors = Object.keys(fields).filter(key => {
      let field = fields[key];
      field.validationHandler();
      return !this.validate(field.state.value, field.props.validation);
    });
    return errors.length === 0;
  }

  validate(val, rules = {}) {
    let isValidated = true;
    Object.keys(rules).forEach(key => {
      let rule = rules[key];

      var fn = this[key];
      if (typeof fn === "function") {
        if (!fn(val, rule)) {
          isValidated = false;
        }
      }
    });
    return isValidated;
  }

  required(val, rule) {
    //if rule is false, val is not required, so rule is always valid
    if (!rule) {
      return true;
    }
    if (!val) {
      return false;
    }

    if (val.length === 0) {
      return false;
    }
    return true;
  }

  minLength(val, rule) {
    //if rule is 0, val is not required, so rule is always valid
    if (!rule) {
      return true;
    }
    if (!val || val.length < rule) {
      return false;
    }
    return true;
  }

  maxLength(val, rule) {
    if (!rule || !val) {
      return true;
    }
    if (val.length > rule) {
      return false;
    }
    return true;
  }

  isNumericOnly(val, rule) {
    //if rule is false, val can be anything, so rule is always valid
    if (!rule) {
      return true;
    }
    if (!val.match(/^\d+$/)) {
      return false;
    }
    return true;
  }

  isAlphaOnly(val, rule) {
    //if rule is false, val can be anything, so rule is always valid
    if (!rule || !val) {
      return true;
    }
    if (!val.match(/^[a-zA-Z]+$/)) {
      return false;
    }
    return true;
  }

  isEmail(val, rule) {
    //if rule is false, val can be anything, so rule is always valid
    if (!rule || !val) {
      return true;
    }
    if (
      !val.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
      )
    ) {
      return false;
    }
    return true;
  }
}

export default Validator;
