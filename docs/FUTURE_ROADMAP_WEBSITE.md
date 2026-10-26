# Future Roadmap 網站內容與驗收紀錄

2026-10-26。使用者授權只修改 Website 與必要內容；未修改顧問引擎或解題能力。

## 修改位置

- pages/roadmap/index.html：研究路線圖（繁體中文）。
- en/pages/roadmap/index.html：Future Roadmap（完整英文）。
- assets/css/roadmap.css：只作用於新頁的閱讀排版，沿用既有色彩與區塊風格。
- 207 個既有 HTML 選單加入研究路線圖／Future Roadmap；其他核心敘事保持原樣。加上新頁共 209 個入口。
- assets/js/site.js 與 en/assets/js/site.js：小幅修正語言切換，點選目錄後使用當下 URL 的章節及參數；新頁使用明確版本參數載入既有程式，避免舊快取。

## 內容與狀態

頁首先呈現 From Fixed Teams to Problem-driven, Evolving Capabilities 研究願景，再說明可擴充但尚未演化的現況。

完整七階段各包含研究問題、預期行為、驗證、推進條件、失敗風險與例子。階段一為持續累積基準，僅階段二動態規劃標記 Deferred — pending evidence of need；三至七是長期探索。整份 roadmap 並未暫停，也沒有承諾排程、完成百分比或效益數字。

說明穩定治理與可變工作安排、生成與演化的差別、臨時能力及保留／淘汰、正式 Problem X 保留、重啟訊號、公平 baseline、總成本與有效停止結論。CS02／E93 可行性判斷只適用已檢查案例，不外推到全部 99 題。無圖片、圖表、架構圖、外部依賴或 Planner 實作。

## 實際完成的驗收

- 207 個既有頁移除新增選單項後，與 HEAD 原內容一致（換行正規化比較）。
- 全部導覽入口可解析；新頁與所有內部連結、目錄錨點、樣式／既有腳本回傳正常。
- 每語言七階段、42 個實質說明欄位，ID 唯一、目前頁標示唯一；Deferred 僅在第二階段狀態。
- 1280px 桌面、768px 平板及中英文 390px 手機無橫向溢出；章節目錄正常。
- 中英切換保持路線圖對應頁；目錄跳轉後雙向切換保留章節，已實際確認 #evaluation／#stages。
- 沒有 img、svg、figure、iframe、canvas 或新增腳本依賴。git diff --check 通過。
- 顧問引擎沒有 tracked changes；原有未追蹤 ZIP／簡報／試算表未動。

未做真人可用性研究、正式無障礙稽核或全瀏覽器相容性驗收；不把閱讀／連結檢查當成研究能力已實作。
