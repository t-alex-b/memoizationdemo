// MEMOIZATION AND CACHING: THE CONSTRUCTION FUNCTION EXAMPLE
//in order to better our understanding of memoization , we will write a function
//entitled 'Building' and apply various logged results to observe behavior
//of Javascript

//in this example, you are the boss of the construction company.
//the construction company will be a reference to your application
//javascript commands will be traced by a reference to your
//construction company's employees: Bob and Susy
let cache = {};

function Building(tasks) {

    if(tasks in cache) {
        return cache[tasks]
    } else {
        console.log('Dispatch to depot.')

        return cache[tasks] = tasks + ' The work is complete.'

    }}

    console.log('Day 1: ', Building("Bob's log:"))
    console.log('Day 2: ', Building("Bob's log:"))
    console.log('Day 3: ', Building("Bob's log:"))