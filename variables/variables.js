/**Most of the time, a JavaScript application needs to work with information. Here are two examples:

An online shop – the information might include goods being sold and a shopping cart.
A chat application – the information might include users, messages, and much more.
Variables are used to store this information. */

let message = "Hello"
var second_message = "Hello too"
// console.log(message)
// console.log(second_message)

//Gettin the difference between let and var
/**
 * 
 * @returns The keywords let and var both declare new variables in JavaScript. The difference between let and var is in the scope of the variables they create:

Variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared.
 */

//console.log(welcome_a_user())

function how_var_works() {
      //create a variable
      var name = "sam"
      //create a new block 
      if (name) {
            var name = "Temitayo"
            console.log(name)
      }
      return name

}


function how_let_works() {
      //create a variable
      let name = "sam"
      //create a new block 
      if (name) {
            let name = "Temitayo"
            console.log(name)
      }
      return name
}
console.log(how_var_works())
console.log(how_let_works())

//Assignment is coming up for this module..