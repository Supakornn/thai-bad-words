import { checkBadWords, addBadWords, removeBadWords, addPrefixes, getBadWords, addIgnoreList } from './index';

describe('Thai Bad Words Detector', () => {
  test('should detect basic bad words', () => {
    expect(() => checkBadWords('ไอ้ควาย')).toThrow('Bad words detected');
    expect(() => checkBadWords('มึงโง่')).toThrow('Bad words detected');
  });

  test('should handle clean text without throwing', () => {
    expect(() => checkBadWords('สวัสดีครับ')).not.toThrow();
    expect(() => checkBadWords('ความดี')).not.toThrow();
  });

  test('should handle ignored words', () => {
    expect(() => checkBadWords('หีบใส่ของ')).not.toThrow();
    addIgnoreList(['ควาย์']);
    expect(() => checkBadWords('ควาย์')).not.toThrow();
  });

  test('should allow adding new bad words', () => {
    addBadWords(['test123']);
    expect(() => checkBadWords('test123')).toThrow('Bad words detected');
  });

  test('should allow removing bad words', () => {
    const newBadWord = 'testbad';
    addBadWords([newBadWord]);
    expect(() => checkBadWords(newBadWord)).toThrow('Bad words detected');
    
    removeBadWords([newBadWord]);
    expect(() => checkBadWords(newBadWord)).not.toThrow();
  });

  test('should handle new prefixes', () => {
    addPrefixes(['super']);
    const badWords = getBadWords();
    expect(badWords.some(word => word.startsWith('super'))).toBeTruthy();
  });

  test('should handle special characters', () => {
    expect(() => checkBadWords('ไ*อ้*ค*ว*า*ย')).toThrow('Bad words detected');
    expect(() => checkBadWords('มึ_ง_โ_ง่')).toThrow('Bad words detected');
  });
});
