# UX Prototype V1

This version validates navigation before generating 99 static folders.

Flow:
- Home → filtered Problem Map (57 / 35 / 7)
- Problem Map → group → category → any of the 99 records
- Universal detail template → previous / next → back to category
- Methodology remains top-level
- 中 / EN is reserved; Traditional Chinese is active

Detail structure:
1. 問題是什麼？
2. 需要知道什麼？
3. AI 改變了什麼？
4. 怎麼解？
5. AI 做什麼？
6. 人決定什麼？
7. 最後改善什麼？

Demo links are optional and live in `data/extensions.js`. No fake button is shown without a real URL.

After UX freeze, generate `/pages/problems/<ID>/index.html` for all 99 from the same data + template.
