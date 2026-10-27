# Website 收工與接續紀錄

**目前狀態：2026-10-27（Asia/Taipei）展示版本已凍結。** 最後整理、驗收與限制見 `WEBSITE_FREEZE_2026_10_27.md`。收到新的明確目標前，不主動擴充。下方較早日期為歷史紀錄。

## 專案位置與工作邊界

- 唯一 Website 工作目錄：C:\Users\User\Desktop\99_problems\99-problems-github-ready
- GitHub：https://github.com/vcstseng/99-problems，main 分支。
- 正式網站：https://vcstseng.github.io/99-problems/
- D:\consulting-agent-group 是顧問框架與證據來源，本輪未修改。
- 不修改另一份 99-problems 副本。網站既有視覺、導覽和問題內容保留，只新增及精簡展示內容。

## 已完成並上線

1. F03 中英文問題頁新增顧問流程、證據、完整條件式方案、模擬審查與治理限制；提供合成 CSV、JSON 和文件。
2. 新增中英文「解題實踐／Practice」頁，既有 205 頁選單加入入口。
3. 首頁新增 Agent Framework 介紹；中英文各 99 題新增共用框架入口。
4. 首頁明列交付內容：問題診斷、可追溯證據、方案比較、執行路線、責任分工與驗收條件。
5. 解題實踐由七個重疊區塊精簡為四個：框架、顧問流程、人機治理、案例進度；細節用可展開內容呈現。

## 版本與驗證

- 455d485：Framework 介紹、解題實踐、F03 交付及全站入口。
- 6f6afd2：首頁交付價值與解題實踐文案精簡；最新功能／內容版本。
- GitHub Pages 部署成功，正式中英文首頁的新交付文案及解題實踐四個區塊已直接讀取確認。
- 已檢查連結、Framework 錨點、語言切換、展開操作、桌面與 390px 手機排版；無橫向溢出，git diff --check 通過。
- 本輪不新增後端測試；224 PASS 指此前本機顧問後端檢查，不是 Website、224 題或真實商業成效驗收。
- 本機預覽測試服務已停止；不需要 OPENAI_API_KEY。

## 定位與保留事項

網站先做可理解、可洽談的展示殼，不追求逐題做細或新增即時 Agent 操作。核心為 Agents、Skills、Tools、Security、Governance 與人機協作。

99 題能力盤點不等於全部能力已實作。F03 有完整條件式顧問方案；CS07／GOV08 主要為本機流程展示，網站完整方案尚待補。合成資料、同一助手模擬管理者，不代表真人核准、獨立專家評閱、根因證實、實施授權或生產安全保證。顧問團隊不承接客戶軟體開發／部署。

## 明天從這裡接續

1. 先看使用者對目前線上版本的回饋，再決定小幅優化；不重新建環境、不重做 UI。
2. 若使用者希望增加洽談入口，先確認指定聯絡管道，不捏造 email 或新增無作用表單。
3. 暫不擴增案例細節、Agent 角色或後端功能，除非使用者提出具體需求。
4. 後續修改完成後確認中英文、手機版與連結，再提交、上傳，等 Pages 部署完成並確認線上內容。

今天沒有待執行的程式或阻礙。明天接續是交接方向，不代表已建立提醒或排程。
## 最後清理紀錄（2026-10-26）

已將 C:\Users\User\Documents\ChatGPT\agent group 內本次產生的 12 個暫存檔移至 Windows 資源回收筒，未永久刪除，可還原；共 337,017 bytes（約 329 KiB）。已確認這 12 個檔案在原目錄均不存在。

- 8 個一次性腳本：add_practice_page.py、check_f03_website.py、check_framework.py、check_practice_page.py、check_refined_copy.py、position_framework.py、refine_website_copy.py、update_f03_website.py。
- 4 張預覽截圖：f03-website-preview.png、framework-home-preview.png、practice-website-preview.png、refined-home-preview.png。
- 保留正式 Website、D:\consulting-agent-group、原始資料、交接文件與 Git 歷史；舊網站副本、ZIP、簡報與試算表用途未確認，因此未刪除。
- 此次清理不影響 GitHub 或正式網站。舊對話中的本機截圖連結可能不再有效，需從資源回收筒還原才能再次開啟。

今日網站工作與清理均已完成，明天依上述交接方向繼續。

## 接續工作：洽談入口與案例進度（2026-10-26）

