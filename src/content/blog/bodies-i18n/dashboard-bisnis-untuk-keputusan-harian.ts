import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "Many business owners know this pattern: at the end of every month, someone on the team spends several days copying numbers from various files, apps, and notes into one spreadsheet, then sends it off as a report. By the time that report reaches the owner's desk, the events it discusses are two or three weeks old. Decisions that could have been made earlier, like restocking a popular item or stopping a promotion that loses money, come too late.",
  },
  {
    type: "p",
    text: "A business dashboard exists to change that pattern. Instead of waiting for a monthly report, owners and managers can see the state of the business at any time from a single screen: today's sales, cash position, stock running low, delayed orders, or team performance. But a good dashboard is not just a collection of colorful charts. Many dashboards are built with enthusiasm and abandoned within a month because they don't answer the questions that really matter.",
  },
  {
    type: "p",
    text: "This article covers what makes a dashboard useful, how to choose the right metrics, where the data should come from, how to design a display that is easy to understand, and why data quality matters more than appearance. It suits business owners considering building a dashboard themselves or working with a developer.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "A useful dashboard starts from decision questions, not from whatever data happens to be available",
      "A few clear metrics are worth more than dozens of confusing charts",
      "Every number needs a jointly agreed definition, for example what counts as a sale",
      "A dashboard is only as good as the data behind it; tidy the data sources before polishing the display",
      "Design for different roles: owners, managers, and staff need different views",
      "Start with one small dashboard that is really used, then grow it",
    ],
  },
  { type: "h2", text: "What a business dashboard is, and what it isn't" },
  {
    type: "p",
    text: "A business dashboard is a compact view that gathers the most important indicators from various data sources in one place, updates automatically, and is designed so the reader can grasp the situation within seconds. It comes down to three things: compact, current, and relevant to decisions.",
  },
  {
    type: "p",
    text: "A dashboard is not a substitute for detailed reports. A report answers in-depth questions such as why the margin on a certain product fell; a dashboard shows that the margin fell and points you to where to dig. A dashboard is also not a gallery of charts. Every element on the screen needs a reason: if this number changes, what action will you take? If the answer is none, the element is probably just decoration.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    alt: "A screen showing a click and impressions chart with a fluctuating blue line",
    caption: "A good dashboard answers decision questions within seconds rather than displaying as much data as possible.",
  },
  { type: "h2", text: "Start from decisions, not from data" },
  {
    type: "p",
    text: "The most common mistake is to start by looking at what data is available and then build charts from all of it. A healthier approach reverses the order: start from the decisions you make often, then ask what information is needed to make them with confidence.",
  },
  {
    type: "p",
    text: "For example, a shop owner wants to know when to reorder goods. The information needed is current stock, sales velocity, and the supplier's delivery time. A sales manager wants to know which prospects to contact this week; they need a list of prospects by stage and how long since they were last touched. A finance director wants to know whether cash is enough for the next three months; they need the cash position, receivables coming due, and payables to be paid.",
  },
  {
    type: "ol",
    items: [
      "List 5 to 10 recurring decisions with the biggest impact on the business, along with who makes them",
      "For each decision, write the question to be answered and how often it needs to be viewed: hourly, daily, weekly, or monthly",
      "Define the indicators that answer the question, then check whether the data is actually available and trustworthy",
      "Prioritize decisions that happen most often or are most costly when wrong",
    ],
  },
  { type: "h2", text: "Choosing the right metrics" },
  {
    type: "p",
    text: "A good metric has several characteristics. It is actionable, meaning a change in the number points to a particular action. It is easy to understand without a long explanation. It is compared against something, such as a target, a previous period, or a normal range, because a number without a comparison is hard to interpret. And it is clearly defined, so everyone reads it with the same meaning.",
  },
  {
    type: "h3",
    text: "Example metrics by business area",
  },
  {
    type: "ul",
    items: [
      "Sales: sales per day and per branch, best sellers, average transaction value, and comparison with the previous period",
      "Finance: cash position, receivables coming due, payables to be paid, and expected cash inflows and outflows",
      "Inventory: stock approaching minimum levels, slow-moving goods, and inventory value",
      "Operations: delayed orders, average processing time, and return or complaint rates",
      "Customers and prospects: new prospects, prospects by stage, and customers who haven't bought in a while",
      "Team: attendance, target achievement, and workload, while still respecting employee privacy",
    ],
  },
  {
    type: "callout",
    title: "Beware of vanity metrics",
    text: "Numbers such as visit counts or follower counts rise easily but aren't necessarily tied to business results. Prioritize metrics close to money, customers, and service quality, and use other metrics as support.",
  },
  { type: "h2", text: "Where the data comes from" },
  {
    type: "p",
    text: "A dashboard only displays what goes into it. In most businesses, data is spread across several places: the point-of-sale or sales system, accounting software, ERP, CRM, spreadsheets, and sometimes manual notes. The biggest challenge isn't making charts but bringing data from these sources together correctly.",
  },
  {
    type: "h3",
    text: "A single trusted source",
  },
  {
    type: "p",
    text: "Ideally, every number has one primary source that is considered correct. If sales are recorded in the POS system and also in a manual spreadsheet with different figures, the dashboard will display an argument, not an answer. Before building a dashboard, decide which system is the reference for each type of data, and stop unnecessary duplicate recording.",
  },
  {
    type: "h3",
    text: "Integration and automatic updates",
  },
  {
    type: "p",
    text: "A dashboard whose data must be refreshed manually quickly loses trust. Connect the dashboard to data sources through automatic integration, whether via API, scheduled exports, or a direct database connection. Decide how fresh the data needs to be: for stock and daily sales, hourly updates may be enough, while financial reports may only need daily refreshes. Making everything real-time isn't always necessary and can add cost without matching benefit.",
  },
  {
    type: "h3",
    text: "Data quality",
  },
  {
    type: "p",
    text: "A dashboard shows the quality of your data honestly, shortcomings included. Products without categories, transactions without customers, or negative stock will appear as odd numbers. Treat this as a bonus: the dashboard becomes a tool for finding and fixing recording problems. Be prepared for a data cleanup phase at the start, because it is almost always needed.",
  },
  { type: "h2", text: "Designing a display that's easy to read" },
  {
    type: "p",
    text: "Once the metrics and data are clear, the display determines whether the dashboard will be used. A few simple principles help a great deal.",
  },
  {
    type: "ul",
    items: [
      "Put the most important numbers at the top, large, and accompanied by a comparison such as up or down from the previous period",
      "Use suitable chart types: lines for trends over time, bars for category comparisons, and tables for details that must be read precisely",
      "Limit the number of elements per screen; if it gets too dense, split into several views by topic or role",
      "Use colors with consistent meaning, for example red only for things needing immediate attention",
      "Provide easy filters such as date range, branch, or category, and remember the user's last choice",
      "Make sure the display is comfortable on a phone, because owners often check dashboards when away from the office",
      "Show when the data was last updated so readers know how fresh the information is",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055",
    alt: "A computer screen showing an analytics dashboard with a user retention table",
    caption: "A simple, consistent design gives people the confidence to make decisions from what they see.",
  },
  { type: "h2", text: "One dashboard doesn't fit everyone" },
  {
    type: "p",
    text: "Business owners, operations managers, heads of finance, and field staff have different questions. A dashboard that tries to serve everyone tends to be too dense for owners and too shallow for staff. Consider several views by role.",
  },
  {
    type: "ul",
    items: [
      "Owner view: the big picture such as sales, cash, gross profit, and alerts for anything straying from target",
      "Manager view: breakdowns by branch, team, or product, complete with the ability to drill down to individual transactions",
      "Operations view: daily action lists such as delayed orders, low stock, or delivery schedules",
      "Sales team view: prospects by stage, follow-up tasks, and personal target progress",
    ],
  },
  {
    type: "p",
    text: "Access rights matter too. Not everyone needs to see financial or salary data. Limit what each role can see, and record who accesses sensitive data.",
  },
  { type: "h2", text: "Build it yourself, use an off-the-shelf tool, or commission a custom one" },
  {
    type: "p",
    text: "There are several routes to getting a dashboard. Off-the-shelf dashboard tools suit standard needs and already-structured data: the cost is relatively low and results come quickly, but there are limits in customization, integration with specialized systems, and complex access rights. A custom-built dashboard is more flexible, can blend into the apps you already use, and follows how your business works, but requires a larger initial investment and ongoing maintenance.",
  },
  {
    type: "p",
    text: "Many businesses start with an off-the-shelf tool for one or two important dashboards, then move to a custom solution when needs outgrow its capabilities. This decision should be based on the complexity of the data sources, integration needs, the number of users, and how strategic the dashboard is to the business.",
  },
  { type: "h2", text: "Steps to start without being overwhelmed" },
  {
    type: "ol",
    items: [
      "Pick one area with the greatest value, such as sales and stock, not the whole company",
      "Write down the definition of each metric and its data source, then agree on them with the relevant team",
      "Tidy the source data as needed before connecting it",
      "Build a first version with 5 to 8 key metrics and test it with real users",
      "Collect feedback: what is used, what is ignored, and which questions remain unanswered",
      "Add new views or metrics only when there is a clear decision need",
      "Review the dashboard periodically and remove what is no longer used to keep it lean",
    ],
  },
  { type: "h2", text: "Common mistakes" },
  {
    type: "ul",
    items: [
      "Making too many charts so nobody knows which matter",
      "Not defining metrics, so two people read the same number with different meanings",
      "Connecting untidy data and then blaming the dashboard when the numbers look odd",
      "Designing without involving day-to-day users",
      "Having no owner responsible for maintenance and data correctness",
      "Considering the dashboard finished after launch, when the business and its questions keep changing",
      "Chasing an impressive appearance rather than better decisions",
    ],
  },
  { type: "h2", text: "Conclusion" },
  {
    type: "p",
    text: "The best dashboard is the one opened every morning without being told to, because it answers the questions the owner is already thinking about. To get there, start from decisions, choose a few meaningful metrics, make sure the data can be trusted, and design the display for the people who use it. With a staged approach, a dashboard isn't a daunting big project but a tool that grows with your business.",
  },
  {
    type: "cta",
    title: "Want to see your business's condition on a single screen?",
    text: "The AG·SORA team builds business dashboards connected to your POS, ERP, or existing data, with role-based access. The consultation is free, no commitment required.",
    href: "/services/dashboard",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "许多企业主对这种模式并不陌生:每个月底,团队里有人要花好几天,把各种文件、应用和笔记中的数字复制到一张表格里,然后作为报告发出去。当这份报告送到老板桌上时,其中讨论的事情已经过去两三个星期了。本可以更早做出的决定,比如给热销商品补货或停止亏损的促销,已经为时过晚。",
  },
  {
    type: "p",
    text: "企业仪表板(dashboard)就是为了改变这种模式而存在的。不必再等月度报告,老板和经理可以随时在一个屏幕上查看企业的状况:今天的销售额、现金状况、库存告急、延迟的订单,或团队表现。但一个好的仪表板不只是一堆五颜六色的图表。许多仪表板满怀热情地建成,却在一个月内被弃用,因为它们没有回答真正重要的问题。",
  },
  {
    type: "p",
    text: "本文介绍什么让仪表板有用、如何选择合适的指标、数据应该来自哪里、如何设计易于理解的界面,以及为什么数据质量比外观更重要。适合正在考虑自己构建仪表板或与开发者合作的企业主。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "有用的仪表板从决策问题出发,而不是从碰巧可用的数据出发",
      "少数清晰的指标,胜过几十个令人困惑的图表",
      "每个数字都需要大家共同认可的定义,例如什么算作销售",
      "仪表板的好坏取决于背后的数据;在美化界面之前先整理数据源",
      "为不同角色设计:老板、经理和员工需要不同的视图",
      "从一个真正被使用的小型仪表板开始,再逐步扩展",
    ],
  },
  { type: "h2", text: "什么是企业仪表板,什么不是" },
  {
    type: "p",
    text: "企业仪表板是一种简洁的视图,把来自各种数据源的最重要指标汇集在一处,自动更新,并且设计得让读者在几秒钟内就能把握情况。核心有三点:简洁、及时、与决策相关。",
  },
  {
    type: "p",
    text: "仪表板不能取代详细报告。报告回答深入的问题,比如某产品的利润率为什么下降;仪表板则显示利润率下降了,并指引你该往哪里深挖。仪表板也不是图表画廊。屏幕上的每个元素都要有理由:如果这个数字变了,你会采取什么行动?如果答案是没有,这个元素多半只是装饰。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    alt: "屏幕上显示着点击与展示次数图表,蓝色折线上下波动",
    caption: "好的仪表板能在几秒钟内回答决策问题,而不是尽可能多地展示数据。",
  },
  { type: "h2", text: "从决策出发,而不是从数据出发" },
  {
    type: "p",
    text: "最常见的错误是先看有哪些数据可用,然后用所有数据做图表。更健康的做法是反过来:从你经常做的决策出发,再问需要什么信息才能有把握地做出这些决策。",
  },
  {
    type: "p",
    text: "例如,店主想知道什么时候该补货。所需的信息是当前库存、销售速度和供应商的送货时间。销售经理想知道本周该联系哪些潜在客户;他需要按阶段排列的潜在客户列表,以及多久没有跟进。财务总监想知道现金是否足够未来三个月使用;他需要现金状况、即将到期的应收款和待付的应付款。",
  },
  {
    type: "ol",
    items: [
      "列出对企业影响最大的 5 到 10 个重复性决策,以及由谁来做",
      "为每个决策写下要回答的问题,以及需要多久查看一次:每小时、每天、每周或每月",
      "确定能回答该问题的指标,然后检查数据是否真的可用且可信",
      "优先处理最频繁发生或出错代价最高的决策",
    ],
  },
  { type: "h2", text: "选择合适的指标" },
  {
    type: "p",
    text: "好的指标有几个特点。它是可行动的,即数字的变化指向某个特定行动。它不需要冗长的解释就容易理解。它有对比对象,例如目标、上一期或正常范围,因为没有对比的数字很难解读。而且它定义清晰,让每个人读到的含义相同。",
  },
  {
    type: "h3",
    text: "按业务领域列举的指标示例",
  },
  {
    type: "ul",
    items: [
      "销售:每日和每个分店的销售额、畅销商品、平均交易额,以及与上一期的对比",
      "财务:现金状况、即将到期的应收款、待付的应付款,以及预计的现金流入和流出",
      "库存:接近最低水平的库存、周转缓慢的货品和库存价值",
      "运营:延迟的订单、平均处理时间,以及退货或投诉率",
      "客户与潜在客户:新增潜在客户、按阶段划分的潜在客户,以及很久没有购买的客户",
      "团队:出勤、目标达成和工作量,同时仍然尊重员工隐私",
    ],
  },
  {
    type: "callout",
    title: "警惕虚荣指标",
    text: "访问量或粉丝数之类的数字很容易上涨,但不一定与业务成果相关。优先选择与资金、客户和服务质量接近的指标,把其他指标作为辅助。",
  },
  { type: "h2", text: "数据从哪里来" },
  {
    type: "p",
    text: "仪表板只会显示输入到其中的内容。在大多数企业中,数据分散在好几个地方:收银或销售系统、会计软件、ERP、CRM、电子表格,有时还有手写记录。最大的挑战不是制作图表,而是正确地整合这些来源的数据。",
  },
  {
    type: "h3",
    text: "单一可信的来源",
  },
  {
    type: "p",
    text: "理想情况下,每个数字都有一个被认为正确的主要来源。如果销售额既记录在收银系统中,又记录在手工表格里,而且数字不同,仪表板展示的就是争论,而不是答案。在构建仪表板之前,先决定每类数据以哪个系统为准,并停止不必要的重复记录。",
  },
  {
    type: "h3",
    text: "整合与自动更新",
  },
  {
    type: "p",
    text: "数据需要手动刷新的仪表板很快就会失去信任。通过自动整合把仪表板连接到数据源,无论是通过 API、定时导出,还是直接连接数据库。确定需要多新鲜的数据:库存和每日销售可能每小时更新就够了,而财务报表可能每天刷新即可。让一切都实时并不总是必要,还可能增加成本而收益不成比例。",
  },
  {
    type: "h3",
    text: "数据质量",
  },
  {
    type: "p",
    text: "仪表板会如实展示你的数据质量,包括缺陷。没有类别的产品、没有客户的交易或负库存,都会显示为奇怪的数字。把这看作额外的好处:仪表板成为发现和修复记录问题的工具。要为一开始的数据清理阶段做好准备,因为几乎总是需要它。",
  },
  { type: "h2", text: "设计易于阅读的界面" },
  {
    type: "p",
    text: "指标和数据明确之后,界面决定了仪表板是否会被使用。几条简单的原则很有帮助。",
  },
  {
    type: "ul",
    items: [
      "把最重要的数字放在顶部,字体要大,并附上与上一期相比上升或下降之类的对比",
      "使用合适的图表类型:折线图表示时间趋势,柱状图表示类别对比,表格用于需要精确阅读的细节",
      "限制每个屏幕上的元素数量;如果太密集,就按主题或角色拆分成多个视图",
      "颜色的含义要一致,例如红色只用于需要立即关注的事项",
      "提供便捷的筛选器,如日期范围、分店或类别,并记住用户上次的选择",
      "确保在手机上显示舒适,因为老板经常在不在办公室时查看仪表板",
      "显示数据最后更新的时间,让读者知道信息有多新",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055",
    alt: "显示用户留存表的数据分析仪表板屏幕",
    caption: "简洁而一致的设计,让人们有信心根据所见做出决策。",
  },
  { type: "h2", text: "一个仪表板无法适合所有人" },
  {
    type: "p",
    text: "企业主、运营经理、财务主管和一线员工的问题各不相同。试图服务所有人的仪表板,往往对老板来说太密集,对员工来说又太肤浅。请考虑按角色设置几种视图。",
  },
  {
    type: "ul",
    items: [
      "老板视图:宏观图景,如销售额、现金、毛利,以及对偏离目标事项的提醒",
      "经理视图:按分店、团队或产品的细分,并能下钻到具体交易",
      "运营视图:每日行动清单,如延迟的订单、低库存或发货安排",
      "销售团队视图:按阶段划分的潜在客户、跟进任务和个人目标进度",
    ],
  },
  {
    type: "p",
    text: "访问权限同样重要。并非每个人都需要看到财务或薪资数据。限制每个角色能看到的内容,并记录谁访问了敏感数据。",
  },
  { type: "h2", text: "自己搭建、使用现成工具,还是定制开发" },
  {
    type: "p",
    text: "获得仪表板有几条途径。现成的仪表板工具适合标准需求和已有结构的数据:成本相对较低,见效快,但在定制化、与特殊系统的集成以及复杂的访问权限方面有局限。定制开发的仪表板更灵活,可以融入你已经在使用的应用,并贴合企业的工作方式,但需要更大的前期投入和持续的维护。",
  },
  {
    type: "p",
    text: "许多企业先用现成工具做一两个重要的仪表板,当需求超出其能力时再转向定制方案。这个决定应根据数据源的复杂程度、集成需求、用户数量,以及仪表板对企业的战略意义来做。",
  },
  { type: "h2", text: "不被压垮的起步步骤" },
  {
    type: "ol",
    items: [
      "选择一个价值最大的领域,例如销售和库存,而不是整个公司",
      "写下每个指标的定义及其数据来源,然后与相关团队达成一致",
      "在连接之前,按需整理源数据",
      "用 5 到 8 个关键指标构建第一个版本,并与真实用户一起测试",
      "收集反馈:哪些被使用、哪些被忽略,以及哪些问题仍未得到解答",
      "只有在有明确的决策需求时才添加新的视图或指标",
      "定期审视仪表板,删除不再使用的内容,保持精简",
    ],
  },
  { type: "h2", text: "常见错误" },
  {
    type: "ul",
    items: [
      "做了太多图表,以至于没有人知道哪些重要",
      "没有定义指标,导致两个人对同一个数字有不同的理解",
      "连接了没有整理的数据,当数字看起来奇怪时又责怪仪表板",
      "设计时没有让日常使用者参与",
      "没有负责维护和数据正确性的责任人",
      "认为仪表板上线后就算完成,而企业及其问题在不断变化",
      "追求令人印象深刻的外观,而不是更好的决策",
    ],
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "最好的仪表板是每天早上不用被提醒就会打开的那个,因为它回答了老板本来就在思考的问题。要做到这一点,从决策出发,选择少数有意义的指标,确保数据值得信赖,并根据使用者来设计界面。采用分阶段的方法,仪表板就不是令人生畏的大项目,而是与你的企业一起成长的工具。",
  },
  {
    type: "cta",
    title: "想在一个屏幕上看到企业的状况吗?",
    text: "AG·SORA 团队构建与你的收银系统、ERP 或现有数据相连的企业仪表板,并按角色设置访问权限。咨询完全免费,无需任何承诺。",
    href: "/services/dashboard",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
