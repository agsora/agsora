import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "Two years ago, a frozen-food distribution business had just one warehouse and three people in administration. A spreadsheet and a WhatsApp group were more than enough. Today, the same business runs four warehouses across different cities, a dozen field sales reps, and an owner who admits he no longer really knows this month's profit until the report is finished — usually three weeks after the month ends.",
  },
  {
    type: "p",
    text: "Stories like this are common, and so is the question that follows: is now the right time to implement ERP, or should we wait until the business is 'more ready'? That question itself is often pointed in the wrong direction. ERP isn't a reward for businesses that have already gotten big — it's a response to a particular growth stage, and that stage can usually be recognized earlier than most owners assume.",
  },
  {
    type: "p",
    text: "This article covers how ERP needs typically evolve alongside a business's growth stage, the signals that suggest the timing is right, and the risks of moving either too early or too late.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "ERP needs follow the growth stage, not an absolute revenue figure or headcount",
      "A single-location business with a small team usually doesn't need full ERP yet",
      "The strongest signals appear when branches multiply, data gets scattered, or decisions start slowing down",
      "Waiting too long makes data migration progressively messier; moving too fast wastes resources on complexity that isn't needed yet",
      "Starting with the most urgent module is safer than rolling everything out at once",
    ],
  },
  { type: "h2", text: "ERP follows growth stage, not company size" },
  {
    type: "p",
    text: "The most common mistake is judging ERP readiness by comparing revenue or headcount against another business that already has ERP. Two businesses with similar revenue can have very different needs, depending on how many operational points have to be tied together — number of branches, number of sales channels, and how often data from those points needs to connect for decisions to be made.",
  },
  {
    type: "p",
    text: "What's far more useful is looking at your business's current growth stage, because each stage brings different data needs. Understanding the stage helps answer not just 'do we need ERP', but 'what scope of ERP do we actually need right now'.",
  },
  { type: "h2", text: "Stage 1: Single location, small team — usually not yet" },
  {
    type: "p",
    text: "While the business still runs from one location with a team that can coordinate directly, a well-kept spreadsheet plus a simple POS or bookkeeping system is usually enough. Adding ERP at this stage often adds complexity without a matching payoff, because data volume isn't yet large enough to make manual processes feel heavy.",
  },
  { type: "h2", text: "Stage 2: New branches or business lines start opening" },
  {
    type: "p",
    text: "This is usually the first point where the need for ERP starts to become noticeable. Every new branch or business line brings its own operational data — stock, sales, expenses — that has to be combined manually if there's no centralized system yet. That combining burden grows non-linearly: two branches might still be reconciled manually in a day, but five branches can take weeks and invite discrepancies.",
  },
  {
    type: "p",
    text: "At this stage, ERP doesn't have to cover every module right away. Inventory and finance are usually the first priority, since they're the modules whose impact is felt most once data is scattered across multiple locations.",
  },
  { type: "h2", text: "Stage 3: Data is scattered and decisions start slowing down" },
  {
    type: "p",
    text: "The clearest sign of this stage is when a simple question like 'which product is most profitable this month' takes days to answer. Decisions that should be made quickly — price adjustments, stock purchases, evaluating a loss-making branch — get delayed because the data needed isn't yet available in a form that's ready to use.",
  },
  {
    type: "callout",
    title: "A quick question",
    text: "Ask yourself: how long does it take to answer a question about the current state of the business, from the moment it's asked until a trustworthy answer is ready? If it's more than a day or two, that's a strong signal.",
  },
  {
    type: "p",
    text: "This stage is also often marked by declining internal trust in the numbers circulating around the business. When two reports from different sources show different figures for the same period, and nobody can say for certain which one is right, that's no longer a matter of individual carefulness — it's a sign the reporting process has outgrown what manual spreadsheet reconciliation can handle.",
  },
  { type: "h2", text: "Stage 4: Investors, banks, or auditors start demanding clean reports" },
  {
    type: "p",
    text: "Once a business starts seeking funding, applying for a business loan, or going through an annual audit, the cleanliness and consistency of financial reports stop being negotiable. External parties typically need reports whose data source can be traced, not just a final figure sitting in a spreadsheet. ERP helps ensure financial reports come from consistently recorded transactions, rather than manual reconciliations prone to last-minute adjustments.",
  },
  { type: "h2", text: "External signals worth watching too" },
  {
    type: "ul",
    items: [
      "Competitors start offering services that require real-time stock visibility, like online availability checks",
      "Reporting regulations in your industry are tightening and require more structured data",
      "Large or corporate customers start requesting system integration, like automated ordering",
      "Transaction volume is growing much faster than the administrative team's capacity",
    ],
  },
  { type: "h2", text: "The risk of waiting too long" },
  {
    type: "p",
    text: "The longer ERP gets postponed, the more historical data ends up scattered across different formats, and the harder it becomes to clean up during migration. The team's working habits also grow more deeply set in the old way, making the switch to a new system feel heavier. More costly still, business decisions made from inaccurate data during that delay can have long-term consequences — the wrong stock purchases, expanding into a location that isn't actually profitable, or pricing that doesn't match actual costs.",
  },
  { type: "h2", text: "The risk of moving too fast" },
  {
    type: "p",
    text: "On the other hand, implementing ERP before the business genuinely needs it carries its own risk. A system too complex for a small team can become a burden: time spent learning features that never get used, license costs that don't match the benefit gained, and processes forced to fit the system's structure even though the business's still-flexible early-stage way of working may not suit it.",
  },
  {
    type: "p",
    text: "A sign you've moved too fast usually shows up as the team spending more time adapting to the system than actually getting work done. If that happens, it doesn't necessarily mean ERP was the wrong call — it means the scope or timing needs revisiting.",
  },
  { type: "h2", text: "Questions to determine the right moment" },
  {
    type: "ol",
    items: [
      "How many operational points (branches, warehouses, sales channels) currently need their data combined?",
      "How long does it take to produce a trustworthy monthly report?",
      "Is there an expansion or funding plan in the next 6-12 months that requires cleaner reporting?",
      "How often do important decisions get delayed because data isn't available?",
      "Is the administrative team already overwhelmed by current transaction volume?",
    ],
  },
  {
    type: "p",
    text: "If most of your answers point to real, present pressure, the timing is probably right. If most still feel distant, it's fine to wait and focus first on stabilizing existing processes.",
  },
  { type: "h2", text: "Starting with the most urgent module" },
  {
    type: "p",
    text: "Implementing ERP doesn't have to mean replacing every system at once across every branch simultaneously. A safer approach is starting with one or two modules that solve the most urgent problem — usually inventory or finance — then expanding scope once the team is comfortable and the data has proven reliable. This staged approach also keeps the initial investment more manageable and the risk easier to control.",
  },
  {
    type: "p",
    text: "A staged rollout also creates room to learn from mistakes at a small scale before applying changes organization-wide. A problem surfacing at one pilot branch is far easier to fix than the same problem appearing simultaneously across ten branches at once.",
  },
  { type: "h2", text: "Off-the-shelf or custom-built — which gets you moving faster?" },
  {
    type: "p",
    text: "The form of ERP you choose also affects when you start seeing benefits. Subscription-based, off-the-shelf ERP can usually be up and running within weeks, suiting businesses with fairly standard processes that want to get going without a large upfront investment. This is often the sensible choice when the need signal is strong but you're not yet sure how far your processes diverge from a typical business in your sector.",
  },
  {
    type: "p",
    text: "ERP built for specific requirements takes longer to get running, but offers a better long-term fit if your business processes genuinely carry a lot of special rules. In practice, many businesses start with off-the-shelf ERP for standard modules, then move to a more tailored system once their needs become clearer and more specific.",
  },
  { type: "h2", text: "Preparing the team for the transition" },
  {
    type: "p",
    text: "The right timing from a business standpoint won't count for much if the team isn't ready to run with it. Implementing ERP changes day-to-day work, and that change is easiest to accept when the team understands why — not simply being told a new system starts next month. Involving each division's point person from the planning stage helps ensure the system built actually reflects how work really happens.",
  },
  {
    type: "p",
    text: "Data preparation is also frequently underestimated. Master data like product lists, customers, and suppliers needs cleaning up before it moves into the new system. Starting that cleanup early, even before a system is chosen, makes migration far faster than waiting until a system is picked before tackling messy data.",
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "The right time to implement ERP isn't a figure you can pin to a calendar or a revenue target — it's the point where the cost of managing data manually exceeds the cost and effort of implementing a new system. Recognizing your business's current growth stage, and the signals that come with it, is the most realistic way to answer that question — far more realistic than waiting until everything feels 'obvious'.",
  },
  {
    type: "cta",
    title: "Weighing the right time for ERP?",
    text: "Tell us about your business's current growth stage. The AG·SORA team will help map out the most urgent module and a realistic rollout plan — the consultation is free, no commitment required.",
    href: "/services/erp",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "两年前,一家冷冻食品分销企业只有一个仓库,行政部门三个人,一份 Excel 表格加一个 WhatsApp 群组就绰绰有余。如今,同一家企业已经在不同城市运营着四个仓库、十几名外勤销售,而老板坦言,自己已经不再真正清楚这个月赚了多少,直到报表做好为止——通常要等到月末结束后三周。",
  },
  {
    type: "p",
    text: "这样的故事很常见,随之而来的问题也很相似:现在是上 ERP 的合适时机吗,还是应该等企业“更成熟一些”再说?这个问题本身往往就问偏了方向。ERP 不是给已经做大的企业的奖励,而是对特定成长阶段的回应——而这个阶段,往往比大多数老板以为的更早就能被识别出来。",
  },
  {
    type: "p",
    text: "本文将探讨 ERP 需求通常如何随企业成长阶段演变、哪些信号意味着时机已到,以及行动太早或太晚各自的风险。",
  },
  { type: "h2", text: "要点总结" },
  {
    type: "ul",
    items: [
      "ERP 需求跟随成长阶段,而不是某个绝对的营收数字或员工人数",
      "单一地点、团队规模小的企业,通常还不需要完整的 ERP",
      "最强烈的信号出现在分店增多、数据分散,或决策开始变慢的时候",
      "拖得太久会让数据迁移越来越混乱;动得太快则会把资源浪费在还不需要的复杂性上",
      "从最迫切的模块开始,比一次性全面上线更稳妥",
    ],
  },
  { type: "h2", text: "ERP 跟随的是成长阶段,而不是公司规模" },
  {
    type: "p",
    text: "最常见的误区,是通过对比营收或员工人数,来判断自己是否该像其他已经用上 ERP 的企业一样上马系统。两家营收相近的企业,需求可能完全不同,这取决于需要整合多少运营节点——分店数量、销售渠道数量,以及这些节点的数据需要多频繁地互相连通才能做出决策。",
  },
  {
    type: "p",
    text: "更有价值的做法,是审视自己企业当前所处的成长阶段,因为每个阶段带来的数据需求都不一样。理解这个阶段,不仅能回答“需不需要 ERP”,还能回答“现在到底需要多大范围的 ERP”。",
  },
  { type: "h2", text: "阶段一:单一地点、小团队——通常还用不上" },
  {
    type: "p",
    text: "当企业仍在单一地点运营,团队之间还能直接协调时,维护良好的表格加上简单的收银或记账系统通常就够用了。在这个阶段引入 ERP,往往只会增加复杂度而没有相应的回报,因为数据量还不足以让人工流程真正变得沉重。",
  },
  { type: "h2", text: "阶段二:开始开设新分店或新业务线" },
  {
    type: "p",
    text: "这通常是 ERP 需求信号开始显现的第一个节点。每一个新分店或新业务线,都会带来自己的运营数据——库存、销售、支出——如果还没有集中化的系统,就必须靠人工整合。这种整合负担会非线性增长:两家分店或许还能一天内手动核对完,但五家分店可能要耗费数周,还容易出现差异。",
  },
  {
    type: "p",
    text: "在这个阶段,ERP 不必一开始就覆盖所有模块。库存和财务通常是最先需要优先处理的模块,因为一旦数据分散在多个地点,这两块受到的影响最直接。",
  },
  { type: "h2", text: "阶段三:数据分散,决策开始变慢" },
  {
    type: "p",
    text: "这个阶段最明显的标志,是像“这个月哪个产品最赚钱”这样简单的问题,需要好几天才能得到答案。本该快速做出的决策——调价、采购、评估亏损的分店——因为所需数据还没以可直接使用的形式准备好而被拖延。",
  },
  {
    type: "callout",
    title: "一个简单的问题",
    text: "问问自己:要回答一个关于企业当前状况的问题,从被问到到拿出可信的答案,通常需要多长时间?如果超过一两天,这就是一个强烈的信号。",
  },
  {
    type: "p",
    text: "这个阶段也常常伴随着内部对流通数字的信任度下降。当来自不同来源的两份报表,对同一时期给出不同的数字,而没人能确定哪个才是对的,这已经不再是个人细心与否的问题——它说明报表流程已经超出了表格之间人工核对所能应付的范围。",
  },
  { type: "h2", text: "阶段四:投资人、银行或审计开始要求规范的报表" },
  {
    type: "p",
    text: "当企业开始寻求融资、申请经营贷款,或接受年度审计时,财务报表的规范和一致性就不再是可以商量的事。外部机构通常需要能追溯数据来源的报表,而不只是表格里的一个最终数字。ERP 有助于确保财务报表来自持续一致记录的交易,而不是容易在最后一刻做调整的人工对账结果。",
  },
  { type: "h2", text: "同样值得关注的外部信号" },
  {
    type: "ul",
    items: [
      "竞争对手开始提供需要实时库存可见性的服务,比如在线查询库存",
      "所在行业的报告监管趋严,需要更结构化的数据",
      "大客户或企业客户开始要求系统对接,比如自动下单",
      "交易量的增长速度远超行政团队的承载能力",
    ],
  },
  { type: "h2", text: "拖延太久的风险" },
  {
    type: "p",
    text: "ERP 拖延得越久,散落在各种格式里的历史数据就越多,迁移时整理起来也就越困难。团队的工作习惯也会越来越固化在旧方式上,让切换到新系统变得更加吃力。代价更大的是,在拖延期间基于不准确数据做出的商业决策,可能带来长期影响——采购错误的库存、扩张到实际并不赚钱的地点,或是定价与真实成本不匹配。",
  },
  { type: "h2", text: "动得太快的风险" },
  {
    type: "p",
    text: "反过来,在企业还真正不需要的时候就上 ERP,也有自己的风险。对小团队来说过于复杂的系统会变成负担:花时间学习用不上的功能、许可成本与实际收益不成正比,以及被迫套用系统结构的流程,而这些流程其实并不适合企业早期仍然灵活的运作方式。",
  },
  {
    type: "p",
    text: "动得太快的信号,通常表现为团队花在适应系统上的时间,比实际完成工作的时间还多。如果出现这种情况,不一定说明上 ERP 是个错误的决定,而是说明范围或时机需要重新审视。",
  },
  { type: "h2", text: "判断合适时机的几个问题" },
  {
    type: "ol",
    items: [
      "目前有多少个运营节点(分店、仓库、销售渠道)的数据需要整合?",
      "整理出一份可信的月度报表需要多长时间?",
      "未来 6 到 12 个月内是否有需要更规范报表的扩张或融资计划?",
      "重要决策因为数据不可用而被拖延的频率有多高?",
      "行政团队是否已经难以应付当前的交易量?",
    ],
  },
  {
    type: "p",
    text: "如果大多数答案都指向真实存在的压力,那么时机很可能已经成熟。如果大多数答案感觉还很遥远,不妨先缓一缓,把重心放在稳定现有流程上。",
  },
  { type: "h2", text: "从最迫切的模块开始" },
  {
    type: "p",
    text: "上 ERP 并不意味着要在同一时间,在所有分店一次性替换掉所有系统。更稳妥的做法,是先从一两个能解决最迫切问题的模块入手——通常是库存或财务——再在团队适应、数据证明可靠之后逐步扩大范围。这种分阶段的方式也能让初期投入更可控,风险更容易管理。",
  },
  {
    type: "p",
    text: "分阶段推行还留出了空间,可以先在小范围内从错误中学习,再推广到整个组织。在一家试点分店出现的问题,远比同样的问题在十家分店同时出现要容易解决得多。",
  },
  { type: "h2", text: "现成 ERP 还是定制开发——哪个能更快见效?" },
  {
    type: "p",
    text: "选择哪种形式的 ERP,也会影响你多久能看到成效。订阅制的现成 ERP 通常几周内就能上线运行,适合流程相对标准、希望在不做大额前期投入的情况下尽快启动的企业。当需求信号已经很强烈,但你还不确定自己的流程与同行业典型企业相差多远时,这往往是明智的选择。",
  },
  {
    type: "p",
    text: "为特定需求定制的 ERP 需要更长时间才能上线,但如果你的业务流程确实带有大量特殊规则,它能在长期带来更好的契合度。在实践中,许多企业会先用现成 ERP 处理标准模块,等需求变得更清晰、更具体之后,再转向更贴合自身的定制系统。",
  },
  { type: "h2", text: "为转型准备好团队" },
  {
    type: "p",
    text: "从企业角度看再合适的时机,如果团队没有准备好去执行,也发挥不了太大作用。上 ERP 会改变日常工作方式,而这种改变,在团队理解“为什么”的时候最容易被接受——而不是简简单单被告知下个月要开始用新系统。从规划阶段就让各部门的负责人参与进来,有助于确保建成的系统真正反映实际的工作方式。",
  },
  {
    type: "p",
    text: "数据准备工作也常常被低估。产品清单、客户、供应商等主数据,需要在迁移到新系统之前先整理清楚。提前开始这项整理工作,哪怕是在选定系统之前就开始,会让迁移速度比等系统选好之后才开始处理杂乱数据快得多。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "上 ERP 的合适时机,不是一个能在日历上圈出来的日期,也不是某个营收目标,而是人工管理数据的成本,超过实施新系统所需成本和精力的那个临界点。认清自己企业当前所处的成长阶段,以及随之而来的信号,是回答这个问题最现实的方式——远比等到一切都“显而易见”时才行动要现实得多。",
  },
  {
    type: "cta",
    title: "正在考虑上 ERP 的合适时机?",
    text: "告诉我们你企业目前所处的成长阶段。AG·SORA 团队会帮你梳理出最迫切的模块和切实可行的推行计划——咨询完全免费,无需任何承诺。",
    href: "/services/erp",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
