
# Bad Words Detection Library

## Overview
This library is designed to detect bad words in a given input string. It provides the ability to:

- Detect bad words by combining common prefixes and root words.
- Skip checks for certain phrases or words using an ignore list.
- Dynamically add new prefixes, root words, or ignore words.

The bad words detection is case-insensitive and considers a list of common prefixes and root words for matching.

## Installation

To use this library, simply import it into your TypeScript project.

### Using npm:
```bash
npm install thai-bad-words
```

### Or using yarn:
```bash
yarn add thai-bad-words
```

## Functions

### `generateBadWords()`
- **Description**: This internal function generates a complete list of bad words by combining each prefix with every root word, and adds all the root words to the list.
- **Usage**: Automatically called when prefixes or root words are modified.

### `addPrefixes(newPrefixes: string[]): void`
- **Description**: Adds new prefixes to the list of prefixes, which are then combined with the root words to form bad words.
- **Parameters**:
  - `newPrefixes`: An array of strings containing new prefixes to add.
- **Usage**:
```typescript
addPrefixes(["พี่", "หนู"]);
```

### `addIgnoreList(newIgnoreWords: string[]): void`
- **Description**: Adds new words to the ignore list. If any of these words are present in the input string, the bad words check will be skipped for that input.
- **Parameters**:
  - `newIgnoreWords`: An array of strings containing new words to add to the ignore list.
- **Usage**:
```typescript
addIgnoreList(["หีบ", "สัสดี"]);
```

### `addBadWords(newBadWords: string[]): void`
- **Description**: Adds new root words to the list of bad words. The system will regenerate the bad words list automatically.
- **Parameters**:
  - `newBadWords`: An array of strings containing new root words.
- **Usage**:
```typescript
addBadWords(["โง่", "บ้า"]);
```

### `removeBadWords(wordsToRemove: string[]): void`
- **Description**: Removes specified root words from the list of bad words.
- **Parameters**:
  - `wordsToRemove`: An array of strings containing words to remove from the root words list.
- **Usage**:
```typescript
removeBadWords(["บ้า"]);
```

### `checkBadWords(input: string): void`
- **Description**: Checks if a string contains any bad words. If any bad words are found, it throws an error with the detected bad words.
- **Parameters**:
  - `input`: The string to check for bad words.
- **Usage**:
```typescript
checkBadWords("ไอสัสดี"); // This will throw an error if bad words are found
```

### `getBadWords(): string[]`
- **Description**: Returns the current list of all bad words.
- **Usage**:
```typescript
const badWords = getBadWords();
console.log(badWords); // Logs the list of bad words
```

## Configuration

### `prefixes`
- **Description**: A list of common prefixes that will be combined with root words to form bad words.
- **Default**:
```typescript
["กู", "มึง", "ไอ้", "อี", "ไอ", "ผม", "คุณ", "กระผม", "เธอ", "พ่อ", "แม่", "นาย"]
```

### `ignoreList`
- **Description**: A list of words or phrases that will be ignored during bad words detection.
- **Default**:
```typescript
["หีบ", "สัสดี", "หน้าหีบ", "ตด"]
```

### `rootWords`
- **Description**: A list of root words that are considered bad words.
- **Default**:
```typescript
["ควย", "เหี้ย", "หี", "สัส", "เชี่ย", "แรด", "กระหรี่", "ชิบหาย", "ตอแหล", "ฟาย", "แม่ง", "แสด", "ถุย", "เดรัจฉาน", "ชาติชั่ว", "นรก", "หมา", "หมอย", "สัตว์", "จัญไร", "เลว", "ทราม", "สถุน", "ระยำ", "อัปรีย์", "ต่ำตม", "กาก", "ส้นตีน", "หิวตีน", "ส้นตีน", "ขยะ", "ปิศาจ", "ขี้แพ้", "บัดซบ", "จังไร", "โสโครก", "เฮงซวย", "ตลาดล่าง", "ควาย", "ปัญญาอ่อน", "เส็งเคร็ง", "โง่", "โง่เง่า", "กะหรี่", "ดอกทอง", "ดอกกระหรี่", "บ้า", "ควย", "มึง", "อีดอก", "หน้าปลวก"]
```

## Example

```typescript
import { checkBadWords, addBadWords, addPrefixes, addIgnoreList, removeBadWords, getBadWords } from 'thai-bad-words';

// Add a new prefix
addPrefixes(["พี่"]);

// Add a new ignore word
addIgnoreList(["หนู"]);

// Check a string for bad words
try {
  checkBadWords("ไอสัส");
} catch (error) {
  console.log(error.message);  // Output: "Bad words detected! Found: ไอสัส"
}

// Add a new root word
addBadWords(["บ้า"]);

// Get the current bad words list
console.log(getBadWords());
```

## Conclusion
This library provides a flexible way to detect and manage bad words in text input. With the ability to add prefixes, root words, and ignore specific phrases, it can be easily customized to meet various needs. Whether you're building a chat filter or a content moderation tool, this system offers a reliable solution to detect inappropriate language.
