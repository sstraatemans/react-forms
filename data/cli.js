#!/usr/bin/env node
var fs = require("fs");

const Vouchers = (() => {
  var vouchers = [];
  var maxVouchers; // number of vouchers to be created
  var multiplier = 9;
  var divider = 11;
  var maxNumberOccurences = 2;
  var usedArray = []; // checks per voucher, what numbers are used in the code. number can only occur maxNumberOccurences

  return {
    init,
    write
  };

  function init(max) {
    console.time("create");
    maxVouchers = max;

    while (vouchers.length < maxVouchers) {
      let voucherCode = createVoucher();

      if (!isValidCode(voucherCode)) {
        continue;
      }
      vouchers.push(voucherCode);
    }
    console.timeEnd("create");
  }

  function write(fs) {
    console.time("write");
    fs.writeFile("./data.json", JSON.stringify(vouchers), function(err) {
      if (err) {
        return console.log(err);
      }

      console.timeEnd("write");
      console.log("The file was saved!");
    });
  }

  //check if the voucherCode is a valid code.
  function isValidCode(voucherCode) {
    if (!voucherCode) {
      return false;
    }
    //check that there are only 9 digits.
    //if other, do not return voucherCode
    if (voucherCode.length !== 9) {
      return false;
    }

    return true;
  }

  function createVoucher() {
    usedArray = []; // empty the array of used numbers
    var calcNumb = 0; //this is the number that needs to be devided by 11, and after that needs to be round number
    var voucherCode = "";
    for (let i = multiplier; i > 1; i--) {
      var randomNumb = getRandomNumberFunc();
      voucherCode += randomNumb;
      calcNumb += i * randomNumb;
    }

    lastNumb = divider - calcNumb % divider;
    calcNumb += lastNumb;
    voucherCode += lastNumb;

    //also the last number can have a maxNumberOccurences
    //if this exeeceds the maxNumberOccurences, do not return voucherCode
    //let lastNumb = voucherCode.substr(voucherCode.length - 1);
    if (isNumberUsed(lastNumb)) {
      return;
    }

    return voucherCode;
  }

  //check if the number is used to the maxNumberOccurences
  function isNumberUsed(val) {
    val = parseInt(val);
    if (!val) return true;
    usedArray.push(val);
    var occurences = usedArray.filter(numb => numb === val);
    if (occurences.length <= maxNumberOccurences) {
      return false;
    }
    return true;
  }

  function getRandomNumberFunc() {
    let numb;
    while (isNumberUsed(numb)) {
      numb = Math.round(Math.random() * 9);
    }
    return numb;
  }
})();

Vouchers.init(1000);
Vouchers.write(fs);
