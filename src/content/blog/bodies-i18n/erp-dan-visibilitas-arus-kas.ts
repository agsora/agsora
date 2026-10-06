import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "Last month's profit and loss statement shows healthy numbers. Sales are up, margins are holding, and on paper the business is growing. Yet in the same week, the finance team has to delay paying a supplier because the bank balance isn't enough. The owner is puzzled: how can a profitable company be short of cash?",
  },
  {
    type: "p",
    text: "The answer almost always lies in the gap between profit and cash flow. Recorded sales haven't necessarily been paid. Stock piling up in the warehouse is money that's tied up. Supplier invoices fall due on dates that don't always line up with when customers pay. When information about all of this is scattered across different systems — the cashier app, a receivables spreadsheet, warehouse notes, and the bank account — nobody can see the full picture until the problem has already happened.",
  },
  {
    type: "p",
    text: "This article looks at how an ERP system helps a business see its cash flow more clearly and earlier, which modules and data matter most, and what needs to be in place so those benefits are actually felt rather than remaining a promise in a vendor's presentation.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "A profitable business can still struggle with cash if receivables, stock, and payables aren't monitored together",
      "ERP connects sales, purchasing, inventory, and finance so the cash impact of every transaction can be seen",
      "Cash flow visibility depends on data entry discipline, not just on how sophisticated the system is",
      "Receivables ageing, payables due dates, and stock turnover are the three most important views",
      "Start from the cash questions management asks most often, then make sure the system can answer them",
    ],
  },
  { type: "h2", text: "Why profit isn't the same as having money" },
  {
    type: "p",
    text: "A profit and loss statement records revenue when a sale happens, not when the money arrives. If most customers pay on credit terms, this month's sales only turn into cash several weeks later. Meanwhile, purchases of raw materials or merchandise often have to be paid sooner. That timing gap is what makes a company look profitable while feeling short of money.",
  },
  {
    type: "p",
    text: "Inventory adds another layer of complexity. Goods that have been bought but not yet sold don't show up as an expense on the profit and loss statement, but the money has already left the bank account. A business that keeps adding stock to chase growth can look very healthy in its reports while its cash grows thinner. Without a system that links purchasing, sales, and inventory, this pattern is often only noticed once it has become a crisis.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1733727584002-e64f62fc1095",
    alt: "A wallet on a table filled with cash",
    caption: "A cash flow dashboard is only as accurate as the transaction data entering the system each day.",
  },
  { type: "h2", text: "The problem with scattered financial data" },
  {
    type: "p",
    text: "In many growing businesses, every department has its own tools. Sales records orders in a cashier app or a spreadsheet. The warehouse keeps separate stock records. Finance matches bank transactions by hand at month end. Each tool may work well enough for its own job, but none of them shows how it all affects the company's overall cash.",
  },
  {
    type: "ul",
    items: [
      "The receivables position is only known after manual reconciliation, often weeks late",
      "Supplier invoices falling due aren't visible alongside the schedule of incoming customer payments",
      "The value of stock in the warehouse isn't known accurately until a stock count is done",
      "Figures in sales, warehouse, and finance reports often differ and take time to reconcile",
      "Large purchasing decisions are made without looking at the cash projection for the coming weeks",
    ],
  },
  {
    type: "p",
    text: "As a result, management makes decisions based on stale numbers. By the time the month-end report is finished, the situation has already changed. A cash problem that could have been anticipated weeks earlier only becomes visible when it has to be solved that very day.",
  },
  { type: "h2", text: "How ERP connects the dots" },
  {
    type: "p",
    text: "ERP's main value isn't the number of modules, but the fact that all modules share the same data. When a sales order is created, the system knows which goods leave stock, how much receivables increase, and when payment is expected. When a purchase order is approved, the system knows what payable will arise and when it falls due. Every operational transaction automatically leaves a trace in finance.",
  },
  { type: "h3", text: "Receivables tracked from the moment an invoice is issued" },
  {
    type: "p",
    text: "With ERP, every sales invoice is immediately recorded as a receivable with a due date. A receivables ageing report shows how much isn't due yet, how much is slightly overdue, and how much has been outstanding for a long time. Finance can chase payments earlier, and sales can check a customer's payment status before accepting a new order on credit.",
  },
  { type: "h3", text: "Payables that are scheduled, not sudden" },
  {
    type: "p",
    text: "Supplier invoices recorded in the system from the moment a purchase order is created let finance build a payment schedule. No more bills suddenly landing on the desk on their due date. The business can plan when to pay whom, negotiate terms with particular suppliers, or take early payment discounts when cash allows.",
  },
  { type: "h3", text: "Inventory as money tied up" },
  {
    type: "p",
    text: "An ERP connected to inventory shows the running value of stock, not just after a stock count. A stock turnover report reveals which items sell quickly and which sit for months. This helps purchasing become more precise: buying more of what moves fast and holding back on what moves slowly, so less money is tied up in the warehouse.",
  },
  {
    type: "callout",
    title: "Three cash questions you should be able to answer in minutes",
    text: "How much money will come in from customers over the next two weeks? How much has to be paid to suppliers in the same period? What is the value of stock that hasn't moved in more than three months? If answering takes days, your cash flow visibility is still low.",
  },
  { type: "h2", text: "From historical reports to projections" },
  {
    type: "p",
    text: "A traditional cash flow statement tells you what has already happened. That matters for review, but it's less helpful for today's decisions. Because an ERP holds receivables with due dates, payables with payment schedules, and orders in progress, the same data can be used to project the cash position several weeks ahead.",
  },
  {
    type: "p",
    text: "These projections will never be perfect. Customers can pay late, orders can be cancelled, and unexpected expenses can always arise. But a projection built from real transaction data is far more useful than an estimate based on memory. Management can see which weeks are likely to be tight and act earlier: speeding up collections, postponing non-urgent purchases, or arranging financing before it's actually needed.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1745270917233-65e776a47547",
    alt: "A stock chart showing growth and potential profit",
    caption: "Cash flow visibility lets finance and operations discuss things using the same numbers.",
  },
  { type: "h2", text: "Dashboards and early warnings" },
  {
    type: "p",
    text: "Complete data inside a system is only useful if the right people see it at the right time. That's why much of the benefit of cash flow visibility actually comes from how information is presented. A business owner doesn't need to open dozens of reports every morning; what they need is one concise view showing today's cash position, the receipts and payments scheduled over the next few weeks, and a short list of things that need attention.",
  },
  {
    type: "p",
    text: "Automatic alerts complement the dashboard. The system can flag when a particular customer's receivable passes a set number of days, when a customer with overdue balances places a new order, or when the projected cash for a given week drops below a safe threshold. This way, management's attention goes to the exceptions that really matter, rather than being spent checking figures that are perfectly fine.",
  },
  {
    type: "ul",
    items: [
      "Daily cash and bank balance, compared against the previous week's projection",
      "A list of customers with overdue receivables, sorted by value",
      "The supplier payment schedule for the next few weeks",
      "The slowest-moving items and the stock value tied up in them",
    ],
  },
  { type: "h2", text: "What it takes for ERP to deliver real visibility" },
  {
    type: "p",
    text: "An ERP system isn't an automatic guarantee. Many companies already running ERP still struggle to see their cash flow because the data inside is incomplete or late. The following conditions decide whether ERP really gives a picture you can trust.",
  },
  {
    type: "ol",
    items: [
      "Transactions are recorded when they happen, not collected and entered at the end of the week or month",
      "Due dates and payment terms are set correctly for every customer and supplier",
      "Bank receipts and payments are reconciled regularly, ideally daily or weekly",
      "Stock movements — receipts, issues, returns, and adjustments — are fully recorded in the system",
      "Every type of data has a clear process owner, so errors are spotted and fixed quickly",
    ],
  },
  {
    type: "p",
    text: "These conditions are more about working habits than technology. That's why successful ERP implementations always come with process changes and team training, not just software installation. A sophisticated system fed with late data will only produce late reports with a nicer look.",
  },
  { type: "h2", text: "Start with the most pressing cash need" },
  {
    type: "p",
    text: "Not every business needs to roll out every ERP module at once to gain cash flow visibility. A more realistic approach is to start with the cash question that most often gives management trouble, then make sure the data needed to answer it is available and connected.",
  },
  {
    type: "p",
    text: "If the biggest problem is slow collections, the priority is the sales and receivables module connected to payment recording. If the problem is stock piling up, the priority is inventory and purchasing. Once this foundation runs with discipline, other modules can be added in stages, and each addition makes the cash flow picture more complete.",
  },
  {
    type: "p",
    text: "For businesses with very specific processes, an ERP built or customised around their workflow can be a better fit than forcing processes to follow a standard system. What matters most is the end result: one source of data every department trusts, and cash questions that can be answered whenever they come up.",
  },
  {
    type: "p",
    text: "Involve the finance team from the start of the design. They understand best which questions the owner asks most often, which reports are currently compiled by hand, and where figures from different sources most often fail to match. Their input helps ensure the system actually answers day-to-day cash needs, rather than just producing standard reports that rarely get opened.",
  },
  { type: "h2", text: "Closing thoughts" },
  {
    type: "p",
    text: "Cash trouble rarely arrives out of nowhere. The signs are usually already in the data — receivables starting to age, stock that isn't moving, payment schedules bunching up in the same week. The problem is that this data is scattered in different places and only brought together when it's too late. An ERP implemented with discipline makes those signs visible earlier, so decisions can be made while there are still plenty of options, not when only emergency measures remain.",
  },
  {
    type: "cta",
    title: "Often surprised by your cash position at month end?",
    text: "The AG·SORA team can help map the data flow across your sales, purchasing, inventory, and finance, then design an ERP system that makes your cash position visible every day. The consultation is free, no commitment required.",
    href: "/services/erp",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "上个月的损益表数字很健康:销售增长,利润率稳定,从账面上看企业正在成长。然而就在同一周,财务部门却不得不推迟向供应商付款,因为银行余额不够。老板很困惑:一家赚钱的公司,怎么会缺现金?",
  },
  {
    type: "p",
    text: "答案几乎总是在于利润与现金流之间的差距。已记录的销售未必已经收款;仓库里堆积的库存是被占用的资金;供应商账单的到期日,并不总是与客户付款的日期一致。当这些信息分散在不同的系统中——收银应用、应收账款表格、仓库记录和银行账户——在问题真正发生之前,没有人能看到完整的全貌。",
  },
  {
    type: "p",
    text: "本文将探讨 ERP 系统如何帮助企业更清晰、更早地看清现金流,哪些模块和数据最关键,以及需要做好哪些准备,才能让这些收益真正落地,而不只是停留在供应商演示中的承诺。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "如果不把应收账款、库存和应付账款放在一起监控,赚钱的企业也可能陷入现金困难",
      "ERP 把销售、采购、库存和财务连接起来,让每笔交易对现金的影响都清晰可见",
      "现金流的可见性取决于数据录入的纪律,而不仅仅是系统有多先进",
      "应收账款账龄、应付账款到期日和库存周转,是三个最重要的视角",
      "从管理层最常问的现金问题入手,再确保系统能够回答这些问题",
    ],
  },
  { type: "h2", text: "为什么盈利不等于有钱" },
  {
    type: "p",
    text: "损益表在销售发生时确认收入,而不是在资金到账时。如果大多数客户采用赊账付款,本月的销售要在几周之后才能变成现金。与此同时,原材料或商品的采购往往需要更早付款。正是这个时间差,让一家公司看起来在盈利,却感觉手头缺钱。",
  },
  {
    type: "p",
    text: "库存又增加了一层复杂性。已采购但尚未售出的商品不会在损益表中体现为费用,但资金已经离开了银行账户。一家为了追求增长而不断增加库存的企业,报表上可能看起来非常健康,现金却越来越紧张。如果没有一个把采购、销售和库存连接起来的系统,这种模式往往要等到演变成危机时才会被察觉。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1733727584002-e64f62fc1095",
    alt: "放在桌上、塞满现金的钱包",
    caption: "现金流仪表盘的准确程度,取决于每天进入系统的交易数据。",
  },
  { type: "h2", text: "财务数据分散带来的问题" },
  {
    type: "p",
    text: "在许多成长中的企业里,每个部门都有自己的工具。销售在收银应用或电子表格中记录订单,仓库保留单独的库存记录,财务在月底手工核对银行流水。每个工具也许都能胜任各自的工作,但没有一个能显示这一切如何影响公司的整体现金。",
  },
  {
    type: "ul",
    items: [
      "应收账款状况要在手工对账之后才知道,往往已经晚了几周",
      "即将到期的供应商账单,无法与客户回款计划放在一起查看",
      "仓库库存的价值要等到盘点之后才能准确知道",
      "销售、仓库和财务报表中的数字经常不一致,需要花时间核对",
      "重大采购决策在没有查看未来几周现金预测的情况下作出",
    ],
  },
  {
    type: "p",
    text: "结果,管理层依据过时的数字作决策。等月末报表编制完成时,情况早已发生变化。一个本可以提前几周预见的现金问题,直到当天必须解决时才被发现。",
  },
  { type: "h2", text: "ERP 如何把各个环节连接起来" },
  {
    type: "p",
    text: "ERP 的主要价值不在于模块的数量,而在于所有模块共享同一套数据。创建销售订单时,系统知道哪些货物出库、应收账款增加多少,以及预计何时收款;采购订单获批时,系统知道将产生多少应付账款以及何时到期。每一笔业务交易都会自动在财务中留下痕迹。",
  },
  { type: "h3", text: "从开票那一刻起就跟踪应收账款" },
  {
    type: "p",
    text: "使用 ERP,每张销售发票都会立即记录为带有到期日的应收账款。应收账款账龄报告显示:多少尚未到期,多少略有逾期,多少已经拖欠很久。财务可以更早催收,销售也可以在接受新的赊账订单之前查看客户的付款状况。",
  },
  { type: "h3", text: "有计划的应付账款,而不是突如其来" },
  {
    type: "p",
    text: "从创建采购订单起就记录在系统中的供应商账单,让财务可以制定付款计划。再也不会有账单在到期当天突然出现在桌上。企业可以规划何时向谁付款,与特定供应商协商账期,或在现金允许时享受提前付款折扣。",
  },
  { type: "h3", text: "库存就是被占用的资金" },
  {
    type: "p",
    text: "与库存相连的 ERP 能实时显示库存价值,而不只是在盘点之后。库存周转报告揭示哪些商品卖得快,哪些积压了好几个月。这些信息有助于采购更加精准:多进周转快的商品,少进周转慢的商品,从而减少被仓库占用的资金。",
  },
  {
    type: "callout",
    title: "三个应该在几分钟内就能回答的现金问题",
    text: "未来两周将从客户那里收到多少钱?同一期间需要向供应商支付多少?超过三个月没有动过的库存价值是多少?如果回答这些问题需要好几天,说明你的现金流可见性还很低。",
  },
  { type: "h2", text: "从历史报表到预测" },
  {
    type: "p",
    text: "传统的现金流量表告诉你已经发生了什么。这对复盘很重要,但对今天的决策帮助有限。由于 ERP 保存了带到期日的应收账款、带付款计划的应付账款以及进行中的订单,同样的数据可以用来预测未来几周的现金状况。",
  },
  {
    type: "p",
    text: "这种预测永远不会完美。客户可能延迟付款,订单可能被取消,意外支出也随时可能发生。但基于真实交易数据的预测,远比凭记忆的估计有用得多。管理层可以看到哪几周可能比较紧张,并提前采取行动:加快催收、推迟非紧急采购,或在真正需要之前安排好融资。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1745270917233-65e776a47547",
    alt: "显示增长与潜在利润的股价图表",
    caption: "现金流可见性让财务与运营部门能够基于同一组数字进行讨论。",
  },
  { type: "h2", text: "仪表盘与预警" },
  {
    type: "p",
    text: "系统中的完整数据,只有在合适的人于合适的时间看到时才有用。因此,现金流可见性的很大一部分价值,其实来自信息的呈现方式。企业老板不需要每天早上打开几十份报表;他们需要的是一个简洁的视图,显示今天的现金状况、未来几周计划中的收款和付款,以及一份需要关注事项的简短清单。",
  },
  {
    type: "p",
    text: "自动预警是仪表盘的补充。当某位客户的应收账款超过设定天数、有逾期欠款的客户提交新订单,或某一周的预测现金低于安全线时,系统都可以发出提醒。这样,管理层的注意力就会集中在真正重要的例外情况上,而不是花在检查本来就没问题的数字上。",
  },
  {
    type: "ul",
    items: [
      "每日现金和银行余额,并与上周的预测进行对比",
      "应收账款逾期的客户清单,按金额排序",
      "未来几周的供应商付款计划",
      "周转最慢的商品及其占用的库存价值",
    ],
  },
  { type: "h2", text: "让 ERP 真正带来可见性的前提条件" },
  {
    type: "p",
    text: "ERP 系统并不是自动的保证。许多已经在使用 ERP 的公司,依然难以看清现金流,因为系统中的数据不完整或不及时。以下条件决定了 ERP 能否真正提供值得信赖的全貌。",
  },
  {
    type: "ol",
    items: [
      "交易在发生时就记录,而不是攒到周末或月底再录入",
      "为每位客户和供应商正确设置到期日和付款条件",
      "定期核对银行收付款,最好每天或每周进行",
      "库存变动——入库、出库、退货和调整——都完整记录在系统中",
      "每类数据都有明确的流程负责人,错误能被迅速发现和纠正",
    ],
  },
  {
    type: "p",
    text: "这些条件更多关乎工作习惯,而不是技术。这就是为什么成功的 ERP 实施总是伴随着流程变革和团队培训,而不仅仅是安装软件。一个先进的系统如果输入的是滞后的数据,也只会产出外观更漂亮的滞后报表。",
  },
  { type: "h2", text: "从最紧迫的现金需求开始" },
  {
    type: "p",
    text: "并不是每家企业都需要一次性上线所有 ERP 模块才能获得现金流可见性。更现实的做法是,从最常让管理层头疼的现金问题入手,然后确保回答该问题所需的数据可用且相互连接。",
  },
  {
    type: "p",
    text: "如果最大的问题是回款慢,优先事项就是与收款记录相连的销售和应收账款模块;如果问题是库存积压,优先事项就是库存和采购。当这个基础在纪律下稳定运行后,其他模块可以分阶段加入,每增加一个模块,现金流的全貌就更完整一些。",
  },
  {
    type: "p",
    text: "对于流程非常特殊的企业,围绕自身工作流程构建或定制的 ERP,可能比强迫流程去适应标准系统更合适。最重要的是最终结果:一个所有部门都信任的数据来源,以及随时都能回答的现金问题。",
  },
  {
    type: "p",
    text: "从设计之初就让财务部门参与进来。他们最清楚老板最常问哪些问题,目前哪些报表是手工编制的,以及不同来源的数字最常在哪里对不上。他们的意见有助于确保所构建的系统真正满足日常的现金需求,而不只是生成很少有人打开的标准报表。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "现金困难很少突然降临。迹象通常早已存在于数据之中——开始老化的应收账款、不动的库存、集中在同一周的付款计划。问题在于,这些数据分散在不同的地方,等到被汇总在一起时已经太晚。以纪律推行的 ERP 能让这些迹象更早显现,使决策可以在选择仍然很多的时候作出,而不是只剩下应急措施的时候。",
  },
  {
    type: "cta",
    title: "月底时经常被现金状况吓一跳?",
    text: "AG·SORA 团队可以帮助梳理你在销售、采购、库存和财务之间的数据流,并设计一套让现金状况每天都清晰可见的 ERP 系统。咨询完全免费,无需任何承诺。",
    href: "/services/erp",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
