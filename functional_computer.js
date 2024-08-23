// Transformations

const printLn = x => console.log(x)
const toNumber = n => n (i => i + 1) (0)
const toBool = bool => If (bool) (true) (false)

export { printLn, toNumber, toBool };

// Operations

const Add = n => m => fn => x => m (fn) (n (fn) (x))
const Mul = n => m => fn => x => m (n(fn)) (x)
const Exp = n => m => (m (n))
const Sub = n => m => (m (Pred)) (n)

export { Add, Mul, Exp, Sub };

// Numerals

// type number = fn => x
const zero = _ => x => x
const one = fn => x => fn (x)
const two = fn => x => fn (fn (x))
const three = fn => x => fn (fn (fn (x)))
const four = Add (two) (two)
const five = Add (three) (two)
const ten = Mul (two) (five)

export { zero, one, two, three, four, five, ten };

const Succ = Add (one)
const Pred = n => fn => x => n (g => h => h (g (fn))) (_ => x) (u => u); // wtf

export { Succ, Pred };

// Booleans

// type bool = a => b
const True = a => _ => a
const False = _ => b => b

export { True, False };

const If = bool => a => b => bool (a) (b)
const Not = bool => a => b => bool (b) (a)

export { If, Not };

const Or = a => b => a (a) (b)
const And = a => b => a (b) (a)
const Xor = a => b => a (Not (b)) (b)
const Xnor = a => b => Not (Xor (a) (b))

export { Or, And, Xor, Xnor };

// Predicates

const isZero = n => n (_ => False) (True)
const isEqualOrLess = n => m => isZero (Sub (n) (m))
const isEqual = n => m => And (isZero (Sub (n) (m))) (isZero (Sub (m) (n)))
const isGreater = n => m => Not (isEqualOrLess (n) (m))

export { isZero, isEqualOrLess, isEqual, isGreater };
