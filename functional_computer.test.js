import { expect, test } from "bun:test";

const printLn = x => console.log(x)
const toNumber = n => n (i => i + 1) (0)

// number = fn => x
const add = n => m => fn => x => m (fn) (n (fn) (x))
const mul = n => m => fn => x => m (n(fn)) (x)
const exp = n => m => (m (n))

const zero = _ => x => x
const one = f => x => f (x)
const two = f => x => f (f (x))
const three = f => x => f (f (f (x)))
const four = add (two) (two)
const five = add (three) (two)
const ten = mul (two) (five)

const succ = add (one)
const pred = n => fn => x => n (g => h => h (g (fn))) (_ => x) (u => u); // wtf

const sub = n => m => (m (pred)) (n)
const toBool = bool => ifThenElse (bool) (true) (false)

// bool = a => b
const True = a => _ => a
const False = _ => b => b

const ifThenElse = bool => Then => Else => bool (Then) (Else)
const not = bool => ifThenElse (bool) (False) (True)

const or = a => b => a (a) (b)
const and = a => b => a (b) (a)

printLn (toNumber(pred (zero)))

test("numbers", () => {
    expect(toNumber(zero)).toBe(0)
    expect(toNumber(one)).toBe(1)
    expect(toNumber(two)).toBe(2)
    expect(toNumber(three)).toBe(3)
});

test("add", () => {
    expect(toNumber(add (two) (two))).toBe(4)
    expect(toNumber(add (three) (ten))).toBe(13)
});

test("mul", () => {
    expect(toNumber(mul (two) (two))).toBe(4)
    expect(toNumber(mul (three) (two))).toBe(6)
});

test("exp", () => {
    expect(toNumber(exp (two) (two))).toBe(4)
    expect(toNumber(exp (two) (four))).toBe(16)
});

test("succ", () => {
    expect(toNumber(succ (zero))).toBe(1)
    expect(toNumber(succ (one))).toBe(2)
});

test("pred", () => {
    expect(toNumber(pred (zero))).toBe(0)
    expect(toNumber(pred (one))).toBe(0)
    expect(toNumber(pred (two))).toBe(1)
});

test("sub", () => {
    expect(toNumber(sub (one) (two))).toBe(0)
    expect(toNumber(sub (four) (three))).toBe(1)
});

test("bool", () => {
    expect(toBool(True)).toBe(true)
    expect(toBool(False)).toBe(false)
});

test("not", () => {
    expect(toBool(not (True))).toBe(false)
    expect(toBool(not (False))).toBe(true)
});

test("or", () => {
    expect(toBool(or (True) (True))).toBe(true)
    expect(toBool(or (True) (False))).toBe(true)
    expect(toBool(or (False) (True))).toBe(true)
    expect(toBool(or (False) (False))).toBe(false)
});

test("and", () => {
    expect(toBool(and (True) (True))).toBe(true)
    expect(toBool(and (True) (False))).toBe(false)
    expect(toBool(and (False) (True))).toBe(false)
    expect(toBool(and (False) (False))).toBe(false)
});

test("ifThenElse", () => {
    expect(toBool(ifThenElse (True) (True) (False))).toBe(true)
    expect(toBool(ifThenElse (False) (True) (False))).toBe(false)
});
