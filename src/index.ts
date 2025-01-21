import { Trie } from './trie/Trie';
import { 
    prefixes, 
    ignoreList, 
    rootWords, 
    badWordsList, 
    generateBadWords 
} from './words/wordLists';

const trie = new Trie();

export function checkBadWords(input: string): void {
    const cleanedInput = input.replace(/[^a-zA-Z0-9\u0E00-\u0E7F]/g, '');

    for (let ignore of ignoreList) {
        if (cleanedInput.includes(ignore)) {
            return;
        }
    }

    if (trie.search(cleanedInput)) {
        throw new Error(`Bad words detected! Found: ${cleanedInput}`);
    }
}

export function addBadWords(newBadWords: string[]): void {
    rootWords.push(...newBadWords);
    generateBadWords();
    newBadWords.forEach(word => trie.insert(word));
}

export function removeBadWords(wordsToRemove: string[]): void {
    const updatedRootWords = rootWords.filter(word => !wordsToRemove.includes(word));
    rootWords.length = 0;
    rootWords.push(...updatedRootWords);
    generateBadWords();
    const newTrie = new Trie();
    badWordsList.forEach(word => newTrie.insert(word));
    trie.root = newTrie.root;
}

export function addPrefixes(newPrefixes: string[]): void {
    prefixes.push(...newPrefixes);
    generateBadWords();
}

export function addIgnoreList(newIgnoreWords: string[]): void {
    ignoreList.push(...newIgnoreWords);
}

export function getBadWords(): string[] {
    return badWordsList;
}

// Init
generateBadWords();
badWordsList.forEach(word => trie.insert(word));
