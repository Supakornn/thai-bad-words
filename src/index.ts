let prefixes: string[] = [
    "กู", "มึง", "ไอ้", "อี", "ไอ", "ผม", "คุณ", "กระผม", "เธอ", "พ่อ", "แม่", "นาย"
];

let ignoreList: string[] = [
    "หีบ", "สัสดี", "หน้าหีบ", "ตด",
];

let rootWords: string[] = [
    "ควย", "เหี้ย", "หี", "สัส", "เชี่ย", "แรด", "กระหรี่", "ชิบหาย", "ตอแหล",
    "ฟาย", "แม่ง", "แสด", "ถุย", "เดรัจฉาน", "ชาติชั่ว", "นรก", "หมา", "หมอย",
    "สัตว์", "จัญไร", "เลว", "ทราม", "สถุน", "ระยำ", "อัปรีย์", "ต่ำตม", "กาก", "ส้นตีน", "หิวตีน",
    "ส้นตีน", "ขยะ", "ปิศาจ", "ขี้แพ้", "บัดซบ", "จังไร", "โสโครก", "เฮงซวย", "ตลาดล่าง", "ควาย",
    "ปัญญาอ่อน", "เส็งเคร็ง", "โง่", "โง่เง่า", "กะหรี่", "ดอกทอง", "ดอกกระหรี่", "บ้า", "ควย", "มึง", "อีดอก", "หน้าปลวก"
];

let badWordsList: string[] = [];

function generateBadWords(): void {
    badWordsList = [];
    for (let prefix of prefixes) {
        for (let rootWord of rootWords) {
            badWordsList.push(`${prefix}${rootWord}`);
        }
    }
    badWordsList = [...badWordsList, ...rootWords];
}

export function addPrefixes(newPrefixes: string[]): void {
    prefixes = [...prefixes, ...newPrefixes];
    generateBadWords();
}

export function addIgnoreList(newIgnoreWords: string[]): void {
    ignoreList = [...ignoreList, ...newIgnoreWords];
}

generateBadWords();

export function checkBadWords(input: string): void {
    const cleanedInput = input.replace(/[^a-zA-Z0-9\u0E00-\u0E7F]/g, '');

    for (let ignore of ignoreList) {
        if (cleanedInput.includes(ignore)) {
            return;
        }
    }

    const regexList = badWordsList.map(word => {
        return new RegExp(word.split('').join('\\s*'), 'i');
    });

    for (let regex of regexList) {
        if (regex.test(cleanedInput)) {
            throw new Error(`Bad words detected! Found: ${cleanedInput}`);
        }
    }
}

export function addBadWords(newBadWords: string[]): void {
    rootWords = [...rootWords, ...newBadWords];
    generateBadWords();
}

export function removeBadWords(wordsToRemove: string[]): void {
    rootWords = rootWords.filter(word => !wordsToRemove.includes(word));
    generateBadWords();
}

export function getBadWords(): string[] {
    return badWordsList;
}
