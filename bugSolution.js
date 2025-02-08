function myFunction(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a > 0 && b > 0){
    return myFunction(a - 1, b - 1) + a + b;
  }
  return 0; 
}