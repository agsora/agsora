import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "A delivery business owner once described how his team spent nearly two hours every morning just planning courier routes — copying addresses out of customer WhatsApp messages, matching them against a spreadsheet, then sharing the list through a group chat that already had hundreds of messages in it. Asked why the business still didn't have its own app, the answer was simple: 'it feels like we don't need one yet, the old way still works.'",
  },
  {
    type: "p",
    text: "This is a very common trap. 'Still works' and 'works efficiently' are two very different things. Plenty of businesses keep running on a mix of WhatsApp, spreadsheets, and manual steps — not because that's the best way, but because no moment has been painful enough yet to force the question: is it time to build our own app?",
  },
  {
    type: "p",
    text: "This article covers the signs that usually show up before that decision gets made, when it's genuinely not the right time yet, and how to start without immediately building something far bigger than today's needs require.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "An app becomes worth building once manual processes start creating real costs — time, errors, or unhappy customers",
      "Field teams needing real-time data is one of the most common triggers",
      "Not every business needs a mobile app; some are better served by a web app",
      "Starting from a minimum viable product (MVP) is safer than building every feature at once",
      "The choice between off-the-shelf software and custom development depends on how unusual your processes actually are",
    ],
  },
  { type: "h2", text: "Why the question isn't 'app or no app'" },
  {
    type: "p",
    text: "A more useful question than 'does my business need an app' is 'which process is costing the most by staying manual'. An app isn't a status symbol or a digital trend to chase — it's a tool for removing repetitive, error-prone work and for putting data in front of the people who need it, wherever and whenever they need it. If there's no process that genuinely benefits from that, an app will just be a cost without a matching return.",
  },
  { type: "h2", text: "Sign 1: The business has outgrown WhatsApp and spreadsheets" },
  {
    type: "p",
    text: "WhatsApp and spreadsheets work fine at low volume, when a small team can still keep each other in the loop directly. Problems start once volume grows: important messages get buried under other chatter, nobody's sure which spreadsheet copy is the correct one because several people are editing different versions, and there's no easy way to see history or trace where a mistake happened. If your team spends more time hunting for information than actually using it, that's the earliest sign the tools have fallen behind the business's complexity.",
  },
  { type: "h2", text: "Sign 2: Field teams need real-time data" },
  {
    type: "p",
    text: "Salespeople meeting clients, couriers delivering goods, technicians handling repairs at a customer's site — they all work away from the office, yet still need current data: available stock, order status, or customer history. When they have to call the office to check any of this, or the office has no idea where they are and what's already been done, that's exactly the kind of overhead an app can remove by giving field staff direct access to data.",
  },
  {
    type: "callout",
    title: "A quick question",
    text: "How many times a day does your field team call the office just to ask for information that's already recorded somewhere? If the answer is more than a few, that alone is reason enough to consider an app.",
  },
  { type: "h2", text: "Sign 3: Customers expect a consistent digital experience" },
  {
    type: "p",
    text: "Customers used to ordering through an app, tracking their order status directly, or viewing their own transaction history will experience manual alternatives — waiting for a chat reply, calling to confirm, filling out a paper form — as feeling behind the times. This isn't about vanity; it's about expectations shaped by how they already interact with other businesses. When those expectations go unmet, some customers simply move to a competitor offering an easier experience.",
  },
  { type: "h2", text: "Sign 4: Manual mistakes start carrying a real cost" },
  {
    type: "p",
    text: "A miswritten order, an address sent to the wrong place, or customer data lost when the staff member who kept it resigns — these are costs that rarely get counted as costs, but their impact is real. Once mistakes like this start repeating and affecting customer satisfaction or hitting the bottom line directly, the cost of building an app that reduces those mistakes is usually far smaller than the ongoing cost of the mistakes themselves.",
  },
  { type: "h2", text: "Sign 5: Growth has outpaced what manual processes can handle" },
  {
    type: "p",
    text: "A process that works fine for ten transactions a day won't necessarily hold up for a hundred. Healthy growth should make operations run smoother, not messier. If every new customer or transaction feels proportional to a new pile of administrative problems, that's a sign manual systems are hitting their limit — and an app can be the way to decouple business growth from administrative-load growth.",
  },
  {
    type: "p",
    text: "This sign often shows up alongside team growth too. New hires take longer to understand processes that were never properly documented, and mistakes happen more easily because operational knowledge still lives in a few senior people's heads instead of being written into a system everyone can access.",
  },
  { type: "h2", text: "When it's genuinely not the right time yet" },
  {
    type: "p",
    text: "Not every business needs to rush into building an app. If the business processes are still simple, transaction volume is still low, and the team can coordinate smoothly without many mistakes, building an app can actually become a new burden — development cost, maintenance cost, and the team's time learning a new system — without a matching payoff yet.",
  },
  {
    type: "ul",
    items: [
      "Transaction volume is still comfortably handled by one or two people",
      "Recording mistakes are rare and easy to fix",
      "There's no near-term plan to expand branches, team, or sales channels",
      "Business processes are still changing frequently and haven't settled yet",
    ],
  },
  {
    type: "p",
    text: "That last point matters: building an app for a process that's still changing frequently usually means the app has to be reworked over and over. Stabilizing the process first, then building a system on top of it, generally produces an app that lasts much longer.",
  },
  { type: "h2", text: "Start with an MVP, not every feature at once" },
  {
    type: "p",
    text: "One of the most common mistakes is trying to build an app that solves every problem at once, in its very first version. A safer approach is building a minimum viable product (MVP) — a version with only the core features that solve the most urgent problem, then expanding gradually based on how the team and customers actually use it.",
  },
  {
    type: "p",
    text: "An MVP also lets you test assumptions before committing to a big investment. Features that look essential on paper sometimes turn out to be barely touched after a few weeks of real use, while needs nobody anticipated surface from actual usage instead. Building in stages means every new feature is based on evidence, not a guess.",
  },
  { type: "h2", text: "Off-the-shelf software, custom development, or both?" },
  {
    type: "p",
    text: "If your needs are fairly standard — booking, payments, basic inventory — ready-made apps or SaaS platforms are often good enough and much faster to get running. But if your business processes have specific rules that mainstream products don't accommodate, or you need deep integration with internal systems already in place, custom development offers flexibility off-the-shelf software can't match.",
  },
  {
    type: "p",
    text: "Many businesses also choose a hybrid approach: using ready-made software for standard functions like payments, and building custom modules only for the parts of the process that are genuinely unique to their business. This approach is often more cost-effective than building everything from scratch.",
  },
  {
    type: "p",
    text: "Cost is another factor worth weighing honestly on both sides. Manual processes rarely show up as a single line item, which makes them easy to treat as 'free' compared to an app whose cost is visible upfront. That cost is still there, just hidden in another form: staff hours spent on repetitive work, orders lost because a response came too slowly, or customers who don't return because the experience felt like a hassle. Estimating the hours lost each month to manual work, then multiplying by the team's time cost, usually gives a more honest comparison than a gut feeling that building an app 'seems expensive'.",
  },
  { type: "h2", text: "Preparing the team, not just the app" },
  {
    type: "p",
    text: "A great app can still fail if the team who'll use it isn't involved from the start. Moving from an old habit to a new system takes time, especially for team members already comfortable with the old way, however inconvenient it is. Involving them from the planning stage — asking about the daily friction they actually experience, rather than just announcing a decision already made — makes adoption go far more smoothly than launching an app out of nowhere.",
  },
  {
    type: "p",
    text: "The transition period also needs planning, not treating as finished the moment the app launches. Giving the team time to get comfortable, providing a simple guide, and keeping the old process available as a fallback for the first few weeks reduces the risk of operational disruption during the switchover.",
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "No revenue figure or headcount automatically signals that a business is 'big enough' to warrant its own app. What matters is how expensive the current manual process actually is — in time, mistakes, and missed opportunities. If several of the signs above feel familiar, the most sensible next step isn't jumping straight into building a large app, but mapping which process needs fixing most urgently first.",
  },
  {
    type: "cta",
    title: "Recognize a few of these signs in your own business?",
    text: "Tell us which process feels heaviest right now. The AG·SORA team will help determine whether an app is actually the right solution, and how to start with a realistic MVP — the consultation is free.",
    href: "/services/mobile",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "一位物流公司的老板曾提到,他的团队每天早上要花将近两个小时来安排快递路线——从客户的 WhatsApp 消息里一条条抄下地址,再对照 Excel 表格核对,然后通过一个已经有几百条消息的群聊分发出去。当被问到为什么还没有自己的应用时,答案很简单:“感觉还用不上,老办法还能凑合。”",
  },
  {
    type: "p",
    text: "这是一个非常常见的陷阱。“还能凑合”和“高效运转”是完全不同的两件事。很多企业继续依赖 WhatsApp、Excel 表格和人工流程的组合,并不是因为这是最好的方式,而是因为还没有出现足够痛的时刻,逼着他们停下来问:是不是该有自己的应用了?",
  },
  {
    type: "p",
    text: "本文将探讨在做出这个决定之前通常会出现的迹象、哪些情况下其实还不到时候,以及如何在不直接建一个远超当前需求的庞大系统的情况下起步。",
  },
  { type: "h2", text: "要点总结" },
  {
    type: "ul",
    items: [
      "当人工流程开始产生真实成本——时间、错误或客户不满——就是该考虑应用的时候",
      "外勤团队需要实时数据,是最常见的触发因素之一",
      "不是所有企业都需要移动应用;有些用网页应用就已足够",
      "从最小可行产品(MVP)开始,比一次性建好所有功能更稳妥",
      "选择现成软件还是定制开发,取决于你的业务流程有多“特殊”",
    ],
  },
  { type: "h2", text: "问题不该是“要不要做应用”" },
  {
    type: "p",
    text: "比“我的企业需不需要一个应用”更有价值的问题是:“继续用人工方式,哪个环节代价最高?”应用不是身份的象征,也不是需要追赶的数字化潮流——它是用来消除重复、易出错的工作,并让需要数据的人,无论何时何地都能拿到数据的工具。如果没有哪个环节能从中真正受益,那么应用只会是一笔没有回报的成本。",
  },
  { type: "h2", text: "迹象一:业务流程已经超出 WhatsApp 和表格能应付的范围" },
  {
    type: "p",
    text: "在业务量小、团队还能直接互相提醒的时候,WhatsApp 和表格运作得很好。问题在业务量增加后开始出现:重要消息被淹没在其他聊天内容中,没人能确定哪份表格副本才是正确版本,因为多个人在编辑不同的版本,也没有简单的方法查看历史记录或追溯错误发生的原因。如果你的团队花在寻找信息上的时间,比实际使用信息的时间还多,这就是工具已经跟不上业务复杂度的最早信号。",
  },
  { type: "h2", text: "迹象二:外勤团队需要实时数据" },
  {
    type: "p",
    text: "拜访客户的销售、配送货物的快递员、上门维修的技术人员——他们都在办公室之外工作,却仍然需要最新数据:可用库存、订单状态,或客户历史记录。当他们必须打电话回公司核实这些信息,或者反过来公司根本不知道他们在哪里、完成了哪些工作时,这正是应用可以通过让外勤人员直接访问数据来消除的负担。",
  },
  {
    type: "callout",
    title: "一个简单的问题",
    text: "你的外勤团队每天要打多少次电话回公司,只是为了询问其实早已记录在某处的信息?如果答案是好几次,这本身就足以成为考虑上线应用的理由。",
  },
  { type: "h2", text: "迹象三:客户期待一致的数字化体验" },
  {
    type: "p",
    text: "习惯了通过应用下单、直接追踪订单状态、查看自己交易记录的客户,会把人工方式——等待聊天回复、打电话确认、填写纸质表格——视为过时的体验。这无关面子,而是他们与其他企业互动过程中已经形成的期待。当这种期待得不到满足时,一部分客户会直接转向提供更轻松体验的竞争对手。",
  },
  { type: "h2", text: "迹象四:人工失误开始产生真实成本" },
  {
    type: "p",
    text: "记错订单、寄错地址,或者负责记录客户数据的员工离职后数据随之丢失——这些都是很少被算作“成本”的成本,但影响是真实存在的。当这类失误开始反复出现,并影响客户满意度或直接造成财务损失时,建一个能减少这些失误的应用所需的成本,通常远低于持续承担这些失误所付出的代价。",
  },
  { type: "h2", text: "迹象五:增长速度已经超出人工流程能承受的范围" },
  {
    type: "p",
    text: "一个每天处理十笔交易还运转良好的流程,不代表能扛住一百笔。健康的增长应该让运营变得更顺畅,而不是更混乱。如果每增加一位客户或一笔交易,都伴随着成比例增加的行政麻烦,这就说明人工系统已经接近极限——而应用可以让业务增长不再与行政负担的增长绑在一起。",
  },
  {
    type: "p",
    text: "这个迹象也常常与团队规模扩大同时出现。新员工需要更长时间才能理解那些从未被好好记录下来的流程,失误也更容易发生,因为运营知识仍然只存在于少数资深员工的脑子里,而不是写进一个所有人都能查阅的系统中。",
  },
  { type: "h2", text: "哪些情况下其实还不到时候" },
  {
    type: "p",
    text: "不是所有企业都需要急着建应用。如果业务流程仍然简单、交易量仍然不大,团队之间还能顺畅协调、鲜少出错,那么建一个应用反而可能成为新的负担——开发成本、维护成本,以及团队学习新系统所花的时间——而收益还不足以覆盖这些投入。",
  },
  {
    type: "ul",
    items: [
      "交易量仍能由一两个人轻松应对",
      "记录失误很少发生,且容易纠正",
      "近期没有扩张分店、团队或销售渠道的计划",
      "业务流程仍在频繁变动,尚未稳定下来",
    ],
  },
  {
    type: "p",
    text: "最后一点很关键:为一个还在频繁变动的流程建应用,通常意味着这个应用需要被反复重做。先让流程稳定下来,再在此基础上搭建系统,通常能做出使用寿命更长的应用。",
  },
  { type: "h2", text: "从 MVP 开始,而不是一次做齐所有功能" },
  {
    type: "p",
    text: "最常见的错误之一,是试图在第一个版本就建出能解决所有问题的应用。更稳妥的做法是先打造一个最小可行产品(MVP)——只包含能解决最迫切问题的核心功能,再根据团队和客户的实际使用情况逐步扩展。",
  },
  {
    type: "p",
    text: "MVP 还能让你在投入大量资源之前先验证假设。一些在纸面上看起来至关重要的功能,实际使用几周后可能几乎没人用到;而一些事先没人想到的需求,反而会在真实使用中浮现出来。分阶段建设,意味着每一次新增功能都基于证据,而不是猜测。",
  },
  { type: "h2", text: "现成软件、定制开发,还是两者结合?" },
  {
    type: "p",
    text: "如果你的需求相对标准——预订、支付、基础库存管理——现成的应用或 SaaS 平台往往已经够用,而且上线速度快得多。但如果你的业务流程有主流产品无法满足的特殊规则,或者需要与已有的内部系统深度对接,定制开发能提供现成软件无法比拟的灵活性。",
  },
  {
    type: "p",
    text: "许多企业也会选择混合方式:标准功能(如支付)使用现成软件,只为业务中真正独特的部分开发定制模块。这种方式通常比从零开始建造一切更节省成本。",
  },
  {
    type: "p",
    text: "成本是另一个值得双方都诚实衡量的因素。人工流程很少表现为一笔单独的账目,这让它很容易被当作“免费”的,相比之下应用的成本却一开始就清清楚楚地摆在那里。但那份成本其实一直存在,只是以另一种形式隐藏着:员工花在重复劳动上的工时、因响应太慢而流失的订单,或是因为体验太麻烦而不再回头的客户。估算每月因人工流程损失的工时,再乘以团队的时间成本,通常比单凭“感觉建应用好像很贵”的直觉,能给出更诚实的对比。",
  },
  { type: "h2", text: "准备好团队,而不只是准备好应用" },
  {
    type: "p",
    text: "一款优秀的应用,如果使用它的团队从一开始就没有被纳入进来,依然可能失败。从旧习惯转向新系统需要时间,尤其是对那些已经习惯旧方式的团队成员来说,即便旧方式并不方便。从规划阶段就让他们参与进来——询问他们每天实际遇到的困难,而不是直接宣布一个已经做好的决定——会让采用过程比突然上线顺利得多。",
  },
  {
    type: "p",
    text: "过渡期也需要提前规划,而不是认为应用一上线就万事大吉。给团队时间去适应、提供简单易懂的操作指南,并在最初几周保留旧流程作为备用,能大大降低切换期间运营中断的风险。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "没有哪个营收数字或员工人数能自动说明一家企业“已经足够大”,该拥有自己的应用了。真正起决定作用的,是当前人工流程实际付出的代价——时间、错误,以及失去的机会。如果上面的几个迹象让你感到熟悉,最合理的下一步不是直接去建一个庞大的应用,而是先梳理清楚,哪个流程最迫切需要被改变。",
  },
  {
    type: "cta",
    title: "在自己的企业里发现了上面的几个迹象?",
    text: "告诉我们目前感觉最吃力的流程是什么。AG·SORA 团队会帮你判断应用是否真的是解决方案,以及如何从一个切实可行的 MVP 开始——咨询完全免费。",
    href: "/services/mobile",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
