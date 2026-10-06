import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "In recent years, artificial intelligence has moved from a topic for researchers to a tool many people use every day. AI-based assistants can now write, summarize, answer questions, translate, and help with many office tasks. For small business owners, that news is both tempting and confusing: what is genuinely useful today, and what is just hype?",
  },
  {
    type: "p",
    text: "On one side there is the promise that AI will replace many jobs and save big costs. On the other there are stories of chatbots that answer wrongly, summaries that invent facts, and expensive AI projects that never got used. The truth lies in between. AI is a very useful tool when applied to the right problem with the right oversight, and very disappointing when expected to be a magic solution for everything.",
  },
  {
    type: "p",
    text: "This article looks at AI assistant trends for small businesses with a cool head. We'll cover uses that are already sensible, those that remain risky, how to choose a first use case, what to watch regarding data and security, and how to measure whether AI really saves time. There are no market figures or unsupportable claims here; what you get is practical guidance you can test yourself.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "AI is most useful for language-based and pattern-based repetitive work: drafting, summarizing, classifying, and answering common questions",
      "AI output needs human review, especially for matters involving money, contracts, law, health, or reputation",
      "Start with one small use case with a clear benefit, then expand once proven",
      "AI quality depends on the quality of the data and instructions given; messy data yields messy answers",
      "Protect customer data and business secrets; understand where your data goes when you use AI services",
    ],
  },
  { type: "h2", text: "From conversation tool to working assistant" },
  {
    type: "p",
    text: "The first wave of AI known to the public took the form of chat: you ask, it answers. The trend increasingly felt now is AI that doesn't just answer but also carries out steps: reading an email and drafting a reply, checking data and building a report, or running a series of actions across several applications as instructed. This approach is often called an AI assistant or agent.",
  },
  {
    type: "p",
    text: "For small businesses, this change matters because the biggest value lies not in clever answers but in time freed from repetitive administrative work. But the more authority AI is given to act, the greater the need for limits, human approval, and a record of what it did. Capability and risk grow together.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    alt: "Three-dimensional blue letters spelling AI",
    caption: "AI is most valuable when applied to a clear task, not when made the answer to everything.",
  },
  { type: "h2", text: "Uses that already make sense for small businesses" },
  {
    type: "p",
    text: "Here are several uses that generally bring real benefit with manageable risk. Note that in all of them, AI acts as a helper that speeds up human work, not a replacement for human judgment.",
  },
  { type: "h3", text: "Drafting content and communications" },
  {
    type: "p",
    text: "Writing product descriptions, email drafts, replies to customer reviews, or article outlines is time-consuming work well suited to AI help. An AI draft gives a starting point so you aren't facing a blank page. But drafts need editing to match your style and business facts, because AI can write things that sound convincing but are wrong, such as prices, specifications, or promises you never made.",
  },
  { type: "h3", text: "Summarizing documents and conversations" },
  {
    type: "p",
    text: "Summarizing meeting minutes, long email threads, or thick contract documents to catch the main points is a very useful use. A summary helps you decide what needs careful reading. For important documents, treat the summary as a guide, not a substitute for reading the crucial parts yourself.",
  },
  { type: "h3", text: "Answering repeated customer questions" },
  {
    type: "p",
    text: "Questions about opening hours, shipping costs, how to order, return policy, or order status are often repeated and eat up time. An AI assistant trained on your business's official information can answer routine ones and hand complicated ones to a human. It's important to set clear limits and an escalation path; more is in our article on customer service chatbots, their benefits and limits.",
  },
  { type: "h3", text: "Classifying and tidying incoming data" },
  {
    type: "p",
    text: "AI is fairly reliable at sorting incoming messages by topic, recognizing urgent messages, or extracting information from documents like invoices and forms. The boring, typo-prone work of entering data from documents can be reduced, with results still sample-checked by humans. See also our discussion of automating data entry from documents.",
  },
  { type: "h3", text: "Analyzing sales data and building reports" },
  {
    type: "p",
    text: "With well-organized data, AI can help explain trends in plain language, highlight anomalies, or answer questions like which products dropped this month. This democratizes access to data for owners who are uncomfortable with complicated spreadsheets. Accuracy still depends on data quality and how questions are asked, so important figures need to be verified against the source.",
  },
  { type: "h2", text: "Uses that still need extra caution" },
  {
    type: "p",
    text: "There are tempting areas that are risky if handed entirely to AI without oversight. Decisions involving large sums of money, credit approvals, employee evaluations, legal or medical advice, and crisis communication with customers all require responsible human judgment. AI can help prepare material, but final responsibility can't be handed to a machine.",
  },
  {
    type: "p",
    text: "Another risk is over-dependence and loss of understanding. If a team stops understanding its work because AI always does it, mistakes become hard to recognize. A healthy practice is making sure someone still understands the basic process so they can judge whether AI output makes sense. For a fuller discussion of risks, read our article on AI risks in operations.",
  },
  {
    type: "callout",
    title: "A rule of thumb for oversight level",
    text: "The bigger the consequence of a mistake, the stricter the human oversight needed. A social media caption draft can be approved quickly. Answers about prices, policies, or legal matters must be checked. Actions that can't be undone, like payments or data deletion, should always wait for human approval.",
  },
  { type: "h2", text: "How to choose your first use case" },
  {
    type: "p",
    text: "A common mistake is starting from the technology: we must use AI, so let's look for a place for it. A healthier approach starts from the problem. Ask which work most consumes the team's time, is repetitive, and is language- or pattern-based. That is where AI is most likely to bring quick benefits. A more detailed discussion of first steps is in our article on starting AI automation for operations.",
  },
  {
    type: "ol",
    items: [
      "List the tasks that consume the most team time each week and note the estimated hours spent",
      "Pick one that is repetitive, has fairly clear rules, and where a mistake has small or easily corrected consequences",
      "Define what a good result looks like, including examples of correct and incorrect output",
      "Run a small trial with a few people for a few weeks, with full oversight",
      "Compare time and quality before and after, including the time needed to check and fix AI results",
      "Decide to expand, adjust, or stop based on evidence, not enthusiasm",
    ],
  },
  { type: "h2", text: "Data is the fuel" },
  {
    type: "p",
    text: "The quality of AI output depends heavily on the quality and completeness of the data given to it. An assistant that will answer customer questions needs accurate, current, and consistent information about products, prices, and policies. If internal documents contradict each other or are outdated, the AI's answers will be muddled too. Many AI projects fail not because the model is bad but because the material provided is messy.",
  },
  {
    type: "p",
    text: "So tidying business data and documents is often the most important preparatory work. Centralize official information in one place, decide who is responsible for updating it, and discard old versions. This work is beneficial even without AI, because human teams are more efficient when information is tidy. This aligns with our discussion of the hidden cost of data scattered in many places.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "A white humanoid robot with a tablet screen on its chest",
    caption: "An AI assistant is only as good as the information given to it, so tidy your data before deploying one.",
  },
  { type: "h2", text: "Privacy and security: questions you must ask" },
  {
    type: "p",
    text: "Every time you use an AI service, the data you enter is sent somewhere. Before choosing a service, understand a few things. Is your data used to train other people's models? Where is it stored and for how long? Who can access it? Are there settings separating business data from public data? The answers differ between services and plans, so read the terms carefully.",
  },
  {
    type: "ul",
    items: [
      "Don't enter customers' personal data, passwords, or trade secrets into a service whose data policy you don't yet understand",
      "Set internal rules about what kinds of information may and may not be given to AI tools",
      "Choose a plan or setting that guarantees business data isn't used to train general models, where available",
      "Limit AI's access to internal systems to what is necessary and log the actions it takes",
      "Understand the personal data protection obligations that apply to your business and check the latest requirements",
      "Prepare a plan for when a service changes, raises prices, or stops operating",
    ],
  },
  { type: "h2", text: "Build, buy, or combine" },
  {
    type: "p",
    text: "For general needs like writing and summarizing, ready-made AI services are usually enough and cheapest to start with. For needs closely tied to your business's specific data and processes, such as an assistant that answers based on your catalog and stock or that runs actions in internal systems, a tailored or integrated solution is more suitable. Most businesses end up with a combination of both.",
  },
  {
    type: "p",
    text: "An important consideration in choosing is integration. AI that stands alone, separate from your POS, ERP, and CRM, can only work with information you copy manually. Connected AI can read relevant data and act within the limits you set, so its benefit is far greater. That is why API integration is an important part of a serious AI plan.",
  },
  { type: "h2", text: "Measuring whether AI really helps" },
  {
    type: "p",
    text: "It's easy to feel AI is helping because results appear fast, but feelings are not evidence. Measure honestly. How much time is genuinely saved after subtracting the time to check and fix its output? Is the quality of results equal or better? Did any mistakes slip through and cause harm? Does the team feel helped or burdened by the new tool?",
  },
  {
    type: "p",
    text: "Costs also need to be counted in full: subscriptions, preparation time, team training, and oversight time. Sometimes the savings are real and clear; sometimes the benefit is more about quality or consistency than saved time. Whatever the outcome, record and review it regularly, because tools and prices in this field change quickly and a decision that is right today may need revisiting next year.",
  },
  { type: "h2", text: "Preparing the team and work culture" },
  {
    type: "p",
    text: "New technology often fails not because of the tool but because people aren't ready or don't trust it. Explain to the team that the goal of AI is to free them from boring work so they can do more valuable things, not just to cut people. Involve them in choosing use cases, since they know best which work is tormenting and which needs a human touch.",
  },
  {
    type: "p",
    text: "Give short training on writing clear instructions, recognizing doubtful output, and when to stop relying on AI. Decide who is responsible for the final result. A healthy culture treats AI as a fast but supervised junior colleague, not as an always-right oracle.",
  },
  {
    "type": "h2",
    "text": "A 30-day plan to get started"
  },
  {
    "type": "p",
    "text": "For those who want to try without getting trapped in a big project, here is a simple month-long plan. The aim isn't to automate the entire business but to learn at low risk and prove value before investing further."
  },
  {
    "type": "h3",
    "text": "Week one: choose and prepare"
  },
  {
    "type": "p",
    "text": "Gather the team and a list of repetitive tasks that consume the most time. Pick one that is low-risk and whose results are easy to judge, such as drafting replies to common customer questions or summarizing meeting minutes. Set the measures of success at the start, such as the estimated time usually spent and the expected quality of results. Collect the official documents to be used as reference and discard outdated versions."
  },
  {
    "type": "h3",
    "text": "Week two: try with full oversight"
  },
  {
    "type": "p",
    "text": "Run the trial with two or three people. Every AI output is reviewed by a human before use. Record the time spent writing instructions, checking, and fixing, along with examples of mistakes that appear. Improve the instructions and reference material based on those mistakes. The first two weeks often show that output quality depends heavily on the clarity of instructions and the tidiness of the material."
  },
  {
    "type": "h3",
    "text": "Week three: adjust and set rules"
  },
  {
    "type": "p",
    "text": "Write a short internal guide: what may and may not be entered into AI tools, who reviews, and when results must not be used without checking. Make sure everyone on the team involved understands it. If the trial touches customer data, check the service terms and data policy before continuing."
  },
  {
    "type": "h3",
    "text": "Week four: assess and decide"
  },
  {
    "type": "p",
    "text": "Compare results with the measures set at the start. Was time really saved after accounting for checking? Is the quality adequate? Does the team feel helped? Decide openly: expand to similar tasks, adjust the approach, or stop. Stopping because evidence shows the benefit is small is also a good outcome, because you avoid larger costs."
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "The AI assistant trend is real, and small businesses that use it wisely can save time and improve consistency of service. The key is realism: choose a clear problem, tidy your data, protect privacy, oversee the results, and measure the impact honestly. Start with one small step, learn from the results, and expand when proven. That way AI becomes a tool that strengthens your business, not a source of expensive surprises.",
  },
  {
    type: "cta",
    title: "Want to apply AI realistically in your business?",
    text: "The AG·SORA team helps choose the right use case and build AI automation connected to your systems, complete with human oversight. Consultation is free, with no commitment.",
    href: "/services/ai-automation",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "近几年,人工智能已从研究人员的话题变成许多人每天使用的工具。基于 AI 的助手现在可以写作、总结、回答问题、翻译,并协助完成许多办公任务。对小企业主来说,这个消息既诱人又令人困惑:今天真正有用的是什么,哪些只是炒作?",
  },
  {
    type: "p",
    text: "一方面,有人承诺 AI 将取代许多工作并节省大笔成本。另一方面,也有聊天机器人答错、摘要编造事实、昂贵的 AI 项目从未被使用的故事。真相介于两者之间。当 AI 被用在对的问题上并有适当监督时,它是非常有用的工具;如果指望它成为解决一切的神奇方案,则会令人非常失望。",
  },
  {
    type: "p",
    text: "本文以冷静的头脑审视面向小企业的 AI 助手趋势。我们将讨论已经合理的用途、仍有风险的用途、如何选择第一个应用场景、在数据和安全方面需要留意什么,以及如何衡量 AI 是否真的节省了时间。这里没有市场数据或无法支撑的论断;你得到的是可以自己检验的实用指引。",
  },
  { type: "h2", text: "摘要" },
  {
    type: "ul",
    items: [
      "AI 最适合基于语言和模式的重复性工作:起草、总结、分类以及回答常见问题",
      "AI 的输出需要人工审核,尤其是涉及资金、合同、法律、健康或声誉的事项",
      "从一个效益明确的小场景开始,证明有效后再扩展",
      "AI 的质量取决于所提供数据和指令的质量;数据混乱,答案也会混乱",
      "保护客户数据和商业机密;了解使用 AI 服务时数据被发送到哪里",
    ],
  },
  { type: "h2", text: "从对话工具到会干活的助手" },
  {
    type: "p",
    text: "公众最早认识的第一波 AI 是聊天形式:你问,它答。如今越来越明显的趋势是,AI 不仅回答,还会执行步骤:读取邮件并起草回复、检查数据并生成报告,或按指示在多个应用之间执行一系列操作。这种方式常被称为 AI 助手或智能体。",
  },
  {
    type: "p",
    text: "对小企业来说,这个变化很重要,因为最大的价值不在于聪明的回答,而在于从重复的行政工作中释放出来的时间。但赋予 AI 的行动权限越大,就越需要设定界限、人工批准,以及对其所做之事的记录。能力与风险同步增长。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    alt: "蓝色三维字母拼出 AI",
    caption: "当 AI 用于明确的任务时最有价值,而不是被当作一切问题的答案。",
  },
  { type: "h2", text: "已经适合小企业的用途" },
  {
    type: "p",
    text: "以下是几种通常能带来实际好处且风险可控的用途。请注意,在所有这些用途中,AI 都是加快人类工作的帮手,而不是人类判断的替代品。",
  },
  { type: "h3", text: "起草内容与沟通文本" },
  {
    type: "p",
    text: "撰写产品描述、邮件草稿、回复客户评价或文章大纲,这些耗时的工作很适合借助 AI。AI 的草稿提供了起点,让你不必面对空白页。但草稿需要编辑,以符合你的风格和业务事实,因为 AI 可能写出听起来令人信服却错误的内容,例如价格、规格或你从未做出的承诺。",
  },
  { type: "h3", text: "总结文档与对话" },
  {
    type: "p",
    text: "总结会议纪要、冗长的邮件往来或厚重的合同文件以抓住要点,是非常有用的用途。摘要帮助你决定哪些内容需要细读。对于重要文件,把摘要当作向导,而不是代替你亲自阅读关键部分。",
  },
  { type: "h3", text: "回答重复的客户问题" },
  {
    type: "p",
    text: "关于营业时间、运费、下单方式、退货政策或订单状态的问题经常重复,占用大量时间。以你企业官方信息训练的 AI 助手可以回答常规问题,并把复杂的问题转交给人工。设定清晰的界限和升级路径很重要;更多内容见我们关于客服聊天机器人的优势与局限的文章。",
  },
  { type: "h3", text: "分类并整理传入数据" },
  {
    type: "p",
    text: "AI 在按主题整理传入信息、识别紧急信息,或从发票和表单等文件中提取信息方面相当可靠。从文件录入数据这类枯燥且容易打错字的工作可以减少,结果仍由人工抽查。另请参阅我们关于从文档自动录入数据的讨论。",
  },
  { type: "h3", text: "分析销售数据并生成报告" },
  {
    type: "p",
    text: "在数据整理良好的情况下,AI 可以帮助用平实的语言解释趋势、突出异常,或回答诸如本月哪些产品下滑之类的问题。这让不习惯复杂电子表格的老板也能接触到数据。准确性仍取决于数据质量和提问方式,所以重要数字需要对照原始来源核实。",
  },
  { type: "h2", text: "仍需格外谨慎的用途" },
  {
    type: "p",
    text: "有些领域很诱人,但若完全交给 AI 而不加监督就有风险。涉及大额资金的决定、授信审批、员工评估、法律或医疗建议,以及与客户的危机沟通,都需要负责任的人工判断。AI 可以帮助准备材料,但最终责任不能转交给机器。",
  },
  {
    type: "p",
    text: "另一个风险是过度依赖和理解的丧失。如果团队因为总是由 AI 来做而不再理解自己的工作,错误就难以识别。健康的做法是确保仍有人理解基本流程,以便判断 AI 的输出是否合理。关于风险的更完整讨论,请阅读我们关于运营中 AI 风险的文章。",
  },
  {
    type: "callout",
    title: "监督程度的经验法则",
    text: "错误的后果越大,所需的人工监督就越严格。社交媒体文案草稿可以较快批准。关于价格、政策或法律事项的回答必须检查。无法撤销的操作,如付款或删除数据,应始终等待人工批准。",
  },
  { type: "h2", text: "如何选择第一个应用场景" },
  {
    type: "p",
    text: "常见的错误是从技术出发:我们必须用 AI,于是到处找地方放它。更健康的做法是从问题出发。问问哪项工作最耗费团队时间、重复性强,并且基于语言或模式。那里最有可能让 AI 迅速带来好处。关于第一步的更详细讨论,见我们关于为运营启动 AI 自动化的文章。",
  },
  {
    type: "ol",
    items: [
      "列出每周最耗费团队时间的工作,并记录大致所用的小时数",
      "选一项重复、规则相当清晰,且出错后果小或容易纠正的工作",
      "定义好结果的样子,包括正确与错误输出的示例",
      "与几个人一起进行为期几周的小规模试验,并全程监督",
      "比较前后的时间和质量,包括检查和修正 AI 结果所需的时间",
      "依据证据而不是热情来决定扩展、调整还是停止",
    ],
  },
  { type: "h2", text: "数据是燃料" },
  {
    type: "p",
    text: "AI 输出的质量在很大程度上取决于提供给它的数据的质量和完整性。要回答客户问题的助手,需要关于产品、价格和政策的准确、最新且一致的信息。如果内部文档相互矛盾或已经过时,AI 的回答也会混乱。许多 AI 项目失败并不是因为模型不好,而是因为提供的材料杂乱。",
  },
  {
    type: "p",
    text: "因此整理企业数据和文档往往是最重要的准备工作。把官方信息集中在一处,确定由谁负责更新,并清除旧版本。即使没有 AI,这项工作也有益,因为信息整齐时人类团队同样更高效。这与我们关于数据分散各处的隐性成本的讨论相呼应。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "一个白色人形机器人,胸前有一块平板屏幕",
    caption: "AI 助手的水平取决于提供给它的信息,所以部署之前先整理好数据。",
  },
  { type: "h2", text: "隐私与安全:必须提出的问题" },
  {
    type: "p",
    text: "每次使用 AI 服务时,你输入的数据都会被发送到某个地方。在选择服务之前,要弄清几件事。你的数据会被用来训练别人的模型吗?存放在哪里、保存多久?谁可以访问?是否有设置把企业数据与公共数据分开?各服务和各套餐的答案不同,所以请仔细阅读条款。",
  },
  {
    type: "ul",
    items: [
      "不要把客户的个人数据、密码或商业机密输入到你尚不了解其数据政策的服务中",
      "制定内部规则,说明哪些类型的信息可以、哪些不可以提供给 AI 工具",
      "在可行时,选择能保证企业数据不被用于训练通用模型的套餐或设置",
      "把 AI 对内部系统的访问限制在必要范围内,并记录它所执行的操作",
      "了解适用于你企业的个人数据保护义务,并查阅最新要求",
      "为服务变更、涨价或停止运营的情况准备预案",
    ],
  },
  { type: "h2", text: "自建、购买还是组合" },
  {
    type: "p",
    text: "对于写作和总结这类通用需求,现成的 AI 服务通常就够用,而且起步成本最低。对于与你企业特定数据和流程紧密相关的需求,例如根据你的商品目录和库存作答、或在内部系统中执行操作的助手,定制或集成的方案更合适。大多数企业最终会采用两者的组合。",
  },
  {
    type: "p",
    text: "选择时一个重要的考量是集成。独立运行、与你的 POS、ERP 和 CRM 分离的 AI,只能处理你手工复制过去的信息。互联的 AI 可以读取相关数据,并在你设定的范围内行动,因此好处大得多。这就是 API 集成成为严肃 AI 计划重要组成部分的原因。",
  },
  { type: "h2", text: "衡量 AI 是否真的有帮助" },
  {
    type: "p",
    text: "因为结果出得快,人们很容易觉得 AI 有帮助,但感觉不是证据。要诚实地衡量。扣除检查和修正其输出的时间后,真正节省了多少时间?结果的质量是相当还是更好?是否有错误漏过并造成损害?团队觉得被帮助了,还是被这个新工具增加了负担?",
  },
  {
    type: "p",
    text: "成本也需要完整计算:订阅费、准备时间、团队培训和监督时间。有时节省是真实而明确的;有时好处更多体现在质量或一致性而非节省时间。无论结果如何,都要记录并定期回顾,因为这个领域的工具和价格变化很快,今天正确的决定明年可能需要重新审视。",
  },
  { type: "h2", text: "团队准备与工作文化" },
  {
    type: "p",
    text: "新技术失败往往不是因为工具,而是因为人没有准备好或不信任它。向团队说明,AI 的目标是让他们摆脱枯燥的工作,去做更有价值的事,而不仅仅是裁员。让他们参与选择应用场景,因为他们最清楚哪些工作令人痛苦,哪些需要人情味。",
  },
  {
    type: "p",
    text: "提供简短的培训,内容包括如何写清楚的指令、如何识别可疑的输出,以及何时应当不再依赖 AI。确定由谁对最终结果负责。健康的文化把 AI 当作一位速度快但需要监督的初级同事,而不是永远正确的神谕。",
  },
  {
    "type": "h2",
    "text": "30 天启动计划"
  },
  {
    "type": "p",
    "text": "对于想尝试又不想陷入大项目的人,这里有一个为期一个月的简单计划。目标不是把整个企业自动化,而是以低风险学习,并在进一步投入之前证明价值。"
  },
  {
    "type": "h3",
    "text": "第一周:选择与准备"
  },
  {
    "type": "p",
    "text": "召集团队,并列出最耗时的重复性工作。选择一项风险低、结果容易评判的,例如起草对常见客户问题的回复,或总结会议纪要。从一开始就设定成功的衡量标准,例如通常所花时间的估计和期望的结果质量。收集将作为参考的官方文件,并剔除过时的版本。"
  },
  {
    "type": "h3",
    "text": "第二周:在全面监督下试用"
  },
  {
    "type": "p",
    "text": "与两三个人一起进行试验。AI 的每一份输出在使用前都由人审核。记录撰写指令、检查和修正所花的时间,以及出现的错误示例。根据这些错误改进指令和参考材料。前两周常常表明,输出质量在很大程度上取决于指令的清晰度和材料的整齐程度。"
  },
  {
    "type": "h3",
    "text": "第三周:调整并制定规则"
  },
  {
    "type": "p",
    "text": "撰写一份简短的内部指南:哪些内容可以、哪些不可以输入 AI 工具,由谁审核,以及什么情况下结果不得未经检查就使用。确保所有相关团队成员都理解。如果试验涉及客户数据,请在继续之前检查服务条款和数据政策。"
  },
  {
    "type": "h3",
    "text": "第四周:评估与决定"
  },
  {
    "type": "p",
    "text": "把结果与开始时设定的衡量标准比较。计入检查时间后,是否真的节省了时间?质量是否足够?团队觉得有帮助吗?公开地做出决定:扩展到类似的工作、调整做法,或者停止。因为证据显示好处很小而停止,同样是好结果,因为你避免了更大的成本。"
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "AI 助手的趋势是真实的,明智使用它的小企业可以节省时间并提升服务的一致性。关键在于务实:选择明确的问题,整理好数据,保护隐私,监督结果,并诚实地衡量影响。从一个小步开始,从结果中学习,证明有效后再扩展。这样,AI 就会成为增强你企业的工具,而不是昂贵意外的来源。",
  },
  {
    type: "cta",
    title: "想在你的企业中务实地应用 AI?",
    text: "AG·SORA 团队帮助选择合适的应用场景,并构建与你的系统相连的 AI 自动化,同时保留人工监督。咨询完全免费,无需任何承诺。",
    href: "/services/ai-automation",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
