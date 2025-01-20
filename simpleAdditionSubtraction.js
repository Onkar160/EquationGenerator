//Author - Onkar
function createLongEquation(target, numTerms) {
  let equation = String(target);
  let currentValue = target;

  for (let i = 0; i < numTerms; i++) {
    const operationType = Math.floor(Math.random() * 2);
    const num = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

    if (operationType === 0) {
      currentValue += num;
      equation += `+${num}`;
    } else {
      currentValue -= num;
      equation += `-${num}`;
    }
  }

  const difference = currentValue - target;

  if (difference !== 0) {
    equation += `+${-difference}`;
  }

  return equation;
}

// const longEquation9 = createLongEquation(31, 945);

// let formattedEquation = "";
// let lineLength = 0;

// for (let part of longEquation9.split("+")) {
//   if (lineLength + part.length > 100) {
//     formattedEquation += "";
//     lineLength = 0;
//   }
//   formattedEquation += part + "+";
//   lineLength += part.length + 1;
// }

// formattedEquation = formattedEquation.slice(0, -1);
//final answer :)
// console.log(formattedEquation);


export {createLongEquation};