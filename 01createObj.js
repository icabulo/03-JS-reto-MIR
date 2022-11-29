function myFunction(a, b) {
  const result = {};
  for (let i = 0; i < a.length; i++) {
    result[a[i]] = b[i];
  }

  return result;
}

a = myFunction(["a", "b", "c"], [1, 2, 3]);
b = myFunction(["a", "b", "c"], [1, () => {}, { name: "khriztian" }]);
c = myFunction(
  ["name", "hobbies", "isAdmin"],
  ["khriztian", ["music", "tv series"], false]
);
console.log(a);
console.log(b);
console.log(c);
