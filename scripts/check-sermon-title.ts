// 실행: npx tsx scripts/check-sermon-title.ts
import assert from "node:assert";
import { parseSermonTitle as p } from "../src/lib/youtube";

assert.deepStrictEqual(p("주일오전예배 | 로마서강해#24 | 끊을 수 없는 하나님의 사랑 | 박현진 목사 | 시선교회 (2026.10.04)"), {
  category: "주일오전예배", series: "로마서강해 #24", title: "끊을 수 없는 하나님의 사랑", preacher: "박현진 목사", date: "2026.10.04",
});
assert.deepStrictEqual(p("금요기도회| 하나님의 성품 | 의존하는 인간에게 찾아오신 자존하신 하나님 | 박현진 목사 | 시선교회 (2026.8.14.)"), {
  category: "금요기도회", series: "하나님의 성품", title: "의존하는 인간에게 찾아오신 자존하신 하나님", preacher: "박현진 목사", date: "2026.08.14",
});
assert.deepStrictEqual(p("금요기도회 | 말 사용법 | 박현진 목사 | 시선교회 (2026.07.03.)"), {
  category: "금요기도회", series: "", title: "말 사용법", preacher: "박현진 목사", date: "2026.07.03",
});
assert.strictEqual(p("시선교회 주일 오후예배 (2026.09.20)"), null);
assert.strictEqual(p("추석가정예배 │ 필요의 사랑과 베풂의 사랑 │ 박현진 목사"), null);
console.log("ok");
