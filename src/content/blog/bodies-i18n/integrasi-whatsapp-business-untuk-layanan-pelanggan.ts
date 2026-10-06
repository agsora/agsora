import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "In Indonesia, WhatsApp is the most natural communication channel between a business and its customers. People ask about prices, check order status, request quotes, and even file complaints through WhatsApp, because the app is already on their phone and feels more familiar than email or a website form. For many businesses, WhatsApp has simply become the main entry point for sales.",
  },
  {
    type: "p",
    text: "The trouble starts when message volume grows. One phone number is held by one or two people, messages pile up outside working hours, conversation history lives on employees' personal devices, and nobody knows exactly how many prospects are still waiting for a reply. When that employee resigns, the entire customer history leaves with their phone. This is the point where businesses begin asking about integrating WhatsApp Business into a more structured system.",
  },
  {
    type: "p",
    text: "This article covers the difference between the regular WhatsApp Business app and the WhatsApp Business Platform (API), what can be integrated with a website, app, CRM, or ERP, how to design a service flow that doesn't feel like a robot, and what to watch for on policy and data security. The goal is to help you decide whether integration is needed yet and, if so, how to start with sensible steps.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "The regular WhatsApp Business app suits small businesses with one or two people replying; the API is needed once you have many agents, system integrations, or automation",
      "Integration delivers the most value when conversations connect to customer, order, and stock data, not merely when it sends automatic replies",
      "Automation should handle repetitive questions, while complex cases are still passed to a human with full context",
      "WhatsApp's policies govern customer consent and which message types may be sent; always check the latest rules before designing a flow",
      "Start with one clear flow, measure the results, then add more gradually",
    ],
  },
  { type: "h2", text: "The regular WhatsApp Business app versus the WhatsApp Business Platform" },
  {
    type: "p",
    text: "There are two ways to use WhatsApp for business, and they are often confused. The first is the WhatsApp Business app you download to a phone. It is free, easy to use, and provides basic features such as a business profile, a simple catalog, conversation labels, and automatic messages for greetings and out-of-hours replies. For a small business with one or two people answering, this is often enough.",
  },
  {
    type: "p",
    text: "The second is the WhatsApp Business Platform, often called the API. Unlike the app, the platform has no conversation interface of its own. It is connected to other software, such as a shared team inbox, a CRM, a ticketing system, or an app you build yourself. This way many agents can serve the same number at once, conversations can be logged to customer records, and certain messages can be sent automatically from your system, such as order confirmations or appointment reminders.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    alt: "A smartphone showing a home screen with various communication app icons",
    caption: "Customers are already comfortable on WhatsApp; the challenge is managing those conversations neatly on the business side.",
  },
  {
    type: "p",
    text: "Access to the platform is usually through an official provider or directly through Meta, and there are pricing terms and business verification requirements. Because pricing schemes and rules can change, we don't list figures here; check the official documentation or ask the provider you choose before calculating a budget.",
  },
  { type: "h2", text: "Signs your business needs integration" },
  {
    type: "p",
    text: "Not every business needs to jump straight to the API. The signs below suggest your current way of working is starting to hold you back.",
  },
  {
    type: "ul",
    items: [
      "More than two people reply to customers and duplicate replies or missed messages happen often",
      "Customers have to repeat the same story every time the person answering changes",
      "The sales team can't see the status of a prospect's conversation without asking around",
      "Order confirmations, payment reminders, or shipping notifications are still typed manually",
      "Important conversation history is stored on employees' personal phones",
      "The owner can't see how many messages come in, how many are answered, and what the average response time is",
    ],
  },
  {
    type: "p",
    text: "If two or three of these feel familiar, integration will most likely make a real difference. If none do, tidy up the process in the regular app first; automating a messy process only makes the mess run faster.",
  },
  { type: "h2", text: "What can be integrated" },
  {
    type: "h3",
    text: "A shared inbox for the team",
  },
  {
    type: "p",
    text: "The most basic foundation is a single inbox that several agents can open. Each conversation can be assigned to a specific person, labeled, and its history reviewed. Owners can monitor workload and response time. This step alone makes a big difference for many businesses: no more messages left hanging because everyone assumed someone else had already replied.",
  },
  {
    type: "h3",
    text: "Customer data and CRM",
  },
  {
    type: "p",
    text: "When a customer's WhatsApp number is matched to CRM data, the agent immediately sees who is talking: purchase history, orders in progress, notes from the sales team, and payment status. A new conversation from an unknown number can automatically create a new prospect with its source. This answers the classic problem of customer data scattered across many phones and notebooks.",
  },
  {
    type: "h3",
    text: "Orders, stock, and payments",
  },
  {
    type: "p",
    text: "Integration with the order system lets customers ask about order status and receive answers from real data rather than an employee's memory. Notifications such as order received, being packed, and shipped can be sent automatically when the status changes in the system. For businesses that collect payments, polite and timely billing reminders often reduce late receivables without adding work for the finance team.",
  },
  {
    type: "h3",
    text: "Websites and apps",
  },
  {
    type: "p",
    text: "A WhatsApp button on a website can be made smarter: it can carry the context of the page the visitor is viewing, such as the product or service they're interested in, so the agent doesn't have to ask from scratch. In a mobile app the same applies to customer support: the user taps a help button and a conversation opens with the relevant account data already attached. Website visitors whose source was hard to trace can also be linked to the campaign that brought them.",
  },
  { type: "h2", text: "Designing conversation flows that don't feel like a robot" },
  {
    type: "p",
    text: "WhatsApp automation often fails not because of the technology but because of the conversation design. A customer trapped in a multi-level menu with no way out quickly gets frustrated and moves to another channel. The principles below help keep the experience human.",
  },
  {
    type: "ol",
    items: [
      "Identify the most frequent questions first, such as opening hours, order status, basic prices, or payment methods. Automate only these at the beginning",
      "Always provide a clear way out to a human, for example by replying with a specific word or pressing one button",
      "Pass the conversation to the agent together with a summary: who the customer is, what they have asked, and what the system has already answered",
      "Use the same language your team uses day to day; an overly stiff tone feels foreign",
      "Limit the length of automatic messages and avoid sending many consecutive messages at once",
      "Tell customers when they can expect a human reply, especially outside working hours",
    ],
  },
  {
    type: "callout",
    title: "Automation is not a substitute for empathy",
    text: "Automatic answers suit definite, repetitive information. Complaints, price negotiation, and sensitive situations are still best handled by people. Design the system to recognize keywords such as complaint or refund and forward them straight to the right person.",
  },
  { type: "h2", text: "Policy, consent, and data privacy" },
  {
    type: "p",
    text: "Unlike personal messaging, the WhatsApp Business Platform has fairly strict rules about who may be messaged and what kinds of messages may be sent. In general, a business needs customer consent before sending business-initiated messages, and messages outside an active conversation window usually have to use a pre-approved template. Violations can lead to restrictions or a blocked number, which would be very disruptive if that number is your main sales channel.",
  },
  {
    type: "p",
    text: "Because these policies can change, don't design a flow from memory or an old article. Read the latest official documentation, and make sure the provider you choose helps track rule changes. On the customer side, offer an easy way to stop receiving messages and honor that request consistently.",
  },
  {
    type: "p",
    text: "On the data side, WhatsApp conversations contain customers' personal information: names, phone numbers, addresses, sometimes documents. Once conversations are connected to your systems, that data becomes the business's responsibility. Make sure inbox access is limited by role, access trails are recorded, data is stored encrypted, and there is a clear retention policy for how long history is kept. For businesses handling large volumes of personal data, also review the applicable personal data protection obligations and consult legal counsel.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
    alt: "A smartphone displaying a security lock icon on a wooden desk",
    caption: "Customer conversations are often scattered across many devices; integration brings them together in one controlled place.",
  },
  { type: "h2", text: "Steps to start integrating gradually" },
  {
    type: "p",
    text: "As with any systems project, WhatsApp integration works best when it starts small and measurable. The following order usually makes sense.",
  },
  {
    type: "h3",
    text: "Stage 1: tidy up what exists",
  },
  {
    type: "p",
    text: "Before touching technology, map how WhatsApp conversations flow today. Who answers, what kinds of questions come up most, where messages often get missed, and what information an agent needs to see when replying. Document the 10 to 20 most common questions along with their best answers. This simple document becomes the raw material for all later automation.",
  },
  {
    type: "h3",
    text: "Stage 2: shared inbox and customer records",
  },
  {
    type: "p",
    text: "Move the number to a platform with a shared inbox, connect it to customer data, and train the team to use labels and assignment. At this stage there is no message automation at all. The goal is to get the team used to a new workspace and give the owner their first visibility into volume and response time.",
  },
  {
    type: "h3",
    text: "Stage 3: automation for the definite",
  },
  {
    type: "p",
    text: "Once the team is comfortable, add a welcome message, answers to repetitive questions, and transaction notifications triggered by status changes in the system. Start with one or two flows, such as order confirmation and appointment reminders, then watch how customers respond before adding more.",
  },
  {
    type: "h3",
    text: "Stage 4: measure and refine",
  },
  {
    type: "p",
    text: "Track simple, relevant metrics: first response time, the number of conversations handed to humans, questions that automation couldn't answer, and customer feedback. Use that data to refine answers and add new topics. Don't chase the highest possible automation percentage; a healthier measure of success is that customers are helped faster and the team has more time for cases that truly need attention.",
  },
  { type: "h2", text: "Common mistakes" },
  {
    type: "ul",
    items: [
      "Sending bulk messages without clear consent, so the number gets reported and restricted",
      "Building an automatic menu that is too long and offers no way out to a human",
      "Integrating WhatsApp without cleaning customer data first, so agents see duplicate or outdated records",
      "Not deciding who is responsible for conversations outside working hours",
      "Giving every employee access to the entire conversation history without role restrictions",
      "Treating the project as finished at launch, when automatic answers need updating as products, prices, and policies change",
    ],
  },
  { type: "h2", text: "Measuring the impact on the business" },
  {
    type: "p",
    text: "Without measurement, it's hard to prove that integration was worth its cost. Set a few indicators before starting, then compare after several months. Useful indicators include average first response time, the number of unanswered prospects, the number of conversations that turned into orders, and the time the team spends answering repetitive questions. Also watch qualitative indicators such as customer comments and the workload the team feels.",
  },
  {
    type: "p",
    text: "Avoid comparing against industry figures of unclear origin. Compare your business with itself before and after integration; that is the most honest and most useful comparison for your next decision.",
  },
  { type: "h2", text: "Conclusion" },
  {
    type: "p",
    text: "WhatsApp doesn't need to be replaced with another channel; your customers are already there. What needs improving is how the business manages those conversations: connected to customer data, shared fairly across the team, helped by automation for repetitive things, and still guarded by humans for the important ones. Start from the process you already have, tidy it up, then integrate step by step with clear measures of success.",
  },
  {
    type: "cta",
    title: "Want to connect WhatsApp to your business systems?",
    text: "The AG·SORA team can help design a WhatsApp integration with your website, CRM, or app, from conversation flows to data security. The consultation is free, no commitment required.",
    href: "/services/custom-software",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "在印度尼西亚,WhatsApp 是企业与客户之间最自然的沟通渠道。人们通过 WhatsApp 询价、查询订单状态、索取报价,甚至提出投诉,因为这个应用本来就在他们的手机里,比电子邮件或网站表单更让人觉得亲切。对许多企业来说,WhatsApp 已经成为销售的主要入口。",
  },
  {
    type: "p",
    text: "问题出现在消息量增长之后。一个手机号码由一两个人掌管,下班后消息不断堆积,对话记录保存在员工的个人设备上,没有人确切知道还有多少潜在客户没有得到回复。当这位员工离职时,整个客户历史也随着他的手机一起离开。正是在这个时候,企业开始询问如何把 WhatsApp Business 整合到更有结构的系统中。",
  },
  {
    type: "p",
    text: "本文介绍普通 WhatsApp Business 应用与 WhatsApp Business Platform(API)的区别、可以与网站、应用、CRM 或 ERP 整合的内容、如何设计不像机器人的服务流程,以及在政策和数据安全方面需要注意的事项。目的是帮助你判断现在是否需要整合,如果需要,如何用合理的步骤开始。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "普通的 WhatsApp Business 应用适合只有一两个人回复的小型企业;当有多位客服、需要系统整合或自动化时,就需要 API",
      "当对话与客户、订单和库存数据相连时,整合的价值最大,而不只是自动回复",
      "自动化应处理重复性问题,复杂的情况仍应带着完整背景转交给人工处理",
      "WhatsApp 的政策规定了客户同意以及可以发送的消息类型;设计流程前务必查看最新规则",
      "从一个清晰的流程开始,衡量效果,再逐步增加",
    ],
  },
  { type: "h2", text: "普通 WhatsApp Business 应用与 WhatsApp Business Platform" },
  {
    type: "p",
    text: "将 WhatsApp 用于商业有两种方式,而且常常被混淆。第一种是下载到手机上的 WhatsApp Business 应用。它免费、易用,提供企业资料、简单目录、对话标签,以及问候语和非工作时间的自动消息等基础功能。对于只有一两个人回复的小企业,这通常已经足够。",
  },
  {
    type: "p",
    text: "第二种是 WhatsApp Business Platform,通常称为 API。与应用不同,该平台本身没有对话界面。它需要连接到其他软件,例如团队共享收件箱、CRM、工单系统或你自己开发的应用。这样,多位客服可以同时服务同一个号码,对话可以记录到客户资料中,系统还可以自动发送特定消息,例如订单确认或预约提醒。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    alt: "智能手机主屏幕上显示各种通讯应用图标",
    caption: "客户早已习惯使用 WhatsApp;挑战在于企业一方如何有条理地管理这些对话。",
  },
  {
    type: "p",
    text: "使用该平台通常通过官方服务商或直接通过 Meta,并有相应的费用条款和企业验证要求。由于价格方案和规则可能变化,我们在此不列出具体数字;计算预算之前,请查看官方文档或咨询你选择的服务商。",
  },
  { type: "h2", text: "你的企业需要整合的迹象" },
  {
    type: "p",
    text: "并不是每家企业都要直接跳到 API。以下迹象表明目前的工作方式已经开始成为阻碍。",
  },
  {
    type: "ul",
    items: [
      "回复客户的人超过两个,经常出现重复回复或遗漏消息",
      "每次换人回复,客户都得重复同样的经过",
      "销售团队不逐个询问就无法了解与潜在客户的对话状态",
      "订单确认、付款提醒或发货通知仍然靠手动输入",
      "重要的对话记录保存在员工的个人手机上",
      "负责人看不到收到多少消息、回复了多少,以及平均响应时间是多少",
    ],
  },
  {
    type: "p",
    text: "如果其中两三条让你感到熟悉,整合很可能带来实实在在的改变。如果一条都没有,最好先在普通应用中理顺流程;把混乱的流程自动化,只会让混乱运行得更快。",
  },
  { type: "h2", text: "可以整合哪些内容" },
  {
    type: "h3",
    text: "团队共享收件箱",
  },
  {
    type: "p",
    text: "最基础的是一个可由多位客服打开的共享收件箱。每个对话都可以分配给特定的人、打上标签并查看历史。负责人可以监控工作量和响应时间。仅这一步就让许多企业感受到巨大差别:不会再因为每个人都以为别人已经回复而让消息悬而未决。",
  },
  {
    type: "h3",
    text: "客户数据与 CRM",
  },
  {
    type: "p",
    text: "当客户的 WhatsApp 号码与 CRM 数据匹配后,客服可以立刻看到对方是谁:购买记录、进行中的订单、销售团队的备注和付款状态。来自陌生号码的新对话可以自动创建带有来源的新潜在客户。这解决了客户数据分散在众多手机和笔记本里的经典问题。",
  },
  {
    type: "h3",
    text: "订单、库存与付款",
  },
  {
    type: "p",
    text: "与订单系统整合后,客户可以查询订单状态,并从真实数据而不是员工的记忆中得到答复。订单已接收、正在打包、已发货等通知,可以在系统中状态变化时自动发送。对于需要收款的企业,礼貌而及时的账单提醒,往往能在不增加财务团队工作量的情况下减少逾期应收款。",
  },
  {
    type: "h3",
    text: "网站与应用",
  },
  {
    type: "p",
    text: "网站上的 WhatsApp 按钮可以更智能:带上访客正在浏览的页面背景,比如他们感兴趣的产品或服务,这样客服不必从头询问。在移动应用中,客户支持同样如此:用户点击帮助按钮,对话随即打开,并附带相关的账户数据。来源难以追踪的网站访客,也可以与带他们来的营销活动关联起来。",
  },
  { type: "h2", text: "设计不像机器人的对话流程" },
  {
    type: "p",
    text: "WhatsApp 自动化常常失败,原因往往不是技术,而是对话设计。被困在多层菜单里又无路可退的客户很快就会沮丧,转而选择其他渠道。以下原则有助于保持体验的人情味。",
  },
  {
    type: "ol",
    items: [
      "先找出最常见的问题,例如营业时间、订单状态、基础价格或付款方式。一开始只把这些自动化",
      "始终提供明确的转人工出口,例如回复某个特定词语或点击一个按钮",
      "把对话连同摘要一起转给客服:客户是谁、问过什么、系统已经回答了什么",
      "使用团队日常使用的语言;过于生硬的语气会显得陌生",
      "限制自动消息的长度,避免一次连发多条消息",
      "告诉客户何时可以期待人工回复,尤其是在非工作时间",
    ],
  },
  {
    type: "callout",
    title: "自动化不能取代同理心",
    text: "自动回复适合确定且重复的信息。投诉、价格谈判和敏感情形仍最好由人来处理。请设计系统识别投诉或退款等关键词,并直接转给合适的人。",
  },
  { type: "h2", text: "政策、同意与数据隐私" },
  {
    type: "p",
    text: "与个人通讯不同,WhatsApp Business Platform 对可以向谁发送消息以及可以发送哪些类型的消息有相当严格的规定。总体而言,企业在主动发送消息之前需要获得客户同意,而在活跃对话窗口之外发送的消息通常必须使用事先获批的模板。违规可能导致限制或号码被封,如果该号码是你的主要销售渠道,这将造成严重干扰。",
  },
  {
    type: "p",
    text: "由于这些政策可能变化,不要仅凭记忆或旧文章来设计流程。请阅读最新的官方文档,并确保你选择的服务商能协助跟踪规则变化。在客户一侧,要提供便捷的退订方式,并始终如一地尊重这一请求。",
  },
  {
    type: "p",
    text: "在数据方面,WhatsApp 对话包含客户的个人信息:姓名、电话号码、地址,有时还有文件。一旦对话与你的系统相连,这些数据就成为企业的责任。请确保按角色限制收件箱访问权限、记录访问轨迹、加密存储数据,并有明确的历史记录保留期限政策。对于处理大量个人数据的企业,还应查阅适用的个人数据保护义务并咨询法律顾问。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
    alt: "木桌上显示安全锁图标的智能手机",
    caption: "客户对话常常分散在多台设备上;整合后可以把它们汇集到一个受控的地方。",
  },
  { type: "h2", text: "逐步开始整合的步骤" },
  {
    type: "p",
    text: "和其他系统项目一样,WhatsApp 整合从小处着手、可衡量时效果最好。以下顺序通常比较合理。",
  },
  {
    type: "h3",
    text: "第 1 阶段:理顺现有流程",
  },
  {
    type: "p",
    text: "在接触技术之前,先梳理 WhatsApp 对话目前是如何流转的。谁在回复、最常出现哪类问题、消息经常在哪里被遗漏,以及客服回复时需要看到哪些信息。记录 10 到 20 个最常见的问题及其最佳答案。这份简单的文档将成为之后所有自动化的原材料。",
  },
  {
    type: "h3",
    text: "第 2 阶段:共享收件箱与客户记录",
  },
  {
    type: "p",
    text: "把号码迁移到带有共享收件箱的平台,连接客户数据,并培训团队使用标签和分配功能。这一阶段完全不做消息自动化。目标是让团队习惯新的工作场所,并让负责人第一次看清消息量和响应时间。",
  },
  {
    type: "h3",
    text: "第 3 阶段:对确定的内容做自动化",
  },
  {
    type: "p",
    text: "团队适应之后,加入欢迎消息、重复性问题的回答,以及由系统状态变化触发的交易通知。从一两个流程开始,例如订单确认和预约提醒,观察客户的反应后再增加其他流程。",
  },
  {
    type: "h3",
    text: "第 4 阶段:衡量并改进",
  },
  {
    type: "p",
    text: "跟踪简单而相关的指标:首次响应时间、转交人工的对话数量、自动化无法回答的问题以及客户反馈。利用这些数据改进答案并增加新主题。不要追求尽可能高的自动化比例;更健康的成功标准是客户更快得到帮助,团队有更多时间处理真正需要关注的案例。",
  },
  { type: "h2", text: "常见错误" },
  {
    type: "ul",
    items: [
      "在没有明确同意的情况下群发消息,导致号码被举报并受到限制",
      "构建过长的自动菜单,且没有提供转人工的出口",
      "在没有先清理客户数据的情况下整合 WhatsApp,导致客服看到重复或过时的资料",
      "没有明确谁负责非工作时间的对话",
      "不按角色限制,让所有员工都能访问完整的对话历史",
      "以为上线就算项目结束,而自动回答需要随着产品、价格和政策的变化而更新",
    ],
  },
  { type: "h2", text: "衡量对业务的影响" },
  {
    type: "p",
    text: "没有衡量,就很难证明整合物有所值。开始之前先设定几个指标,几个月后再进行比较。有用的指标包括平均首次响应时间、未回复的潜在客户数量、成功转化为订单的对话数量,以及团队花在回答重复性问题上的时间。同时也要关注定性指标,例如客户评价和团队感受到的工作负担。",
  },
  {
    type: "p",
    text: "避免与来源不明的行业数字作比较。把你的企业与整合前后的自己比较;这是最诚实、也对下一步决策最有用的比较。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "WhatsApp 不需要被其他渠道取代;你的客户就在那里。需要改进的是企业管理这些对话的方式:与客户数据相连、在团队中合理分配、由自动化处理重复性的事务,同时仍由人来把关重要的事情。从你已有的流程出发,先理顺,再一步一步整合,并设定清晰的成功衡量标准。",
  },
  {
    type: "cta",
    title: "想把 WhatsApp 连接到你的业务系统吗?",
    text: "AG·SORA 团队可以帮助设计 WhatsApp 与你的网站、CRM 或应用的整合,从对话流程到数据安全。咨询完全免费,无需任何承诺。",
    href: "/services/custom-software",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
