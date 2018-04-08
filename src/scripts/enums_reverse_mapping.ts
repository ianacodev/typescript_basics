/*****************************
 * Enums and Reverse Mapping
 *****************************/
enum Sizes {
  Small,
  Medium,
  Large
}

// extend enum.
enum Sizes {
  ExtraLarge = 3
}

// Reverse mapping creates overall object with both
// 1 - numeric keys representing the string values.
// 2 - string keys representing numeric values.
console.log('Enum Numeric Lookup: ', Sizes[1]); // Medium
console.log('Enum Bracket Lookup: ', Sizes['Medium']); // 1
