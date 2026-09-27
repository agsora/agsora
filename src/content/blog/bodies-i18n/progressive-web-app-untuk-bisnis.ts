import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "A business wants to be on its customers' phones. The team already pictures an icon on the home screen, promotional notifications, and faster ordering. But once they start doing the sums, harder questions come up: do we need two separate apps for Android and iOS? How does publishing to the app stores work? Will customers really download a new app just to order occasionally?",
  },
  {
    type: "p",
    text: "Between building an ordinary website and building a native app, there's a middle path that has matured a great deal in recent years: the progressive web app, or PWA. A PWA is a web app that can be installed on a phone's home screen, opens like an app, keeps working on a weak connection, and in many cases can send notifications — all without going through an app store.",
  },
  {
    type: "p",
    text: "This article explains what a PWA is in terms a business owner can follow, when a PWA is the right choice, when a native app is still better, and what to consider before deciding.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "A PWA is a web app that can be installed on a phone and feels like an app, without being downloaded from an app store",
      "A single PWA codebase runs on Android, iOS, and desktop, making development and maintenance more efficient",
      "A PWA can keep working on a weak connection by storing key data and pages on the device",
      "Native apps still win for needs that rely heavily on device features or on being present in app stores",
      "The best decision starts with how your users actually interact with your service, not with technology trends",
    ],
  },
  { type: "h2", text: "What a PWA is, without the jargon" },
  {
    type: "p",
    text: "Imagine a website that, when opened on a phone, offers to be installed on the home screen. Once installed, it has its own icon, opens full screen without a browser address bar, and feels like any other app. When the signal drops, pages you've opened before are still available, and data you enter can be stored temporarily and sent once the connection returns. That's the experience a PWA offers.",
  },
  {
    type: "p",
    text: "Technically, a PWA is still a web application. It's built with the same web technology, run by the browser on the user's device, and updated whenever the user opens it. The difference is an extra layer that lets the app be installed, store data for offline use, and interact with some device features. For users, the difference between a well-built PWA and a native app is often hard to notice in everyday use.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    alt: "A hand holding a phone showing a home screen full of app icons",
    caption: "A PWA can sit on the home screen and open like any other app, without going through an app store.",
  },
  { type: "h2", text: "Why PWAs make sense for business" },
  { type: "h3", text: "One app for every device" },
  {
    type: "p",
    text: "Native apps usually need separate development for Android and iOS, or at least significant adaptation for each platform. A PWA is built once and runs in modern browsers on phones, tablets, and computers. For a business on a limited budget, that means more efficient development and maintenance costs, and new features reaching every user at the same time.",
  },
  { type: "h3", text: "No download barrier" },
  {
    type: "p",
    text: "Every extra step between a customer and your service is a chance for them to change their mind. Asking customers to open an app store, search for the app, wait for the download, and then sign up is a long process. With a PWA, customers can start using the service straight from a link shared via chat, social media, or a QR code, then install it on their home screen if they find it useful.",
  },
  { type: "h3", text: "Instant updates without app store approval" },
  {
    type: "p",
    text: "Every native app update has to pass an app store review and then wait for users to install it. A PWA update is available as soon as it's released to the server. Bug fixes, price changes, or new features reach every user immediately, with no old versions lingering on some customers' phones.",
  },
  { type: "h3", text: "Still discoverable in search engines" },
  {
    type: "p",
    text: "Because a PWA is essentially a website, its pages can be indexed by search engines. Product catalogues, service pages, or location information inside a PWA can appear in search results — something content inside a native app can't do. For businesses that rely on search to bring in new customers, that's a significant advantage.",
  },
  {
    type: "callout",
    title: "A good place to start",
    text: "If you're not yet sure how often customers will use an app, a PWA is a relatively low-risk way to find out. If usage grows and the need for device features increases, native development can then be considered based on real data.",
  },
  { type: "h2", text: "Limitations to understand" },
  {
    type: "p",
    text: "A PWA isn't the answer to every need. The following limitations deserve honest consideration before you decide.",
  },
  {
    type: "ul",
    items: [
      "Access to certain device features — such as Bluetooth for special printers, particular sensors, or deep operating system integration — is still more limited than for native apps",
      "Feature support can differ across platforms and browsers, so testing on a range of devices remains important",
      "Without an app store presence, some users may not realise your service can be installed like an app",
      "Graphically heavy apps, or apps that need intensive on-device processing, are usually better built natively",
      "Notification and background capabilities keep evolving, so check current support on the devices your users actually have",
    ],
  },
  {
    type: "p",
    text: "These limitations keep shifting as browsers and operating systems develop. Features that used to be available only to native apps are increasingly open to web apps. So decisions are best based on checking current support for the features you really need, not on general assumptions that may be out of date.",
  },
  { type: "h2", text: "When a PWA is the right choice" },
  {
    type: "p",
    text: "PWAs are a great fit for needs that mostly involve displaying information, filling in forms, and transacting. Some common use cases:",
  },
  {
    type: "ul",
    items: [
      "Product catalogues and ordering for customers who order regularly",
      "Internal apps for field teams: visit reports, stock checks, or order taking",
      "Customer portals for viewing order status, invoices, and transaction history",
      "Booking and queue systems for service businesses such as clinics, salons, or workshops",
      "Operational dashboards that management needs to access from both phone and computer",
    ],
  },
  {
    type: "p",
    text: "Internal apps are one of the most rewarding use cases. Field teams don't need to download an app from a public store, the company doesn't have to manage app distribution to every device, and updates reach everyone immediately. With offline capability, records can still be captured at sites with a weak signal, then synced once the connection comes back.",
  },
  {
    type: "p",
    text: "For customer-facing services, a PWA also helps keep the relationship going after the first transaction. Customers who have installed the icon on their home screen find it easier to come back to reorder, check order status, or see the latest promotions. That gives a business a more direct communication channel than relying on social media alone, whose reach is decided by someone else's algorithm.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    alt: "A computer screen showing program code in an editor with the React logo beside it",
    caption: "A PWA is built with the same modern web technology as a website, then given app-like capabilities.",
  },
  { type: "h2", text: "When a native app is still better" },
  {
    type: "p",
    text: "A native app remains the better choice when the user experience depends heavily on device features, high graphical performance, or app store presence as a marketing channel. Examples include apps that must connect tightly to specific hardware, apps with very complex animation and interaction, or consumer services whose audience is used to finding everything through an app store.",
  },
  {
    type: "p",
    text: "It doesn't have to be one or the other, either. Many businesses start with a PWA to test demand and build a user base, then add a native app later for the features that truly need it. If the back end is designed well from the start — for example with an API separate from the interface — both kinds of app can share the same data and business logic.",
  },
  { type: "h2", text: "A quick comparison: website, PWA, and native app" },
  {
    type: "p",
    text: "To make the decision easier, think of the three as levels of commitment. An ordinary website is a front door open to anyone: easy to find, nothing to install, but it only works well online and is rarely reopened without a specific reason. A PWA adds the ability to live on the home screen, work on a weak connection, and feel faster on repeat visits, while keeping a website's advantages in access and search.",
  },
  {
    type: "p",
    text: "A native app is the biggest commitment, for both the business and the user. The business has to build and maintain an app for each platform, while users have to download it and give it space on their phones. In return, native apps offer the fullest access to device features and a presence in the app stores.",
  },
  {
    type: "ul",
    items: [
      "Website: best for reaching and convincing new visitors",
      "PWA: best for services used repeatedly, with reasonable device feature needs",
      "Native app: best for experiences that depend heavily on the device or the app store",
    ],
  },
  {
    type: "p",
    text: "Many businesses actually sit in the middle: customers use the service often enough that an ordinary website feels impractical, but the needs aren't complex enough to justify two separate native apps. That's usually where a PWA delivers the most value.",
  },
  { type: "h2", text: "What to prepare" },
  {
    type: "ol",
    items: [
      "Map user behaviour: how often they'll open the app, on which devices, and under what connection conditions",
      "List the device features you truly need, then check support on the platforms your users have",
      "Decide which data must be available offline and how data conflicts are handled during sync",
      "Design how you'll invite users to install the app on their home screen without feeling pushy",
      "Make sure performance and security are addressed from the start, including encrypted connections",
    ],
  },
  {
    type: "p",
    text: "This preparation helps ensure the PWA you build genuinely feels like an app, not just an ordinary website with an icon on the home screen. The difference between the two lies in the details: how fast it opens, how it behaves offline, and how comfortable it is to navigate one-handed.",
  },
  { type: "h2", text: "Closing thoughts" },
  {
    type: "p",
    text: "Web technology has come a long way, and the PWA is one of its most practical results for business. For many needs — catalogues, ordering, customer portals, and field team apps — a PWA offers an app-like experience at lower cost and complexity. Start with how your users actually interact with your service, check the features you need, then choose the approach that fits best. Decisions based on real needs are almost always better than decisions based on trends.",
  },
  {
    type: "cta",
    title: "Want an app for customers or your team, but unsure of the approach?",
    text: "The AG·SORA team can help assess whether a PWA, a native app, or a combination of both best fits your needs and budget. The consultation is free, no commitment required.",
    href: "/services/mobile",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "一家企业希望出现在客户的手机上。团队已经想象好了主屏幕上的图标、促销通知和更快捷的下单。但一旦开始算账,更复杂的问题就出现了:Android 和 iOS 需要两个独立的应用吗?在应用商店上架的流程是怎样的?客户真的愿意为了偶尔下单而下载一个新应用吗?",
  },
  {
    type: "p",
    text: "在普通网站和原生应用之间,有一条近年来日趋成熟的中间道路:渐进式网页应用,即 PWA。PWA 是一种可以安装到手机主屏幕、像应用一样打开、在网络较弱时仍能工作,并且在许多情况下可以发送通知的网页应用——这一切都不需要经过应用商店。",
  },
  {
    type: "p",
    text: "本文将用企业主容易理解的语言,解释什么是 PWA、什么时候 PWA 是正确的选择、什么时候原生应用仍然更好,以及在做决定之前需要考虑哪些因素。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "PWA 是可以安装到手机上、使用体验如同应用的网页应用,无需从应用商店下载",
      "一套 PWA 代码可在 Android、iOS 和桌面端运行,开发和维护更加高效",
      "PWA 可以把关键数据和页面存储在设备上,在网络较弱时继续工作",
      "对于高度依赖设备功能或应用商店曝光的需求,原生应用仍然更有优势",
      "最佳决策应从用户与服务的真实互动方式出发,而不是追随技术潮流",
    ],
  },
  { type: "h2", text: "不用术语,说清楚什么是 PWA" },
  {
    type: "p",
    text: "想象一个网站,在手机上打开时会提示你把它安装到主屏幕。安装之后,它有自己的图标,全屏打开、没有浏览器地址栏,用起来就像普通应用一样。信号中断时,之前打开过的页面仍然可以访问,输入的数据可以暂存,等网络恢复后再发送。这就是 PWA 所提供的体验。",
  },
  {
    type: "p",
    text: "从技术上讲,PWA 仍然是一个网页应用。它使用相同的网页技术构建,由用户设备上的浏览器运行,并在用户每次打开时自动更新。区别在于多了一层能力:可以被安装、可以存储数据供离线使用,并能与部分设备功能交互。对用户来说,一个构建良好的 PWA 与原生应用在日常使用中的差别往往很难察觉。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    alt: "一只手拿着手机,屏幕上是布满应用图标的主屏幕",
    caption: "PWA 可以放在主屏幕上,像其他应用一样打开,无需经过应用商店。",
  },
  { type: "h2", text: "PWA 对企业的优势" },
  { type: "h3", text: "一个应用适配所有设备" },
  {
    type: "p",
    text: "原生应用通常需要为 Android 和 iOS 分别开发,或者至少针对每个平台做大量适配。PWA 只需构建一次,就能在手机、平板和电脑的现代浏览器中运行。对于预算有限的企业来说,这意味着更高效的开发和维护成本,新功能也能同时送达所有用户。",
  },
  { type: "h3", text: "没有下载门槛" },
  {
    type: "p",
    text: "客户与你的服务之间每多一个步骤,就多一次让他们改变主意的机会。要求客户打开应用商店、搜索应用名称、等待下载完成再注册,是一个漫长的过程。有了 PWA,客户可以直接通过聊天、社交媒体或二维码分享的链接开始使用服务,觉得有用时再安装到主屏幕。",
  },
  { type: "h3", text: "即时更新,无需应用商店审核" },
  {
    type: "p",
    text: "原生应用的每一次更新都必须通过应用商店审核,然后等待用户自行更新。PWA 的更新一经发布到服务器即可生效。错误修复、价格调整或新功能都能立即触达所有用户,不会有旧版本仍残留在部分客户的手机上。",
  },
  { type: "h3", text: "依然可以被搜索引擎发现" },
  {
    type: "p",
    text: "由于 PWA 本质上是一个网站,它的页面可以被搜索引擎收录。PWA 中的产品目录、服务页面或门店信息都可以出现在搜索结果中——而原生应用内部的内容做不到这一点。对于依靠搜索获取新客户的企业来说,这是一项显著的优势。",
  },
  {
    type: "callout",
    title: "适合作为起点",
    text: "如果你还不确定客户会多频繁地使用应用,PWA 是一种风险相对较低的验证方式。如果使用量增长、对设备功能的需求增加,再根据真实数据考虑开发原生应用。",
  },
  { type: "h2", text: "需要了解的局限" },
  {
    type: "p",
    text: "PWA 并不能满足所有需求。在做决定之前,以下局限值得认真考虑。",
  },
  {
    type: "ul",
    items: [
      "对某些设备功能的访问——例如连接专用打印机的蓝牙、特定传感器或与操作系统的深度集成——仍比原生应用受限",
      "不同平台和浏览器对功能的支持可能不同,因此在多种设备上测试依然重要",
      "由于没有出现在应用商店中,部分用户可能不知道你的服务可以像应用一样安装",
      "图形负载很重、或需要在设备上进行大量运算的应用,通常更适合原生开发",
      "通知和后台运行能力仍在不断发展,请针对你的用户实际使用的设备查看最新支持情况",
    ],
  },
  {
    type: "p",
    text: "随着浏览器和操作系统的发展,这些局限也在不断变化。过去只有原生应用才能使用的功能,如今越来越多地向网页应用开放。因此,决策最好基于对你真正需要的功能的最新支持情况的核实,而不是基于可能已经过时的普遍印象。",
  },
  { type: "h2", text: "什么时候 PWA 是正确的选择" },
  {
    type: "p",
    text: "PWA 非常适合以展示信息、填写表单和完成交易为主的需求。以下是一些常见的使用场景:",
  },
  {
    type: "ul",
    items: [
      "面向定期下单客户的产品目录和订购",
      "外勤团队的内部应用:拜访报告、库存检查或订单录入",
      "客户门户,用于查看订单状态、账单和交易记录",
      "诊所、美容院或维修店等服务型企业的预约和排队系统",
      "管理层需要在手机和电脑上都能访问的运营仪表盘",
    ],
  },
  {
    type: "p",
    text: "内部应用是收益最明显的使用场景之一。外勤团队不需要从公共应用商店下载应用,公司也不需要管理应用在每台设备上的分发,更新会立即送达每个人。借助离线能力,即使在信号较弱的地点也能继续记录,待网络恢复后再同步。",
  },
  {
    type: "p",
    text: "对于面向客户的服务,PWA 还有助于在首次交易之后维系关系。已经把图标安装到主屏幕的客户,更容易回来复购、查看订单状态或浏览最新促销。与只依赖由其他平台算法决定触达范围的社交媒体相比,这为企业提供了更直接的沟通渠道。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    alt: "电脑屏幕上的编辑器中显示着程序代码,旁边是 React 标志",
    caption: "PWA 使用与网站相同的现代网页技术构建,再加上类似应用的能力。",
  },
  { type: "h2", text: "什么时候原生应用仍然更好" },
  {
    type: "p",
    text: "当用户体验高度依赖设备功能、高图形性能,或需要借助应用商店作为营销渠道时,原生应用仍是更合适的选择。例如必须与特定硬件紧密连接的应用、动画和交互非常复杂的应用,或者目标用户习惯通过应用商店寻找一切的消费类服务。",
  },
  {
    type: "p",
    text: "这也不一定是二选一。许多企业先用 PWA 验证需求、积累用户,之后再为确实需要的功能增加原生应用。如果从一开始就设计好后端架构——例如采用与界面分离的 API——两种应用就可以共享相同的数据和业务逻辑。",
  },
  { type: "h2", text: "快速对比:网站、PWA 与原生应用" },
  {
    type: "p",
    text: "为了便于决策,可以把三者看作不同程度的投入。普通网站是一扇向所有人敞开的大门:容易被找到,无需安装,但只有在线时才能良好运行,而且没有特别理由时很少有人会再次打开。PWA 在保留网站在访问和搜索方面优势的同时,增加了驻留主屏幕、弱网可用以及重复访问时打开更快的能力。",
  },
  {
    type: "p",
    text: "原生应用则是投入最大的选择,对企业和用户都是如此。企业需要为每个平台构建和维护应用,用户则需要下载并在手机上为它腾出空间。作为回报,原生应用能提供最完整的设备功能访问以及在应用商店中的曝光。",
  },
  {
    type: "ul",
    items: [
      "网站:最适合触达并说服新访客",
      "PWA:最适合被反复使用、对设备功能需求适中的服务",
      "原生应用:最适合高度依赖设备或应用商店的体验",
    ],
  },
  {
    type: "p",
    text: "许多企业其实处于中间位置:客户使用服务足够频繁,普通网站显得不够方便;但需求又没有复杂到值得开发两个独立的原生应用。PWA 通常正是在这个位置上发挥最大价值。",
  },
  { type: "h2", text: "需要做好的准备" },
  {
    type: "ol",
    items: [
      "梳理用户行为:他们多久打开一次应用、使用什么设备、处于怎样的网络条件下",
      "列出真正需要的设备功能,并核实用户所用平台对它们的支持情况",
      "确定哪些数据必须离线可用,以及同步时如何处理数据冲突",
      "设计引导用户把应用安装到主屏幕的方式,避免让人感到被强迫",
      "从一开始就重视性能和安全,包括使用加密连接",
    ],
  },
  {
    type: "p",
    text: "这些准备工作有助于确保你构建的 PWA 真正带来应用般的体验,而不只是一个在主屏幕上有图标的普通网站。两者的差别体现在细节上:打开速度、离线时的表现,以及单手操作的舒适程度。",
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "网页技术已经取得了长足的进步,而 PWA 是其中对企业最实用的成果之一。对于许多需求——产品目录、在线订购、客户门户以及外勤团队应用——PWA 能以更低的成本和复杂度提供类似应用的体验。从用户与服务的真实互动方式出发,核实所需的功能,再选择最合适的方案。基于真实需求的决策,几乎总是优于基于潮流的决策。",
  },
  {
    type: "cta",
    title: "想为客户或团队打造应用,却拿不准方案?",
    text: "AG·SORA 团队可以帮助评估 PWA、原生应用或两者结合,哪一种最符合你的需求和预算。咨询完全免费,无需任何承诺。",
    href: "/services/mobile",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
