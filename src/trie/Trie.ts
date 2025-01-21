import { TrieNode } from './TrieNode';

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }
    current.isEndOfWord = true;
  }

  search(text: string): boolean {
    const n = text.length;
    for (let i = 0; i < n; i++) {
      let current = this.root;
      for (let j = i; j < n; j++) {
        if (!current.children.has(text[j])) {
          break;
        }
        current = current.children.get(text[j])!;
        if (current.isEndOfWord) {
          return true;
        }
      }
    }
    return false;
  }
}
