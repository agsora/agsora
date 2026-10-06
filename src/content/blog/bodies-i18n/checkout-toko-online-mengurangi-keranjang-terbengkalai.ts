import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "For an online store, there is a painful yet very common moment: the customer has chosen items, put them in the cart, perhaps even filled in some details, and then leaves without completing payment. You've paid for ads, designed pages, and convinced them almost to the finish line, but the sale doesn't happen. This phenomenon is known as cart abandonment, and nearly every online store experiences it.",
  },
  {
    type: "p",
    text: "The good news is that some of the causes can be fixed through better checkout design and flow. The more honest news: not every abandoned cart is a preventable loss. Some people are simply comparing prices, saving items for later, or distracted by something else. Your job isn't to eliminate the phenomenon but to remove the barriers that could actually be avoided.",
  },
  {
    type: "p",
    text: "This article covers common reasons people leave checkout and practical fixes for each, from unexpected costs, tiring forms, and too few payment options, to trust and speed. We use no invented figures about abandonment percentages; what we offer is a way to examine your own store's data and improve it step by step.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "The most common checkout barriers: extra costs that appear late, forms that are too long, limited payment options, lack of trust, and slow pages",
      "Show the total cost, including shipping, as early as possible so there are no surprises at the end",
      "Reduce fields to what is truly needed, allow checkout without creating an account, and offer payments familiar to your customers",
      "Build trust through clear policies, real security signals, and easy-to-reach contacts",
      "Measure each stage of the flow to know where customers stop, then fix one thing at a time",
    ],
  },
  { type: "h2", text: "Understanding where customers stop" },
  {
    type: "p",
    text: "Before fixing anything, first know at which stage your customers leave. An online shopping flow usually consists of several steps: viewing the product, adding to cart, starting checkout, filling in shipping details, choosing payment, and completing the order. By seeing how many people remain from one step to the next, you can find the biggest leak.",
  },
  {
    type: "p",
    text: "This data can come from website analytics tools or from your store system. If many people add to cart but few start checkout, the problem may be on the cart page, such as a surprising cost. If many start but stop at the form, fix the form. If they stop at the payment step, check the payment method choices and trust. Fixing according to data is far more effective than guessing.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    alt: "A person holding a payment card while shopping on a laptop",
    caption: "A customer already holding their card is closest to buying; don't let the checkout flow make them hesitate.",
  },
  { type: "h2", text: "Barrier 1: unexpected costs" },
  {
    type: "p",
    text: "The most common reason people leave checkout is a total that turns out more expensive than imagined. Shipping costs, service fees, or taxes that only appear at the final step feel like a trap, and many people leave immediately. The feeling of being tricked is more damaging to the customer relationship than a slightly higher price that is honest from the start.",
  },
  {
    type: "ul",
    items: [
      "Show estimated shipping costs as early as possible, for example on the product page or cart",
      "Explain free shipping conditions clearly, including how much more is needed to qualify",
      "Itemize all cost components before the customer fills in personal details",
      "Avoid hidden or extra fees that only appear at the payment stage",
      "Show estimated delivery time so customers know when goods will arrive",
    ],
  },
  { type: "h2", text: "Barrier 2: tiring forms" },
  {
    type: "p",
    text: "Every extra field is another reason to give up, especially on a small phone screen. Forms that ask for unneeded data, such as date of birth or multiple phone numbers, lengthen the process without adding value for the customer. Think honestly: what information is truly needed to ship and bill this order?",
  },
  {
    type: "p",
    text: "Also consider forcing account creation before buying. For a new buyer this is a big barrier, because they aren't yet sure they want to shop repeatedly. Offer guest checkout, and invite them to create an account after the order is done with a clear benefit, such as order tracking and quick reordering. For customers who already have an account, make sure address data is saved and auto-filled.",
  },
  {
    type: "ol",
    items: [
      "Remove fields that aren't absolutely needed to process and ship the order",
      "Allow guest checkout, offering account creation afterward",
      "Use address autofill and appropriate keyboard types on phones, such as a number pad for phone numbers",
      "Validate input live and explain errors in easy-to-understand language, right next to the field",
      "Show step progress so customers know how close they are to finishing",
      "Keep what has already been typed when an error occurs, so they don't have to start over",
    ],
  },
  { type: "h2", text: "Barrier 3: too few payment options" },
  {
    type: "p",
    text: "Customers feel most comfortable paying in ways familiar to them. If their favorite method isn't available, some will leave rather than use a less trusted alternative. The relevant options differ by market and customer type, so observe what your customers commonly use, both from transaction data and from questions they ask customer service.",
  },
  {
    type: "p",
    text: "In Indonesia, options such as bank transfer, digital wallets, QRIS, cards, and in-store payment are often part of the mix customers expect. But don't add as many methods as possible without consideration; each method brings its own costs, reconciliation process, and management complexity. Choose the most relevant, then make sure the process is smooth. Related discussion for physical checkouts can be read in our article on implementing QRIS at the cashier.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    alt: "Red and black shopping bags lined up against a dark background",
    caption: "A customer ready to buy shouldn't be made to wait or be confused at the final step.",
  },
  { type: "h2", text: "Barrier 4: lack of trust" },
  {
    type: "p",
    text: "At the payment step, customers hand sensitive data to a store they may have just met. Trust becomes decisive. Simple signs have great influence: a secure website address, a neat and professional look, clear contact information and business address, and return and shipping policies that are easy to find and read.",
  },
  {
    type: "p",
    text: "Genuine reviews from previous buyers also help, but they must be genuine. Don't fabricate reviews or show claims that can't be proven, because customers are getting better at spotting them and losing trust costs far more than losing one sale. Use a known payment provider and explain in simple language that card data is handled by that provider. For security basics, see our article on basic business application security.",
  },
  {
    type: "ul",
    items: [
      "Clear return, exchange, and shipping policies easily reachable from the checkout page",
      "Real contact information and responsive customer service, for example via WhatsApp",
      "A known payment provider with a brief explanation of data security",
      "Genuine reviews and testimonials, without fabrication",
      "A clear order summary before the customer presses the pay button",
    ],
  },
  { type: "h2", text: "Barrier 5: slow pages and checkout problems on phones" },
  {
    type: "p",
    text: "Most online shoppers buy via phone, often with imperfect connections. A checkout page that loads slowly, buttons that are too small, or forms uncomfortable to fill on a touch screen make people give up. Test your own checkout flow on a real phone, including on a slow connection, and notice where you yourself feel frustrated.",
  },
  {
    type: "p",
    text: "Speed also concerns stability: what happens if the connection drops mid-payment? Does the customer know whether their order succeeded? Clear confirmation, on screen and through a message or email, prevents customers from paying twice or contacting customer service anxiously. Further discussion of the impact of speed is in our article on website speed and its impact.",
  },
  { type: "h2", text: "Bringing back customers who left" },
  {
    type: "p",
    text: "Some abandoned carts can be recovered through a polite reminder. If the customer has provided an email or contact number and agreed to be contacted, you can send a reminder that their cart is still waiting. The best reminders help rather than pressure: say the item is still available, offer help if there are questions, and don't flood with repeated messages.",
  },
  {
    type: "p",
    text: "Use incentives like discounts carefully. If every customer learns that abandoning a cart will produce a discount code, some will do it deliberately, and your margin erodes. Start with reminders without discounts, measure results, and offer incentives only if proven necessary and still profitable. Also respect privacy preferences and the data protection rules that apply in storing and contacting customers.",
  },
  { type: "h2", text: "Improving in a measured way" },
  {
    type: "p",
    text: "After finding possible barriers, don't change everything at once. Change one thing at a time and compare results, so you know which change truly mattered. If your store has enough traffic, you can test two versions of a page on different groups of visitors. If traffic is small, compare before and after periods while accounting for seasonal factors and promotions.",
  },
  {
    type: "ol",
    items: [
      "Map each step of the shopping flow and note how many people remain at each step",
      "Find the step with the biggest drop and investigate causes through your own testing, customer feedback, and session recordings if available",
      "Decide on one fix, implement it, and record the date of the change",
      "Measure again after enough time to collect meaningful data",
      "Keep what works, revert what doesn't, then move on to the next barrier",
    ],
  },
  {
    type: "callout",
    title: "Remember the real goal",
    text: "The goal of improving checkout isn't to force people to buy, but to remove what stands in the way of people who genuinely want to buy. A flow that is honest, clear, and comfortable builds returning customers, not just one-time sales.",
  },
  { type: "h2", text: "The role of systems behind the scenes" },
  {
    type: "p",
    text: "A smooth checkout experience depends on the systems behind it. Stock must be accurate so customers don't pay for goods that are actually gone. Shipping costs must be calculated automatically and correctly. Payment status must be received and recorded reliably, and orders must enter the operations system without re-entry. When an online store is connected to your POS, inventory, and accounting systems, the whole flow from clicking buy to goods arriving becomes tidier.",
  },
  {
    type: "p",
    text: "That's why checkout improvement sometimes doesn't stop at appearance but touches integration with payment, courier, and operations systems. This is when to consider an online store designed around your business flow, not just a default template. For a comparison of approaches, also read our article on your own online store or marketplace.",
  },
  {
    "type": "h2",
    "text": "A checkout checklist before launch"
  },
  {
    "type": "p",
    "text": "Before launching an online store or changing the checkout flow, run through the following checklist. Try it as a real customer, preferably on a phone, and ask one or two people outside the team to try it without your help. The things that make them hesitate are the most honest clues about what needs fixing."
  },
  {
    "type": "ol",
    "items": [
      "Is the total cost, including shipping and other fees, clearly visible before the customer enters personal data?",
      "Can customers buy without creating an account, and is account creation offered after the order is complete?",
      "Does the form ask only for data that is truly needed, with appropriate keyboard types on phones?",
      "Do error messages explain the problem and show how to fix it without erasing entries that were already correct?",
      "Is the payment method most commonly used by your customers available and working smoothly?",
      "Are the return policy, shipping policy, and customer service contact easy to find from the checkout page?",
      "Is there a clear order summary, with images, quantities, prices, and estimated arrival, before the pay button is pressed?",
      "Does the page load quickly on a phone with an ordinary connection, and are buttons big enough to touch?",
      "Does the customer receive clear confirmation after paying, on screen and via message or email?",
      "Is stock checked at the moment the order is placed so out-of-stock goods aren't sold?",
      "Do incoming orders go straight into the operations system without re-entry?",
      "Is there a way to record and see at which step customers stop?"
    ]
  },
  {
    "type": "p",
    "text": "Keep this list and repeat it whenever there is a major change to the store, a payment method is added, or a courier is switched. The checkout flow is the part of a store most often broken silently by small changes elsewhere, and routine checks catch problems before customers find them."
  },
  {
    "type": "h2",
    "text": "Adapting to your type of store"
  },
  {
    "type": "p",
    "text": "The barriers with the most influence differ by store type. For stores with low-value items and impulse purchases, speed and ease, such as guest checkout and one-tap payment, are usually most decisive. For stores with high-value items, customers are more cautious, so trust, clarity of the return policy, and quick access to customer service matter more than speed alone."
  },
  {
    "type": "p",
    "text": "For stores selling heavy or bulky goods, shipping cost is often the biggest barrier, so cost transparency and courier options deserve priority. For stores selling made-to-order goods or fresh food, information about preparation and delivery time must be very clear so there is no disappointment. For stores with repeat customers, save addresses and preferences, and provide quick reordering so the next purchase has almost no friction."
  },
  {
    "type": "p",
    "text": "So don't just copy other stores. Study your own customers' behavior, from the data of each stage of the shopping flow and the questions that come to customer service to the reviews they write. The most fitting improvements often emerge from listening to repeated complaints, not from a list of general suggestions."
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "Cart abandonment won't disappear entirely, but most preventable causes lie in the flow you control: transparent costs, concise forms, familiar payments, built trust, and fast pages. Understand your data, fix one barrier at a time, and measure the results. Every small improvement to checkout is a sale that was almost happening and is now truly completed.",
  },
  {
    type: "cta",
    title: "Want an online store with smooth checkout?",
    text: "The AG·SORA team builds online stores that are fast, connected to your payment and operations systems, and designed to complete sales. Consultation is free, with no commitment.",
    href: "/services/website",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "对网店来说,有一个令人心痛却非常普遍的时刻:客户已经选好商品、放入购物车,甚至可能已经填了部分资料,然后在没有完成付款的情况下离开。你已经付了广告费、设计了页面,几乎把他们说服到终点线,但交易没有发生。这种现象被称为购物车放弃,几乎每家网店都会遇到。",
  },
  {
    type: "p",
    text: "好消息是,其中一部分原因可以通过更好的结账设计和流程来解决。更坦白的消息是:并非每个被放弃的购物车都是可以避免的损失。有些人只是在比价、把商品存起来以后再说,或被别的事情分了心。你的任务不是消除这种现象,而是去掉那些确实可以避免的障碍。",
  },
  {
    type: "p",
    text: "本文讨论人们离开结账页面的常见原因及对应的实用修复,从意外费用、令人疲惫的表单、支付选项不足,到信任与速度。我们不使用杜撰的购物车放弃率数字;我们提供的是检视你自己网店数据并逐步改进的方法。",
  },
  { type: "h2", text: "摘要" },
  {
    type: "ul",
    items: [
      "最常见的结账障碍:较晚出现的额外费用、过长的表单、有限的支付选项、缺乏信任以及页面缓慢",
      "尽早显示包括运费在内的总费用,避免最后出现意外",
      "把字段减少到真正需要的程度,允许不注册账号直接结账,并提供客户熟悉的支付方式",
      "通过清晰的政策、真实的安全标识和易于联系的方式建立信任",
      "衡量流程的每个阶段,了解客户在哪里停下,然后一次修复一件事",
    ],
  },
  { type: "h2", text: "了解客户在哪里停下" },
  {
    type: "p",
    text: "在修复任何东西之前,先弄清客户在哪个阶段离开。网购流程通常包括几个步骤:查看商品、加入购物车、开始结账、填写收货信息、选择支付方式,以及完成订单。通过查看从一个步骤到下一个步骤还剩多少人,你就能找到最大的漏洞。",
  },
  {
    type: "p",
    text: "这些数据可以来自网站分析工具或你的网店系统。如果很多人加入购物车但很少人开始结账,问题可能出在购物车页面,例如出人意料的费用。如果很多人开始了却停在表单,就改进表单。如果停在支付步骤,就检查支付方式的选择和信任度。依据数据来修复,远比猜测有效。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    alt: "一个人一边在笔记本电脑上购物,一边手持支付卡",
    caption: "已经拿着银行卡的客户离购买最近;不要让结账流程使他们犹豫。",
  },
  { type: "h2", text: "障碍一:意外的费用" },
  {
    type: "p",
    text: "人们离开结账页面最常见的原因,是总额比想象的更贵。到最后一步才出现的运费、服务费或税费像是陷阱,许多人会立即离开。被欺骗的感觉对客户关系的伤害,比一开始就诚实、价格略高要大得多。",
  },
  {
    type: "ul",
    items: [
      "尽早显示预计运费,例如在商品页面或购物车中",
      "清楚说明包邮条件,包括还差多少才能满足",
      "在客户填写个人资料之前,列明所有费用组成",
      "避免只在支付阶段才出现的隐藏费用或额外费用",
      "显示预计送达时间,让客户知道货物何时到达",
    ],
  },
  { type: "h2", text: "障碍二:令人疲惫的表单" },
  {
    type: "p",
    text: "每多一个字段,就多一个放弃的理由,在小小的手机屏幕上尤其如此。索取不必要数据的表单,例如出生日期或多个电话号码,会拉长流程,却没有给客户增加价值。请诚实地想一想:发货和开票这笔订单真正需要哪些信息?",
  },
  {
    type: "p",
    text: "也要考虑在购买前强制注册账号这件事。对新买家来说这是个大障碍,因为他们还不确定是否会重复购物。提供访客结账,并在订单完成后邀请他们注册账号,同时说明明确的好处,例如订单追踪和快速复购。对已有账号的客户,确保地址数据被保存并自动填入。",
  },
  {
    type: "ol",
    items: [
      "删除处理和发送订单并非绝对必需的字段",
      "允许访客结账,并在之后提供创建账号的选项",
      "在手机上使用地址自动填充和合适的键盘类型,例如电话号码使用数字键盘",
      "实时校验输入,并用易懂的语言在字段旁边说明错误",
      "显示步骤进度,让客户知道离完成还有多近",
      "出错时保留已输入的内容,避免客户不得不从头再来",
    ],
  },
  { type: "h2", text: "障碍三:支付选项不足" },
  {
    type: "p",
    text: "客户用自己熟悉的方式付款时最放心。如果他们喜欢的方式不可用,有些人会选择离开,而不是使用不太信任的替代方式。相关的选项因市场和客户类型而异,所以请从交易数据和客户向客服提出的问题中,观察你的客户通常使用什么。",
  },
  {
    type: "p",
    text: "在印度尼西亚,银行转账、数字钱包、QRIS、银行卡和门店付款等选项,往往是客户期待的组合。但不要不加考虑地尽可能多添加支付方式;每种方式都带来各自的成本、对账流程和管理复杂度。选择最相关的,然后确保流程顺畅。实体收银台的相关讨论,可阅读我们关于在收银台部署 QRIS 的文章。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    alt: "红色和黑色的购物袋排列在深色背景上",
    caption: "准备购买的客户不应在最后一步被迫等待或感到困惑。",
  },
  { type: "h2", text: "障碍四:缺乏信任" },
  {
    type: "p",
    text: "在支付步骤,客户要把敏感数据交给一家他们可能刚刚认识的商店。信任变得具有决定性。简单的标志影响很大:安全的网站地址、整洁专业的外观、清晰的联系信息和营业地址,以及易于找到和阅读的退货与配送政策。",
  },
  {
    type: "p",
    text: "来自以往买家的真实评价也有帮助,但必须是真实的。不要编造评价或展示无法证明的说法,因为客户越来越善于识别,而失去信任的代价远高于失去一笔交易。使用知名的支付服务商,并用简单的语言说明银行卡数据由该服务商处理。关于安全的基础知识,请参阅我们关于企业应用基础安全的文章。",
  },
  {
    type: "ul",
    items: [
      "从结账页面就能轻松访问的清晰退货、换货和配送政策",
      "真实的联系信息和响应迅速的客服,例如通过 WhatsApp",
      "知名的支付服务商,并附有关于数据安全的简短说明",
      "真实的评价和客户见证,不做编造",
      "客户点击支付按钮前,有清晰的订单摘要",
    ],
  },
  { type: "h2", text: "障碍五:页面缓慢与手机上的结账问题" },
  {
    type: "p",
    text: "大多数网购者通过手机购买,而且网络往往不完美。加载缓慢的结账页面、过小的按钮,或在触摸屏上不便填写的表单,都会让人放弃。请在真实的手机上测试你自己的结账流程,包括在网速慢的情况下,并留意你自己在哪里感到沮丧。",
  },
  {
    type: "p",
    text: "速度也关系到稳定性:如果付款中途断网会怎样?客户知道订单是否成功吗?清晰的确认信息,无论是在屏幕上还是通过消息或邮件,能防止客户重复付款或焦虑地联系客服。关于速度影响的进一步讨论,见我们关于网站速度及其影响的文章。",
  },
  { type: "h2", text: "召回已经离开的客户" },
  {
    type: "p",
    text: "一部分被放弃的购物车可以通过礼貌的提醒挽回。如果客户已提供邮箱或联系电话并同意被联系,你可以发送提醒,告知其购物车仍在等待。最好的提醒是帮助而不是施压:说明商品仍有货,有疑问时提供帮助,不要用重复的信息轰炸。",
  },
  {
    type: "p",
    text: "谨慎使用折扣等激励手段。如果每位客户都学会放弃购物车就能得到折扣码,有些人会故意这样做,你的利润就会被侵蚀。先从不含折扣的提醒开始,衡量结果,只有在证明确有必要且仍有利可图时才提供激励。在保存和联系客户时,也要尊重隐私偏好和适用的数据保护规则。",
  },
  { type: "h2", text: "有衡量地改进" },
  {
    type: "p",
    text: "找到可能的障碍后,不要一次改动所有东西。一次改一件事并比较结果,这样你才知道哪项改动真正起了作用。如果你的网店流量足够,可以对不同组的访客测试页面的两个版本。如果流量较小,则在考虑季节性因素和促销的前提下,比较改动前后的时期。",
  },
  {
    type: "ol",
    items: [
      "梳理购物流程的每个步骤,并记录每一步还剩多少人",
      "找出下降最大的步骤,通过自己测试、客户反馈和(如有)会话录像调查原因",
      "确定一项修复,实施它,并记录改动日期",
      "在经过足够时间收集到有意义的数据后再次衡量",
      "保留有效的,撤销无效的,然后转向下一个障碍",
    ],
  },
  {
    type: "callout",
    title: "记住真正的目标",
    text: "改进结账的目标不是逼人购买,而是去除阻碍真正想买的人的因素。诚实、清晰、舒适的流程能培养回头客,而不只是一次性的销售。",
  },
  { type: "h2", text: "幕后系统的作用" },
  {
    type: "p",
    text: "顺畅的结账体验取决于其背后的系统。库存必须准确,客户才不会为实际已售罄的商品付款。运费必须自动且正确地计算。付款状态必须被可靠地接收和记录,订单必须无需重复录入就进入运营系统。当网店与你的 POS、库存和会计系统相连时,从点击购买到货物到达的整个流程会更加有序。",
  },
  {
    type: "p",
    text: "所以,结账的改进有时不止于外观,而是涉及与支付、快递和运营系统的集成。这时就该考虑按你业务流程设计的网店,而不仅是默认模板。关于不同方式的比较,也请阅读我们关于自建网店还是电商平台的文章。",
  },
  {
    "type": "h2",
    "text": "上线前的结账检查清单"
  },
  {
    "type": "p",
    "text": "在上线网店或更改结账流程之前,请逐项过一遍下面的清单。以真实客户的身份去试,最好用手机,并请团队以外的一两个人在没有你帮助的情况下试用。让他们犹豫的地方,是关于需要修复什么的最诚实的线索。"
  },
  {
    "type": "ol",
    "items": [
      "在客户填写个人资料之前,包括运费和其他费用在内的总费用是否清晰可见?",
      "客户能否不注册账号就购买,并且是否在订单完成后才提供注册选项?",
      "表单是否只索取真正需要的数据,并在手机上使用合适的键盘类型?",
      "错误信息是否解释了问题并说明如何修正,同时不会清除已经正确的输入?",
      "你的客户最常用的支付方式是否可用且运行顺畅?",
      "退货政策、配送政策和客服联系方式是否能从结账页面轻松找到?",
      "在点击支付按钮之前,是否有清晰的订单摘要,包括图片、数量、价格和预计到达时间?",
      "页面在普通网络的手机上是否加载迅速,按钮是否大到便于触摸?",
      "客户付款后是否收到清晰的确认,包括屏幕上以及通过消息或邮件?",
      "下单的那一刻是否检查了库存,以免卖出已售罄的商品?",
      "进来的订单是否直接进入运营系统而无需重复录入?",
      "是否有办法记录并查看客户在哪一步停下?"
    ]
  },
  {
    "type": "p",
    "text": "请保存这份清单,并在网店发生重大变化、新增支付方式或更换快递时重复使用。结账流程是网店中最常因别处的小改动而悄悄出问题的部分,例行检查能在客户发现之前抓住问题。"
  },
  {
    "type": "h2",
    "text": "根据你的网店类型调整"
  },
  {
    "type": "p",
    "text": "影响最大的障碍因网店类型而异。对于商品价值低、冲动消费的网店,速度和便捷(如访客结账和一键支付)通常最具决定性。对于商品价值高的网店,客户更为谨慎,因此信任、退货政策的清晰度以及能快速联系客服,比单纯的速度更重要。"
  },
  {
    "type": "p",
    "text": "对于销售笨重或大件商品的网店,运费往往是最大的障碍,所以费用透明和快递选择值得优先处理。对于销售定制商品或生鲜食品的网店,制作和配送时间的信息必须非常清楚,以免产生失望。对于有回头客的网店,保存地址和偏好,并提供快速复购,让下一次购买几乎没有阻力。"
  },
  {
    "type": "p",
    "text": "所以不要只是模仿别的网店。研究你自己客户的行为,从购物流程各阶段的数据、进入客服的问题,到他们撰写的评价。最合适的改进往往来自倾听反复出现的抱怨,而不是一份通用建议的清单。"
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "购物车放弃不会完全消失,但大多数可以避免的原因都在你能控制的流程里:透明的费用、简洁的表单、熟悉的支付方式、建立起来的信任以及快速的页面。了解你的数据,一次修复一个障碍,并衡量结果。结账上的每一个小改进,都是一笔原本差一点发生、如今真正完成的交易。",
  },
  {
    type: "cta",
    title: "想要结账顺畅的网店?",
    text: "AG·SORA 团队构建快速、与你的支付和运营系统相连、并以促成交易为目标而设计的网店。咨询完全免费,无需任何承诺。",
    href: "/services/website",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
