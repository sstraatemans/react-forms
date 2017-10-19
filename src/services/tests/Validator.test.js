import Validator from "./../Validator";

let Validate;
beforeAll(() => {
  Validate = new Validator();
});

describe("Validator", () => {
  it("check required value", () => {
    let val = "";
    let rules = {
      required: true
    };

    let result = Validate.validate(val, rules);
    expect(result).toBe(false);

    val = "test";
    result = Validate.validate(val, rules);
    expect(result).toBe(true);
  });

  it("check min Length", () => {
    let val = "t";
    let rules = {
      minLength: 2
    };

    let result = Validate.validate(val, rules);
    expect(result).toBe(false);

    val = "t33";
    result = Validate.validate(val, rules);
    expect(result).toBe(true);
  });

  it("check with max Length", () => {
    let val = "t";
    let rules = {
      maxLength: 2
    };

    let result = Validate.validate(val, rules);
    expect(result).toBe(true);

    val = "t33";
    result = Validate.validate(val, rules);
    expect(result).toBe(false);
  });

  it("check with numeric only", () => {
    let val = "t213";
    let rules = {
      isNumericOnly: true
    };

    let result = Validate.validate(val, rules);
    expect(result).toBe(false);

    val = "234234";
    result = Validate.validate(val, rules);
    expect(result).toBe(true);
  });

  it("check with alpha only", () => {
    let val = "fdfg";
    let rules = {
      isAlphaOnly: true
    };

    let result = Validate.validate(val, rules);
    expect(result).toBe(true);

    val = "dfgd44";
    result = Validate.validate(val, rules);
    expect(result).toBe(false);
  });

  it("check with email", () => {
    let val = "fdfg";
    let rules = {
      isEmail: true
    };

    let result = Validate.validate(val, rules);
    expect(result).toBe(false);

    val = "steven@up-front.nl";
    result = Validate.validate(val, rules);
    expect(result).toBe(true);
  });
});
