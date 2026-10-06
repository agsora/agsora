import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "In recent years, low-code and no-code tools have become increasingly popular. Their promise is tempting: build an app or automate a process by dragging and dropping components, without writing code, in a matter of days. For business owners who have been used to hearing software development estimates in months, an offer like that sounds very reasonable.",
  },
  {
    type: "p",
    text: "On the other hand, many businesses have also heard stories of low-code apps that start to struggle when users grow, of subscription costs that keep rising, or of unique business processes that the platform can't accommodate. The question isn't which is better in general, but which suits your business's needs, stage, and resources right now.",
  },
  {
    type: "p",
    text: "This article compares low-code, no-code, and custom-built software fairly. We'll look at what each term means, where each excels, where the limits lie, and a decision framework you can use to choose. We write this as a custom software developer, but the conclusion is honest: there are many situations where an off-the-shelf tool is the better choice.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "No-code and low-code excel for simple internal processes, prototypes, and clear needs with a limited number of users",
      "Custom software excels when business processes are unique, integrations are complex, performance must be high, or full control over data and long-term cost is needed",
      "Neither is a one-time choice; many businesses start with off-the-shelf tools and switch as needs grow",
      "The real cost includes subscriptions, usage limits, team time, and the cost of switching later, not just the upfront price",
      "Data ownership and the ease of moving it must be confirmed before choosing any platform",
    ],
  },
  { type: "h2", text: "What no-code, low-code, and custom software mean" },
  {
    type: "h3",
    text: "No-code",
  },
  {
    type: "p",
    text: "No-code platforms let people without a programming background create apps, forms, workflows, or web pages through a visual interface. Components are already provided, and the builder assembles and configures them. Examples of use include internal request forms, simple task trackers, catalogs, or automations that connect several popular apps.",
  },
  {
    type: "h3",
    text: "Low-code",
  },
  {
    type: "p",
    text: "Low-code is similar to no-code, but leaves room to write a little code where needed, for example for special logic or integration with other systems. These platforms suit teams with some technical skill who want more flexibility but still want to speed up building with ready-made components.",
  },
  {
    type: "h3",
    text: "Custom-built software",
  },
  {
    type: "p",
    text: "Custom software is written in code to the specific needs of the business. You get full control over features, appearance, data structure, integrations, and infrastructure. That flexibility comes with consequences: longer development time, higher upfront cost, and an ongoing need for maintenance.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "A laptop screen showing lines of program code in a dark room",
    caption: "The choice between off-the-shelf tools and custom code depends on needs, not on which sounds more sophisticated.",
  },
  { type: "h2", text: "Where no-code and low-code tools excel" },
  {
    type: "p",
    text: "These tools have real advantages, and dismissing them outright is a mistake. Here are situations where they are often the best choice.",
  },
  {
    type: "ul",
    items: [
      "Speed: simple apps can be running within days or weeks, so ideas can be tested quickly",
      "Low upfront cost: no big investment up front, suitable when you're not yet sure the process or product will last",
      "Building by business people: staff who understand the process can build it themselves without waiting in the technical team's queue",
      "Prototypes and validation: excellent for testing whether a workflow is truly useful before investing further",
      "Platform maintenance handled by the provider: security and infrastructure updates are their responsibility",
      "Standard internal processes: approval forms, task tracking, simple data collection, and basic reporting are generally served well",
    ],
  },
  {
    type: "p",
    text: "If your need is a fairly standard internal process, used by a few dozen users, and involving no complicated business logic, an off-the-shelf tool often gives the best value for every rupiah spent.",
  },
  { type: "h2", text: "Where the limits start to show" },
  {
    type: "p",
    text: "Problems usually don't appear in the first month but after the app has been used more widely and for longer. Here are the limits often encountered.",
  },
  {
    type: "h3",
    text: "Unique business processes",
  },
  {
    type: "p",
    text: "Off-the-shelf platforms are designed for common cases. When your business has special rules, such as tiered pricing with many exceptions, approval flows that depend on many conditions, or an unusual warehouse workflow, you begin building complicated workarounds inside the platform. At some point, those workarounds are harder to maintain than ordinary code.",
  },
  {
    type: "h3",
    text: "Scale and performance",
  },
  {
    type: "p",
    text: "An app that runs smoothly for ten users and a thousand records can slow down when users number in the hundreds and data in the millions of rows. Off-the-shelf platforms usually set usage limits or raise costs with volume. With custom software, you can optimize the data structure and infrastructure to match actual usage patterns.",
  },
  {
    type: "h3",
    text: "Integration with other systems",
  },
  {
    type: "p",
    text: "Many platforms provide connectors to popular apps, but integration with legacy systems, special devices, or unusual APIs can be difficult or impossible. If your business processes depend on uncommon systems, first check whether the platform you're considering can actually connect to them.",
  },
  {
    type: "h3",
    text: "Long-term cost",
  },
  {
    type: "p",
    text: "Subscription costs that look small at the start can grow as users, advanced features, and usage limits increase. Custom software, meanwhile, has a higher upfront cost but a more predictable cost structure. Calculate the total cost over the next several years, not just the first month, and include scenarios where users and data grow.",
  },
  {
    type: "h3",
    text: "Ownership and platform lock-in",
  },
  {
    type: "p",
    text: "An app built on a particular platform usually can't simply be moved. Data may be exportable, but the logic and interface you've built must be recreated if you switch. This is called vendor lock-in. In addition, changes in the provider's pricing, features, or policies are outside your control.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1494059980473-813e73ee784b",
    alt: "A stack of jigsaw puzzle pieces",
    caption: "Technology decisions are best made together with the people who understand the process and will use the system every day.",
  },
  { type: "h2", text: "A practical decision framework" },
  {
    type: "p",
    text: "Rather than choosing by trend, answer the following questions honestly. The result usually points clearly to one side.",
  },
  {
    type: "ol",
    items: [
      "How unique is this business process? If most similar businesses use similar processes, an off-the-shelf tool is probably enough",
      "How many users and how much data are expected in two to three years? Large growth projections point toward a more scalable solution",
      "How important is this app to operations? If an outage means the business stops running, control and reliability matter more",
      "How many integrations with other systems are needed, especially uncommon ones?",
      "Who will maintain the app? Is there someone on the team who is capable and has time, or is an external partner needed?",
      "How sensitive is the data, and are there regulatory or security needs that demand tighter control?",
      "What is the total cost over three to five years for each option, under realistic assumptions?",
    ],
  },
  {
    type: "callout",
    title: "A rule of thumb",
    text: "If your process is standard and the scale is small, start with an off-the-shelf tool. If your process is a competitive advantage, involves many integrations, or will grow large, consider custom software from the start or plan a clear migration path.",
  },
  { type: "h2", text: "Mixed approaches and migration paths" },
  {
    type: "p",
    text: "The choice doesn't have to be black and white. Many successful businesses use a mixed approach. For example, using no-code tools for supporting processes such as internal forms and simple reporting, while core systems such as orders, stock, or customer service are custom built. Or starting with an off-the-shelf tool as an MVP to validate the process, then building a custom version once it has proven useful.",
  },
  {
    type: "p",
    text: "If you plan to switch later, a few steps make it easier. Document processes and business rules separately from the platform. Make sure data can be exported in standard formats and do a trial export early. Avoid depending on the platform's proprietary features for core business logic. And from the start, define the thresholds that signal it's time to switch, such as number of users, monthly cost, or types of needs that can't be met.",
  },
  { type: "h2", text: "Questions to ask any provider" },
  {
    type: "ul",
    items: [
      "Where is the data stored and how can it be exported in full?",
      "What are the usage limits on the chosen plan, and what happens if they are exceeded?",
      "What are the security, backup, and service availability policies?",
      "What happens to the app and data if the provider changes pricing, policies, or stops operating?",
      "How are access rights and audit trails handled for sensitive data?",
      "What support is available, in a language and time zone your team can reach?",
      "For custom software: who owns the code, how is documentation handed over, and how is maintenance handled after launch?",
    ],
  },
  { type: "h2", text: "The role of the team and the skills required" },
  {
    type: "p",
    text: "One thing often overlooked in this comparison is the human side. No-code tools don't require programming expertise, but they still require someone who understands the business process, can think in a structured way about data and flows, and has time to build and maintain the app. If that person is a staff member who also carries other daily work, the app they build can end up depending on one person and be hard to hand over when they move to other duties.",
  },
  {
    type: "p",
    text: "For custom software, the technical skills sit with the developer, but the business still needs to provide a representative who understands the process and can make decisions quickly. A project short on involvement from the process owner almost always produces a system that is technically good but doesn't fit how work is really done. Whichever you choose, decide from the start who owns the process, who maintains it, and how that knowledge is documented.",
  },
  { type: "h2", text: "Common mistakes" },
  {
    type: "ul",
    items: [
      "Choosing based on trends or an attractive demo without testing against a real process",
      "Assuming no-code means no planning is needed; a chaotic process stays chaotic on any platform",
      "Building a business's core system on a tool designed for light needs",
      "Ignoring long-term costs and platform lock-in",
      "Building custom software for a process that off-the-shelf tools already serve well",
      "Not deciding who is responsible for maintaining the app once it's built",
      "Letting many small apps built by each department grow without governance, so data becomes scattered and hard to audit",
    ],
  },
  { type: "h2", text: "Conclusion" },
  {
    type: "p",
    text: "There is no universal answer between low-code, no-code, and custom software. Off-the-shelf tools give speed and low upfront cost for standard needs; custom software gives control and room to grow for unique or large needs. A good decision comes from an honest understanding of your business processes, growth projections, integration needs, and total long-term cost. When in doubt, start small in a way that doesn't lock you in, and let real usage show when it's time to go further.",
  },
  {
    type: "cta",
    title: "Unsure whether to choose an off-the-shelf tool or custom software?",
    text: "The AG·SORA team will help assess your needs objectively, including recommending an off-the-shelf tool when that is genuinely the better fit. The consultation is free, no commitment required.",
    href: "/services/custom-software",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "近年来,低代码和无代码工具越来越受欢迎。它们的承诺很诱人:通过拖放组件来构建应用或自动化流程,无需编写代码,几天之内就能完成。对于一直听到软件开发估算以月计的企业主来说,这样的提议听起来非常合理。",
  },
  {
    type: "p",
    text: "另一方面,许多企业也听说过这样的故事:低代码应用在用户增加后开始力不从心,订阅费用不断上涨,或者平台无法容纳独特的业务流程。问题不在于哪个总体上更好,而在于哪个适合你的企业当前的需求、阶段和资源。",
  },
  {
    type: "p",
    text: "本文公平地比较低代码、无代码和定制开发的软件。我们将了解每个术语的含义、各自的优势、局限所在,以及可用于选择的决策框架。我们是以定制软件开发商的身份来写的,但结论是诚实的:在很多情况下,现成工具是更合适的选择。",
  },
  { type: "h2", text: "要点摘要" },
  {
    type: "ul",
    items: [
      "无代码和低代码适合简单的内部流程、原型,以及需求明确且用户数量有限的场景",
      "当业务流程独特、集成复杂、性能要求高,或需要对数据和长期成本拥有完全控制时,定制软件更具优势",
      "两者都不是一次性的选择;许多企业先用现成工具,在需求增长时再切换",
      "真实成本包括订阅费、使用限制、团队时间以及日后切换的成本,而不只是前期价格",
      "选择任何平台之前,都必须确认数据所有权以及迁移数据的难易程度",
    ],
  },
  { type: "h2", text: "无代码、低代码和定制软件的含义" },
  {
    type: "h3",
    text: "无代码",
  },
  {
    type: "p",
    text: "无代码平台让没有编程背景的人通过可视化界面创建应用、表单、工作流或网页。组件已经提供,构建者只需组装和配置。使用示例包括内部申请表单、简单的任务跟踪器、目录,或连接多个常用应用的自动化。",
  },
  {
    type: "h3",
    text: "低代码",
  },
  {
    type: "p",
    text: "低代码与无代码类似,但在需要的地方留出编写少量代码的空间,例如用于特殊逻辑或与其他系统的集成。这类平台适合有一定技术能力、希望获得更大灵活性,同时仍想借助现成组件加快构建速度的团队。",
  },
  {
    type: "h3",
    text: "定制开发的软件",
  },
  {
    type: "p",
    text: "定制软件是根据企业的具体需求用代码编写的。你可以完全控制功能、外观、数据结构、集成和基础设施。这种灵活性是有代价的:开发时间更长、前期成本更高,而且需要持续的维护。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "昏暗房间里笔记本电脑屏幕上显示着一行行程序代码",
    caption: "在现成工具和定制代码之间选择,取决于需求,而不是哪个听起来更先进。",
  },
  { type: "h2", text: "无代码和低代码工具的优势所在" },
  {
    type: "p",
    text: "这些工具有真实的优点,一概否定它们是错误的。以下是它们常常成为最佳选择的情形。",
  },
  {
    type: "ul",
    items: [
      "速度:简单的应用几天或几周就能运行,因此想法可以被快速验证",
      "前期成本低:无需大笔前期投资,适合你还不确定流程或产品能否长久的时候",
      "由业务人员构建:了解流程的员工可以自己搭建,不必排队等待技术团队",
      "原型与验证:非常适合在进一步投资之前测试某个工作流程是否真的有用",
      "平台维护由服务商负责:安全和基础设施更新是他们的责任",
      "标准的内部流程:审批表单、任务跟踪、简单的数据收集和基础报表,通常都能很好地满足",
    ],
  },
  {
    type: "p",
    text: "如果你的需求是相当标准的内部流程,由几十个用户使用,且不涉及复杂的业务逻辑,那么现成工具往往能让每一分钱都花得最值。",
  },
  { type: "h2", text: "局限开始显现的地方" },
  {
    type: "p",
    text: "问题通常不会出现在第一个月,而是在应用被更广泛、更长时间地使用之后。以下是经常遇到的局限。",
  },
  {
    type: "h3",
    text: "独特的业务流程",
  },
  {
    type: "p",
    text: "现成平台是为常见情形设计的。当你的企业有特殊规则时,例如带有许多例外的阶梯定价、取决于众多条件的审批流程,或不寻常的仓库作业方式,你就会开始在平台内部搭建复杂的变通方案。到了某个时候,这些变通方案比普通代码更难维护。",
  },
  {
    type: "h3",
    text: "规模与性能",
  },
  {
    type: "p",
    text: "一个对十个用户和一千条数据运行流畅的应用,当用户增加到数百、数据达到数百万行时可能会变慢。现成平台通常会设定使用上限,或随着用量提高费用。使用定制软件,你可以根据实际使用模式优化数据结构和基础设施。",
  },
  {
    type: "h3",
    text: "与其他系统的集成",
  },
  {
    type: "p",
    text: "许多平台提供与常用应用的连接器,但与老旧系统、特殊设备或不常见的 API 集成可能很困难,甚至不可能。如果你的业务流程依赖不常见的系统,请先确认所考虑的平台是否真的能连接到它们。",
  },
  {
    type: "h3",
    text: "长期成本",
  },
  {
    type: "p",
    text: "起初看起来很小的订阅费用,会随着用户、高级功能和使用上限的增加而变大。而定制软件前期成本更高,但成本结构更可预测。请计算未来几年的总成本,而不只是第一个月,并纳入用户和数据增长的情形。",
  },
  {
    type: "h3",
    text: "所有权与平台锁定",
  },
  {
    type: "p",
    text: "在某个平台上构建的应用通常无法简单地搬走。数据也许可以导出,但如果切换,已经构建的逻辑和界面必须重新制作。这被称为供应商锁定(vendor lock-in)。此外,服务商在价格、功能或政策上的变化也不在你的控制之内。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1494059980473-813e73ee784b",
    alt: "一叠拼图碎片",
    caption: "技术决策最好与了解流程、并将每天使用系统的人共同做出。",
  },
  { type: "h2", text: "实用的决策框架" },
  {
    type: "p",
    text: "与其跟着潮流选择,不如诚实地回答以下问题。结果通常会清楚地指向某一边。",
  },
  {
    type: "ol",
    items: [
      "这个业务流程有多独特?如果大多数同类企业使用类似的流程,现成工具可能就够了",
      "预计两到三年内会有多少用户和多少数据?较大的增长预期指向更具扩展性的方案",
      "这个应用对运营有多重要?如果中断意味着业务停摆,控制力和可靠性就更重要",
      "需要与其他系统进行多少集成,尤其是不常见的系统?",
      "谁来维护这个应用?团队里是否有能胜任且有时间的人,还是需要外部合作伙伴?",
      "数据有多敏感,是否有监管或安全方面的需求要求更严格的控制?",
      "在现实的假设下,每个选项在三到五年内的总成本是多少?",
    ],
  },
  {
    type: "callout",
    title: "一条经验法则",
    text: "如果你的流程是标准的、规模较小,就从现成工具开始。如果你的流程是竞争优势、涉及许多集成,或将增长到很大规模,请从一开始就考虑定制软件,或规划一条清晰的迁移路径。",
  },
  { type: "h2", text: "混合方式与迁移路径" },
  {
    type: "p",
    text: "选择不必非黑即白。许多成功的企业采用混合方式。例如,对内部表单和简单报表等辅助流程使用无代码工具,而订单、库存或客户服务等核心系统则定制开发。或者先用现成工具作为 MVP 来验证流程,在证明有用之后再构建定制版本。",
  },
  {
    type: "p",
    text: "如果你打算日后切换,有几个步骤可以让它更容易。把流程和业务规则与平台分开记录。确保数据能以标准格式导出,并尽早做一次试验性导出。避免让核心业务逻辑依赖平台的专有功能。从一开始就确定表明该切换的临界点,例如用户数量、每月成本或无法满足的需求类型。",
  },
  { type: "h2", text: "应向任何服务商提出的问题" },
  {
    type: "ul",
    items: [
      "数据存储在哪里,如何完整导出?",
      "所选套餐的使用上限是多少,超出后会怎样?",
      "安全、备份和服务可用性方面的政策是什么?",
      "如果服务商调整价格、政策或停止运营,应用和数据会怎样?",
      "敏感数据的访问权限和审计轨迹如何管理?",
      "有哪些支持,使用你的团队能够沟通的语言和时区?",
      "对于定制软件:代码归谁所有,文档如何交接,上线后如何维护?",
    ],
  },
  { type: "h2", text: "团队的角色与所需技能" },
  {
    type: "p",
    text: "这种比较中常被忽略的一点是人的因素。无代码工具确实不需要编程技能,但仍然需要一个了解业务流程、能够对数据和流程进行结构化思考,并且有时间构建和维护应用的人。如果这个人是同时承担其他日常工作的员工,他构建的应用可能会依赖于一个人,在他调去做别的工作时难以交接。",
  },
  {
    type: "p",
    text: "对于定制软件,技术技能在开发者一方,但企业仍然需要派出一位了解流程并能迅速做出决定的代表。缺少流程负责人参与的项目,几乎总是产生技术上不错、却不符合实际工作方式的系统。无论你选择哪种方式,从一开始就要确定谁是流程的负责人、谁来维护,以及这些知识如何形成文档。",
  },
  { type: "h2", text: "常见错误" },
  {
    type: "ul",
    items: [
      "凭潮流或吸引人的演示做选择,而没有用真实流程进行测试",
      "以为无代码就不需要规划;混乱的流程在任何平台上依然混乱",
      "把企业的核心系统建在为轻量需求设计的工具上",
      "忽视长期成本和平台锁定",
      "为现成工具本已能很好服务的流程构建定制软件",
      "没有确定应用建成后由谁负责维护",
      "任由各部门自行搭建的许多小应用缺乏治理地增长,导致数据分散且难以审计",
    ],
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "在低代码、无代码和定制软件之间没有放之四海而皆准的答案。现成工具为标准需求提供速度和较低的前期成本;定制软件为独特或大型的需求提供控制力和成长空间。好的决策来自对业务流程、增长预期、集成需求和长期总成本的诚实认识。如有疑虑,就以不会把你锁住的方式从小处开始,让真实的使用情况告诉你何时该进一步迈步。",
  },
  {
    type: "cta",
    title: "不确定该选现成工具还是定制软件?",
    text: "AG·SORA 团队将客观评估你的需求,当现成工具确实更合适时,我们也会如实建议。咨询完全免费,无需任何承诺。",
    href: "/services/custom-software",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