- 使用者指定公開聯絡管道：https://www.linkedin.com/in/vincent-tseng-5aa8b832/。
- 中英文首頁、解題實踐與 198 個問題頁加入洽談入口，共 202 個連結；問題頁提示提供題號、情境與決策目標。外部連結另開分頁並設定 noopener/noreferrer，不新增表單、不收集資料或傳送訊息。
- 統一成熟度：每種語言 96 題「問題與解題方向」、CS07/GOV08 兩題「本機流程示範，網站成果待補」、F03 一題「完整條件式方案示範，合成資料」。這不是已解決題數。
- 解題實踐加入對應數量摘要。原有 UI、問題原文、共用 CSS/JS、資料與顧問後端未改動。
- 驗收：202 個聯絡目標逐一檢查一致；狀態數量及題號提示正確，無表單，git diff --check 通過。桌面與中英文 390px 頁面無橫向溢出，語言切換正常。未代使用者發送 LinkedIn 訊息。
- 後續仍以訪客回饋及輕量網站整理為主，不主動擴增案例深度、即時 Agent 或後端。

## 最新接續摘要（2026-10-26）

本輪完成首頁 F03 直接入口、響應式五步驟框架圖與對外文案去術語化；桌面／中英文手機版和連結驗收通過。完整現況、成熟度與下次接續方向見 docs/WEBSITE_PROGRESS.md。網站仍定位為展示與洽談入口，暫不擴增案例或後端。

## 小幅文案調整：顧問成果與合作起點（2026-10-26）

- 僅調整中英文首頁與解題實踐，共四頁；HTML 標籤／屬性比對一致，版面、連結、CSS、功能與 99 題內容未變動。
- 首頁強調「從企業問題，到有證據的顧問方案」，將 Agent Framework 定位為背後的交付方法；保留 Agents／Skills／Tools／Security／Governance 與 F03 入口。
- 安全治理對應客戶關切：資料如何使用、結論從何而來、誰保留決策權，以及如何追問、退回或停止。沒有把原型控制寫成正式企業安全保證。
- 洽談文案：先理解情境、決策與期望改善，釐清需求、資料與範圍後，再討論交付和合作；不新增表單、訂閱或服務承諾。
- 驗收：中英文重要連結、Framework 圖與錨點正常；桌面及 390px 手機無橫向溢出；語言切換正常，git diff --check 通過。合成資料、模擬審查和實作限制保留。
- 下一步以實際訪客回饋／合作需求為主，不因市場文章新增產品或深入案例；本輪維持輕量展示網站。

## E93 流程優先實驗（2026-10-26）

使用者要求固定 process，失敗保留並調整能力後重驗，通過才更新網站。

- 後端本機 checkpoint：1af68c4。固定流程見顧問專案 docs/CONSULTING_PROCESS_V1.md；完整審查見 docs/E93_PROCESS_REVIEW.md。
- 首次原 registry 準備探測失敗已保存；補上受限來源追溯與另一套 verifier，沿用凍結的 protocol 重驗。
- 八種合成情境、25 個新測試及 249 項完整回歸通過；另有 artifact 評分通過。僅證明有限來源相依查核與本機流程控制，不證明自主 Agent、盲測泛化、統計獨立或真實商業成效。
- Website：E93 中英文頁新增失敗／調整、10 reports → 1 primary source、固定七關流程、證據 JSON 與限制；原 UI、原問題內容與 LinkedIn 保留。
- 目前每語言 95 題問題方向、2 題舊流程演練、1 題 E93 來源相依查核、1 題 F03 完整條件式方案；簡述為 95／3／1。不是已解決題數。
- 主要成功 run 只有一版分析，沒有實際退回；退回重驗／重試上限另以控制測試驗證。同一助手的角色審查不等於隔離 Agent 互相挑錯。
- 網站驗收：證據不含本機路徑／秘密，中英文頁與下載／錨點正常，390px 手機及桌面無橫向溢出；git diff --check 通過。
- 下一個能力驗證是隔離模型／真人及未見案例。需要新的執行安排，不可由本輪推論已完成。

## CS02 流程遷移實驗（2026-10-26）

