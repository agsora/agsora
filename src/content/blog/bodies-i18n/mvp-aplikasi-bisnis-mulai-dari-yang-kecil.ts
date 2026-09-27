import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "The owner of a distribution business has a clear app idea in mind: customers can place orders themselves, sales reps can see stock live, the warehouse receives shipping instructions automatically, and every transaction flows straight into the financial reports. The feature list grows every time it comes up with the team. When the owner finally asks for a quote, the time and cost estimate makes them hesitate to start at all.",
  },
  {
    type: "p",
    text: "This situation is very common. Business app ideas tend to grow large because everyone in the company sees a different problem and wants it all solved at once. Yet building every feature at once is the most expensive and riskiest way to find out whether an app is actually useful. There is a far more sensible approach: start with the smallest version that already delivers real value, then grow it based on how it's actually used.",
  },
  {
    type: "p",
    text: "This approach is known as an MVP, short for minimum viable product. The term comes from the startup world, but the principle is highly relevant for businesses building internal apps or customer-facing apps. This article covers what an MVP means in a business context, how to define its scope, the mistakes that often happen, and how to move from a first version to a complete system.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "An MVP is the simplest version of an app that already solves one real problem and can be used every day",
      "An MVP is not a throwaway prototype — its technical quality must be good enough to build on, not discard",
      "MVP scope is defined by the single most important workflow, not by the longest feature list",
      "Feedback from real users in the first few weeks is worth far more than assumptions made during planning",
      "A staged approach reduces cost risk, delivers value sooner, and makes it easier for the team to adapt",
    ],
  },
  { type: "h2", text: "What an MVP really means for a business" },
  {
    type: "p",
    text: "In the startup world, an MVP is often used to test whether the market wants a product at all. In an established business the goal is slightly different. You usually already know the problem is real — orders go missing, stock is out of sync, reports arrive late. What you don't yet know is the right shape of the solution, which features will actually get used, and how the team will adapt to a new way of working.",
  },
  {
    type: "p",
    text: "An MVP for a business app is a first version that handles one core workflow from start to finish, is reliable enough for daily use, and is built on a technical foundation that can be extended. The key word is viable: fit for use. An app that can be demonstrated but can't be used in real operations isn't an MVP — it's a prototype. Prototypes are useful for testing interface ideas, but they give you no data about genuine usage.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    alt: "A hand holding a pencil, sketching an app interface layout on paper",
    caption: "An MVP's scope should fit into one simple flow you can sketch before development begins.",
  },
  { type: "h2", text: "Why building everything at once is risky" },
  {
    type: "p",
    text: "Building a complete app in one big project looks efficient on paper: one round of planning, one round of development, one launch. In practice, this approach carries several risks that often only become apparent near the end of the project.",
  },
  {
    type: "ul",
    items: [
      "Requirements change during a long build, so some features are no longer relevant by the time the app is finished",
      "Assumptions about how users work turn out to be wrong, and this only surfaces after every feature has been built on top of them",
      "Cost and time tend to overrun because a large scope is hard to estimate accurately",
      "The team has to learn many new things at once at launch, which increases resistance to the system",
      "Value only arrives once the whole project is finished, while costs are incurred from the very beginning",
    ],
  },
  {
    type: "p",
    text: "An MVP reverses that order. The first benefits arrive within weeks or months, not after a long project wraps up. Each following stage is built on what has already proven useful, so the risk of building features nobody uses drops sharply.",
  },
  { type: "h2", text: "How to define the scope of an MVP" },
  {
    type: "p",
    text: "The hardest part of an MVP isn't building it — it's deciding what to leave out. Every stakeholder has a favourite feature, and they all sound important. The following questions help you sort through them more objectively.",
  },
  { type: "h3", text: "Which problem is the most expensive right now?" },
  {
    type: "p",
    text: "Start with the problem that eats the most time, money, or opportunity. If manually recorded orders are often wrong and cause re-deliveries, the ordering workflow is very likely your MVP candidate. If the biggest problem is late reporting, perhaps the MVP is a simple dashboard that pulls data from sources you already have.",
  },
  { type: "h3", text: "Who is the primary user?" },
  {
    type: "p",
    text: "A good MVP usually serves one main user group very well, rather than every group half-heartedly. Is this app mainly for field sales, warehouse admins, or customers? Pick one, understand how they work in depth, and design the flow that is easiest for them.",
  },
  { type: "h3", text: "What is the minimum end-to-end flow?" },
  {
    type: "p",
    text: "Write down the steps of the core workflow from beginning to end. For example: a sales rep creates an order, an admin verifies it, the warehouse prepares the goods, the shipped status is recorded. Every step on this path must be in the MVP, even in simple form. Features that sit off this path — deep analytics reports, integrations with other systems, or complex permission settings — can wait for a later stage.",
  },
  {
    type: "callout",
    title: "A rule of thumb",
    text: "If a feature can be temporarily replaced by a reasonable manual process for a few months, it probably doesn't need to be in the MVP. Note it as a candidate for a later stage, then see whether the need actually arises.",
  },
  { type: "h2", text: "An MVP doesn't mean low quality" },
  {
    type: "p",
    text: "One of the most dangerous misunderstandings about MVPs is treating them as an excuse to build carelessly. What an MVP cuts is the number of features, not the quality of the ones that exist. The flows you build must be stable, secure, and comfortable to use, because users will judge the whole system by their first experience. An app that keeps erroring in its first week will struggle to win back trust, however good the next version is.",
  },
  {
    type: "p",
    text: "The technical foundation also needs thought from day one. The database structure, application architecture, data security, and the way the app will be extended should all be designed with later stages in mind, even though those features aren't built yet. An MVP built on a fragile foundation often ends up being rebuilt — wiping out the very savings it was meant to deliver.",
  },
  { type: "h2", text: "What a healthy MVP scope looks like" },
  {
    type: "p",
    text: "Go back to the distribution business from the start of this article. Out of the long wish list, the most expensive problem turned out to be orders from field sales being sent through chat and then retyped by an admin — often late and sometimes with the wrong quantities. So a sensible MVP scope is an ordering app for the sales team: choose a customer, pick products from a catalogue, see a rough stock level, submit the order, and have the admin receive a tidy list of orders to process.",
  },
  {
    type: "p",
    text: "A self-service ordering portal for customers, automatic accounting integration, and sales commission calculations were left out. They all still matter, but they can wait until the basic order flow has proven itself and the team has settled in. With a scope like this, the first benefit — faster, more accurate orders — arrives much sooner, and the order data collected along the way becomes valuable groundwork for the next stage.",
  },
  { type: "h2", text: "Common mistakes when building an MVP" },
  {
    type: "ol",
    items: [
      "Scope keeps growing during development until the MVP becomes a big project under a different name",
      "Features are chosen by whoever speaks loudest, not by which problem is most expensive",
      "Real users aren't involved from the design stage, so the flow feels unfamiliar at launch",
      "The MVP launches with no plan to collect feedback, leaving nothing to base the next stage on",
      "The MVP is treated as the final product, and development stops once the first version is running",
    ],
  },
  {
    type: "p",
    text: "That last mistake is surprisingly common. Once the MVP is running and the most pressing problem is solved, the company's attention moves elsewhere. The app is still used, but surrounded by workarounds — extra spreadsheets, manual notes, or chat groups for everything the system doesn't handle yet. Slowly, the benefits of a centralised system erode again. An MVP should be the start of a development roadmap, not its end.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "Several team members discussing while looking at a computer screen in a workspace",
    caption: "Feedback from everyday users is the main input for deciding the next stage of development.",
  },
  { type: "h2", text: "From MVP to a complete system" },
  {
    type: "p",
    text: "After the MVP has been in use for a few weeks, you'll have something you didn't have during planning: evidence. Which features get used most, where users often get confused, which manual processes still run outside the system, and which requests come up most often. This is the information that should shape the next stage.",
  },
  {
    type: "p",
    text: "Lay out the roadmap in small stages, each delivering a benefit people can feel. Stage two might add integration with the accounting system. Stage three might open access to customers. Stage four might add a dashboard for management. The order is set by business value and feedback, not by an initial list written before anyone had used the app.",
  },
  {
    type: "ul",
    items: [
      "Decide how you'll collect feedback from day one: a short form, regular Q&A sessions, or direct observation",
      "Monitor usage data to see which features are actually used",
      "Record every manual process still running outside the system as a development candidate",
      "Review priorities regularly with user representatives and management",
      "Release updates in short cycles so users can see their input being acted on",
    ],
  },
  { type: "h2", text: "Choosing a development partner for a staged approach" },
  {
    type: "p",
    text: "Not every developer is used to working with an MVP approach. Some are more comfortable with a single-phase project whose scope is fixed up front. When choosing a partner, notice whether they help you trim scope or keep adding features. A good partner will ask about the business problem behind each feature, suggest a sensible order of development, and explain how the MVP's technical foundation will support later stages.",
  },
  {
    type: "p",
    text: "Pay attention to how the contract and payments are structured, too. A staged approach fits best with a staged way of working, where each phase has a clear scope, deliverable, and cost. That way you can evaluate the results of each phase before committing to the next.",
  },
  { type: "h2", text: "Closing thoughts" },
  {
    type: "p",
    text: "Successful business apps are rarely born perfect on day one. Most grow from a simple version that solves one problem well, then get extended bit by bit based on how people really use them. If your app idea feels too big to start, the problem may not be the idea but the size of the first step. Find the one workflow that matters most, build it well, and let real usage show you where to go next.",
  },
  {
    type: "cta",
    title: "Have an app idea but not sure where to start?",
    text: "The AG·SORA team can help map your core workflow, define a realistic MVP scope, and lay out a staged development roadmap. The consultation is free, no commitment required.",
    href: "/services/custom-software",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "一家分销企业的老板脑中有一个清晰的应用构想:客户可以自行下单,销售可以实时查看库存,仓库自动接收发货指令,所有交易直接进入财务报表。每次和团队讨论时,功能清单都在不断变长。当他终于去询价时,预估的时间和费用让他犹豫是否还要开始。",
  },
  {
    type: "p",
    text: "这种情况非常普遍。企业应用的构想往往越来越大,因为公司里每个人看到的问题都不一样,都希望一次性全部解决。然而,一次性构建所有功能,恰恰是验证一个应用是否真正有用的最昂贵、风险最高的方式。有一种合理得多的做法:从能够带来真实价值的最小版本开始,再根据实际使用情况逐步完善。",
  },
  {
    type: "p",
    text: "这种方法被称为 MVP,即最小可行产品(minimum viable product)。这个术语来自创业圈,但其原则对于打算构建内部应用或面向客户应用的企业同样适用。本文将介绍 MVP 在企业语境下的含义、如何确定范围、常见的错误,以及如何从第一个版本走向完整的系统。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "MVP 是应用的最简版本,它已经能解决一个真实问题,并且可以每天使用",
      "MVP 不是随便做做的原型——它的技术质量必须足以在其上继续开发,而不是被丢弃",
      "MVP 的范围由最重要的一条工作流程决定,而不是由最长的功能清单决定",
      "上线头几周来自真实用户的反馈,远比规划阶段的假设更有价值",
      "分阶段的方式能降低成本风险,更快带来收益,也让团队更容易适应",
    ],
  },
  { type: "h2", text: "MVP 对企业而言到底意味着什么" },
  {
    type: "p",
    text: "在创业圈,MVP 常被用来测试市场是否需要某个产品。而对于已经在运营的企业,目标略有不同。你通常已经知道问题是真实存在的——订单遗漏、库存不同步、报表延迟。你还不知道的是:解决方案最合适的形态是什么,哪些功能真正会被使用,以及团队将如何适应新的工作方式。",
  },
  {
    type: "p",
    text: "企业应用的 MVP,是能够完整处理一条核心工作流程、足够稳定可供日常使用,并且建立在可扩展技术基础上的第一个版本。关键词是可行:能够真正投入使用。一个只能演示、却无法在实际运营中使用的应用不是 MVP,而是原型。原型适合用来测试界面构想,但无法提供真实使用情况的数据。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    alt: "一只手握着铅笔,在纸上绘制应用界面的草图",
    caption: "在开发开始之前,MVP 的范围最好能用一条简单的流程画出来。",
  },
  { type: "h2", text: "为什么一次性构建全部功能风险很高" },
  {
    type: "p",
    text: "把完整的应用作为一个大项目一次性构建,在纸面上看起来很高效:一次规划、一次开发、一次上线。但在实践中,这种方式带有一些往往到项目后期才显现的风险。",
  },
  {
    type: "ul",
    items: [
      "漫长的开发过程中需求发生变化,应用完成时部分功能已经不再适用",
      "关于用户工作方式的假设被证明是错的,而这要等到所有功能都建立在这些假设之上后才会暴露",
      "由于大范围难以准确估算,成本和时间往往超支",
      "上线时团队需要一次学习大量新东西,对系统的抵触情绪随之增加",
      "收益要等整个项目完成后才能体现,而成本从一开始就在支出",
    ],
  },
  {
    type: "p",
    text: "MVP 把这个顺序颠倒过来。第一批收益在几周或几个月内就能体现,而不是等漫长的项目结束之后。之后的每个阶段都建立在已被证明有用的基础之上,因此开发出无人使用的功能的风险大大降低。",
  },
  { type: "h2", text: "如何确定 MVP 的范围" },
  {
    type: "p",
    text: "MVP 最难的部分不是构建,而是决定哪些内容不放进去。每位利益相关者都有自己偏爱的功能,而且听起来都很重要。以下几个问题可以帮助你更客观地进行取舍。",
  },
  { type: "h3", text: "当前哪个问题代价最高?" },
  {
    type: "p",
    text: "从消耗时间、金钱或机会最多的问题入手。如果手工记录的订单经常出错并导致重新发货,那么下单流程很可能就是 MVP 的候选。如果最大的问题是报表延迟,那么 MVP 也许是一个从现有数据源提取数据的简单仪表盘。",
  },
  { type: "h3", text: "主要用户是谁?" },
  {
    type: "p",
    text: "好的 MVP 通常把一个主要用户群体服务得非常好,而不是对所有群体都敷衍了事。这个应用主要是给外勤销售、仓库管理员,还是客户使用?选定一个,深入了解他们的工作方式,设计出对他们来说最简单的流程。",
  },
  { type: "h3", text: "从头到尾最精简的流程是什么?" },
  {
    type: "p",
    text: "把核心工作流程从开始到结束的步骤写下来。例如:销售创建订单,管理员审核,仓库备货,记录已发货状态。这条路径上的每一步都必须包含在 MVP 中,哪怕只是简单形式。不在这条路径上的功能——比如深入的分析报表、与其他系统的集成,或者复杂的权限设置——都可以留到后续阶段。",
  },
  {
    type: "callout",
    title: "经验法则",
    text: "如果某个功能在几个月内可以暂时用合理的手工流程替代,那它很可能不需要放进 MVP。把它记为后续阶段的候选,再观察这个需求是否真的出现。",
  },
  { type: "h2", text: "MVP 不等于低质量" },
  {
    type: "p",
    text: "关于 MVP 最危险的误解之一,是把它当作草率开发的借口。MVP 削减的是功能的数量,而不是现有功能的质量。所构建的流程必须稳定、安全、好用,因为用户会根据第一印象来评判整个系统。一个在第一周就频繁出错的应用,无论下一个版本多好,都很难重新赢得信任。",
  },
  {
    type: "p",
    text: "技术基础同样需要从一开始就考虑清楚。数据库结构、应用架构、数据安全,以及应用今后如何扩展,都应该在设计时考虑到后续阶段,即使那些功能尚未开发。建立在脆弱基础上的 MVP 往往最终需要重建,反而抵消了原本想要节省的成本。",
  },
  { type: "h2", text: "健康的 MVP 范围是什么样的" },
  {
    type: "p",
    text: "回到本文开头那家分销企业。在长长的愿望清单中,代价最高的问题其实是:外勤销售通过聊天发送订单,再由管理员重新录入——经常延迟,有时数量还会出错。因此,合理的 MVP 范围是一个给销售使用的下单应用:选择客户,从产品目录中挑选商品,查看大致库存,提交订单,管理员则收到一份整齐的待处理订单列表。",
  },
  {
    type: "p",
    text: "客户自助下单门户、与会计系统的自动集成以及销售佣金计算都没有放进去。它们依然重要,但可以等到基础下单流程被证明可行、团队也已适应之后再做。按这样的范围,第一个收益——更快、更准确的订单——可以更早体现,而沿途积累的订单数据也会成为下一阶段的宝贵基础。",
  },
  { type: "h2", text: "构建 MVP 时的常见错误" },
  {
    type: "ol",
    items: [
      "开发过程中范围不断扩大,直到 MVP 变成一个换了名字的大项目",
      "按照谁的声音最大来选择功能,而不是按照哪个问题代价最高",
      "没有从设计阶段就让真实用户参与,导致上线时流程让人感到陌生",
      "上线 MVP 时没有收集反馈的计划,下一阶段就缺乏依据",
      "把 MVP 当作最终产品,第一个版本运行后就停止开发",
    ],
  },
  {
    type: "p",
    text: "最后一个错误相当常见。MVP 上线、最紧迫的问题解决之后,公司的注意力就转向了别处。应用仍在使用,但周围堆满了临时办法——额外的电子表格、手工记录,或者为系统尚未处理的事情建立的聊天群。集中化系统的优势就这样慢慢被侵蚀。MVP 应该是开发路线图的起点,而不是终点。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "几位团队成员在办公区一边看着电脑屏幕一边讨论",
    caption: "日常用户的反馈,是决定下一阶段开发内容的主要依据。",
  },
  { type: "h2", text: "从 MVP 到完整系统" },
  {
    type: "p",
    text: "MVP 使用几周之后,你将拥有规划阶段所没有的东西:证据。哪些功能使用最多,用户在哪些地方经常困惑,哪些手工流程仍在系统之外运行,哪些需求被提出得最多。这些信息应当成为决定下一阶段的基础。",
  },
  {
    type: "p",
    text: "把路线图拆分为多个小阶段,每个阶段都带来可感知的收益。第二阶段也许加入与会计系统的集成;第三阶段也许向客户开放访问;第四阶段也许为管理层增加仪表盘。顺序由业务价值和反馈决定,而不是由在任何人使用应用之前写下的初始清单决定。",
  },
  {
    type: "ul",
    items: [
      "从第一天起就确定收集反馈的方式:简短表单、定期答疑会或直接观察",
      "监测使用数据,了解哪些功能真正被使用",
      "把每一个仍在系统外运行的手工流程记录为开发候选",
      "定期与用户代表和管理层一起复盘优先级",
      "以短周期发布更新,让用户看到他们的意见得到了落实",
    ],
  },
  { type: "h2", text: "为分阶段开发选择合适的合作伙伴" },
  {
    type: "p",
    text: "并非所有开发方都习惯采用 MVP 的方式。有些更习惯一开始就锁定范围的单阶段项目。选择合作伙伴时,留意他们是在帮你精简范围,还是在不断增加功能。好的合作伙伴会询问每个功能背后的业务问题,建议合理的开发顺序,并解释 MVP 的技术基础将如何支撑后续阶段。",
  },
  {
    type: "p",
    text: "同样要注意合同和付款的结构。分阶段的方式最适合同样分阶段的合作模式,每个阶段都有明确的范围、交付成果和费用。这样,你就可以在承诺下一阶段之前,先评估每个阶段的成果。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "成功的企业应用很少在第一天就以完美的形态诞生。大多数都是从一个能很好解决某个问题的简单版本成长起来,再根据人们的实际使用方式一点点扩展。如果你的应用构想看起来大得无从下手,问题也许不在构想本身,而在于第一步迈得太大。找到最重要的那一条流程,把它做好,让真实的使用情况告诉你下一步该往哪里走。",
  },
  {
    type: "cta",
    title: "有应用构想,却不知道从哪里开始?",
    text: "AG·SORA 团队可以帮助你梳理核心工作流程,确定切实可行的 MVP 范围,并制定分阶段的开发路线图。咨询完全免费,无需任何承诺。",
    href: "/services/custom-software",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
