/**
 * Description: javascript Arrays
 */

function test(paramx,paramy,paramz){
    var x = paramx
    var y = paramy
    var z = paramz
    
    return [x]+[y]+[z];
} 

/**
 * Description: javascript Objects
 */

function test1(firstname,lastname,age,eyecolor){
    var x = firstname
    var y = lastname
    var z = age
    var t = eyecolor
    
    return [x] + "is" + [z] + "years old" ;
} 

/**
 * Description: javascript type of variable or expression
 */

function type(firstname,secondname,lastname){
    var x = firstname
    var y = secondname
    var z = lastname
    return [x,y,z]
    
}

/**
 * Description: javascript Array methods
 */

function test2(paramx,paramy,paramz,parama){
    var x = paramx
    var y = paramy
    var z = paramz
    var a = parama
    return [x , y , z , a]
    
}
/**
 * Description: javascript Array methods(join Method)
 */

function test3(paramx,paramy,paramz,parama){
    var x = paramx
    var y = paramy
    var z = paramz
    var a = parama
    return [x , y , z , a].join(" * ")
    
}

/**
 * Description: javascript Array(length)
 */

function test4(paramx,paramy,paramz,parama,paramb){
    var x = paramx
    var y = paramy
    var z = paramz
    var a = parama
    var b = paramb
    return [x , y , z , a , b].length
    
}

/**
 * Description: javascript Array(length of last)
 */
function test5(paramx,paramy,paramz,parama,paramb){
    var x = paramx
    var y = paramy
    var z = paramz
    var a = parama
    var b = paramb
    return [x , y , z , a , b].length-1
    
}

/**
 * Description: javascript Array(length of last)
 */

function test5(paramx){
    var x = new paramx(2018, 11, 24, 10, 33, 30, 0)
    return x
    
}