- 顧問引擎本機 checkpoint eb6751b。先凍結 case protocol／合成政策與工單，修改前實際 preflight 發現分析角色仍寫死 A12、客服 Worker 缺分流操作，失敗已保留。
- 系統改善：ProcessRun 可依凍結 case profile 配置分析角色（CS02 A05）；protected review/verifier/manager 關卡、七關順序及標準保持不變。E93 原預設仍可運作。
- 新工具依結構化風險／分類、政策、SLA 與合格可用人員產生建議；另一套程式重建決策與期限。未知風險／分類、無人可用轉人工，無時區時間／過期政策需證據。不理解任意文字，不派單或承諾 SLA。
- 八種情境、27 個新增檢查、完整 276 pytest 及 14 個 artifact 檢查通過；原 E93 回歸保留。角色審查是同一助手模擬，不宣稱模型獨立、盲測或商業成效。
- Website 中英文 CS02 新增限定實驗、首次失敗、建議與限制；提供 experiment/policy/tickets/protocol 四個合成 JSON。解題實踐加入入口，摘要更新為 94 題方向／4 題流程或查核示範／1 題完整條件式方案。
- 驗收：四頁內部連結、證據、錨點與狀態數量正確；公開 JSON 不含本機路徑／秘密；桌面及中英文 390px 手機無橫向溢出，git diff --check 通過。
- 下一輪沿用新能力與流程配置測新題，不放寬門檻；仍需另行驗證模型語意理解、隔離審查與真實案例。O02 blind 未碰。

## Future Roadmap（2026-10-26）

新增 pages/roadmap/index.html 及完整英文對應，先呈現研究願景，再說明現況、七階段研究依賴、動態規劃的限定 Deferred、重啟訊號及進步／停止標準。全站選單加入入口，未改解題引擎。階段一持續累積基準，三至七是長期探索；整份 roadmap 不是暫停或承諾開發時程。內容與實際驗收見 docs/FUTURE_ROADMAP_WEBSITE.md。既有案例成熟度與 94／4／1 摘要不變；下一步仍依需求與證據，而非主動開發 Planner。

## 2026-10-27 — CS02 reuse follow-up and local cleanup

- Frozen reuse probe: 1/2 direct reuse cases passed; 4/4 escalation/stop expectations met. Boundary outcomes are not solved cases.
- Failure: tool and verifier used different comparison dates. The host now passes explicit time to execution and verification; the hidden verifier default was removed.
- Exposed-case retest: 2/2 direct reuse passed and 4/4 boundary expectations met, each in one attempt. Full backend regression: 280 passed. These are repaired known cases, not unseen generalization evidence or real business outcomes.
- Original failure retained in local engine evidence. Engine checkpoints: 047ce0d (probe), 405df79 (repair), 467cec2 (cleanup documentation).
- Removed local Python/test caches, an extracted package verified identical to the retained ZIP, and six temporary preview screenshots. No tracked website files were deleted; no corresponding remote deletions are pending.
- Website maturity remains 94 problem outlines / 4 partial demonstrations / 1 conditional complete proposal. No new problem was solved, no UI/engine source was added to this repository, and no Planner was introduced. Formal Problem X remains reserved.
- Repository boundary: this GitHub repository publishes the website and selected research records; the full engine and private/local traces remain in the separate local project.


## 2026-10-27 — similar-context CS02 reuse evidence

- Added bilingual CS02 follow-up and data/consulting/CS02/reuse-shift.json: one simple synthetic scenario, four conditions, unchanged engine capabilities.
- Direct reuse 2/2; escalation/expiry expectations 2/2, each one attempt. Simulated acceptance/rejection and stop persistence checked. Not blind, not full seven-gate validation, not new problems solved; formal Problem X reserved.
- Preserve prior date-context failure and distinguish repaired-case retest from this new scenario. Prior full regression 280 passed; not rerun this round.
- Continue testing simple similar contexts and recording actual gaps; do not deliberately complicate problems or add Planner without evidence. UI styling, maturity and 94/4/1 counts unchanged.
- Checks: both HTML files parsed, new IDs unique and evidence links resolve; public JSON parses and contains no local trace paths. No browser visual or mobile verification performed this round.


## 2026-10-27 — three-capability simple-context reuse milestone

