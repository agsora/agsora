import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "Many businesses treat building a mobile app as finished the moment it appears in the app store. In reality, launch is the starting line. Customers download the app, open it once or twice, and then the icon sinks among dozens of others on their phones. The real challenge isn't getting people to download; it's giving them a reason to come back.",
  },
  {
    type: "p",
    text: "One of the most commonly used tools for bringing users back is the push notification. It is very powerful, and also very easy to misuse. A timely, relevant notification feels like good service. An excessive, irrelevant one feels like an interruption, and as a result users switch off notification permission or even delete the app.",
  },
  {
    type: "p",
    text: "This article covers how push notifications and other retention strategies are designed sensibly for a business mobile app. We'll look at the types of notifications that help, how to ask for permission properly, the importance of segmentation and timing, and how to measure whether all this effort really works. The discussion is practical and uses no invented numbers; what we use is reasoning you can test against your own business data.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "User retention comes from real value inside the app; notifications only remind, they don't replace a reason to return",
      "Transactional notifications (order status, payment, appointments) are almost always welcome; promotional ones must be limited and personalized",
      "Ask for notification permission at a relevant moment, with an explanation of the benefit, not immediately when the app first opens",
      "Segmentation and reasonable frequency matter more than the number of notifications sent",
      "Measure not only how many notifications are opened, but whether user behavior becomes more valuable",
    ],
  },
  { type: "h2", text: "Why many apps are abandoned after download" },
  {
    type: "p",
    text: "Downloading an app is a cheap decision for users, but keeping it on the phone requires a stronger reason. Everyone's phone is full, storage is limited, and attention is split many ways. An app that doesn't give clear value in the first few days gets forgotten, and most users don't feel the need to actively delete it; they simply stop opening it.",
  },
  {
    type: "p",
    text: "The most common cause isn't a lack of notifications, but an app that doesn't solve a real problem better than its alternatives. If customers can order through WhatsApp just as comfortably, they have no strong reason to open your app. So before thinking about notifications, make sure the app offers something other channels can't easily give: a neat order history, visible loyalty points, one-tap reordering, or accurate status tracking.",
  },
  {
    type: "p",
    text: "The experience of the first few days decides a lot. Users who complete one meaningful action, such as a first order or a fully finished account setup, are far more likely to return than those who stop at an introduction screen. Designing a short, clear opening flow that delivers a result right away is the cheapest form of retention, and often the most effective.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    alt: "A hand holding a phone showing a home screen full of app icons",
    caption: "Customers' phones are full of apps; the ones that stay are those that give real value, not the ones that buzz most often.",
  },
  { type: "h2", text: "Understanding notification types and when each fits" },
  {
    type: "p",
    text: "Not all notifications are equally valuable to users. The most useful way to organize them is to group them by purpose. With grouping, you can set different frequency and permission rules for each group, and give users fine-grained control instead of an all-or-nothing choice.",
  },
  { type: "h3", text: "Transactional notifications" },
  {
    type: "p",
    text: "These are triggered by the user's own action or by a status change in something they're waiting for: order confirmed, item shipped, payment received, appointment tomorrow, verification code. Users usually expect and appreciate them, because the information is immediately useful. This group is almost never seen as disruptive as long as the content is accurate and timely.",
  },
  { type: "h3", text: "Reminder notifications" },
  {
    type: "p",
    text: "Reminders help users finish something they've already started or need: an unpaid cart, a service appointment about to fall due, a voucher about to expire, or a subscription product that may be running low. The key is precision. A reminder that arrives when the user still needs it feels helpful; one that repeats for something already done feels like being followed.",
  },
  { type: "h3", text: "Promotional and content notifications" },
  {
    type: "p",
    text: "This is the riskiest group. Special offers, new products, or educational content can be valuable if they match the user's interests, but quickly become a nuisance if sent to everyone indiscriminately. This group should have limited frequency, be personalized based on real behavior, and have its own settings so users can turn it off without losing transactional notifications.",
  },
  { type: "h2", text: "Asking for notification permission the right way" },
  {
    type: "p",
    text: "On modern phone operating systems, users must grant permission before an app can send notifications, and in many cases the chance to ask for that system permission is quite limited. If the user declines the first request, asking again can be hard or require them to go into the phone's settings themselves. That means the permission request is a valuable moment that must not be wasted.",
  },
  {
    type: "p",
    text: "A common mistake is showing the permission request immediately when the app is first opened, when the user doesn't yet know the app's benefit. A healthier approach is to wait for a relevant moment. For example, after the user places a first order, show a short explanation such as we can let you know when your order ships, and only then ask for system permission. This custom explanation screen also works as a filter: if the user declines it, you haven't used up your chance to ask for the system permission.",
  },
  {
    type: "ul",
    items: [
      "Explain the concrete benefit to the user before showing the system permission request",
      "Ask for permission at a moment when notifications make sense, such as after the first order",
      "Provide in-app settings to choose which notification categories are wanted",
      "Respect refusal; don't keep showing the same request repeatedly",
      "Still provide an alternative path, such as email or in-app messages, for those who don't enable notifications",
    ],
  },
  { type: "h2", text: "Segmentation: sending the right thing to the right person" },
  {
    type: "p",
    text: "Segmentation means dividing users into groups based on something relevant, then adapting the message for each group. Segmentation doesn't have to be complicated. Simple splits such as new versus returning customers, those who bought a certain category, those who haven't transacted within a certain period, or those in a certain area already make messages far more relevant than one message for everyone.",
  },
  {
    type: "p",
    text: "A real example: a coffee shop doesn't need to send a breakfast menu promo to customers who always come in the afternoon. A baby supplies store doesn't need to notify customers who only buy kitchen items. With purchase history stored neatly in the system, adjustments like these can be automated. That is one reason a mobile app should connect to your POS or CRM system rather than stand alone as a separate silo.",
  },
  {
    type: "p",
    text: "Personalization also needs to be wise. Messages that show too clearly that you know a lot about the user can feel uncomfortable. Use data that is reasonable to use in serving them, explain in your privacy policy what is collected, and make it easy for users to manage their preferences.",
  },
  { type: "h2", text: "Timing and frequency: less is often better" },
  {
    type: "p",
    text: "When a notification is sent matters as much as what it says. A promotional notification arriving in the middle of the night or during a busy work period is likely to be ignored or annoy. Use the user's time zone, avoid rest hours, and where possible learn from the data when your users are usually active in the app and send close to those times.",
  },
  {
    type: "p",
    text: "Frequency needs clear limits. Set a maximum number of promotional notifications per week, and create rules so several campaigns don't pile onto the same user at the same time. Without these limits, every internal team, such as marketing, sales, and operations, will feel its message is the most important, and users bear the consequences.",
  },
  {
    type: "callout",
    title: "One simple rule",
    text: "Before sending a notification, ask: will the recipient feel helped by reading it? If you're unsure, hold off or narrow the audience. One useful notification builds trust; ten useless ones erase it.",
  },
  { type: "h2", text: "Retention isn't only about notifications" },
  {
    type: "p",
    text: "Notifications are just one of several retention levers. Other levers are often more influential in the long run. First, the speed and reliability of the app: a slow or frequently failing app makes users reluctant to return, however appealing the message inviting them. Second, how easily the main task is completed; every extra step in the ordering or payment flow reduces the chance of finishing.",
  },
  {
    type: "p",
    text: "Third, value that accumulates with use. Order history, saved addresses, favorites lists, and loyalty points make the app more useful the longer it's used, and make switching to an alternative feel like a loss. Fourth, the feeling of being recognized: the right greeting, sensible recommendations, and fast service when the user contacts support make the experience feel personal rather than mass-produced.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1576153192396-180ecef2a715",
    alt: "A hand drawing a wireframe sketch of several app screens on paper",
    caption: "Retention is designed from the first sketch: a short flow, clear value, and a real reason to return.",
  },
  { type: "h2", text: "In-app messages as a complement" },
  {
    type: "p",
    text: "Besides push notifications that appear on the lock screen, an app can show in-app messages: banners, information cards, or a small inbox read once the user has already opened the app. This kind of message needs no special permission and doesn't interrupt, so it suits non-urgent information such as new features, usage tips, or seasonal offers.",
  },
  {
    type: "p",
    text: "The division of labor is simple: use push notifications for time-sensitive, high-value things, and use in-app messages for everything else. That way you keep the push channel valuable and don't drain users' patience.",
  },
  { type: "h2", text: "Technical things to prepare" },
  {
    type: "p",
    text: "Technically, push notifications need several components. The app has to register the device with the platform's notification service, your server has to store that device token and link it to the user's account, and there is logic that decides when and to whom a notification is sent. Because tokens can change or expire, the system needs to handle refreshing and cleaning up tokens that are no longer valid.",
  },
  {
    type: "ul",
    items: [
      "Device token storage linked to accounts, including handling of expired tokens",
      "Per-user preference settings for notification categories and quiet hours",
      "A sending queue so campaign spikes don't overload the server",
      "Logging of every notification sent, opened, and leading to an action",
      "Frequency-limit settings that can be changed without re-releasing the app",
      "Testing across operating system versions, since notification behavior can differ between devices",
    ],
  },
  {
    type: "p",
    text: "Also remember that sending notifications involves users' personal data. Make sure notification content doesn't show sensitive information on the lock screen, and manage token and preference data with the same principles as other customer data. For basic security guidance, see our discussion of business application security.",
  },
  { type: "h2", text: "Measuring whether your retention strategy works" },
  {
    type: "p",
    text: "Many teams stop at easy-to-see measures such as how many notifications were sent or opened. These numbers are useful but not enough. A frequently opened notification doesn't necessarily lead users to do something valuable, and may even draw openings out of curiosity followed by disappointment. A more meaningful measure is behavior change: did users complete a purchase, reorder, or become active again after a period of absence?",
  },
  {
    type: "p",
    text: "Also watch negative signals. How many users turned off notification permission after a particular campaign? How many deleted the app? These signals are often more honest than open numbers. Where possible, compare the group that received notifications with a similar group that didn't, so you can see the real effect, not just seasonal coincidence.",
  },
  {
    type: "ol",
    items: [
      "Define one clear behavioral goal for each type of notification, such as completing a payment or reordering",
      "Record who received it, when, and what action followed",
      "Compare against a control group before concluding that a notification worked",
      "Monitor permission revocations and app deletions as signs of fatigue",
      "Review results regularly and adjust segmentation, timing, and frequency",
    ],
  },
  { type: "h2", text: "Common mistakes to avoid" },
  {
    type: "p",
    text: "The first mistake is treating notifications as a business bulletin board rather than a service to users. The second is sending the same message to the entire user base because it's the easiest way. The third is giving users no way to manage preferences, so their only option is to switch everything off, including the transactional notifications that actually matter.",
  },
  {
    type: "p",
    text: "The fourth mistake is ignoring context. A notification offering a discount on something the user just bought yesterday shows the system doesn't really know them. The fifth is not testing; every assumption about the best time or best wording should be tested with data, not just the team's feelings.",
  },
  { type: "h2", text: "Starting with small steps" },
  {
    type: "p",
    text: "You don't need to build a complex campaign engine on day one. Start with transactional notifications whose benefit is clear, such as order status and payment confirmation. Add one or two reminders that prove helpful, for example an unfinished cart or an upcoming appointment. Once that foundation is stable and data starts accumulating, then consider segmentation and more personal promotional notifications.",
  },
  {
    type: "p",
    text: "This staged approach also makes learning easier. You can see how users react at each layer before adding the next, and avoid the risk of flooding users before you understand what they value.",
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "A good push notification feels like service, not advertising. It arrives when needed, contains something useful, and respects the user's control. But notifications only work on a strong foundation: a fast app, a simple flow, and real value that makes users want to return. Design retention from the start, measure honestly, and treat customer attention as something to protect, not spend.",
  },
  {
    type: "cta",
    title: "Want a mobile app customers actually use?",
    text: "The AG·SORA team helps design mobile apps complete with notifications, loyalty, and integration into your business systems. Consultation is free, with no commitment.",
    href: "/services/mobile",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "许多企业认为,移动应用一上架应用商店就算大功告成。实际上,上线只是起跑线。客户下载应用、打开一两次,然后图标就淹没在手机里几十个应用之中。真正的挑战不是让人下载,而是让他们有理由再回来。",
  },
  {
    type: "p",
    text: "召回用户最常用的工具之一是推送通知。它非常强大,也非常容易被滥用。及时且相关的通知像是良好的服务;过多且无关的通知则像是打扰,结果是用户关闭通知权限,甚至直接卸载应用。",
  },
  {
    type: "p",
    text: "本文讨论如何为企业移动应用合理设计推送通知和其他留存策略。我们将看到哪些类型的通知有用、如何正确请求权限、细分与发送时间的重要性,以及如何衡量这一切努力是否真的有效。讨论偏重实务,不使用杜撰的数字;我们依靠的是你可以用自己业务数据检验的推理。",
  },
  { type: "h2", text: "摘要" },
  {
    type: "ul",
    items: [
      "用户留存来自应用内的真实价值;通知只负责提醒,不能取代回来的理由",
      "交易类通知(订单状态、付款、预约)几乎总是受欢迎;促销类通知必须限量并个性化",
      "请求通知权限应选在相关的时刻并说明好处,而不是应用第一次打开就弹出",
      "细分与合理的频率比发送通知的数量更重要",
      "不仅要衡量通知被打开多少次,更要看用户行为是否变得更有价值",
    ],
  },
  { type: "h2", text: "为什么许多应用下载后就被抛弃" },
  {
    type: "p",
    text: "对用户来说下载应用是个成本很低的决定,但要把它留在手机上则需要更强的理由。每个人的手机都很满,存储空间有限,注意力被分散到许多事情上。头几天内没有带来明确价值的应用会被遗忘,而且大多数用户不会主动去卸载,他们只是不再打开而已。",
  },
  {
    type: "p",
    text: "最常见的原因并不是通知太少,而是应用没有比替代方案更好地解决真实问题。如果客户通过 WhatsApp 下单同样方便,他们就没有强烈的理由打开你的应用。因此在考虑通知之前,先确保应用提供其他渠道不易提供的东西:整齐的订单历史、可见的忠诚度积分、一键复购,或准确的状态追踪。",
  },
  {
    type: "p",
    text: "最初几天的体验决定了很多事。完成过一次有意义操作(例如第一笔订单或完整的账号设置)的用户,比停留在介绍页的用户更有可能回来。设计一个简短、清晰、能立即带来结果的起始流程,是成本最低的留存手段,往往也是最有效的。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    alt: "手持手机,屏幕主页布满应用图标",
    caption: "客户的手机里满是应用;留下来的是带来真实价值的应用,而不是响得最频繁的应用。",
  },
  { type: "h2", text: "了解通知类型及各自适用的时机" },
  {
    type: "p",
    text: "并非所有通知对用户的价值都相同。最有用的整理方式是按目的分组。有了分组,你就可以为每一组设定不同的频率和权限规则,并给用户细致的控制权,而不是全开或全关的二选一。",
  },
  { type: "h3", text: "交易类通知" },
  {
    type: "p",
    text: "这类通知由用户自己的操作触发,或由他们所等待事项的状态变化触发:订单已确认、商品已发货、付款已收到、明天有预约、验证码。用户通常期待并欣赏这些通知,因为信息立刻有用。只要内容准确且及时,这一组几乎不会被视为打扰。",
  },
  { type: "h3", text: "提醒类通知" },
  {
    type: "p",
    text: "提醒帮助用户完成他们已经开始或需要的事情:未付款的购物车、即将到期的保养预约、快要过期的优惠券,或可能快用完的订阅商品。关键在于精准。在用户仍有需要时出现的提醒让人觉得有帮助;对已完成之事反复出现的提醒则让人觉得被跟踪。",
  },
  { type: "h3", text: "促销与内容类通知" },
  {
    type: "p",
    text: "这是风险最高的一组。特别优惠、新产品或教育内容若符合用户兴趣可能很有价值,但若不加区分地发给所有人,很快就会变成骚扰。这一组应限制频率、依据真实行为个性化,并设置独立的开关,让用户可以关闭它而不会失去交易类通知。",
  },
  { type: "h2", text: "以正确的方式请求通知权限" },
  {
    type: "p",
    text: "在现代手机操作系统上,用户必须先授予权限,应用才能发送通知,而且在许多情况下,请求该系统权限的机会相当有限。如果用户在第一次请求时拒绝,再次请求可能很困难,或需要用户自己进入手机设置。这意味着权限请求是一个宝贵的时刻,不能浪费。",
  },
  {
    type: "p",
    text: "常见的错误是在应用第一次打开时就立刻弹出权限请求,此时用户还不知道应用的好处。更健康的做法是等待相关的时刻。例如,在用户完成第一笔订单后,先显示一句简短说明,如订单发货时我们可以通知您,然后才请求系统权限。这个自定义的说明页还起到筛选作用:如果用户拒绝了它,你并没有用掉请求系统权限的机会。",
  },
  {
    type: "ul",
    items: [
      "在弹出系统权限请求之前,先向用户说明具体好处",
      "在通知合情合理的时刻请求权限,例如第一笔订单之后",
      "在应用内提供设置,让用户选择想要的通知类别",
      "尊重拒绝;不要反复弹出同一个请求",
      "仍为未开启通知的用户提供替代渠道,例如电子邮件或应用内消息",
    ],
  },
  { type: "h2", text: "细分:把对的内容发给对的人" },
  {
    type: "p",
    text: "细分是指依据相关因素把用户分成若干组,再为每一组调整信息。细分不必复杂。简单的划分,例如新客户与老客户、购买过某类商品的人、一段时间内没有交易的人,或位于某个地区的人,就已经比给所有人发同一条信息相关得多。",
  },
  {
    type: "p",
    text: "一个真实的例子:咖啡店不需要向总是下午来的客户发送早餐菜单促销。母婴用品店不需要通知只买厨房用品的客户。只要购买记录整齐地保存在系统里,这类调整就可以自动完成。这也是移动应用应当连接 POS 或 CRM 系统、而不是作为独立孤岛存在的原因之一。",
  },
  {
    type: "p",
    text: "个性化同样需要谨慎。过于明显地表现出你对用户了解很多的信息可能令人不适。只使用为服务他们而合理使用的数据,在隐私政策中说明收集了什么,并让用户方便地管理自己的偏好。",
  },
  { type: "h2", text: "时间与频率:少往往更好" },
  {
    type: "p",
    text: "通知何时发送与内容同样重要。半夜或工作繁忙时段到达的促销通知很可能被忽略或令人烦恼。使用用户所在的时区,避开休息时间,并在可能时从数据中了解用户通常何时活跃于应用,然后在接近那些时间发送。",
  },
  {
    type: "p",
    text: "频率需要明确的上限。设定每周促销通知的最大数量,并制定规则,避免多个活动同时堆在同一个用户身上。没有这些限制,营销、销售和运营等每个内部团队都会觉得自己的信息最重要,而后果由用户承担。",
  },
  {
    type: "callout",
    title: "一条简单的规则",
    text: "发送通知之前先问:收件人读到它会觉得有帮助吗?如果不确定,就先搁置或缩小受众。一条有用的通知建立信任;十条无用的通知会把它抹掉。",
  },
  { type: "h2", text: "留存不只是通知的事" },
  {
    type: "p",
    text: "通知只是几种留存杠杆之一。从长期来看,其他杠杆往往影响更大。第一,应用的速度与可靠性:缓慢或经常出错的应用会让用户不愿回来,无论邀请他们的信息多么吸引人。第二,完成主要任务的难易程度;下单或付款流程中每多一步,就会降低完成的可能。",
  },
  {
    type: "p",
    text: "第三,随使用而累积的价值。订单历史、保存的地址、收藏列表和忠诚度积分让应用越用越有用,也让转向替代品感觉像是损失。第四,被认出的感觉:恰当的问候、合理的推荐,以及用户联系客服时的快速响应,让体验显得个性化,而不是批量化。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1576153192396-180ecef2a715",
    alt: "一只手在纸上绘制多个应用界面的线框草图",
    caption: "留存从最初的草图就开始设计:简短的流程、清晰的价值,以及回来的真实理由。",
  },
  { type: "h2", text: "应用内消息作为补充" },
  {
    type: "p",
    text: "除了显示在锁屏上的推送通知,应用还可以显示应用内消息:横幅、信息卡片,或用户打开应用后才阅读的小收件箱。这类消息不需要特别权限,也不会打断用户,因此适合不紧急的信息,例如新功能、使用技巧或季节性优惠。",
  },
  {
    type: "p",
    text: "分工很简单:推送通知用于对时间敏感且价值高的事情,其他则用应用内消息。这样你能保持推送渠道的价值,也不会耗尽用户的耐心。",
  },
  { type: "h2", text: "需要准备的技术事项" },
  {
    type: "p",
    text: "技术上,推送通知需要几个组成部分。应用要把设备注册到平台的通知服务,服务器要保存该设备令牌并与用户账号关联,还要有逻辑决定何时、向谁发送通知。由于令牌可能变化或过期,系统需要处理令牌的更新以及清理已失效的令牌。",
  },
  {
    type: "ul",
    items: [
      "与账号关联的设备令牌存储,包括对过期令牌的处理",
      "每位用户对通知类别和免打扰时段的偏好设置",
      "发送队列,避免活动高峰压垮服务器",
      "记录每条通知的发送、打开以及是否引发操作",
      "无需重新发布应用即可修改的频率上限设置",
      "跨操作系统版本测试,因为不同设备上的通知行为可能不同",
    ],
  },
  {
    type: "p",
    text: "还要记住,发送通知涉及用户的个人数据。确保通知内容不会在锁屏上显示敏感信息,并以与其他客户数据相同的原则管理令牌和偏好数据。基本的安全指引,请参阅我们关于企业应用安全的讨论。",
  },
  { type: "h2", text: "衡量你的留存策略是否有效" },
  {
    type: "p",
    text: "许多团队只停留在容易看到的指标上,例如发送了多少通知或有多少被打开。这些数字有用但不够。经常被打开的通知不一定让用户做出有价值的事情,甚至可能只是因好奇而打开、随后感到失望。更有意义的衡量是行为改变:用户是否完成了购买、复购,或在一段时间不活跃后重新活跃?",
  },
  {
    type: "p",
    text: "也要关注负面信号。某次活动之后有多少用户关闭了通知权限?有多少人卸载了应用?这些信号往往比打开率更诚实。在可能的情况下,把收到通知的一组与未收到的相似一组比较,这样你才能看到真实的影响,而不只是季节性的巧合。",
  },
  {
    type: "ol",
    items: [
      "为每种通知设定一个明确的行为目标,例如完成付款或复购",
      "记录谁收到了、何时收到,以及之后采取了什么行动",
      "在断定通知有效之前,先与对照组比较",
      "把权限撤销和应用卸载当作疲劳的迹象来监测",
      "定期回顾结果,调整细分、时间和频率",
    ],
  },
  { type: "h2", text: "应避免的常见错误" },
  {
    type: "p",
    text: "第一个错误是把通知当作企业的公告栏,而不是为用户提供的服务。第二个错误是因为最省事而向整个用户群发送同样的信息。第三个错误是不让用户管理偏好,导致他们唯一的选择就是全部关闭,包括真正重要的交易类通知。",
  },
  {
    type: "p",
    text: "第四个错误是忽视情境。向用户昨天刚买过的东西推送折扣通知,说明系统并不真正了解他们。第五个错误是不做测试;关于最佳时间或最佳措辞的每个假设,都应该用数据来检验,而不只是凭团队的感觉。",
  },
  { type: "h2", text: "从小步开始" },
  {
    type: "p",
    text: "你不需要第一天就构建复杂的活动引擎。从好处明确的交易类通知开始,例如订单状态和付款确认。再加入一两个被证明有帮助的提醒,例如未完成的购物车或即将到来的预约。当这个基础稳定、数据开始积累后,再考虑细分和更个性化的促销通知。",
  },
  {
    type: "p",
    text: "这种分阶段的方法也便于学习。你可以在加入下一层之前看到用户对每一层的反应,避免在还不了解用户看重什么时就让他们不堪其扰。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "好的推送通知让人感觉是服务,而不是广告。它在需要时出现,内容有用,并尊重用户的控制权。但通知只有建立在坚实的基础上才有效:快速的应用、简单的流程,以及让用户愿意回来的真实价值。从一开始就设计留存,诚实地衡量,并把客户的注意力当作需要保护而非消耗的东西。",
  },
  {
    type: "cta",
    title: "想要客户真正会使用的移动应用?",
    text: "AG·SORA 团队帮助设计包含通知、忠诚度并与你的业务系统集成的移动应用。咨询完全免费,无需任何承诺。",
    href: "/services/mobile",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
