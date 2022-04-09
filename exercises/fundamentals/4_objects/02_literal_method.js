// Predict the results:

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
/* logs:
firstName() {
    return 'Victor';
  } lastName() {
    return 'Reyes';
  }
- This is because we are actually not calling the firstName and lastName methods
- To do so we need to append () to each invocation
- Otherwise we are just returning the "function" object assigned to firstName and lastName
*/

console.log(`${person.firstName()} ${person.lastName()}`);
// Victor Reyes