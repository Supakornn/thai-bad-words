export let prefixes: string[] = [
    "กู", "มึง", "ไอ้", "อี", "ไอ", "ผม", "คุณ", "กระผม", "เธอ", "พ่อ", "แม่", "นาย"
];

export let ignoreList: string[] = [
    "หีบ", "สัสดี", "หน้าหีบ", "ตด",
];

export let rootWords: string[] = [
    "ควย", "เหี้ย", "หี", "สัส", "เชี่ย", "แรด", "กระหรี่", "ชิบหาย", "ตอแหล",
    "ฟาย", "แม่ง", "แสด", "ถุย", "เดรัจฉาน", "ชาติชั่ว", "นรก", "ไอดอก", "หมอย",
    "สัตว์", "จัญไร", "เลว", "ทราม", "สถุน", "ระยำ", "อัปรีย์", "ต่ำตม", "กาก", "ส้นตีน", "หิวตีน",
    "ส้นตีน", "ขยะ", "ขี้แพ้", "บัดซบ", "จังไร", "โสโครก", "เฮงซวย", "ตลาดล่าง", "ควาย",
    "ปัญญาอ่อน", "เส็งเคร็ง", "โง่", "โง่เง่า", "กะหรี่", "ดอกทอง", "ดอกกระหรี่", "บ้า", "ควๅย", "มึง", "อีดอก", "หน้าปลวก"
];

export let badWordsList: string[] = [];

export function generateBadWords(): void {
    badWordsList = [];
    for (let prefix of prefixes) {
        for (let rootWord of rootWords) {
            badWordsList.push(`${prefix}${rootWord}`);
        }
    }
    badWordsList = [...badWordsList, ...rootWords];
}
