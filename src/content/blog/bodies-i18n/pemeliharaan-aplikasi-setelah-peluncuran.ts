import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "The launch day of an app or website is usually celebrated: the team gathers, the business owner smiles, and everyone feels the big project is finally done. Two or three months later, the mood is often different. A small feature needs changing, a report has odd numbers, some users are struggling, and a security certificate suddenly expires. The question that comes up is always the same: who is responsible now, and what will it cost?",
  },
  {
    type: "p",
    text: "Many businesses treat launch as the finish line when it is really the starting line. Software running in the real world lives in a constantly changing environment: operating systems are updated, libraries in use turn out to have security flaws, user behavior changes, data volumes swell, and business needs shift. Software that isn't maintained slowly declines, not because it was built badly but because the world around it moves.",
  },
  {
    type: "p",
    text: "This article explains what application maintenance includes, why it should be planned from the start, how to set a sensible budget and service agreement, and what you should ask of your developer before a project is declared finished. It suits business owners who are about to launch, are launching, or have just launched an app or website.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "Maintenance is part of owning software, not a surprise cost; plan for it before the project starts",
      "Maintenance covers bug fixes, security updates, monitoring, backups, and ongoing small development",
      "A clear service agreement sets what is covered, the response times, and who to contact when problems occur",
      "Documentation, access, and code ownership must be clearly handed over at launch",
      "A reasonable maintenance budget costs less than repairing damage after it happens",
    ],
  },
  { type: "h2", text: "Why software needs care" },
  {
    type: "p",
    text: "Unlike physical goods, software doesn't wear out from use. But it still ages, because the things around it change. Some of the most common causes are as follows.",
  },
  {
    type: "ul",
    items: [
      "Security: new flaws are discovered regularly in operating systems, frameworks, and third-party libraries; without updates, those flaws stay open",
      "Compatibility: browsers, phones, and operating systems keep changing, so a display or feature that once worked can develop problems",
      "Third-party services: payment, map, email, or messaging providers can change their APIs or rules, and integrations that aren't adjusted will stop working",
      "Data growth: a table that is fast at a thousand rows can be slow at a million without tuning",
      "Business change: new products, tax rules, organizational structure, or changed processes require adjustments in the system",
      "Lost knowledge: the people who understand the system move on, and without documentation, simple fixes become expensive",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1774645215883-14d1553f3fa0",
    alt: "A set of metal wrenches in a toolbox",
    caption: "Healthy business software is cared for by a clear team or partner, not left until it breaks.",
  },
  { type: "h2", text: "What maintenance includes" },
  {
    type: "p",
    text: "Maintenance is often assumed to mean only fixing bugs. In reality its scope is broader, and it is usually divided into several types.",
  },
  {
    type: "h3",
    text: "Corrective maintenance",
  },
  {
    type: "p",
    text: "Fixing errors found after the app is in use. However thorough the testing, there are always things that only show up when many people use it in unexpected ways. Corrective fixes handle issues such as a button that doesn't work, an incorrect calculation, or a page that fails to load under certain conditions.",
  },
  {
    type: "h3",
    text: "Preventive and security maintenance",
  },
  {
    type: "p",
    text: "Preventing problems before they happen: updating libraries and frameworks, patching security flaws, renewing certificates, checking server configuration, and reviewing access rights. This work is rarely visible from outside, but it often determines whether your business is safe from damaging incidents.",
  },
  {
    type: "h3",
    text: "Monitoring, backup, and recovery",
  },
  {
    type: "p",
    text: "Monitoring ensures you know when there's a problem before customers complain: a slow server, rising errors, or storage that is nearly full. Automatic backups need to be tested periodically by actually restoring them, because a backup that has never been tested may not be usable when needed. A recovery plan explains who does what if the system goes down.",
  },
  {
    type: "h3",
    text: "Adaptive maintenance",
  },
  {
    type: "p",
    text: "Adjusting the app to environmental changes, such as new browser versions, changes to a payment provider's API, or regulatory changes that affect processes in the system. This type is often unavoidable: if it isn't done, the app will stop working at a certain point.",
  },
  {
    type: "h3",
    text: "Ongoing development and improvement",
  },
  {
    type: "p",
    text: "Once in use, users will find things that could be better, and the business will generate new needs. This isn't maintenance in the narrow sense, but it's best budgeted together because it draws on the same team understanding of the system. Separate clearly between fixes covered by warranty or maintenance and new features counted as additional work.",
  },
  { type: "h2", text: "A warranty is not maintenance" },
  {
    type: "p",
    text: "Many development contracts include a warranty period, for example several months after launch. A warranty usually covers fixing bugs that are the developer's error within the agreed work. A warranty generally does not cover ongoing security updates, adjustments caused by external changes, monitoring, or new features. Make sure you understand this boundary and read the warranty section of the contract carefully; ask explicitly what happens when the warranty period ends.",
  },
  { type: "h2", text: "Drafting a clear service agreement" },
  {
    type: "p",
    text: "For an app that matters to operations, consider a written maintenance agreement. It needn't be complicated, but it should answer the following.",
  },
  {
    type: "ol",
    items: [
      "Scope: what is included, such as bug fixes, security updates, monitoring, backups, and a number of small development hours per month",
      "Exclusions: what is not included and is billed separately, such as new features or major changes",
      "Priority levels and response times: how quickly urgent issues are answered compared with ordinary requests, and during which hours the service is available",
      "Communication channels: where to report problems and who responds",
      "Reporting: periodic reports on work done, system condition, and recommendations",
      "Fees and payment scheme: a fixed monthly fee, an hour package, or on request, along with how overage hours are calculated",
      "Duration and how to end it: how long it applies, when it is reviewed, and how handover works if you want to switch partners",
    ],
  },
  {
    type: "callout",
    title: "Don't wait for a major problem to look for a partner",
    text: "Finding a developer when the system is already down is far more expensive and stressful than having a partner who already knows your system. Decide who to call before there is an emergency.",
  },
  { type: "h2", text: "Estimating the maintenance budget" },
  {
    type: "p",
    text: "There is no single figure that suits every app, so be wary of anyone promising an exact percentage without understanding your system. Maintenance cost depends on the size and complexity of the app, the number of integrations, how important it is to operations, availability requirements, and how often your business changes. An app serving a core process with many integrations naturally needs more attention than a simple company profile website.",
  },
  {
    type: "p",
    text: "A more useful approach is to discuss maintenance as part of the total cost of ownership before the project starts. Ask the developer to explain which components carry recurring costs, such as hosting, domains, licenses, third-party services, and maintenance hours. That way you compare quotes fairly, because the cheapest quote at the start can turn out to be the most expensive over a few years.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac",
    alt: "A person sitting at a desk with a calculator and a notebook",
    caption: "Periodic reviews with the development team help the business plan improvements before problems appear.",
  },
  { type: "h2", text: "What must be handed over at launch" },
  {
    type: "p",
    text: "How easy it is to maintain an app is largely determined by what is handed over at the end of the project. Make sure the following are available before you declare the project finished and make the final payment.",
  },
  {
    type: "ul",
    items: [
      "Access and ownership: domain, hosting, code repository, database, and third-party service accounts registered in your business's name, not in the developer's personal name",
      "Source code and its change history, with instructions for running and deploying it",
      "Documentation: an architecture overview, a list of integrations, data structure, and key procedures such as how to apply updates and restore backups",
      "A list of credentials and keys stored securely, along with who is authorized to manage them",
      "A user guide and short training for the team that will use and manage the system",
      "A list of known issues and the plan to fix them",
      "An agreed procedure for reporting problems and requesting changes",
    ],
  },
  { type: "h2", text: "Building habits that make maintenance cheaper" },
  {
    type: "p",
    text: "Most maintenance cost can be reduced with simple habits on the business side. Train users to report problems with enough information: what they did, what happened, and when. Collect change requests in one list and prioritize, rather than sending them one by one as emergencies. Review the system's condition with the developer periodically, for example every quarter, to discuss necessary updates and development plans. And don't postpone important updates out of fear of disruption; small, routine updates are far safer than a big update delayed for years.",
  },
  { type: "h2", text: "Maintaining a website versus a business application" },
  {
    type: "p",
    text: "The level of maintenance needed differs between a company profile website and a business application running core processes. A profile website generally needs security updates, uptime monitoring, backups, and periodic content updates. A business application with many users, transactions, and integrations needs tighter monitoring, routine recovery tests, and a faster support channel, because an outage directly affects operations.",
  },
  {
    type: "p",
    text: "For that reason, don't simply copy a maintenance package from one system to another. Start by assessing the impact if the system were down for one hour, one day, or one week, then set a service level commensurate with that impact.",
  },
  { type: "h2", text: "Common mistakes" },
  {
    type: "ul",
    items: [
      "Treating the project as finished on launch day and budgeting nothing afterward",
      "Registering domains, hosting, or key accounts in the developer's name, making it hard for the business to take over",
      "Never testing recovery from backups until it's truly needed",
      "Postponing security updates for months because the system seems fine",
      "Relying on one person who understands the system, with no documentation",
      "Mixing up warranty and maintenance so that disputes arise when problems occur",
      "Choosing a maintenance partner purely on the lowest price without looking at capability and responsiveness",
    ],
  },
  { type: "h2", text: "Conclusion" },
  {
    type: "p",
    text: "Owning an app or website means owning something that needs care, just like a vehicle or a building. Planned care is far cheaper and calmer than emergency repairs. Talk about maintenance before the project starts, make sure the handover of access and documentation is done properly, set a clear service agreement, and make periodic reviews a habit. That way your software stays secure, fast, and relevant to a business that keeps growing.",
  },
  {
    type: "cta",
    title: "Need a partner to look after your app or website?",
    text: "The AG·SORA team provides maintenance, monitoring, and ongoing development for apps we build as well as ones you already own. The consultation is free, no commitment required.",
    href: "/contact",
    label: "Contact Us",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "应用或网站上线的那天通常会被庆祝:团队聚在一起,企业主面带微笑,所有人都觉得大项目终于完成了。两三个月后,气氛往往不同了。有的小功能需要修改,有的报表数字异常,有的用户遇到困难,安全证书又突然过期。随之而来的问题总是一样的:现在谁来负责,要花多少钱?",
  },
  {
    type: "p",
    text: "许多企业把上线当作终点线,而它其实是起跑线。在现实世界中运行的软件处于不断变化的环境里:操作系统更新,所用的库被发现有安全漏洞,用户行为改变,数据量膨胀,业务需求也在转移。不加维护的软件会慢慢退化,不是因为做得差,而是因为它周围的世界在向前走。",
  },
  {
    type: "p",
    text: "本文介绍应用维护包括什么、为什么应该从一开始就做规划、如何制定合理的预算和服务协议,以及在项目被宣布完成之前你应该向开发者提出哪些要求。适合即将上线、正在上线或刚刚上线应用或网站的企业主。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "维护是拥有软件的一部分,而不是意外的开支;在项目开始之前就做好规划",
      "维护包括修复缺陷、安全更新、监控、备份以及持续的小型开发",
      "清晰的服务协议规定了涵盖范围、响应时间,以及出现问题时联系谁",
      "文档、访问权限和代码所有权必须在上线时明确移交",
      "合理的维护预算,比损害发生后再修复要便宜",
    ],
  },
  { type: "h2", text: "为什么软件需要维护" },
  {
    type: "p",
    text: "与实体物品不同,软件不会因为使用而磨损。但它依然会老化,因为周围的事物在变化。以下是一些最常见的原因。",
  },
  {
    type: "ul",
    items: [
      "安全:操作系统、框架和第三方库会定期被发现新的漏洞;不更新,这些漏洞就一直敞开",
      "兼容性:浏览器、手机和操作系统不断变化,因此曾经运行良好的显示或功能可能出现问题",
      "第三方服务:支付、地图、电子邮件或消息服务商可能更改其 API 或规则,未经调整的集成就会停止工作",
      "数据增长:在一千行时很快的表,在一百万行时若不调优可能会很慢",
      "业务变化:新产品、税务规则、组织结构或流程的改变,需要在系统中做相应调整",
      "知识流失:了解系统的人离开了,而没有文档的话,简单的修复也会变得昂贵",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1774645215883-14d1553f3fa0",
    alt: "工具箱里的一组金属扳手",
    caption: "健康的企业软件由明确的团队或合作伙伴维护,而不是放任到出问题为止。",
  },
  { type: "h2", text: "维护包括什么" },
  {
    type: "p",
    text: "人们常常以为维护只是修复缺陷。实际上它的范围更广,通常分为几种类型。",
  },
  {
    type: "h3",
    text: "纠正性维护",
  },
  {
    type: "p",
    text: "修复应用投入使用后发现的错误。无论测试多么细致,总有些问题只有在许多人以意想不到的方式使用时才会出现。纠正性修复处理的问题包括按钮失灵、计算错误,或在特定条件下页面加载失败。",
  },
  {
    type: "h3",
    text: "预防性与安全维护",
  },
  {
    type: "p",
    text: "在问题发生之前预防:更新库和框架、修补安全漏洞、续期证书、检查服务器配置以及审查访问权限。这类工作从外部很少看得见,却往往决定了你的企业是否能免于有害的事故。",
  },
  {
    type: "h3",
    text: "监控、备份与恢复",
  },
  {
    type: "p",
    text: "监控确保你在客户抱怨之前就知道出了问题:服务器变慢、错误增多或存储空间快满了。自动备份需要定期通过实际恢复来测试,因为从未测试过的备份在需要时未必可用。恢复计划说明了系统宕机时谁该做什么。",
  },
  {
    type: "h3",
    text: "适应性维护",
  },
  {
    type: "p",
    text: "使应用适应环境的变化,例如新的浏览器版本、支付服务商 API 的变更,或影响系统内流程的法规变化。这类维护往往不可避免:如果不做,应用会在某个时间点停止工作。",
  },
  {
    type: "h3",
    text: "持续的开发与改进",
  },
  {
    type: "p",
    text: "投入使用后,用户会发现可以改进的地方,企业也会产生新的需求。严格来说这不属于维护,但最好一并预算,因为它依赖同一个团队对系统的理解。要清楚区分由保修或维护涵盖的修复,与作为额外工作计算的新功能。",
  },
  { type: "h2", text: "保修不等于维护" },
  {
    type: "p",
    text: "许多开发合同包含保修期,例如上线后的几个月。保修通常涵盖在约定工作范围内由开发者失误造成的缺陷修复。保修一般不包括持续的安全更新、因外部变化而做的调整、监控或新功能。请确保你理解这一界限,并仔细阅读合同中的保修条款;明确询问保修期结束后会怎样。",
  },
  { type: "h2", text: "起草清晰的服务协议" },
  {
    type: "p",
    text: "对于对运营至关重要的应用,请考虑签订书面的维护协议。内容不必复杂,但应回答以下问题。",
  },
  {
    type: "ol",
    items: [
      "范围:包括什么,例如缺陷修复、安全更新、监控、备份,以及每月若干小时的小型开发",
      "排除项:不包括并单独计费的内容,例如新功能或重大变更",
      "优先级与响应时间:紧急问题与普通请求相比响应有多快,以及服务在哪些时间段可用",
      "沟通渠道:向哪里报告问题,由谁回应",
      "报告:关于已完成工作、系统状况和建议的定期报告",
      "费用与付款方式:固定月费、工时包或按需计费,以及超出工时的计算方式",
      "期限与终止方式:有效期多长、何时复审,以及你想更换合作伙伴时如何交接",
    ],
  },
  {
    type: "callout",
    title: "不要等到出了大问题才去找合作伙伴",
    text: "在系统已经宕机时才去找开发者,比拥有一个已经熟悉你系统的合作伙伴要昂贵得多,也更让人紧张。在出现紧急情况之前就确定该联系谁。",
  },
  { type: "h2", text: "估算维护预算" },
  {
    type: "p",
    text: "没有哪个单一数字适合所有应用,所以对任何在不了解你的系统的情况下就承诺确切百分比的人要保持警惕。维护成本取决于应用的规模和复杂程度、集成的数量、对运营的重要性、可用性要求,以及你的企业变化的频繁程度。服务于核心流程且有许多集成的应用,自然比简单的公司介绍网站需要更多的关注。",
  },
  {
    type: "p",
    text: "更有用的做法,是在项目开始之前就把维护作为总拥有成本的一部分来讨论。请开发者说明哪些组成部分会产生重复性费用,例如托管、域名、许可证、第三方服务和维护工时。这样你就能公平地比较报价,因为起初最便宜的报价,几年下来可能反而是最贵的。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac",
    alt: "坐在书桌前、面前有计算器和笔记本的人",
    caption: "与开发团队定期复盘,有助于企业在问题出现之前规划改进。",
  },
  { type: "h2", text: "上线时必须移交的内容" },
  {
    type: "p",
    text: "维护应用的难易程度,很大程度上取决于项目结束时移交了什么。在你宣布项目完成并支付尾款之前,请确保以下内容已就绪。",
  },
  {
    type: "ul",
    items: [
      "访问权限与所有权:域名、托管、代码仓库、数据库和第三方服务账户都以你的企业名义注册,而不是开发者的个人名义",
      "源代码及其变更历史,并附有运行和部署的说明",
      "文档:架构概览、集成清单、数据结构,以及关键流程,如如何应用更新和恢复备份",
      "安全保存的凭证和密钥清单,以及谁有权管理它们",
      "面向将使用和管理系统的团队的用户指南和简短培训",
      "已知问题清单及其修复计划",
      "报告问题和请求变更的约定流程",
    ],
  },
  { type: "h2", text: "养成让维护更便宜的习惯" },
  {
    type: "p",
    text: "大部分维护成本可以通过企业一方的简单习惯来降低。培训用户在报告问题时提供足够的信息:做了什么、发生了什么、什么时候发生的。把变更请求汇总到一张清单中并排定优先级,而不是一条条当作紧急情况发送。定期与开发者一起回顾系统状况,例如每个季度一次,讨论需要做的更新和开发计划。不要因为担心造成干扰而推迟重要的更新;小而例行的更新,远比拖延多年的大更新安全。",
  },
  { type: "h2", text: "网站与业务应用的维护对比" },
  {
    type: "p",
    text: "公司介绍网站与运行核心流程的业务应用,所需的维护水平是不同的。介绍型网站通常只需要安全更新、可用性监控、备份和定期的内容更新。拥有大量用户、交易和集成的业务应用,则需要更严格的监控、例行的恢复测试和更快的支持渠道,因为故障会直接影响运营。",
  },
  {
    type: "p",
    text: "因此,不要简单地把一个系统的维护套餐照搬到另一个系统。先评估系统停机一小时、一天或一周所造成的影响,再设定与该影响相称的服务级别。",
  },
  { type: "h2", text: "常见错误" },
  {
    type: "ul",
    items: [
      "认为项目在上线当天就结束了,此后什么预算都不安排",
      "把域名、托管或关键账户注册在开发者名下,导致企业很难接管",
      "在真正需要之前从不测试从备份恢复",
      "因为觉得系统运行良好,而把安全更新推迟数月",
      "依赖一个了解系统的人,而没有文档",
      "混淆保修与维护,导致出问题时产生争议",
      "仅凭最低价选择维护合作伙伴,而不考察其能力和响应速度",
    ],
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "拥有应用或网站,意味着拥有需要维护的东西,就像车辆或建筑一样。有计划的维护,比紧急抢修便宜得多,也从容得多。在项目开始之前就谈维护,确保访问权限和文档的移交妥善完成,制定清晰的服务协议,并把定期回顾变成习惯。这样,你的软件才能保持安全、快速,并与不断成长的企业保持契合。",
  },
  {
    type: "cta",
    title: "需要一个照看你的应用或网站的合作伙伴吗?",
    text: "AG·SORA 团队为我们构建的以及你已有的应用提供维护、监控和持续开发服务。咨询完全免费,无需任何承诺。",
    href: "/contact",
    label: "联系我们",
  },
];

export const translations = { en, zh };
