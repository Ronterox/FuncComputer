import { expect, test } from "bun:test";
import { toNumber, toBool, one, two, three, four, five, ten, Add, Sub, Mul, Exp, zero, Pred, Succ, If, Not, Or, And, Xor, Xnor, isZero, isEqualOrLess, isEqual, isGreater, True, False, First, Pair, Second } from "./functional_computer";

test("numbers", () => {
    expect(toNumber(zero)).toBe(0);
    expect(toNumber(one)).toBe(1);
    expect(toNumber(two)).toBe(2);
    expect(toNumber(three)).toBe(3);
});

test("add", () => {
    expect(toNumber(Add (two) (two))).toBe(4);
    expect(toNumber(Add (three) (ten))).toBe(13);
});

test("mul", () => {
    expect(toNumber(Mul (two) (two))).toBe(4);
    expect(toNumber(Mul (three) (two))).toBe(6);
});

test("exp", () => {
    expect(toNumber(Exp (two) (two))).toBe(4);
    expect(toNumber(Exp (two) (four))).toBe(16);
});

test("succ", () => {
    expect(toNumber(Succ (zero))).toBe(1);
    expect(toNumber(Succ (one))).toBe(2);
});

test("pred", () => {
    expect(toNumber(Pred (zero))).toBe(0);
    expect(toNumber(Pred (one))).toBe(0);
    expect(toNumber(Pred (two))).toBe(1);
});

test("sub", () => {
    expect(toNumber(Sub (one) (two))).toBe(0);
    expect(toNumber(Sub (four) (three))).toBe(1);
});

test("bool", () => {
    expect(toBool(True)).toBe(true);
    expect(toBool(False)).toBe(false);
});

test("if", () => {
    expect(toBool(If (True) (True) (False))).toBe(true);
    expect(toBool(If (False) (True) (False))).toBe(false);
});

test("not", () => {
    expect(toBool(Not (True))).toBe(false);
    expect(toBool(Not (False))).toBe(true);
});

test("or", () => {
    expect(toBool(Or (True) (True))).toBe(true);
    expect(toBool(Or (True) (False))).toBe(true);
    expect(toBool(Or (False) (True))).toBe(true);
    expect(toBool(Or (False) (False))).toBe(false);
});

test("and", () => {
    expect(toBool(And (True) (True))).toBe(true);
    expect(toBool(And (True) (False))).toBe(false);
    expect(toBool(And (False) (True))).toBe(false);
    expect(toBool(And (False) (False))).toBe(false);
});

test("xor", () => {
    expect(toBool(Xor (True) (True))).toBe(false);
    expect(toBool(Xor (True) (False))).toBe(true);
    expect(toBool(Xor (False) (True))).toBe(true);
    expect(toBool(Xor (False) (False))).toBe(false);
});

test("xnor", () => {
    expect(toBool(Xnor (True) (True))).toBe(true);
    expect(toBool(Xnor (True) (False))).toBe(false);
    expect(toBool(Xnor (False) (True))).toBe(false);
    expect(toBool(Xnor (False) (False))).toBe(true);
});

test("isZero", () => {
    expect(toBool(isZero (zero))).toBe(true);
    expect(toBool(isZero (one))).toBe(false);
    expect(toBool(isZero (ten))).toBe(false);
});

test("isEqualOrLess", () => {
    expect(toBool(isEqualOrLess (ten) (five))).toBe(false);
    expect(toBool(isEqualOrLess (four) (four))).toBe(true);
    expect(toBool(isEqualOrLess (five) (ten))).toBe(true);
});

test("isEqual", () => {
    expect(toBool(isEqual (ten) (five))).toBe(false);
    expect(toBool(isEqual (four) (four))).toBe(true);
    expect(toBool(isEqual (five) (ten))).toBe(false);
});

test("isGreater", () => {
    expect(toBool(isGreater (ten) (five))).toBe(true);
    expect(toBool(isGreater (four) (four))).toBe(false);
    expect(toBool(isGreater (five) (ten))).toBe(false);
});

test("first", () => {
    expect(toNumber(First (Pair (ten) (five)))).toBe(10);
    expect(toNumber(First (Pair (five) (ten)))).toBe(5);
});

test("second", () => {
    expect(toNumber(Second (Pair (ten) (five)))).toBe(5);
    expect(toNumber(Second (Pair (five) (ten)))).toBe(10);
});

