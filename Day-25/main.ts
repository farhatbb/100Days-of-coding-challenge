//Question # 73 .
//Assigning and Updating Variables..
function updatevariable(){
    let number = 10
    console.log("Initial value:", number);
    number =20
    console.log("updated value:", number);
}
updatevariable()

//Question # 74. Swapping Variables.
function swapValues(){
    let a =5, b = 10
    console.log("Before swap: a =", a,"b =", b);
    let temp = a
    a = b
    b = temp
    console.log("After swap: a =",a, "b =",b)
}
swapValues()

//Question # 75.
//compound assignment operators..
function useCompoundOperators(){
    let x = 4
    console.log("Initial x:",x)
    x += 2
    console.log("After addition:",x)
    x -= 3
    console.log("After subtraction:",x)
    x *= 5
    console.log("after multiplication:",x)
    x /= 2
    console.log("After division:",x)
}
useCompoundOperators()