- CS02, E93 and CS07 each completed a frozen similar-context probe; no new engine capabilities or deliberate problem complexity. Added bilingual E93/CS07 bounded findings, public synthetic evidence and a collapsible Practice milestone summary.
- Direct-reuse conditions: 2/2 per context. Boundary expectations: CS02 2/2, E93 1/1, CS07 4/4. Related variants are not independent transfer trials; correct denials/stops are not solved problems. Preserve prior CS02 date failure and separate repair.
- E93: shared-source/opposition/unknown handling; source modification blocks old acceptance. CS07: version/date/role/account/ambiguity filtering; synthetic restricted content absent from result payloads.
- Same-author, source-exposed, deterministic adapters and Mock Lead. Not blind, full seven-gate validation, production security or real business success. Formal Problem X reserved. Existing 94/4/1 counts unchanged.
- Last full backend regression remains 280 passed after the earlier repair. This milestone ran the three new probes, not a new full regression.
- Checks: six changed HTML pages parsed, IDs unique, local asset/anchor links resolve, two new JSON evidence files parse with no local trace paths, bilingual maturity counts preserved; git diff --check. Browser visual/mobile checks not performed in this publication.
- User requested notification at this milestone. Report completion before deciding a new feature; keep future tests simple and evidence-led.


## 2026-10-27 — final bilingual editorial pass

- Reviewed and polished the complete Chinese/English Future Roadmap. Vision remains first; all seven phases and six substantive fields per phase are retained. Chinese headings and governance terminology are localized; English phrasing is clarified.
- Added current-work evidence: simple similar-context reuse in CS02, E93 and CS07. Preserve the distinction between human-led improvements, deterministic adapter reuse and unproven autonomous evolution. Stops/denials are not resolution, and formal Problem X stays reserved.
- Phase one continues to accumulate evidence; only phase two dynamic planning is deferred pending demonstrated need. Later phases remain long-term research. No dates promised, percentages, new capabilities or engine changes.
- Clarified that problem-dependent changes are research scope rather than all being implemented. Updated date to 2026-10-27. Corrected an ambiguous English CS07 sentence to explicitly state no external model call or support action occurred.
- Actual browser QA: 10 bilingual roadmap/practice/CS02/E93/CS07 pages, 22 viewport checks; roadmap at 1280/768/390px, other pages at 1280/390px. No horizontal overflow, duplicate IDs, JavaScript errors or local HTTP failures. 92 local link/asset/anchor URLs checked.
- Both roadmap languages have 7 phases and 42 substantive description fields. Deferred appears only in phase two status. Production-path-prefix language switching preserves query and phase anchor in both directions. No images, diagrams or new dependencies added.
- Reviewed desktop/mobile screenshots. Existing styling and navigation retained. These checks are not a formal accessibility audit, human usability study or full-browser compatibility test. Prior backend regression remains 280 passed; no backend test rerun for this copy-only update.


## 2026-10-27 — F03 follow-up stopping milestone

- One simple packaging-cost context completed with unchanged engine capability. Added bilingual F03 follow-up, public synthetic evidence and a separate Practice milestone; preserved the earlier three-capability history. Roadmap current-work references now include F03.
- Calculation/row-order conditions 2/2; missing-price/corrupted-total conditions 2/2. Delta 1180 = volume 700 + material price 480; changed source rejects old output. Tampered claim blocked at existing two-attempt limit; other conditions one attempt.
- One context with an invariance check, not independent transfer trials. No causal proof, achieved savings, new complete proposal, real human approval, autonomous agent validation or full seven-gate run. Formal Problem X reserved; 94/4/1 maturity counts unchanged.
- Last full engine regression remains 280 passed; only the new frozen probe was run, with no engine change. Same-author source-exposed synthetic fixture; stops are not business resolution.
- Browser QA: 12 bilingual pages, 26 viewport checks, local asset/anchor links, no horizontal overflow or browser errors. Roadmap has 7 phases and 42 fields per language; language switching retains query and anchor. git diff --check passed. No new images or dependencies.
- User requested stopping at the milestone: docs and website publication complete; notify the user and stop without starting another probe or feature.


## 2026-10-27 — presentation freeze

- Completed the final approved bilingual presentation pass: hero case CTA, representative case before framework detail, concise reuse summary and roadmap overview with expandable phases. Original 42 roadmap description fields per language and old milestone anchors retained.
- Static checks: six edited pages, 118 local links/assets/anchors. Browser QA: 14 bilingual pages, 30 viewport checks, 120 local URLs, seven phase toggles per language, query/hash language switching, no overflow or browser errors. Reviewed desktop/mobile screenshots. No engine change; prior 280-test regression is historical, not rerun here.
- Maturity/counts unchanged. See WEBSITE_FREEZE_2026_10_27.md for exact scope and limits. The website commit containing that file is the frozen presentation checkpoint.
- User requested freeze after upload: do not start further case probes, features, redesign or Planner work without a new explicit user objective. Long-term roadmap remains research, not a promise or a blanket pause.
