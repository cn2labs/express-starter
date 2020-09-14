// Return a function that makes any user a royal (EXAMPLE)
const makeRoyal = (name, sex) => {
  if (sex === 'female') {
    return `Has't a valorous day Lady ${name}!`
  } else {
    return `Has't a valorous day Sir ${name}!`
  }
}

module.exports = makeRoyal
