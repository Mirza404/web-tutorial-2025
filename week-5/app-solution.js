// FINAL TASK: MODIFY THIS MINI APP

function createUser(name, age, city, hobbies) {
  return {
    name,
    age,
    //task 1 solution
    city,
    hobbies,
    describe() {
      // returning HTML string
      return `
        <strong>👤 Name:</strong> ${this.name}<br>
        <strong>🎂 Age:</strong> ${this.age}<br>
        <strong>🏙️ City:</strong> ${this.city}<br>
        <strong>🎯 Hobbies:</strong> ${this.hobbies.join(", ")}
      `;
    },
  };
}
function createUser(name, age, city, hobbies) {
  return {
    name,
    age,
    city,
    hobbies,
    describe() {
      // returning HTML string
      return `
        <strong>👤 Name:</strong> ${this.name}<br>
        <strong>🎂 Age:</strong> ${this.age}<br>
        <strong>🏙️ City:</strong> ${this.city}<br>
        <strong>🎯 Hobbies:</strong> ${this.hobbies.join(", ")}
      `;
    },
  };
}

const user1 = createUser("Selim", 19, "Istanbul", ["football", "programming", "traveling"]);
document.getElementById("output").innerHTML = user1.describe();

//   Tasks:
// - Add a new property (like "city" or "hobby")
// - Add a new function (like "describe()" that logs all info)
// - Try to use an array inside your object (e.g. hobbies)
// - Print it nicely in console
