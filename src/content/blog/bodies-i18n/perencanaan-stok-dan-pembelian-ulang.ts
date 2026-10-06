import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "For a business that sells goods, inventory is money sleeping on shelves and in warehouses. Too little, and customers are disappointed and sales are lost. Too much, and capital is tied up, goods age, spoil, or expire, and storage space fills with things that don't sell. Keeping the balance between these two sides is one of the jobs that most determines the health of a business's cash flow.",
  },
  {
    type: "p",
    text: "In many small and medium businesses, the decision of when and how much to reorder still depends on the memory and instinct of the owner or warehouse head. That can work as long as the number of items is small and one person knows everything. When products multiply, branches are added, or the person who understands has to take leave, the memory-based approach begins to crack, and mistakes become expensive.",
  },
  {
    type: "p",
    text: "This article covers how to set up more structured inventory planning and reordering, from basic concepts such as safety stock and reorder point, to how an ERP or inventory system helps run them. We don't use invented numbers or magic formulas; what we offer is a way of thinking you can adapt to the character of your own business.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "The goal of inventory planning is to keep available the goods customers need with as little capital tied up as possible",
      "Core concepts: average sales, supplier lead time, safety stock, and reorder point",
      "Not all items should be treated the same; grouping by value and turnover makes attention better targeted",
      "Accurate stock data is a prerequisite; planning is no better than the data beneath it",
      "A system helps remind and calculate, but human judgment about seasons, promotions, and market conditions is still needed",
    ],
  },
  { type: "h2", text: "Two opposite mistakes" },
  {
    type: "p",
    text: "Understocking and overstocking are often seen as two different problems handled in different ways, yet both arise from the same root: no clear picture of how fast goods leave and how long new goods take to arrive. Without that picture, ordering tends to be reactive. People order when the shelf looks empty, and out of panic, order too much to be safe.",
  },
  {
    type: "p",
    text: "The result is a familiar pattern. Popular items often run out just when demand is high, while slow items pile up because they were once ordered in large quantities. Capital is tied up in the wrong places, and cash flow becomes tight even though sales look good. Good planning tries to break this pattern by replacing panicked reaction with clear rules.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1584568694489-f71bdbac55e2",
    alt: "Empty grocery store shelves",
    caption: "Piling-up manual records make stock data hard to trust; a connected system replaces them.",
  },
  { type: "h2", text: "Basic concepts to understand" },
  { type: "h3", text: "Average sales" },
  {
    type: "p",
    text: "The basis of all planning is knowing how fast an item sells. Calculate average sales per day or per week from transaction history, and note that this average can change with the season, payday, holidays, or promotions. An item that looks slow in an ordinary month can surge before a major holiday, and vice versa.",
  },
  { type: "h3", text: "Supplier lead time" },
  {
    type: "p",
    text: "Lead time is the gap between when you order and when the goods are actually ready to sell. Account for the whole chain: the supplier's preparation time, shipping, receiving inspection, and recording into the system. A supplier who is sometimes late makes the effective lead time longer than promised, and planning should rest on reality, not promises.",
  },
  { type: "h3", text: "Safety stock" },
  {
    type: "p",
    text: "Safety stock is a reserve to cover uncertainty: sales that suddenly surge or a delivery that arrives late. The more uncertain an item's demand and supply, the larger the reserve that makes sense. But the larger the reserve, the more capital is tied up, so its size is a business decision balancing the risk of running out against the cost of holding.",
  },
  { type: "h3", text: "Reorder point" },
  {
    type: "p",
    text: "The reorder point is the stock level at which you should order again. Simply put, it covers the sales expected during the lead time plus safety stock. When stock touches that point, the system or staff triggers an order. That way the decision no longer depends on when someone happens to see an empty shelf.",
  },
  {
    type: "callout",
    title: "A simple example of the reasoning",
    text: "If an item sells a certain average amount per day and the supplier needs several days to deliver, stock must be enough to cover sales during those days, plus a reserve in case delivery is late. The exact numbers differ for every business and every item, so set them from your own data and review them regularly.",
  },
  { type: "h2", text: "Not every item deserves equal treatment" },
  {
    type: "p",
    text: "Team attention and time are limited, so planning is most efficient when focused on the items with the most influence. A common approach is to group items by contribution, often called ABC analysis. A small number of items usually account for most of the sales value or tied-up capital, and this group deserves close monitoring with careful ordering rules.",
  },
  {
    type: "p",
    text: "The middle group is monitored reasonably with simpler rules, while the group with small value and slow turnover can be managed with loose rules, such as periodic ordering of a fixed quantity. A second useful grouping is by demand stability: items that sell steadily are easy to forecast, while seasonal or sporadic items need special treatment and human judgment.",
  },
  {
    type: "ul",
    items: [
      "High-value, fast-turning items: monitor closely, set careful reorder points, review often",
      "Mid-range items: standard rules with periodic review",
      "Low-value or slow items: simple rules and periodic ordering",
      "Seasonal items: plan early based on last year's pattern and promotion plans",
      "Perishable or quickly obsolete items: limit quantities and favor fast turnover",
    ],
  },
  { type: "h2", text: "The foundation: accurate stock data" },
  {
    type: "p",
    text: "All the planning above depends on one thing: the stock figure in the system must match reality in the warehouse. If the record says stock exists while the shelf is empty, or the reverse, even the most sophisticated rule will give wrong decisions. So data quality must be maintained through process discipline, not only through software.",
  },
  {
    type: "p",
    text: "Helpful practices include recording every receipt and issue of goods at the moment it happens, using consistent item codes, and scheduling physical counts regularly. Counting can be done on a rotating basis by item group without halting operations; see our discussion of stock opname without halting operations. Differences found need their cause traced, whether miscounting, damage, loss, or shipping error, not just have the figures adjusted.",
  },
  { type: "h2", text: "Planning reorders in practice" },
  {
    type: "p",
    text: "With concepts and data ready, the reordering flow can be shaped into a clear routine. A good routine separates three steps: recognizing the need, drafting and approving the order, then receiving and recording the goods. This separation reduces errors and makes each step traceable.",
  },
  {
    type: "ol",
    items: [
      "Review items whose stock has reached or is approaching the reorder point, via the system's alert list or a daily report",
      "Check the context: is there a promotion, season, or large order not yet recorded that affects the need",
      "Decide the order quantity considering supplier minimum multiples, storage space, and capital capacity",
      "Create a purchase order and run approval according to the applicable value limits",
      "Send it to the supplier and record the expected arrival date to monitor delays",
      "When goods arrive, check against the order, record the receipt, and update stock the same day",
      "Match the supplier invoice against the order and receipt before paying",
    ],
  },
  {
    type: "p",
    text: "For businesses with many suppliers, consider combining orders to the same supplier to meet delivery minimums and save shipping costs. For multi-branch businesses, decide whether purchasing is centralized or per branch, and whether inter-branch transfers may be used to balance stock before ordering from the supplier. A clear purchase approval flow, as discussed in our article on purchase approval flows, keeps control without slowing work down.",
  },
  { type: "h2", text: "The role of ERP and inventory systems" },
  {
    type: "p",
    text: "Everything discussed can be run with spreadsheets while the business is small. But as the number of items and transactions grows, manual work becomes slow and error-prone. An inventory system or an ERP's inventory module takes over the repetitive parts and gives visibility that is hard to achieve manually.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    alt: "A container port with large cranes and a ship loaded with containers",
    caption: "The larger the scale of goods movement and the more branches, the more important connected, automatically updated stock data becomes.",
  },
  {
    type: "ul",
    items: [
      "Stock updated automatically from cashier sales, goods receipts, returns, and inter-branch transfers",
      "Alerts when stock reaches the reorder point, with suggested quantities based on sales history",
      "Purchase orders created from those suggestions with tiered approval flows",
      "Automatic matching of orders, goods receipts, and supplier invoices",
      "Reports on turnover, slow items, repeatedly out-of-stock items, and inventory value",
      "Batch and expiry date support for perishable goods",
      "A unified view of stock across all branches and sales channels, including the online store",
    ],
  },
  {
    type: "p",
    text: "When physical store and online store stock share one data source, the risk of selling goods that are actually gone drops sharply. This is discussed further in our article on unifying physical store and marketplace stock. Remember that a system only gives suggestions based on past patterns; the final decision must still consider things not yet reflected in the data, such as a big promotion plan or a price change from the supplier.",
  },
  { type: "h2", text: "The link to cash flow" },
  {
    type: "p",
    text: "Inventory planning is financial planning in disguise. Every decision to order is a decision to spend cash today on goods that will only make money later. So review purchase plans together with the cash flow outlook: when supplier invoices fall due, how long goods typically take to sell, and when customer receivables are paid. Further discussion is available in our article on ERP and cash flow visibility.",
  },
  {
    type: "p",
    text: "Payment terms with suppliers also matter. Longer payment terms give cash flow breathing room, but note whether there are price consequences. Sensible negotiation is often more beneficial than just seeking the lowest unit price, because what counts is total cost and its effect on working capital.",
  },
  { type: "h2", text: "Common mistakes in inventory planning" },
  {
    type: "p",
    text: "The first mistake is trusting system figures without periodically checking physical reality. The second is using one rule for all items, so important items get too little attention and trivial ones consume time. The third is ignoring the supplier's real lead time and only using the promised figure.",
  },
  {
    type: "p",
    text: "The fourth mistake is not factoring promotion plans and seasons into calculations, so the system is caught off guard when demand surges. The fifth is letting slow items pile up with no exit plan, such as targeted discounts or bundles. Goods that sit unmoving for long not only tie up capital but also crowd out space for more profitable items.",
  },
  { type: "h2", text: "Starting simple" },
  {
    type: "p",
    text: "You don't need to wait for a perfect system to improve inventory planning. Start by choosing a small number of the most important items, calculate their average sales, record their suppliers' real lead times, and set initial reorder points. Run it for several cycles, compare results with reality, then refine the numbers. Lessons from this small group can be extended to the whole catalog.",
  },
  {
    type: "p",
    text: "At the same time, tidy up recording discipline and schedule regular physical counts. When the manual process is clear and starts to feel heavy, that is the right time to consider a system that automates, because you already know exactly what you want to automate.",
  },
  {
    "type": "h2",
    "text": "An illustration: two branches working differently"
  },
  {
    "type": "p",
    "text": "As a hypothetical illustration, imagine a household goods store with two branches. The first branch is run by an experienced store head who orders by instinct. The second is newly opened, run by staff who haven't memorized the sales patterns. Without shared rules, the first branch rarely runs out but its warehouse is full of slow items, while the second often runs out of popular goods and piles up on the wrong items ordered."
  },
  {
    "type": "p",
    "text": "With centralized sales data, the owner can see that some items sell well at the first branch but slowly at the second, and vice versa. Excess stock at one branch can be moved to the other before ordering again from the supplier. Reorder points are set per branch based on each one's selling speed, and purchase requests are reviewed centrally so they can be combined to the same supplier."
  },
  {
    "type": "p",
    "text": "The hoped-for result isn't a magic number but a change in how work gets done: the decision to order no longer depends on one person's instinct, knowledge of sales patterns is stored in the system so new staff learn quickly, and the owner can see both branches' condition in one report. This illustration is deliberately simple so it is easy to picture; your business situation will of course have its own details to consider."
  },
  {
    "type": "p",
    "text": "The main lesson: clear rules and shared data make the quality of decisions no longer depend on who happens to be on duty. That is the greatest value of structured inventory planning, far beyond mere efficiency in numbers."
  },
  {
    "type": "h2",
    "text": "Keeping the habit of routine review"
  },
  {
    "type": "p",
    "text": "Inventory planning isn't a one-off project. Sales patterns change, suppliers switch, prices move, and new products come in. A rule that was right six months ago may no longer fit today. Schedule routine reviews, for example monthly, to check whether reorder points and safety stock still make sense, which items are starting to slow, and which suppliers' lead times are getting worse. Involve the people closest to the floor, because they often know of changes before the data shows them."
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "Good inventory planning makes a business calm: customers are rarely disappointed by empty shelves, the warehouse isn't crowded with goods that don't sell, and cash isn't tied up in the wrong places. The key isn't complicated formulas but accurate data, clear rules, attention focused on the most important items, and the habit of reviewing results. The right system reinforces all of this, but the basics you can start today.",
  },
  {
    type: "cta",
    title: "Want stock and purchasing under better control?",
    text: "The AG·SORA team helps design ERP and inventory systems that remind you when to order, record receipts, and unify stock across all branches. Consultation is free, with no commitment.",
    href: "/services/erp",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "对销售商品的企业来说,库存就是沉睡在货架和仓库里的钱。太少,客户失望、销售流失。太多,资金被占用,货物老化、变质或过期,仓储空间被卖不动的东西塞满。在这两端之间保持平衡,是最能决定企业现金流健康的工作之一。",
  },
  {
    type: "p",
    text: "在许多中小企业里,何时补货、补多少仍然依赖老板或仓库主管的记忆和直觉。只要商品数量少、一个人掌握全部情况,这种做法还行得通。当产品增多、分店增加,或者懂行的人要请假时,依赖记忆的做法就开始出现裂缝,错误的代价也变得高昂。",
  },
  {
    type: "p",
    text: "本文讨论如何建立更有结构的库存计划与补货,从安全库存和再订货点等基本概念,到 ERP 或库存系统如何帮助执行。我们不使用杜撰的数字或神奇公式;我们提供的是一种可以根据你自己企业特点调整的思考方式。",
  },
  { type: "h2", text: "摘要" },
  {
    type: "ul",
    items: [
      "库存计划的目标是在占用资金尽量少的前提下,保证客户需要的商品可供应",
      "核心概念:平均销量、供应商交货周期、安全库存和再订货点",
      "并非所有商品都应同等对待;按价值和周转率分组能让注意力更有针对性",
      "准确的库存数据是前提;计划不会比其底层的数据更好",
      "系统有助于提醒和计算,但对季节、促销和市场状况的人工判断仍然必要",
    ],
  },
  { type: "h2", text: "两种相反的错误" },
  {
    type: "p",
    text: "库存不足和库存过剩常被视为两个需要不同处理方式的问题,其实二者出自同一个根源:对商品出货有多快、新货到货要多久缺乏清晰的认识。没有这个认识,订货就倾向于被动反应。人们在货架看起来空了时才订货,而且出于恐慌,为求稳妥订得太多。",
  },
  {
    type: "p",
    text: "结果是一种熟悉的模式。热销商品常常恰在需求旺盛时断货,而滞销商品却因为曾经大量订购而堆积。资金被占用在错误的地方,即使销售看起来不错,现金流也会吃紧。好的计划试图以清晰的规则取代恐慌式的反应,从而打破这种模式。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1584568694489-f71bdbac55e2",
    alt: "空荡荡的杂货店货架",
    caption: "不断堆积的手工记录让库存数据难以信赖;互联的系统可以取而代之。",
  },
  { type: "h2", text: "需要理解的基本概念" },
  { type: "h3", text: "平均销量" },
  {
    type: "p",
    text: "所有计划的基础是了解某件商品卖得有多快。根据交易历史计算每天或每周的平均销量,并注意这个平均值会随季节、发薪日、节假日或促销而变化。在平常月份看起来滞销的商品,可能在大节前激增,反之亦然。",
  },
  { type: "h3", text: "供应商交货周期" },
  {
    type: "p",
    text: "交货周期是你下单到商品真正可以销售之间的间隔。要把整条链路都算进去:供应商备货时间、运输、收货检验以及录入系统。有时会迟到的供应商会让实际交货周期比承诺的更长,计划应立足于现实,而不是承诺。",
  },
  { type: "h3", text: "安全库存" },
  {
    type: "p",
    text: "安全库存是用来应对不确定性的储备:销量突然激增或送货延迟。某件商品的需求和供应越不确定,合理的储备就越大。但储备越大,占用的资金也越多,所以它的大小是一个在断货风险与持有成本之间权衡的业务决策。",
  },
  { type: "h3", text: "再订货点" },
  {
    type: "p",
    text: "再订货点是你应当再次下单的库存水平。简单地说,它涵盖交货周期内预计的销量加上安全库存。当库存触及该点时,系统或人员就触发订货。这样决策就不再取决于某人碰巧什么时候看到空货架。",
  },
  {
    type: "callout",
    title: "一个简单的推理示例",
    text: "如果某件商品平均每天卖出一定数量,而供应商需要几天才能送到,那么库存必须足以覆盖这几天的销量,再加上应对送货迟到的储备。具体数字因每家企业、每件商品而异,所以请根据你自己的数据设定,并定期复核。",
  },
  { type: "h2", text: "并非每件商品都值得同等对待" },
  {
    type: "p",
    text: "团队的注意力和时间有限,所以计划集中在影响最大的商品上最有效率。常见的做法是按贡献度对商品分组,通常称为 ABC 分析。少数商品通常贡献了大部分销售额或占用资金,这一组值得以审慎的订货规则密切监控。",
  },
  {
    type: "p",
    text: "中间一组按较简单的规则合理监控,而价值小、周转慢的一组可以用宽松的规则管理,例如定期订购固定数量。第二种有用的分组是按需求稳定性:销售平稳的商品容易预测,而季节性或零星的商品需要特殊处理和人工判断。",
  },
  {
    type: "ul",
    items: [
      "高价值、周转快的商品:密切监控,设定审慎的再订货点,频繁复核",
      "中等商品:标准规则,定期复核",
      "低价值或慢周转商品:简单规则与定期订货",
      "季节性商品:依据去年的规律和促销计划提前规划",
      "易变质或快速过时的商品:限制数量,优先快速周转",
    ],
  },
  { type: "h2", text: "基础:准确的库存数据" },
  {
    type: "p",
    text: "上述所有计划都依赖一件事:系统里的库存数字必须与仓库里的实际相符。如果记录显示有库存而货架是空的,或者相反,再复杂的规则也会给出错误的决策。所以必须靠流程纪律来维护数据质量,而不只是靠软件。",
  },
  {
    type: "p",
    text: "有帮助的做法包括:在发生的当时就记录每一次收货和出货、使用一致的商品编码,并定期安排实物盘点。盘点可以按商品组轮流进行,而无需停止运营;请参阅我们关于不停业盘点的讨论。发现的差异需要追查原因,是记错、损坏、丢失还是发货错误,而不是只调整数字。",
  },
  { type: "h2", text: "实务中的补货计划" },
  {
    type: "p",
    text: "有了概念和数据,补货流程就可以整理成清晰的例行程序。好的程序把三个步骤分开:识别需求、起草并批准订单,然后收货并记录。这种分离减少错误,并使每一步都可追溯。",
  },
  {
    type: "ol",
    items: [
      "通过系统的预警清单或每日报表,查看库存已达到或接近再订货点的商品",
      "检查背景:是否有尚未记录、会影响需求的促销、季节或大额订单",
      "在考虑供应商最小起订倍数、存放空间和资金能力的前提下决定订货数量",
      "创建采购订单,并按适用的金额上限进行审批",
      "发送给供应商,并记录预计到货日期以监控延误",
      "货到后,对照订单检查、记录收货,并在当天更新库存",
      "付款前,将供应商发票与订单和收货记录核对",
    ],
  },
  {
    type: "p",
    text: "对于供应商众多的企业,可考虑把发给同一供应商的订单合并,以满足最低送货量并节省运费。对于多分店的企业,要决定采购是集中还是按分店进行,以及在向供应商订货之前是否可以用分店间调拨来平衡库存。清晰的采购审批流程,如我们关于采购审批流程的文章所讨论的,能在不拖慢工作的前提下保持控制。",
  },
  { type: "h2", text: "ERP 与库存系统的作用" },
  {
    type: "p",
    text: "在企业规模还小的时候,以上所有内容都可以用电子表格来运行。但随着商品和交易数量增长,手工工作会变得缓慢且容易出错。库存系统或 ERP 的库存模块会接管重复性的部分,并提供手工难以实现的可见性。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    alt: "有大型起重机和满载集装箱的货轮的集装箱港口",
    caption: "货物流动的规模越大、分店越多,互联且自动更新的库存数据就越重要。",
  },
  {
    type: "ul",
    items: [
      "库存根据收银销售、收货、退货和分店间调拨自动更新",
      "库存达到再订货点时发出提醒,并依据销售历史给出建议数量",
      "根据这些建议生成采购订单,并带有分级审批流程",
      "订单、收货和供应商发票自动匹配",
      "周转、滞销商品、反复缺货商品和库存价值的报表",
      "对易变质商品提供批次和有效期支持",
      "跨所有分店和销售渠道(包括网店)的统一库存视图",
    ],
  },
  {
    type: "p",
    text: "当实体店和网店的库存共用同一个数据源时,卖出实际已售罄商品的风险会大幅下降。这一点在我们关于统一实体店与电商平台库存的文章中有进一步讨论。请记住,系统只是根据过去的规律给出建议;最终决策仍必须考虑数据中尚未体现的事项,例如大型促销计划或供应商的价格变动。",
  },
  { type: "h2", text: "与现金流的关系" },
  {
    type: "p",
    text: "库存计划是伪装起来的财务计划。每一个订货决定,都是用今天的现金购买日后才会赚钱的商品。因此,请把采购计划与未来的现金流展望一起复核:供应商发票何时到期、商品通常需要多久卖出、客户应收账款何时收回。更多讨论请参阅我们关于 ERP 与现金流可见性的文章。",
  },
  {
    type: "p",
    text: "与供应商的付款条件也很重要。较长的付款期限给现金流留出喘息空间,但要留意是否会带来价格上的后果。合理的谈判往往比单纯追求最低单价更有益,因为真正重要的是总成本及其对营运资金的影响。",
  },
  { type: "h2", text: "库存计划中的常见错误" },
  {
    type: "p",
    text: "第一个错误是只相信系统数字,而不定期核对实物情况。第二个错误是所有商品用同一条规则,导致重要商品关注不足、琐碎商品耗费时间。第三个错误是忽略供应商的实际交货周期,只用承诺的数字。",
  },
  {
    type: "p",
    text: "第四个错误是没有把促销计划和季节纳入计算,于是需求激增时系统措手不及。第五个错误是任由滞销商品堆积而没有出清计划,例如定向折扣或组合销售。长期不动的商品不仅占用资金,还挤占了更赚钱商品的空间。",
  },
  { type: "h2", text: "从简单处开始" },
  {
    type: "p",
    text: "你不必等待完美的系统才改进库存计划。先选出少数最重要的商品,计算它们的平均销量,记录其供应商的实际交货周期,并设定初始的再订货点。运行几个周期,把结果与实际对照,然后改进数字。从这一小批商品得到的经验可以推广到整个目录。",
  },
  {
    type: "p",
    text: "同时,整顿记录的纪律,并安排定期的实物盘点。当手工流程已经清晰并开始让人觉得吃力时,就是考虑自动化系统的合适时机,因为你已经确切知道想要自动化什么。",
  },
  {
    "type": "h2",
    "text": "示例:两家分店的不同做法"
  },
  {
    "type": "p",
    "text": "作为一个假设性的示例,设想一家有两家分店的家居用品店。第一家分店由经验丰富的店长管理,凭直觉订货。第二家是新开的,由尚未熟悉销售规律的员工管理。没有共同的规则时,第一家分店很少缺货,但仓库里堆满了滞销商品;第二家分店则经常在热销商品上缺货,并在订错的商品上积压。"
  },
  {
    "type": "p",
    "text": "有了集中的销售数据,老板可以看到某些商品在第一家分店畅销、在第二家却滞销,反之亦然。一家分店的多余库存可以先调拨到另一家,然后再向供应商订货。再订货点按各分店自己的销售速度分别设定,采购申请集中审核,以便合并发给同一供应商。"
  },
  {
    "type": "p",
    "text": "期望的结果不是什么神奇的数字,而是工作方式的改变:订货决定不再取决于某一个人的直觉,销售规律的知识保存在系统里,新员工能快速上手,老板也能在一份报表里看到两家分店的状况。这个示例刻意保持简单,便于想象;你的企业情况当然有自己需要考虑的细节。"
  },
  {
    "type": "p",
    "text": "主要的启示是:清晰的规则和共享的数据,使决策的质量不再取决于当班的是谁。这就是结构化库存计划的最大价值,远远超出数字上的效率。"
  },
  {
    "type": "h2",
    "text": "保持例行复盘的习惯"
  },
  {
    "type": "p",
    "text": "库存计划不是一次性的项目。销售规律会变化,供应商会更换,价格会波动,新产品会进来。六个月前正确的规则,今天可能已不再适用。安排例行复盘,例如每月一次,检查再订货点和安全库存是否仍然合理、哪些商品开始变慢,以及哪些供应商的交货周期在变差。让最贴近一线的人参与,因为他们往往在数据显示之前就知道变化。"
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "良好的库存计划让企业从容:客户很少因货架空了而失望,仓库不会被卖不动的货物挤满,现金也不会被困在错误的地方。关键不在于复杂的公式,而在于准确的数据、清晰的规则、集中在最重要商品上的注意力,以及复核结果的习惯。合适的系统会强化这一切,但基础工作你今天就可以开始。",
  },
  {
    type: "cta",
    title: "想让库存与采购更受控?",
    text: "AG·SORA 团队帮助设计提醒何时订货、记录收货并统一所有分店库存的 ERP 与库存系统。咨询完全免费,无需任何承诺。",
    href: "/services/erp",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
