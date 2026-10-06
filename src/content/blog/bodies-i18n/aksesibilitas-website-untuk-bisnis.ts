import type { Block } from "@/config/blog";

const en: Block[] = [
  {
    type: "p",
    text: "When people talk about a business website, most think about looks, speed, and Google ranking. One aspect is often missed even though its impact is wide: accessibility, meaning how easily your website can be used by people in a variety of conditions and abilities. This is not a niche topic for a handful of people. Every visitor has been in a situation where using a website was harder than usual.",
  },
  {
    type: "p",
    text: "Imagine someone with limited vision using a screen reader, an older person who needs larger text, a user with an injured hand who can only use a keyboard, or a customer opening your website in bright sunlight with a glaring screen. They are all potential customers. A website that is hard for them to use loses opportunities, often without the owner noticing.",
  },
  {
    type: "p",
    text: "This article explains website accessibility in practical language for business owners. We'll look at why it matters to a business, the basic principles, the most impactful fixes, how to check, and how accessibility turns out to align with SEO and user experience in general. There are no numeric claims we can't stand behind; what we discuss are practices you can apply and verify yourself.",
  },
  { type: "h2", text: "Summary" },
  {
    type: "ul",
    items: [
      "Accessibility means a website can be used by people in a variety of conditions, including temporary and situational ones, not only people with permanent disabilities",
      "Many of the most impactful fixes are cheap and simple: color contrast, image alt text, form labels, and keyboard navigation",
      "Accessible practices are almost always also good for SEO, speed, and the comfort of every visitor",
      "Automated checks help but are not enough; hands-on testing with a keyboard and a screen reader is still needed",
      "Accessibility is cheaper when built in from design than patched on after the website is finished",
    ],
  },
  { type: "h2", text: "Why accessibility matters for business" },
  {
    type: "p",
    text: "The first reason is reach. The more people who can use your website comfortably, the more can become customers. Small barriers, such as a button that can't be reached without a mouse or a form with unclear labels, can make someone give up midway, and you'll see it in reports as nothing more than a visitor who left.",
  },
  {
    type: "p",
    text: "The second reason is temporary and situational conditions. A broken hand, tired eyes, a glaring screen, a slow connection, or a phone used while standing on public transport all reduce a person's ability to use an interface. Accessible design helps people in all of these conditions, not only those with permanent limitations. Older users, whose number keeps growing, also benefit greatly.",
  },
  {
    type: "p",
    text: "The third reason is reputation and trust. A website that is neat and easy for anyone to use reflects a business that cares about its customers. In addition, in a number of countries there are rules or standards requiring certain digital services to be accessible. If your business serves overseas markets or a regulated sector, check the latest applicable requirements, because rules can change and differ between regions.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    alt: "A monitor showing a website page design in a design application",
    caption: "Accessibility is cheapest when thought about at the design stage, not after the page is built.",
  },
  { type: "h2", text: "Four basic principles that are easy to remember" },
  {
    type: "p",
    text: "Widely recognized web accessibility standards organize their principles into four groups. You don't need to memorize the standards document to grasp the essence. The following four keywords are enough to help you assess your own website.",
  },
  { type: "h3", text: "Perceivable" },
  {
    type: "p",
    text: "Information must be capturable by users through at least one sense they have. Important images need replacement text so they can be read aloud, videos need captions, and text needs enough contrast against its background. Information must not be conveyed by color alone, for example marking a wrong field only in red without a text message.",
  },
  { type: "h3", text: "Operable" },
  {
    type: "p",
    text: "All functions must be usable without depending on a single input method. Menus, buttons, and forms must be reachable and operable by keyboard. Users need enough time to read and act, and pages must not flash or move in ways that can disturb or harm. Tap targets on phones need to be large enough to avoid mis-touches.",
  },
  { type: "h3", text: "Understandable" },
  {
    type: "p",
    text: "Language, layout, and page behavior must be consistent and predictable. Instructions are clear, error messages explain what went wrong and how to fix it, and navigation works the same way on every page. Declaring the page language correctly also helps screen readers pronounce the text properly.",
  },
  { type: "h3", text: "Robust" },
  {
    type: "p",
    text: "Content must work well across a variety of browsers, devices, and assistive technologies, including future ones. The most basic practice for this is using the correct HTML elements for their purpose, rather than imitating buttons or headings with arbitrary elements styled to look similar.",
  },
  { type: "h2", text: "The most impactful fixes" },
  {
    type: "p",
    text: "The good news is that most common accessibility problems can be solved with relatively simple fixes. Below are those that most often make the biggest difference on ordinary business websites such as company profiles, online stores, and landing pages.",
  },
  { type: "h3", text: "Contrast and text legibility" },
  {
    type: "p",
    text: "Light gray text on a white background may look elegant on a designer's screen, but it is hard for many people to read, especially on a phone in bright light. Make sure the contrast ratio between text and background is adequate, the base font size is large enough, and text can be enlarged by visitors without breaking the layout. Avoid text embedded in images because it can't be enlarged or read aloud well.",
  },
  { type: "h3", text: "Alternative text for images" },
  {
    type: "p",
    text: "Every image that carries meaning needs a short, honest description of its content. This description is read by screen readers and also used by search engines to understand the image. Purely decorative images should be marked to be skipped. Avoid descriptions that just say image or a file name; describe what appears and why it is relevant to the page.",
  },
  { type: "h3", text: "Clear form labels" },
  {
    type: "p",
    text: "Contact, registration, and payment forms are where a business makes money, and also where accessibility barriers cost the most. Every field needs a correctly connected label so screen readers know its purpose. Don't rely only on placeholder text that disappears while typing. Error messages should appear near the field, be explained in words, and not rely on a color change alone.",
  },
  { type: "h3", text: "Keyboard navigation" },
  {
    type: "p",
    text: "Try exploring your website using only the Tab, Shift+Tab, Enter, and space keys. Can you reach every menu and button? Does the focus order make sense? Is it clear which element is currently focused? Many websites remove the focus outline for aesthetics, even though it is the only position cue for keyboard users. Providing a skip link to the main content also helps a lot.",
  },
  { type: "h3", text: "Correct heading structure" },
  {
    type: "p",
    text: "Use headings that are logically tiered, with one main heading per page and subheadings following the hierarchy. Screen reader users often jump between headings to scan a page, just as ordinary readers scan with their eyes. This tidy structure also helps search engines understand your page's content.",
  },
  {
    type: "ul",
    items: [
      "Adequate text and background contrast, and a base font size that is comfortable to read",
      "Meaningful alternative text for every informative image",
      "Correctly connected form labels, with clear error messages",
      "All functions reachable and usable by keyboard, with a visible focus indicator",
      "A logical heading hierarchy and use of HTML elements for their intended purpose",
      "Captions or transcripts for important video and audio content",
      "Tap targets large enough on mobile devices",
    ],
  },
  { type: "h2", text: "Accessibility and SEO go hand in hand" },
  {
    type: "p",
    text: "One piece of encouraging news for business owners is that many accessibility practices also benefit SEO. Search engines are essentially visitors who can't see: they read structure and text, not visual appearance. Alt text helps them understand images. Tiered headings help them understand topics. Links with descriptive text, rather than just click here, help them understand the destination page.",
  },
  {
    type: "p",
    text: "The same goes for speed and code tidiness. Websites that use HTML elements correctly are generally lighter, easier to maintain, and more stable across devices. That benefits user experience, which in turn affects how long visitors stay and whether they complete the actions you hope for. For the basics, see our discussion of basic SEO for company websites.",
  },
  { type: "h2", text: "How to check your website's accessibility" },
  {
    type: "p",
    text: "A good accessibility check combines automated tools with manual testing. Automated tools, available as browser extensions or audit features, quickly find technical problems such as images without alt text, insufficient contrast, or missing form labels. But automated tools catch only part of the problems; many things involving meaning and experience can only be judged by humans.",
  },
  {
    type: "ol",
    items: [
      "Run automated checks on the most important pages: home, product or service pages, contact form, and payment flow",
      "Explore those pages using only the keyboard and note points that can't be reached or whose focus is unclear",
      "Zoom in several times and make sure the layout stays readable without horizontal scrolling",
      "Try the built-in screen reader of your operating system on one main flow to feel the experience",
      "View the website on a phone screen in bright light and with a larger system font size setting",
      "Record findings, rank them by impact on visitors' important tasks, and fix them step by step",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    alt: "A desk with a monitor, tablet, and phone showing a web page design",
    caption: "Test the website on various devices and ways of using it, not only on the screens its builders use.",
  },
  { type: "h2", text: "Things that are often missed" },
  {
    type: "p",
    text: "Several areas often escape attention. First is third-party content, such as chat widgets, embedded maps, video players, and external forms. These elements can bring their own accessibility problems, so choose providers that pay attention to it and test after installing. Second is downloadable documents, such as brochures and catalogs in PDF format, which are often scanned images with no readable text.",
  },
  {
    type: "p",
    text: "Third is custom interactive elements: sliding menus, carousels, popup windows, and tabs. Self-built components often can't be operated by keyboard or don't tell screen readers about their changes. A popup that covers the page but doesn't capture focus properly is a classic example that traps some users. Fourth is animation and moving content; provide a way to stop it, and respect system settings for users uncomfortable with motion.",
  },
  {
    type: "callout",
    title: "Beware of overly instant solutions",
    text: "Some services offer a single line of code that supposedly makes a website instantly accessible. Such helper tools can complement, but they don't replace the right foundations: good HTML structure, adequate contrast, and meaningful alternative text. The real fix lives in your code and content.",
  },
  { type: "h2", text: "Building accessibility into your workflow" },
  {
    type: "p",
    text: "Accessibility is cheapest and most effective when it is part of the process from the start. At the design stage, set a color palette that meets contrast, comfortable font sizes, and a clear focus indicator style. At the development stage, use the right HTML elements and proven components. At the content stage, make a habit of writing alternative text, meaningful headings, and descriptive links.",
  },
  {
    type: "p",
    text: "Also include accessibility checks in your launch checklist and routine updates. Many websites start well and then decline because new content is added without alt text or with images containing text. Setting simple habits for the team that manages content is often more effective than a big audit done once.",
  },
  { type: "h2", text: "The impact on sales and service" },
  {
    type: "p",
    text: "For an online store, accessibility is directly tied to sales. A payment process that can only be completed with a mouse, an unlabeled address field, or a pay button that is hard to recognize will stop some buyers at the last step. For a company profile website, a hard-to-reach contact means lost prospects. For a service business, an appointment form that isn't keyboard-friendly means some customers can't book.",
  },
  {
    type: "p",
    text: "So treat accessibility as part of service quality, not an extra burden. A fix that helps one group of users usually makes the experience smoother for everyone. Compare it to the ramp at a shop entrance built for wheelchair users, but also used by people pushing strollers or carrying heavy goods.",
  },
  {
    "type": "h2",
    "text": "Questions business owners often ask"
  },
  {
    "type": "h3",
    "text": "Does accessibility make a website ugly or expensive?"
  },
  {
    "type": "p",
    "text": "No. Accessibility limits some choices, such as colors with too-low contrast, but doesn't prevent beautiful design. Many websites look attractive and are accessible. The cost is lowest when thought about from the start; fixing it later is indeed more expensive because some structure has to be torn up."
  },
  {
    "type": "h3",
    "text": "Is it enough to install a third-party helper tool on the website?"
  },
  {
    "type": "p",
    "text": "Such tools can add comfort, for example font size adjusters, but they don't replace the right foundations in code and content. Users of assistive technology often already have their own tools, and what they need is a website that works well with those tools."
  },
  {
    "type": "h3",
    "text": "Where should we start if the website is already running?"
  },
  {
    "type": "p",
    "text": "Start with the pages and flows that matter most to the business: the home page, service or product pages, contact form, and payment process. Fix contrast, alt text, form labels, and keyboard navigation there first. After that, make it the standard for all pages and new content, so problems don't reappear."
  },
  {
    "type": "h3",
    "text": "How often should it be rechecked?"
  },
  {
    "type": "p",
    "text": "Whenever there is a major change to the look, a feature is added, or a third-party component provider changes, and at least periodically several times a year. A website is something that keeps changing, and accessibility that is good today can decline if new content is added without attention."
  },
  { type: "h2", text: "Closing" },
  {
    type: "p",
    text: "Accessibility is not a luxury feature and not a concern of a small group of users. It is a measure of how ready your website is to welcome everyone who wants to deal with your business. Start with small steps: check contrast, complete alt text, tidy forms, and try exploring the website with a keyboard. From there, make accessibility part of how your team designs, builds, and fills the website. The result is a website that is friendlier, easier to find, and better prepared to generate customers.",
  },
  {
    type: "cta",
    title: "Want a website that is friendly to every visitor?",
    text: "The AG·SORA team builds websites that are fast, tidy, and accessible from the design stage. Consultation is free, with no commitment.",
    href: "/services/website",
    label: "Free Consultation",
  },
];

const zh: Block[] = [
  {
    type: "p",
    text: "谈到企业网站,大多数人想到的是外观、速度和谷歌排名。有一个方面常被忽略,尽管影响很广:无障碍,也就是你的网站对处于各种状况和能力下的人而言有多容易使用。这并不是只涉及少数人的小众话题。每位访客都曾遇到过使用网站比平时更困难的情形。",
  },
  {
    type: "p",
    text: "想象一下:视力有限而使用屏幕阅读器的人、需要更大字体的长者、手部受伤只能用键盘的用户,或是在烈日下用反光屏幕打开你网站的客户。他们都是潜在客户。对他们而言难以使用的网站会失去机会,而且往往连网站所有者都没有察觉。",
  },
  {
    type: "p",
    text: "本文用对企业主实用的语言解释网站无障碍。我们将看到它为何对企业重要、基本原则、影响最大的修复、如何检查,以及无障碍与搜索引擎优化和整体用户体验如何相互契合。我们不做无法负责的数字论断;讨论的都是你自己可以应用并核实的做法。",
  },
  { type: "h2", text: "摘要" },
  {
    type: "ul",
    items: [
      "无障碍意味着网站可供处于各种状况的人使用,包括暂时性和情境性的状况,而不仅是永久性残障人士",
      "许多影响最大的修复既便宜又简单:颜色对比度、图片替代文本、表单标签和键盘导航",
      "无障碍的做法几乎总是同时有利于搜索引擎优化、速度和每位访客的舒适度",
      "自动检查有帮助但不够;仍需用键盘和屏幕阅读器进行实际测试",
      "无障碍从设计阶段就纳入,比网站完成后再打补丁便宜得多",
    ],
  },
  { type: "h2", text: "无障碍为何对企业重要" },
  {
    type: "p",
    text: "第一个原因是触达范围。能舒适使用你网站的人越多,能成为客户的人就越多。小小的障碍,例如没有鼠标就够不到的按钮,或标签不清的表单,都可能让人中途放弃,而你在报表里看到的只是一个离开的访客。",
  },
  {
    type: "p",
    text: "第二个原因是暂时性和情境性的状况。手骨折、眼睛疲劳、屏幕反光、网络缓慢,或站在公共交通上用手机,都会降低一个人使用界面的能力。无障碍设计帮助处于所有这些状况下的人,而不仅是有永久性限制的人。人数不断增长的老年用户也从中受益匪浅。",
  },
  {
    type: "p",
    text: "第三个原因是声誉与信任。整洁且任何人都易于使用的网站,体现出一家关心客户的企业。此外,在一些国家,有规则或标准要求某些数字服务必须无障碍。如果你的企业服务海外市场或受监管行业,请查阅最新的适用要求,因为规则可能变化,且各地区不同。",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    alt: "显示器上在设计软件中展示的网站页面设计",
    caption: "无障碍在设计阶段考虑成本最低,而不是等页面做好之后。",
  },
  { type: "h2", text: "四项易记的基本原则" },
  {
    type: "p",
    text: "被广泛认可的网页无障碍标准把原则分为四组。你不必背下标准文件就能把握其要义。以下四个关键词足以帮助你评估自己的网站。",
  },
  { type: "h3", text: "可感知" },
  {
    type: "p",
    text: "信息必须能让用户通过至少一种自己具备的感官获取。重要的图片需要替代文本以便朗读,视频需要字幕,文字与背景之间需要足够的对比度。信息不能仅靠颜色传达,例如只用红色标记错误字段而没有文字提示。",
  },
  { type: "h3", text: "可操作" },
  {
    type: "p",
    text: "所有功能都必须不依赖单一输入方式即可使用。菜单、按钮和表单必须能用键盘到达和操作。用户需要足够的时间阅读和行动,页面不得以可能干扰或造成伤害的方式闪烁或移动。手机上的点击目标需要足够大,以免误触。",
  },
  { type: "h3", text: "可理解" },
  {
    type: "p",
    text: "语言、布局和页面行为必须一致且可预期。说明清楚,错误信息解释出了什么问题以及如何修正,导航在每个页面上的工作方式相同。正确声明页面语言也有助于屏幕阅读器准确地读出文字。",
  },
  { type: "h3", text: "稳健" },
  {
    type: "p",
    text: "内容必须能在各种浏览器、设备和辅助技术(包括未来的技术)上良好运行。最基本的做法是按用途使用正确的 HTML 元素,而不是用随意的元素加样式来模仿按钮或标题。",
  },
  { type: "h2", text: "影响最大的修复" },
  {
    type: "p",
    text: "好消息是,大多数常见的无障碍问题都可以用相对简单的修复来解决。以下是在公司介绍、网店和落地页这类普通企业网站上最常带来最大改善的几项。",
  },
  { type: "h3", text: "对比度与文字易读性" },
  {
    type: "p",
    text: "白底上的浅灰色文字在设计师的屏幕上可能显得优雅,但对许多人来说很难阅读,尤其是在强光下的手机屏幕上。确保文字与背景之间的对比度足够、基础字号够大,并且访客放大文字时不会破坏布局。避免把文字嵌入图片,因为这样的文字无法放大,也无法被很好地朗读。",
  },
  { type: "h3", text: "图片的替代文本" },
  {
    type: "p",
    text: "每张承载含义的图片都需要对其内容的简短而诚实的描述。这段描述会被屏幕阅读器朗读,也被搜索引擎用来理解图片。纯装饰性的图片应标记为可跳过。避免只写图片或文件名的描述;请说明画面里有什么,以及它为何与该页面相关。",
  },
  { type: "h3", text: "清晰的表单标签" },
  {
    type: "p",
    text: "联系、注册和付款表单是企业赚钱的地方,也是无障碍障碍代价最高的地方。每个字段都需要正确关联的标签,让屏幕阅读器知道其用途。不要只依赖输入时会消失的占位文字。错误信息应出现在字段附近,用文字说明,而不能只靠颜色变化。",
  },
  { type: "h3", text: "键盘导航" },
  {
    type: "p",
    text: "试着只用 Tab、Shift+Tab、回车和空格键浏览你的网站。你能到达每个菜单和按钮吗?焦点顺序合理吗?当前聚焦的是哪个元素清楚吗?许多网站为了美观去掉了焦点轮廓,而它却是键盘用户唯一的位置提示。提供跳转到主要内容的链接也很有帮助。",
  },
  { type: "h3", text: "正确的标题结构" },
  {
    type: "p",
    text: "使用逻辑上分层的标题,每页一个主标题,子标题遵循层级。屏幕阅读器用户常在标题之间跳转以浏览页面,就像普通读者用眼睛扫视一样。这种整齐的结构也有助于搜索引擎理解你页面的内容。",
  },
  {
    type: "ul",
    items: [
      "文字与背景的对比度足够,基础字号阅读舒适",
      "为每张信息性图片提供有意义的替代文本",
      "正确关联的表单标签,以及清晰的错误信息",
      "所有功能都可用键盘到达和使用,并有可见的焦点指示",
      "合乎逻辑的标题层级,并按用途使用 HTML 元素",
      "为重要的视频和音频内容提供字幕或文字稿",
      "移动设备上足够大的点击目标",
    ],
  },
  { type: "h2", text: "无障碍与搜索引擎优化相辅相成" },
  {
    type: "p",
    text: "对企业主来说,一个令人鼓舞的消息是,许多无障碍做法同时也有利于搜索引擎优化。搜索引擎本质上是看不见的访客:它们读取结构和文字,而不是视觉外观。替代文本帮助它们理解图片。分层的标题帮助它们理解主题。带有描述性文字的链接,而不是只写点击这里,帮助它们理解目标页面。",
  },
  {
    type: "p",
    text: "速度与代码整洁也是如此。正确使用 HTML 元素的网站通常更轻、更易维护,并且在各种设备上更稳定。这有利于用户体验,进而影响访客停留多久以及是否完成你期望的操作。关于基础知识,请参阅我们关于公司网站基础 SEO 的讨论。",
  },
  { type: "h2", text: "如何检查你网站的无障碍" },
  {
    type: "p",
    text: "良好的无障碍检查结合自动化工具与人工测试。自动化工具以浏览器扩展或审计功能的形式提供,能快速发现技术性问题,如没有替代文本的图片、对比度不足或缺少表单标签。但自动化工具只能捕捉一部分问题;许多涉及含义与体验的事情只能由人来判断。",
  },
  {
    type: "ol",
    items: [
      "对最重要的页面运行自动检查:首页、产品或服务页、联系表单和付款流程",
      "只用键盘浏览这些页面,并记下无法到达或焦点不清的地方",
      "放大几倍,确认布局仍可阅读且无需横向滚动",
      "在一个主要流程上试用操作系统自带的屏幕阅读器,亲身感受体验",
      "在强光下的手机屏幕上,并在系统字号设置较大的情况下查看网站",
      "记录发现,按其对访客重要任务的影响排序,然后逐步修复",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    alt: "书桌上的显示器、平板和手机显示着网页设计",
    caption: "在各种设备和使用方式下测试网站,而不只是在建站团队所用的屏幕上。",
  },
  { type: "h2", text: "常被忽略的事项" },
  {
    type: "p",
    text: "有几个领域常被忽视。第一是第三方内容,例如聊天小组件、嵌入式地图、视频播放器和外部表单。这些元素可能带来它们自己的无障碍问题,因此要选择重视这一点的供应商,并在安装后测试。第二是可下载的文档,例如 PDF 格式的宣传册和目录,它们常常是没有可读文字的扫描图片。",
  },
  {
    type: "p",
    text: "第三是自定义的交互元素:滑动菜单、轮播、弹窗和标签页。自己构建的组件常常无法用键盘操作,或不会把变化告知屏幕阅读器。遮住页面却没有正确捕获焦点的弹窗,是困住部分用户的典型例子。第四是动画和移动内容;应提供停止它的方式,并尊重对动效不适的用户的系统设置。",
  },
  {
    type: "callout",
    title: "警惕过于速成的方案",
    text: "一些服务提供一行代码,声称能让网站立刻变得无障碍。这类辅助工具可以作为补充,但无法取代正确的基础:良好的 HTML 结构、足够的对比度和有意义的替代文本。真正的修复在于你的代码和内容。",
  },
  { type: "h2", text: "把无障碍纳入工作流程" },
  {
    type: "p",
    text: "当无障碍从一开始就成为流程的一部分时,成本最低、效果最好。在设计阶段,设定满足对比度的配色、舒适的字号和清晰的焦点指示样式。在开发阶段,使用正确的 HTML 元素和经过验证的组件。在内容阶段,养成撰写替代文本、有意义的标题和描述性链接的习惯。",
  },
  {
    type: "p",
    text: "也要把无障碍检查纳入上线清单和例行更新。许多网站起步良好,之后因为新增内容缺少替代文本或使用含文字的图片而退步。为管理内容的团队建立简单的习惯,往往比一次性的大型审计更有效。",
  },
  { type: "h2", text: "对销售与服务的影响" },
  {
    type: "p",
    text: "对网店来说,无障碍与销售直接相关。只能用鼠标完成的付款流程、没有标签的地址字段,或难以辨认的支付按钮,会让一部分买家止步于最后一步。对公司介绍网站来说,难以触达的联系方式意味着潜在客户流失。对服务型企业来说,不支持键盘的预约表单意味着有些客户无法预订。",
  },
  {
    type: "p",
    text: "因此,请把无障碍视为服务质量的一部分,而不是额外的负担。帮助某一类用户的修复通常会让所有人的体验更顺畅。可以类比商店入口为轮椅使用者修建的坡道,推婴儿车或搬重物的人同样会用到它。",
  },
  {
    "type": "h2",
    "text": "企业主常问的问题"
  },
  {
    "type": "h3",
    "text": "无障碍会让网站变丑或变贵吗?"
  },
  {
    "type": "p",
    "text": "不会。无障碍会限制一些选择,例如对比度过低的颜色,但并不妨碍美观的设计。许多网站既好看又无障碍。从一开始就考虑,成本最低;事后修复确实更贵,因为需要拆掉一部分结构。"
  },
  {
    "type": "h3",
    "text": "在网站上安装第三方辅助工具就够了吗?"
  },
  {
    "type": "p",
    "text": "这类工具可以增加舒适度,例如字号调节器,但无法取代代码和内容中正确的基础。辅助技术的用户往往已经有自己的工具,他们需要的是能与这些工具良好配合的网站。"
  },
  {
    "type": "h3",
    "text": "如果网站已经在运行,应该从哪里开始?"
  },
  {
    "type": "p",
    "text": "从对业务最关键的页面和流程开始:首页、服务或产品页、联系表单和付款流程。先在那里修复对比度、替代文本、表单标签和键盘导航。之后把它定为所有页面和新内容的标准,避免问题再次出现。"
  },
  {
    "type": "h3",
    "text": "需要多久复查一次?"
  },
  {
    "type": "p",
    "text": "每当外观有重大改动、新增功能或更换第三方组件供应商时,以及至少每年定期几次。网站是不断变化的,如果新增内容时不加注意,今天良好的无障碍状况也可能下滑。"
  },
  { type: "h2", text: "结语" },
  {
    type: "p",
    text: "无障碍不是奢侈的功能,也不是一小群用户的事。它衡量的是你的网站在多大程度上准备好迎接每一位想与你的企业打交道的人。从小步开始:检查对比度、补全替代文本、整理表单,并试着用键盘浏览网站。然后让无障碍成为团队设计、构建和填充网站方式的一部分。结果是一个更友好、更容易被找到、更有能力带来客户的网站。",
  },
  {
    type: "cta",
    title: "想要对每位访客都友好的网站?",
    text: "AG·SORA 团队从设计阶段起就构建快速、整洁且无障碍的网站。咨询完全免费,无需任何承诺。",
    href: "/services/website",
    label: "免费咨询",
  },
];

export const translations = { en, zh };
