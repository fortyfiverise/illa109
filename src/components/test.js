let savedName = "";

export function testing(parameter) {
  console.log(parameter);
  savedName = parameter;
}

export function toTesting() {
  console.log(savedName);
}
