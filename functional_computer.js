const printLn = x => console.log(x)

const toNumber = n => n (i => i + 1) (0)
const toMinus = n => fn => x => n (i => i - 1) (x)

// number = fn => x
const add = n => m => fn => x => m (fn) (n (fn) (x))
const sub = n => m => add (n) (toMinus (m))
const mul = n => m => fn => x => m (n(fn)) (x)

const inc = n => add (n) (one)
const dec = n => sub (n) (one)

const zero = _ => x => x
const one = f => x => f (x)
const two = f => x => f (f (x))
const three = f => x => f (f (f (x)))
const fourth = add (two) (two)
const five = add (three) (two)
const ten = mul (two) (five)

const toBool = bool => ifThenElse (bool) (true) (false)

// bool = a => b
const True = a => _ => a
const False = _ => b => b

const ifThenElse = bool => Then => Else => bool (Then) (Else)
const not = bool => ifThenElse (bool) (False) (True)

const or = a => b => a (a) (b)
const and = a => b => a (b) (a)

printLn (toNumber (sub (inc (ten)) (dec (fourth) )))
