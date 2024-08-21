const printLn = x => console.log(x)

const toNumber = n => n (i => i + 1) (0)

// number = fn => x
const add = n => m => fn => x => m (fn) (n (fn) (x))
const mul = n => m => fn => x => m (n(fn)) (x)

const zero = _ => x => x
const one = f => x => f (x)
const two = f => x => f (f (x))
const three = f => x => f (f (f (x)))
const four = add (two) (two)
const five = add (three) (two)
const ten = mul (two) (five)

const succ = add (one)
const exp = n => m => fn => x => (m (n)) (fn) (x)

const toBool = bool => ifThenElse (bool) (true) (false)

// bool = a => b
const True = a => _ => a
const False = _ => b => b

const ifThenElse = bool => Then => Else => bool (Then) (Else)
const not = bool => ifThenElse (bool) (False) (True)

const or = a => b => a (a) (b)
const and = a => b => a (b) (a)

printLn (toNumber (exp (two) (five)))
