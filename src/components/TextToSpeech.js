export function TTS(word) {
  let voice = "";

  let japaneseRegex = /[\p{Script=Hiragana}\p{Script=Katakana}]/u;
  let koreanRegex = /[\p{Script=Hangul}]/u;
  let chineseRegex = /[\p{Script=Han}]/u;
  let thaiRegex = /[\p{Script=Thai}]/u;
  let vietnameseRegex =
    /[\u00C0-\u00FF\u0102\u0103\u0106\u0107\u00CA\u00EA\u00D4\u00F4\u01A0\u01A1\u01AF\u01B0\u0110\u0111]/u;

  if (japaneseRegex.test(word)) {
    voice = "ja-JP";
  } else if (koreanRegex.test(word)) {
    voice = "ko-KR";
  } else if (chineseRegex.test(word)) {
    voice = "zh-CN";
  } else if (thaiRegex.test(word)) {
    voice = "th-TH";
  } else if (vietnameseRegex.test(word)) {
    voice = "vi-VN";
  } else {
    voice = "en-US";
  }

  let speech = new SpeechSynthesisUtterance(word);
  let voices = window.speechSynthesis.getVoices();
  let selectedVoice = voices.find((v) => v.lang === voice);

  if (selectedVoice) {
    speech.voice = selectedVoice;
    window.speechSynthesis.speak(speech);
  } else {
    let defaultVoice = voices.find((v) => v.lang === "en-US");
    speech.voice = defaultVoice;
    window.speechSynthesis.speak(speech);
  }
}
