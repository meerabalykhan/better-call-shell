"use client";
import { useState } from "react";
import Image from "next/image";

const charges = [
  { code: "COUNT 01", title: "Transaction abandonment", detail: "Opened a database transaction and simply walked away.", status: "GUILTY" },
  { code: "COUNT 02", title: "Criminal test evasion", detail: "Checkout changed. Integration tests did not.", status: "GUILTY" },
  { code: "COUNT 03", title: "Reckless type coercion", detail: "The defense calls it pragmatic. The court calls it any.", status: "DISMISSED" },
];
const transcript = [
  ["BAILIFF", "All rise. Runtime Court is now in session."],
  ["PROSECUTION", "The People call payment-refactor.ts to the stand."],
  ["SHELLY", "Your Honor, my client was under considerable deadline pressure."],
  ["JUDGE RUNTIME", "Counsel, it either throws or it doesn’t."],
];

export default function Home() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [activeCharge, setActiveCharge] = useState(0);
  return <main>
    <nav className="nav-shell">
      <a className="brand" href="#top" aria-label="Better Call Shell home"><span className="brand-mark">$</span><span>BETTER CALL <em>SHELL</em></span></a>
      <div className="nav-links"><a href="#docket">The docket</a><a href="#how">How it works</a><button className="mini-cta" onClick={() => setTrialOpen(true)}>Put code on trial</button></div>
    </nav>
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot" /> Runtime Court is in session</div>
        <h1>Your pull request<br />has the right to<br /><span>remain maintainable.</span></h1>
        <p className="hero-lede">An AI courtroom where bugs are prosecuted, questionable decisions are defended, and no charge survives without evidence.</p>
        <div className="hero-actions"><button className="primary" onClick={() => setTrialOpen(true)}>Put a PR on trial <b>→</b></button><a className="text-link" href="#docket">Watch the proceedings</a></div>
        <div className="trust-line"><span>⚖</span> No vibes. No drive-by comments. Reproducible evidence only.</div>
      </div>
      <div className="hero-stage" aria-label="A tiny courtroom for code">
        <div className="case-number">CASE #404-PR</div><div className="court-seal"><span>$</span><small>RUNTIME<br />COURT</small></div>
        <div className="judge-card character-card"><div className="avatar judge">JR</div><div><small>PRESIDING</small><b>Judge Runtime</b><p>“It either throws or it doesn’t.”</p></div></div>
        <div className="lawyer-card character-card"><div className="avatar lawyer">$</div><div><small>COUNSEL</small><b>Shelly Goodman</b><p>Attorney for the diff.</p></div></div>
        <div className="defendant-file"><div className="file-tab">EXHIBIT A</div><code>payment-refactor.ts</code><strong>3</strong><span>charges pending</span></div>
        <div className="verdict-stamp">MERGE<br />BOND DENIED</div>
      </div>
    </section>
    <section className="ticker" aria-label="Case status"><span>NOW HEARING</span><b>THE PEOPLE v. payment-refactor.ts</b><i>•</i><span>3 CHARGES</span><i>•</i><span>2 EXHIBITS</span><i>•</i><span>JURY: TESTS 18/20</span></section>
    <section className="poster-section" aria-labelledby="court-title">
      <div className="court-visual">
        <div className="visual-bar"><span><i className="live-dot" /> COURTROOM LIVE</span><b>CASE #404-PR</b></div>
        <Image src="/runtime-court-v2.png" width={1456} height={1088} alt="A pixel courtroom showing Judge Runtime, Officer Lint, counsel, a code-file defendant, and the test-suite jury" priority />
        <div className="visual-legend"><span><i className="dot green" /> 2 tests passed</span><span><i className="dot amber" /> 4 deliberating</span><span><i className="dot red" /> 2 failed</span></div>
      </div>
      <div className="poster-copy"><span className="kicker">A courtroom you can read</span><h2 id="court-title">Every character<br />has a job.</h2><p>This is not decoration. Judge Runtime decides from evidence. Officer Lint files minor charges. Shelly defends intent and history. The jury is your real test suite.</p><div className="role-list"><span><b>01</b> Prosecution finds risk</span><span><b>02</b> Defense checks context</span><span><b>03</b> Tests decide the facts</span></div><div className="quote">“Your Honor, <code>any</code> is not a crime. It is a cry for help.”</div></div>
    </section>
    <section className="docket" id="docket">
      <div className="section-heading"><div><span className="kicker">On today’s docket</span><h2>The People v.<br />payment-refactor.ts</h2></div><div className="status-block"><span>STATUS</span><strong>MERGE BOND DENIED</strong><small>Two counts sustained. One dismissed.</small></div></div>
      <div className="trial-grid">
        <div className="charges-list">{charges.map((c,i)=><button key={c.code} className={`charge ${activeCharge===i?"active":""}`} onClick={()=>setActiveCharge(i)}><span>{c.code}</span><div><b>{c.title}</b><p>{c.detail}</p></div><em>{c.status}</em></button>)}</div>
        <div className="evidence-panel"><div className="panel-top"><span>LIVE TRANSCRIPT</span><span className="recording">● RECORDING</span></div><div className="transcript">{transcript.map(([speaker,text],i)=><div className="line" key={speaker}><span>{String(i+1).padStart(2,"0")}</span><p><b>{speaker}</b>{text}</p></div>)}</div><div className="ruling"><span>THE RULING</span><p>{charges[activeCharge].status==="GUILTY"?"The evidence holds. The defendant will serve one integration test and 42 lines of community service.":"Speculation is not evidence. This count is dismissed with prejudice."}</p></div></div>
      </div>
    </section>
    <section className="how" id="how"><span className="kicker">Due process for your diff</span><h2>Not another AI review.<br />A case that has to hold up.</h2><div className="steps">
      <article><span>01</span><b>Charges are filed</b><p>Specialist agents inspect the diff for bugs, security risks, regressions, and suspicious shortcuts.</p></article>
      <article><span>02</span><b>Both sides argue</b><p>The prosecution attacks. The defense checks history, intent, scope, and whether the “fix” would be worse.</p></article>
      <article><span>03</span><b>Evidence is tested</b><p>The bailiff runs tests in a sandbox. No reproduction, no conviction. Confident guesses get thrown out.</p></article>
      <article><span>04</span><b>Runtime rules</b><p>Merge, fix, dismiss, or declare a mistrial. Every verdict links back to evidence you can inspect.</p></article>
    </div></section>
    <footer><div className="brand"><span className="brand-mark">$</span><span>BETTER CALL <em>SHELL</em></span></div><p>Every repository deserves competent counsel.</p><button onClick={()=>setTrialOpen(true)}>Open a case →</button></footer>
    {trialOpen&&<div className="modal-backdrop"><button className="backdrop-close" onClick={()=>setTrialOpen(false)} aria-label="Close case intake" /><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={()=>setTrialOpen(false)} aria-label="Close">×</button><span className="kicker">Intake desk · Confidential</span><h2 id="modal-title">What is your code<br />being accused of?</h2><label>GitHub pull request<input placeholder="github.com/you/repo/pull/42" /></label><label>Anything your counsel should know?<textarea placeholder="The deadline was unreasonable. The tests were already flaky. I can explain…" /></label><button className="primary" onClick={()=>setTrialOpen(false)}>File the case <b>→</b></button><small>By continuing, you swear the diff is the truth, the whole truth, and nothing but the diff.</small></section></div>}
  </main>;
}
