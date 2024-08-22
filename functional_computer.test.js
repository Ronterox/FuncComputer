import { expect, test } from "bun:test";

const printLn = x => console.log(x)
const toNumber = n => n (i => i + 1) (0)
const toBool = bool => If (bool) (true) (false)

const Add = n => m => fn => x => m (fn) (n (fn) (x))
const Mul = n => m => fn => x => m (n(fn)) (x)
const Exp = n => m => (m (n))
const Sub = n => m => (m (Pred)) (n)

// type number = fn => x
const zero = _ => x => x
const one = fn => x => fn (x)
const two = fn => x => fn (fn (x))
const three = fn => x => fn (fn (fn (x)))
const four = Add (two) (two)
const five = Add (three) (two)
const ten = Mul (two) (five)

const Succ = Add (one)
const Pred = n => fn => x => n (g => h => h (g (fn))) (_ => x) (u => u); // wtf

// type bool = a => b
const True = a => _ => a
const False = _ => b => b

const If = bool => a => b => bool (a) (b)
const Not = bool => a => b => bool (b) (a)

const Or = a => b => a (a) (b)
const And = a => b => a (b) (a)
const Xor = a => b => a (Not (b)) (b)

printLn (toNumber(Pred (zero)))

test("numbers", () => {
    expect(toNumber(zero)).toBe(0)
    expect(toNumber(one)).toBe(1)
    expect(toNumber(two)).toBe(2)
    expect(toNumber(three)).toBe(3)
});

test("add", () => {
    expect(toNumber(Add (two) (two))).toBe(4)
    expect(toNumber(Add (three) (ten))).toBe(13)
});

test("mul", () => {
    expect(toNumber(Mul (two) (two))).toBe(4)
    expect(toNumber(Mul (three) (two))).toBe(6)
});

test("exp", () => {
    expect(toNumber(Exp (two) (two))).toBe(4)
    expect(toNumber(Exp (two) (four))).toBe(16)
});

test("succ", () => {
    expect(toNumber(Succ (zero))).toBe(1)
    expect(toNumber(Succ (one))).toBe(2)
});

test("pred", () => {
    expect(toNumber(Pred (zero))).toBe(0)
    expect(toNumber(Pred (one))).toBe(0)
    expect(toNumber(Pred (two))).toBe(1)
});

test("sub", () => {
    expect(toNumber(Sub (one) (two))).toBe(0)
    expect(toNumber(Sub (four) (three))).toBe(1)
});

test("bool", () => {
    expect(toBool(True)).toBe(true)
    expect(toBool(False)).toBe(false)
});

test("if", () => {
    expect(toBool(If (True) (True) (False))).toBe(true)
    expect(toBool(If (False) (True) (False))).toBe(false)
});

test("not", () => {
    expect(toBool(Not (True))).toBe(false)
    expect(toBool(Not (False))).toBe(true)
});

test("or", () => {
    expect(toBool(Or (True) (True))).toBe(true)
    expect(toBool(Or (True) (False))).toBe(true)
    expect(toBool(Or (False) (True))).toBe(true)
    expect(toBool(Or (False) (False))).toBe(false)
});

test("and", () => {
    expect(toBool(And (True) (True))).toBe(true)
    expect(toBool(And (True) (False))).toBe(false)
    expect(toBool(And (False) (True))).toBe(false)
    expect(toBool(And (False) (False))).toBe(false)
});

test("xor", () => {
    expect(toBool(Xor (True) (True))).toBe(false)
    expect(toBool(Xor (True) (False))).toBe(true)
    expect(toBool(Xor (False) (True))).toBe(true)
    expect(toBool(Xor (False) (False))).toBe(false)
});
