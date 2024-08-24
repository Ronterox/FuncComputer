import { Head, List, one, Prepend, printLn, Tail, two } from "./functional_computer";


const myList = Prepend (two) (Prepend (one) (List))

const main = printLn(Head (Tail (myList)))

main()
