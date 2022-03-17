// What gets returned by y++ and why?

let x = "5";
x = x + 1; // "51"

let y = "5";
y++;
// y = y + 1 -> 6
// ++ coerces y to a number
// ++ returns the value before incrimination
// therefore it returns 5