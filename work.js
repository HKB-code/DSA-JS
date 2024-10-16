// 1. Basic Getter and Setter
// let obj = {
//   a: 1,
//   get b() {
//     return this.a + 1;
//   },
//   set b(x) {
//     this.a = x / 2;
//   },
// };

//2. Temperature Conversion
// let temperature = {
//   celsius: 0,
//   get fahrenheit() {
//     return (this.celsius * 9) / 5 + 32;
//   },
//   set fahrenheit(value) {
//     this.celsius = ((value - 32) * 5) / 9;
//   },
// };

//3.Full Name
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };

//4. Array-Like Object
// let arrayLike = {
//   length: 0,
//   get [Symbol.toStringTag]() {
//     return "Array";
//   },
// };

//5. Calculated Property
let rectangle = {
  width: 5,
  height: 10,
  get area() {
    return this.width * this.height;
  },
  set area(value) {
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  },
};

//6. Synchronized Objects
let a = { value: 10 };
let b = {
  get value() {
    return a.value;
  },
  set value(val) {
    a.value = val;
  },
};

// 7. Currency Conversion
let currency = {
  _usd: 0,
  get usd() {
    return this._usd;
  },
  set usd(value) {
    this._usd = value;
    this.eur = value * 0.85;
  },
};

//8. Counter Object
let counter = {
  _count: 0,
  get count() {
    return this._count;
  },
  set count(value) {
    this._count = value;
  },
};

//9. Object with Default Value
let defaultValue = {
  value: 10,
  get val() {
    return this.value;
  },
  set val(value) {
    this.value = value || 10;
  },
};

//10. Readonly Property
let readonly = {};
Object.defineProperty(readonly, "prop", {
  get: function () {
    return "readonly";
  },
  configurable: false,
});

//11. Dynamic Property
let dynamic = {};
Object.defineProperty(dynamic, "currentTime", {
  get: function () {
    return new Date();
  },
});

//12. Nested Property Access
let nested = {
  a: {
    b: {
      value: 1,
    },
  },
  get bValue() {
    return this.a.b.value;
  },
  set bValue(value) {
    this.a.b.value = value;
  },
};

// 13. Logging Property Access
let logAccess = {
  _val: 1,
  get val() {
    console.log("Getting value");
    return this._val;
  },
  set val(value) {
    console.log("Setting value");
    this._val = value;
  },
};

//14. Access Counter
let accessCounter = {
  _value: 0,
  _accessCount: 0,
  get value() {
    this._accessCount++;
    return this._value;
  },
  get accessCount() {
    return this._accessCount;
  },
  set value(value) {
    this._value = value;
  },
};

//15. Circular Reference
let circular = {};
Object.defineProperty(circular, "self", {
  get: function () {
    return this;
  },
});

//16. Property Interception
let intercept = {};
Object.defineProperty(intercept, "property", {
  get: function () {
    console.log("Property accessed");
    return 1;
  },
  set: function (value) {
    console.log("Property set to " + value);
  },
});

//17. Enforcing Constraints
let constrained = {
  _value: 0,
  get value() {
    return this._value;
  },
  set value(value) {
    if (value > 10) {
      throw new Error("Value cannot be more than 10");
    }
    this._value = value;
  },
};

//18. Object Validator
let validator = {
  _data: "",
  get data() {
    return this._data;
  },
  set data(value) {
    if (typeof value !== "string") {
      throw new TypeError("Data must be a string");
    }
    this._data = value;
  },
};

//19. Aliasing Property
let alias = {
  a: 1,
  get b() {
    return this.a;
  },
  set b(value) {
    this.a = value;
  },
};

//20. History Tracking
let historyTracking = {
  _value: "",
  _history: [],
  get value() {
    return this._value;
  },
  set value(newVal) {
    this._history.push(this._value);
    this._value = newVal;
  },
  get history() {
    return this._history;
  },
};
