import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "Plenty of people carry an app idea around for years without ever actually starting it. Not because the idea is bad, but because the distance between 'having an idea' and 'having a working app' feels like too large a leap to make sense of. How much will it cost, how long will it take, where do you even begin — these questions often keep an idea that's genuinely worth trying stuck in a personal notes app forever.",
  },
  {
    type: "p",
    text: "In reality, the process of building software follows fairly clear stages, and understanding those stages is the first step toward turning an idea into something real. That doesn't mean the process is easy or risk-free — hard decisions and the possibility of failure exist at every stage. But that risk becomes far easier to manage once you know what to expect, compared to jumping in with no picture at all.",
  },
  {
    type: "p",
    text: "This article walks through the stages from idea to an app people actually use, including the decisions most commonly underrated at each stage, and how to figure out the most sensible way to collaborate when starting out.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "Ideas that never become apps usually stall from uncertainty about the process, not because the idea itself is bad",
      "Sharpening an idea into a specific problem matters far more than deciding on features early",
      "Validating the need before writing code saves far more time and cost later on",
      "A tightly-scoped MVP is more likely to succeed than trying to build every feature from day one",
      "Launch isn't the finish line — maintenance and iteration afterward matter just as much as the initial build",
    ],
  },
  { type: "h2", text: "Why so many ideas never become an app" },
  {
    type: "p",
    text: "Most ideas that never come to life aren't held back by a lack of capital or technical skill, but by the absence of a clear first step. An idea still framed as 'an app to solve problem X' feels too big to start, so people wait until they feel 'more ready' — a feeling that often never arrives. Breaking a big idea into concrete stages is the most effective way out of that stall.",
  },
  { type: "h2", text: "Stage 1: Sharpening the idea into a specific problem" },
  {
    type: "p",
    text: "A good idea usually starts out far too broad: 'an app for small businesses to manage inventory' or 'a platform connecting freelancers and clients'. The real first step isn't deciding on features, but narrowing down exactly who the users are and what problem is most urgent for them. The more specific the problem you're solving, the clearer the shape of the solution becomes too.",
  },
  {
    type: "p",
    text: "A simple test for how sharp an idea is: try explaining it in one sentence — 'this app helps [who] do [what] without having to [the problem they currently face]'. If that sentence still feels vague or could apply to too many different people at once, the idea usually needs more sharpening first.",
  },
  { type: "h2", text: "Stage 2: Validating the need before writing code" },
  {
    type: "p",
    text: "The most commonly skipped stage is confirming that the problem you want to solve is genuinely felt by prospective users, not just by you. Validation doesn't have to be elaborate — it can start with talking directly to prospective users, observing how they currently deal with the problem, or building a simple prototype to gauge a real reaction before a single line of production code gets written.",
  },
  {
    type: "callout",
    title: "A sign of weak validation",
    text: "If everyone you talk to says 'great idea' but nobody actually wants to try an early version once you offer it, that's a signal the problem isn't urgent enough yet to make people change their habits.",
  },
  { type: "h2", text: "Stage 3: Defining the MVP scope" },
  {
    type: "p",
    text: "Once the problem and prospective users are clear enough, the next temptation is building every feature you've thought of from day one. A safer approach is defining a minimum viable product (MVP) — the leanest version that still solves the core problem, without extra features that haven't proven necessary yet.",
  },
  {
    type: "p",
    text: "Defining MVP scope means making choices that aren't always comfortable: features that feel 'important' but aren't core have to wait. That's fine. The goal of an MVP isn't building a complete app in miniature — it's building just enough to start learning from real usage as quickly as possible.",
  },
  { type: "h2", text: "Stage 4: Design as more than just visuals" },
  {
    type: "p",
    text: "Design is often misunderstood as being about color and layout. The more important part is actually flow design — how a user moves from one step to the next to accomplish their goal. A confusing flow can't be fixed just by making the visuals prettier; the structure itself needs to be reworked.",
  },
  {
    type: "p",
    text: "At this stage, simple wireframes — sketches of page structure without visual detail — are far more useful than jumping straight to a polished final design. Wireframes change faster, and revisions at this stage are much cheaper than revisions after the app is already built.",
  },
  { type: "h2", text: "Stage 5: Building in stages, not all at once" },
  {
    type: "p",
    text: "Healthy development runs in short cycles — build a small piece, test it, then move to the next piece — rather than disappearing for months and reappearing with a 'complete' app that's never been tested along the way. A staged approach lets problems surface early, when they're still cheap to fix.",
  },
  {
    type: "p",
    text: "For idea owners without a technical background, this stage is the right time to stay involved — reviewing progress regularly, trying the in-progress version, and giving feedback early, rather than waiting until everything is 'done' to see the result for the first time.",
  },
  { type: "h2", text: "Stage 6: Testing before it touches real users" },
  {
    type: "p",
    text: "Testing isn't just about hunting technical bugs. Just as important is testing whether the designed flow actually makes sense to someone who has never seen the app before. Developers who've become deeply familiar with their own app often miss the parts that confuse a first-time user.",
  },
  {
    type: "ul",
    items: [
      "Test with a handful of real prospective users, not just the internal team",
      "Watch for where they get confused or stop without being prompted",
      "Test non-ideal scenarios too — slow connections, wrong input, or a skipped step",
      "Record feedback specifically, not just 'looks good' or 'something felt off'",
    ],
  },
  { type: "h2", text: "Stage 7: Launching and gathering real feedback" },
  {
    type: "p",
    text: "A launch doesn't have to mean releasing to everyone at once. Launching to a limited group of users first creates room to catch problems before they affect a wider audience, and gives time to adjust based on real feedback instead of assumptions. Plenty of apps fail not because the idea was wrong, but because they launched at full scale without the chance to learn from a small group first.",
  },
  {
    type: "p",
    text: "The most valuable feedback at this stage often isn't what people say directly, but what shows up in behavior: which features actually get used, at what point users stop using the app, and how often they come back. Real behavior often tells a more honest story than survey answers.",
  },
  { type: "h2", text: "Stage 8: After launch — maintenance isn't extra work" },
  {
    type: "p",
    text: "Many people treat launch as the finish line of a project, when it's actually the start of a phase just as important: maintenance. Operating systems change, libraries in use need updating, and new security gaps can surface at any time. An app left without maintenance slowly becomes fragile, even if its features are never touched again.",
  },
  {
    type: "p",
    text: "Maintenance also includes iterating based on how the app is actually used. Features that felt essential at first sometimes go untouched once real usage kicks in, while new needs surface from usage nobody anticipated. Budget and time for this phase should be planned from the start, not treated as an unexpected cost once the app is already running.",
  },
  { type: "h2", text: "Realistic time and cost" },
  {
    type: "p",
    text: "Timeline and cost depend heavily on the MVP scope defined in the early stage. A simple app with a clear flow and limited features can be done in a few weeks to two or three months. An app with complex integrations, multiple user types, or specific security requirements realistically takes longer.",
  },
  {
    type: "p",
    text: "What most commonly delays a project isn't the development itself, but decisions changing midway because the initial scope wasn't thought through carefully. Spending more time on validation and MVP scoping, even though it feels slow at the start, almost always speeds up the overall process.",
  },
  { type: "h2", text: "Going it alone, an in-house team, or a software house?" },
  {
    type: "p",
    text: "For some people with a technical background, building it themselves early on makes sense for testing an idea at minimal cost. But once validation shows the idea is worth pursuing further, the need for speed and quality usually exceeds what one person working alone can deliver.",
  },
  {
    type: "p",
    text: "Hiring an in-house team makes sense if software is a long-term core of the business and you can invest in building a team that grows alongside the product. Working with a software house makes more sense when you need an experienced team to build and launch a product without recruiting and managing a technical team from scratch — especially early on, when the product's direction may still change.",
  },
  { type: "h2", text: "The mistakes that get repeated most often" },
  {
    type: "ul",
    items: [
      "Writing code before the problem and prospective users are actually clear",
      "Assuming every item on the wishlist has to be in version one",
      "Skipping testing with people outside the team because the usage feels 'obvious'",
      "Launching to everyone at once without a limited test group first",
      "Not budgeting time or money for maintenance after launch",
    ],
  },
  {
    type: "p",
    text: "These mistakes share the same thread: skipping the stage that feels slow in order to look like you're moving fast. In many cases, the stage that got skipped is exactly the one that determines whether the app ends up genuinely used, or just finished being built without ever becoming useful.",
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "The distance between an idea and a working app feels large mainly because the process isn't visible from the outside. Once broken into stages — sharpening the problem, validating the need, defining an MVP, designing the flow, building in stages, testing, launching to a limited group, and then maintaining — that distance becomes a series of steps you can take one at a time, not a leap you have to take all at once.",
  },
  {
    type: "cta",
    title: "Have an idea you've never started on?",
    text: "Tell us about it, however rough it still is. The AG·SORA team will help sharpen the problem you want to solve and shape a realistic MVP to start building — the consultation is free, no commitment required.",
    href: "/services/custom-software",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "很多人心里揣着一个应用的想法好几年,却从未真正动手。不是因为这个想法不好,而是因为从“有一个想法”到“有一个能运行的应用”之间的距离,感觉是一次难以理解的巨大跳跃。要花多少钱、要花多长时间、该从哪里开始——这些问题常常让一个本来值得一试的想法,永远停留在备忘录里。",
  },
  {
    type: "p",
    text: "但现实是,搭建软件的过程有相当清晰的阶段,理解这些阶段正是把想法变成现实的第一步。这并不意味着过程会很轻松或没有风险——每个阶段都存在艰难的决策和失败的可能。但一旦你知道接下来会面对什么,这种风险就比毫无头绪地一头扎进去要容易管理得多。",
  },
  {
    type: "p",
    text: "本文将梳理从想法到真正被用户使用的应用之间的各个阶段,包括每个阶段最容易被低估的决策,以及如何判断开始时最合理的合作方式。",
  },
  { type: "h2", text: "要点总结" },
  {
    type: "ul",
    items: [
      "从未变成应用的想法,往往是因为对流程的不确定而停滞,而不是因为想法本身不好",
      "把想法打磨成一个具体的问题,比一开始就确定功能重要得多",
      "在写代码之前验证需求,能在后期省下多得多的时间和成本",
      "范围收紧的 MVP,比一开始就想做齐所有功能更容易成功",
      "上线不是终点——之后的维护和迭代,和最初的开发同样重要",
    ],
  },
  { type: "h2", text: "为什么很多想法从未变成应用" },
  {
    type: "p",
    text: "大多数从未实现的想法,阻碍它们的不是资金或技术能力的欠缺,而是缺少一个清晰的第一步。一个还停留在“一个解决 X 问题的应用”这种表述阶段的想法,会显得太大而难以开始,于是人们一直等到自己感觉“更准备好了”——而这种感觉常常永远不会到来。把一个大想法拆解成具体的阶段,是走出这种停滞最有效的方法。",
  },
  { type: "h2", text: "阶段一:把想法打磨成一个具体的问题" },
  {
    type: "p",
    text: "一个好想法起初通常都过于宽泛:“帮中小企业管理库存的应用”,或者“连接自由职业者和客户的平台”。真正的第一步不是确定功能,而是明确到底谁是用户,以及他们面临的最迫切问题是什么。你要解决的问题越具体,解决方案的形态也就越清晰。",
  },
  {
    type: "p",
    text: "检验一个想法是否足够清晰,有一个简单的方法:试着用一句话解释它——“这个应用帮助[谁]完成[什么],而不必再[他们目前面临的问题]”。如果这句话依然含糊,或者可以套用在太多不同的人身上,那这个想法通常还需要进一步打磨。",
  },
  { type: "h2", text: "阶段二:在写代码之前验证需求" },
  {
    type: "p",
    text: "最常被跳过的阶段,是确认你想解决的问题,是潜在用户真正感受到的,而不仅仅是你自己的想法。验证不必很复杂——可以从直接和潜在用户交流开始,观察他们目前是如何应对这个问题的,或者做一个简单的原型,在写下一行正式代码之前,先看看真实的反应。",
  },
  {
    type: "callout",
    title: "验证薄弱的信号",
    text: "如果和你聊过的每个人都说“这想法不错”,但一旦你真的拿出早期版本,却没人愿意尝试,这就说明这个问题还没有紧迫到能让人们改变现有习惯。",
  },
  { type: "h2", text: "阶段三:确定 MVP 的范围" },
  {
    type: "p",
    text: "当问题和目标用户都足够清晰之后,下一个诱惑就是想把所有想到的功能都在一开始就做出来。更稳妥的做法是定义一个最小可行产品(MVP)——一个依然能解决核心问题、但最精简的版本,不包含那些还没被证明真正需要的附加功能。",
  },
  {
    type: "p",
    text: "确定 MVP 范围,意味着要做一些并不总是舒服的取舍:那些感觉“重要”但并非核心的功能,必须先放一放。这很正常。MVP 的目标不是做出一个缩小版的完整应用,而是做出刚好足够的东西,尽快开始从真实使用中学习。",
  },
  { type: "h2", text: "阶段四:设计不只是视觉" },
  {
    type: "p",
    text: "设计常被误解为只关乎颜色和排版。实际上更重要的部分是流程设计——用户如何从一个步骤走到下一个步骤,最终完成自己的目标。一个令人困惑的流程,不可能靠把界面做得更好看来解决;需要重新设计的是结构本身。",
  },
  {
    type: "p",
    text: "在这个阶段,不带视觉细节的简单线框图,远比直接做出精美的最终设计更有用。线框图改起来更快,在这个阶段修改的成本,也远低于应用做好之后再修改。",
  },
  { type: "h2", text: "阶段五:分阶段开发,而不是一次做完" },
  {
    type: "p",
    text: "健康的开发是以短周期进行的——做一小块、测试一小块,再进行下一块——而不是消失几个月,然后拿出一个从未在过程中被测试过的“完整”应用。分阶段的方式能让问题更早暴露出来,在修复成本还很低的时候就被发现。",
  },
  {
    type: "p",
    text: "对于没有技术背景的想法拥有者来说,这个阶段正是应该保持参与的时候——定期查看进展、试用正在开发中的版本、尽早给出反馈,而不是等到一切都“完成”了才第一次看到结果。",
  },
  { type: "h2", text: "阶段六:在触及真实用户之前进行测试" },
  {
    type: "p",
    text: "测试不只是找技术上的 bug。同样重要的是测试设计出来的流程,对一个从未见过这款应用的人来说,是否真的说得通。已经对自己的应用太过熟悉的开发者,往往意识不到哪些部分会让新用户感到困惑。",
  },
  {
    type: "ul",
    items: [
      "找几位真实的潜在用户测试,而不只是内部团队",
      "留意他们在哪里感到困惑,或在没人引导时就停了下来",
      "也要测试非理想场景——网络慢、输入错误,或跳过了某个步骤",
      "记录具体的反馈,而不只是“挺好的”或“感觉哪里怪怪的”",
    ],
  },
  { type: "h2", text: "阶段七:上线并收集真实反馈" },
  {
    type: "p",
    text: "上线不必意味着一次性面向所有人发布。先向有限的用户群体上线,能在问题影响到更多人之前先发现它,也能有时间根据真实反馈而不是假设来做调整。很多应用失败,不是因为想法错了,而是因为一上来就大规模发布,没有先从小范围学习的机会。",
  },
  {
    type: "p",
    text: "这个阶段最有价值的反馈,往往不是人们直接说出来的话,而是体现在行为中的东西:哪些功能真的被用到、用户在哪个节点停止使用、他们多久回来一次。真实的行为,往往比调查问卷的答案更诚实。",
  },
  { type: "h2", text: "阶段八:上线之后——维护不是额外的工作" },
  {
    type: "p",
    text: "很多人把上线当作项目的终点,但实际上,那正是同样重要的一个阶段的开始:维护。操作系统会变化,使用的库需要更新,新的安全漏洞随时可能被发现。一个被放任不管的应用,即便功能从未改动过,也会逐渐变得脆弱。",
  },
  {
    type: "p",
    text: "维护也包括根据应用的实际使用情况进行迭代。一些一开始感觉至关重要的功能,在真实使用后可能很少被碰到;而一些事先没人想到的新需求,却会从实际使用中浮现出来。这个阶段的预算和时间,应该从一开始就规划好,而不是等应用上线之后,才被当作一笔意外支出。",
  },
  { type: "h2", text: "合理的时间与成本" },
  {
    type: "p",
    text: "时间和成本在很大程度上取决于早期阶段确定的 MVP 范围。流程清晰、功能有限的简单应用,几周到两三个月就能完成。涉及复杂对接、多种用户类型,或有特殊安全需求的应用,现实中需要更长时间。",
  },
  {
    type: "p",
    text: "最常导致项目延期的,往往不是开发本身,而是因为一开始范围没有想清楚,导致中途决策反复变动。在验证和确定 MVP 范围上多花一些时间,虽然在开始阶段感觉进展缓慢,但几乎总能让整个过程更快完成。",
  },
  { type: "h2", text: "单打独斗、组建内部团队,还是找软件开发公司?" },
  {
    type: "p",
    text: "对一些有技术背景的人来说,早期自己动手搭建,是以最低成本验证想法的合理方式。但一旦验证证明这个想法值得进一步投入,对速度和质量的要求通常就会超出一个人单打独斗所能提供的范围。",
  },
  {
    type: "p",
    text: "如果软件是长期业务的核心,并且你有能力投入组建一个能随产品共同成长的团队,组建内部团队是合理的选择。而如果你需要一支有经验的团队来搭建并上线产品,又不想从零开始招募和管理技术团队——尤其是在产品方向还可能改变的早期阶段——与软件开发公司合作则更为合理。",
  },
  { type: "h2", text: "最常被重复的错误" },
  {
    type: "ul",
    items: [
      "在问题和潜在用户还没真正清晰之前就开始写代码",
      "认为愿望清单上的每一项功能都必须出现在第一个版本里",
      "因为觉得用法“显而易见”,而跳过团队之外的测试",
      "没有先经过有限的测试群体,就直接面向所有人上线",
      "没有为上线后的维护预留时间和预算",
    ],
  },
  {
    type: "p",
    text: "这些错误有一个共同点:为了看起来推进得快,而跳过了那个感觉慢的阶段。在很多情况下,被跳过的那个阶段,恰恰决定了一个应用最终是真正被使用,还是只是被做完了却从未真正发挥作用。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "想法与一个能运行的应用之间的距离之所以感觉遥远,主要是因为这个过程从外部看不清楚。一旦拆解成阶段——打磨问题、验证需求、确定 MVP、设计流程、分阶段开发、测试、向有限群体上线,再到后续维护——这段距离就会变成一步一步可以走的台阶,而不是必须一次跨过去的鸿沟。",
  },
  {
    type: "cta",
    title: "有一个从未开始动手的想法?",
    text: "告诉我们这个想法,哪怕现在还很粗糙。AG·SORA 团队会帮你打磨想要解决的问题,并规划一个切实可行的 MVP 开始搭建——咨询完全免费,无需任何承诺。",
    href: "/services/custom-software",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
