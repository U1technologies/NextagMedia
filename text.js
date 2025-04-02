import { ALT_ABOUT_US_SECTION, ALT_CELEBRATION, ALT_CLOUD_ENGINEERING, ALT_CLOUD_ENGINEERING_SERVICE_PAGE, ALT_COLLABORATION, ALT_CUSTOMER_FOCUS, ALT_DATA_ANALYTICS, ALT_DATA_ANALYTICS_SERVICE_PAGE, ALT_ECOMMERCE, ALT_EDUCATION, ALT_ENTERPRISE_AI_SOLUTIONS, ALT_ENTERPRISE_AI_SOLUTIONS_SERVICE_PAGE, ALT_EXCELLENCE, ALT_FASHION, ALT_HOSPITALITY, ALT_INNOVATION, ALT_INNOVATIVE_CULTURE, ALT_INTEGRITY, ALT_LEARNING_OPPORTUNITY, ALT_MANAGEMENT, ALT_MVP_DEVELOPEMENT, ALT_MVP_DEVELOPEMENT_SERVICE_PAGE, ALT_REAL_ESTATE, ALT_TEAM_WORK, ALT_UI_UX_DESIGNING, ALT_UI_UX_DESIGNING_SERVICE_PAGE, ALT_UPGRADE_SKILLS, ALT_VIEW_ALL_PROJECT_MAIN_IMAGE, ALT_WEB_MOBILE_APP_DEVELOPEMENT, ALT_WEB_MOBILE_APP_DEVELOPEMENT_SERVICE_PAGE } from "./alt"

// Const used throughout the entire project
export const BTN_SUBMIT = "Submit"

// Page Route Text
// export const ROUTE_CONTACT_US = '/contact'


export const HOME_PAGE = {
  OUR_PARTNERS: {
    H2_PARTNERS: 'Trusted by top companies',
    partners: [
      { image: '/assets/Images/home-page/Paytm.png', alt: 'Paytm' },
      { image: '/assets/Images/home-page/tata-aig.png', alt: 'Tata AIG' },
      { image: '/assets/Images/home-page/aditya-birla.png', alt: 'Aditya Birla' },
      { image: '/assets/Images/home-page/Lyca.png', alt: 'Lyca Mobile' },
      { image: '/assets/Images/home-page/Zepto.png', alt: 'Zepto' },
      { image: '/assets/Images/home-page/pilgrim.png', alt: 'Pilgrim' },
      { image: '/assets/Images/home-page/littlebox.png', alt: 'littlebox' },
      { image: '/assets/Images/home-page/Krishn.jpg', alt: 'Krishna' },
    ],
  },
}

export const CONTACT_US_PAGE = {
  H1_HEADING: "Reach out to us",
  PARAGRAPH: "Tell us a little about yourself and let us know how we might be of assistance.",
  FORM_DETAILS: {
    fields: [
      { name: "name", type: "text", placeholder: "Your name *" },
      { name: "email", type: "email", placeholder: "Your company email *" },
      { name: "contactNo", type: "text", placeholder: "Your Contact *" },
      { name: "message", type: "textarea", placeholder: "Let us know how we can help (General inquiries, service details, or anything else)" },
    ],
    services: [
      { name: "Paid Marketing" },
      { name: "Social Media" },
      { name: "Web Development"},
      { name: "SEO"},
      { name: "Lead Generation"},
      { name: "PPC Management"},
      { name: "Personal Branding"},
      { name: "UGC Content"},
    ],
    budgetRanges: [
      "Less than $500",
      "$500 - $1000",
      "$1000 - $5000",
      "More than $5000",
    ],
    details: [
      {
        "icon": "/assets/Images/home-page/chat.svg", 
        "title": "Let's Talk",
        "description": "Reach out to us via email for any inquiries.",
        "email": "info@nextagmedia.com", 
      },
      {
        "icon": "/assets/Images/home-page/call-us.svg", 
        "title": "Call Us",
        "description": "Connect with our team directly for quick assistance.",
        "phone": "+91 82929 43921, +91 82279 92672"  
      },
      {
        "icon": "/assets/Images/home-page/location-add.svg", 
        "title": "Visit Us",
        "description": "Meet us in person and discuss your ideas.",
        "address": "2nd floor, B-11, Sector 4, Noida, UP, 201301"
      }
    ],
    submitButton: {
      text: BTN_SUBMIT
    }
  }
};

//JOB QUERIES
export const JOB_QUERIES_JSON = {
  fullName: 'Full Name',
  email: 'Email',
  phoneNumber: 'Phone No',
  dateRaisedText: 'Date',
  resume: 'Resume',
  coverLetter: 'Cover Letter',
  appliedFor: 'Job Applied For',
  viewMore: 'More Details',
  currentCTC: 'Current CTC',
  expectedCTC: 'Expected CTC',
  noticePeriod: 'Notice Period',
  attachments: 'Attachments',
  threeDash: '---',
  singleDashedStr: '-',
}


//CONTACT LEADS TEXT
export const CONTACT_LEADS_JSON = {
  fullName: 'Full Name',
  email: 'Email',
  phoneNumber: 'Phone No',
  messageText: 'Message',
  dateRaisedText: 'Date Raised',
  threeDash: '---',
  singleDashedStr: '-',
  contactLead: 'Contact Details',
  contactSidebarLead: 'Contact Leads'
}

export const SCHEDULE_MEETING_JSON = {
  fullName: 'Full Name',
  interestedIn: 'Interested In',
  email: 'Email',
  messageText: 'Message',
  dateRaisedText: 'Date Raised',
  threeDash: '---',
  singleDashedStr: '-',
  meetingInformation: 'Meeting Information',
  companyName: 'Company Name',
  budget: 'Budget',
  expectedTime: 'Expected Time',
  projectPhase: 'Project Phase',
  websiteUrl: 'Website URL',
  scheduleMeeting: 'Schedule Meeting'
}

export const PERFORMANCE_MARKETING_PAGE = {
  title: 'Performance Marketing',
  description: 'Reach your ideal audience with Nextagmedia’s customized paid marketing strategies. We ensure your ads connect with the right people at the right time, turning clicks into actionable leads and delivering a measurable return on investment.',
  image: '/assets/Images/home-page/paid-marketing.svg',
  processImage: "/assets/Images/home-page/performance-market.svg",
  mobileProcessImage: "/assets/Images/home-page/performance-market-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Unlock the full potential of your business with tailored performance marketing strategies designed to drive traffic, boost conversions, and maximize ROI across all platforms.',
    features: [
    {
      title: "Targeted Ad Campaigns",
      description: "Precisely reach your ideal audience based on demographics, interests, and behavior to maximize conversions.",
      image: "/assets/Images/home-page/ad-campp.png",
    },
    {
      title: "Multi-Platform Advertising",
      description: "Run impactful campaigns on Google Ads, Facebook, Instagram, LinkedIn, and other platforms to expand your reach.",
      image: "/assets/Images/home-page/cross-platform.png",
    },
    {
      title: "Data-Driven Optimization",
      description: "Leverage real-time analytics and insights to continuously refine strategies for better ROI and reduced ad spend.",
      image: "/assets/Images/home-page/data-driven.svg",
    },
    {
      title: "Retargeting Campaigns",
      description: "Re-engage potential customers who showed interest but didn’t convert, ensuring higher conversion rates.",
      image: "/assets/Images/home-page/target-1.png",
    },
    {
      title: "Conversion Tracking & Transparent Reporting",
      description: "Receive detailed performance reports on leads, sales, and ROI to measure success and ensure accountability.",
      image: "/assets/Images/home-page/recovery.png",
    },
    
  ], 
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Have questions about our performance marketing services? Here are answers to some of the most common queries we receive.",
    faqs: [
      {
        question: "What is performance marketing?",
        answer: "Performance marketing is a strategy where advertisers pay only for specific actions, such as clicks, leads, or sales, ensuring measurable results.",
      },
      {
        question: "Which platforms do you run ads on?",
        answer: "We run campaigns on Google Ads, Facebook, Instagram, LinkedIn, and other major advertising platforms to maximize your reach.",
      },
      {
        question: "How do you measure campaign success?",
        answer: "We use key metrics such as ROI, cost per conversion, click-through rate (CTR), and detailed performance reports to track success.",
      },
      {
        question: "Can I set a budget for my campaigns?",
        answer: "Yes, we work within your budget to deliver the best results, optimizing ad spend for maximum return on investment.",
      },
      {
        question: "What industries do you serve?",
        answer: "We work with businesses across various industries, including e-commerce, real estate, education, healthcare, and more.",
      }
    ]
  }
}

export const SOCIAL_MEDIA_PAGE = {
  title: 'Social Media Management',
  description: 'Boost your brand’s visibility with impactful social media strategies. Nextagmedia helps you create engaging content, spark meaningful interactions, and strengthen your online presence across key platforms.',
  image: '/assets/Images/home-page/social-media.svg',
  processImage: "/assets/Images/home-page/social-media-process.svg",
  mobileProcessImage: "/assets/Images/home-page/social-media-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Empower your brand with dynamic social media strategies that drive engagement, build a loyal audience, and amplify your online presence across platforms.',
  features: [
    {
      title: "Platform Strategy Development",
      description: "Develop tailored strategies for platforms like Facebook, Instagram, Twitter, and LinkedIn to increase brand visibility.",
      image: "/assets/Images/home-page/Platform-Strategy.png",
    },
    {
      title: "Content Creation & Scheduling",
      description: "Create engaging content and schedule posts to maintain consistent brand presence and engage with your audience.",
      image: "/assets/Images/home-page/content-creator.png",
    },
    {
      title: "Community Engagement",
      description: "Interact with followers and respond to inquiries to build a loyal online community that drives brand advocacy.",
      image: "/assets/Images/home-page/Community-Engagement.png",
    },
    {
      title: "Performance Analytics & Reporting",
      description: "Analyze key metrics like engagement, reach, and growth to optimize content strategy and improve performance.",
      image: "/assets/Images/home-page/Performance-Analytics.png",
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Explore answers to common questions about our Social Media Management services and how they can help your brand thrive online.",
    faqs: [
      {
        question: "What is social media management?",
        answer: "Social media management involves creating, scheduling, analyzing, and engaging with content on social media platforms to grow your brand’s presence and audience.",
      },
      {
        question: "Which social media platforms do you manage?",
        answer: "We manage platforms such as Facebook, Instagram, Twitter, LinkedIn, and others based on your business goals and target audience.",
      },
      {
        question: "How often will you post on my social media accounts?",
        answer: "Posting frequency depends on your goals, platform strategy, and audience. We create customized schedules to ensure consistent and impactful engagement.",
      },
      {
        question: "Will I get performance reports for my social media accounts?",
        answer: "Yes, we provide detailed performance reports analyzing key metrics like engagement, follower growth, impressions, and more to track progress and optimize strategy.",
      },
      {
        question: "Can you create content specific to my industry?",
        answer: "Absolutely! We create tailored content that aligns with your brand, audience, and industry trends to ensure relevance and engagement.",
      },
      {
        question: "Do you engage with followers on my behalf?",
        answer: "Yes, we respond to comments, messages, and inquiries to build meaningful interactions and foster a loyal online community.",
      }
    ]
  }
}

export const WEB_DEVELOPMENT_PAGE = {
  title: 'Web Development',
  description: 'Create a robust online presence with our expert web development services. We deliver user-friendly, responsive websites that reflect your brand, enhance visibility, and support sustainable growth.',
  image: '/assets/Images/home-page/website-dev.svg',
  processImage: "/assets/Images/home-page/web-developmentt.svg",
  mobileProcessImage: "/assets/Images/home-page/web-dev-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Craft seamless, responsive, and high-performance websites tailored to your business needs, designed to captivate your audience and achieve your goals.',
  features: [
    {
      title: "Custom Web Design",
      description: "Design visually appealing, user-friendly websites that align with your brand identity and engage your audience.",
      image: "/assets/Images/home-page/web-designn.png",
    },
    {
      title: "Responsive Development",
      description: "Ensure your website works seamlessly on all devices and screen sizes, providing an optimal experience for every user.",
      image: "/assets/Images/home-page/responsive-1.svg",
    },
    {
      title: "E-commerce Integration",
      description: "Set up and optimize e-commerce platforms like Shopify and WooCommerce to drive sales and streamline transactions.",
      image: "/assets/Images/home-page/ecommerce.png",
    },
    {
      title: "SEO-Friendly Websites",
      description: "Develop websites optimized for search engines to improve visibility, rankings, and drive organic traffic.",
      image: "/assets/Images/home-page/seo-1.png",
    },
    {
      title: "Content Management Systems (CMS)",
      description: "Implement CMS platforms like WordPress and Joomla for easy content updates and enhanced site management.",
      image: "/assets/Images/home-page/cms.png",
    },
  ], 
  faqSection: { 
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about our Website Development Services and how we can help improve your online presence.",
  faqs: [
    {
      question: "What types of websites do you develop?",
      answer: "We develop a range of websites, including corporate sites, e-commerce platforms, landing pages, blogs, and custom web applications tailored to your needs.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all our websites are developed with responsive design, ensuring optimal functionality and appearance across all devices and screen sizes.",
    },
    {
      question: "Do you offer SEO services for websites?",
      answer: "Absolutely! We optimize your website for search engines to improve visibility, rankings, and attract organic traffic.",
    },
    {
      question: "Can I update the content on my website myself?",
      answer: "Yes, we implement Content Management Systems (CMS) like WordPress and Joomla that allow you to easily update and manage content without technical expertise.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the scope and complexity of the project. On average, a custom website takes 4-8 weeks to complete.",
    },
    {
      question: "Do you provide ongoing support after the website is live?",
      answer: "Yes, we offer maintenance and support packages to ensure your website remains up-to-date, secure, and performs optimally.",
    },
  ],
},
}

export const SEO_PAGE = {
  title: 'SEO',
  description: 'Improve your website’s visibility with Nextagmedia’s SEO solutions. Our optimized strategies help increase search rankings, drive quality traffic, and establish credibility in competitive markets.',
  image: '/assets/Images/home-page/SEO-hp.svg',
  processImage: "/assets/Images/home-page/SEO-process.svg",
  mobileProcessImage: "/assets/Images/home-page/seo-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Boost your online visibility with advanced SEO techniques that drive organic traffic, improve rankings, and ensure your brand stays ahead of the competition.',
  features: [
    {
      title: "On-Page Optimization",
      description: "Optimize website content, meta tags, and internal links to improve search engine rankings and user experience.",
      image: "/assets/Images/home-page/on-page.png",
    },
    {
      title: "Keyword Research & Strategy",
      description: "Conduct in-depth keyword research to target the most relevant and high-traffic keywords for your business.",
      image: "/assets/Images/home-page/key.svg",
    },
    {
      title: "Link Building",
      description: "Create high-quality backlinks to increase domain authority and improve search engine rankings.",
      image: "/assets/Images/home-page/link.png",
    },
    {
      title: "Performance-Driven SEO Strategies",
      description: "Develop websites with built-in performance-focused SEO strategies, leveraging optimized content, fast-loading pages, and seamless navigation to boost search engine visibility and user engagement.",
      image: "/assets/Images/home-page/seo-2.png",
    },
  ], 
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about our SEO services and how we can help improve your online presence.",
    faqs: [
      {
        question: "What is SEO and why is it important?",
        answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It is important because higher visibility attracts quality traffic, increases credibility, and helps grow your business.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy, and results can take anywhere between 3 to 6 months, depending on the competitiveness of your industry and the existing state of your website.",
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer: "On-page SEO refers to optimizing elements within your website, like content, meta tags, and site structure. Off-page SEO involves activities outside your website, such as building backlinks and social media engagement.",
      },
      {
        question: "How do you choose keywords for SEO campaigns?",
        answer: "We conduct in-depth research to identify high-performing, relevant, and competitive keywords that align with your business goals and target audience.",
      },
      {
        question: "What are backlinks and why are they important?",
        answer: "Backlinks are links from other websites that point to your site. They are important because they signal to search engines that your site is credible and trustworthy, helping improve your rankings.",
      },
      {
        question: "Do you provide regular SEO performance reports?",
        answer: "Yes, we provide detailed performance reports that track metrics like keyword rankings, organic traffic, and backlink growth to ensure transparency and accountability.",
      },
    ],
  }, 
}

export const LEAD_GENERATION_PAGE = {
  title: 'Lead Generation',
  description: 'Drive targeted leads with our efficient lead generation strategies. We help you attract potential customers, build meaningful connections, and boost conversions to grow your business effectively.',
  image: '/assets/Images/home-page/leads-gen.svg',
  processImage: "/assets/Images/home-page/leads-generate.svg",
  mobileProcessImage: "/assets/Images/home-page/lead-gen-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Accelerate business growth with targeted lead generation strategies that deliver qualified prospects straight to your sales pipeline.',
  features: [
    {
      title: "Targeted Lead Campaigns",
      description: "Run highly-targeted campaigns across multiple channels to attract quality leads that convert into customers.",
      image: "/assets/Images/home-page/campaign-lead.png",
    },
    {
      title: "Lead Magnet Development",
      description: "Create irresistible lead magnets like e-books and webinars to capture potential customers’ contact details.",
      image: "/assets/Images/home-page/lead-magnet.png",
    },
    {
      title: "Landing Page Optimization",
      description: "Design and optimize high-converting landing pages that encourage leads to take action and submit their information.",
      image: "/assets/Images/home-page/page-optimization.png",
    },
    {
      title: "Email Marketing & Nurturing",
      description: "Use automated email campaigns to nurture leads and guide them through the sales funnel to increase conversion rates.",
      image: "/assets/Images/home-page/email-marketing.png",
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about our lead generation services and how they can help your business grow.",
    faqs: [
      {
        question: "What is lead generation?",
        answer: "Lead generation is the process of attracting and capturing interest in your product or service to build a pipeline of potential customers.",
      },
      {
        question: "Why is lead generation important for my business?",
        answer: "Lead generation helps you identify and connect with potential customers, driving revenue growth and improving sales efficiency.",
      },
      {
        question: "What channels do you use for lead generation?",
        answer: "We use multiple channels such as social media, paid ads, email marketing, SEO, and content marketing to attract quality leads.",
      },
      {
        question: "How do you ensure the leads are qualified?",
        answer: "We focus on targeting the right audience and use optimized campaigns, lead magnets, and landing pages to attract leads most likely to convert.",
      },
      {
        question: "How do you measure lead generation success?",
        answer: "We measure success using key performance indicators (KPIs) like lead volume, conversion rates, cost per lead, and ROI.",
      },
      {
        question: "Can you help nurture leads after they are generated?",
        answer: "Yes, we provide email nurturing campaigns and follow-up strategies to guide leads through the sales funnel and maximize conversions.",
      },
    ],
  },
  
}

export const PERSONAL_BRANDING_PAGE = {
  title: 'Personal Branding',
  description: 'Build a strong, authentic personal brand that sets you apart in the digital landscape. Nextagmedia helps you showcase your expertise, amplify your voice, and create a compelling online presence to inspire trust and attract opportunities.',
  image: '/assets/Images/home-page/personal-branding.svg',
  processImage: "/assets/Images/home-page/personal-brand.svg",
  mobileProcessImage: "/assets/Images/home-page/personal-brand-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Build a compelling personal brand that resonates with your audience, establishes your authority, and drives opportunities across your industry.',
  features: [
    {
      title: "Custom Branding Strategy",
      description: "Develop a personalized strategy to build and strengthen your brand identity and voice online.",
      image: "/assets/Images/home-page/custom-branding.png",
    },
    {
      title: "Social Media Profile Optimization",
      description: "Optimize your social media profiles to present a cohesive and professional brand presence.",
      image: "/assets/Images/home-page/social-profile.png",
    },
    {
      title: "Content Creation & Storytelling",
      description: "Create valuable content and tell your brand story across multiple platforms to connect with your audience.",
      image: "/assets/Images/home-page/storytelling.png",
    },
    {
      title: "Networking & Influence Building",
      description: "Build a strong network and establish yourself as an industry thought leader to enhance your credibility.",
      image: "/assets/Images/home-page/networking.png",
    },
    {
      title: "Brand Monitoring & Reputation Management",
      description: "Monitor your online reputation and take steps to ensure your brand is perceived positively by your audience.",
      image: "/assets/Images/home-page/brand-monitoring.png",
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about our personal branding services and how they can help you stand out.",
    faqs: [
      {
        question: "What is personal branding?",
        answer: "Personal branding is the process of creating and managing your public image to showcase your expertise, values, and personality, establishing you as an authority in your industry.",
      },
      {
        question: "Why is personal branding important?",
        answer: "A strong personal brand helps you differentiate yourself, build trust with your audience, and open up opportunities for career growth, partnerships, and business success.",
      },
      {
        question: "What platforms do you focus on for personal branding?",
        answer: "We focus on key platforms such as LinkedIn, Twitter, Instagram, and Facebook, depending on your goals and target audience.",
      },
      {
        question: "How do you create a branding strategy tailored to me?",
        answer: "We analyze your goals, values, strengths, and audience to create a personalized strategy that reflects your unique voice and expertise.",
      },
      {
        question: "Can you help me create content for my personal brand?",
        answer: "Yes, we provide content creation services, including blog posts, social media content, videos, and more, to help you tell your story effectively.",
      },
      {
        question: "How do you monitor and manage my online reputation?",
        answer: "We use tools to track mentions of your name and brand online, address negative feedback, and ensure your reputation remains positive and authentic.",
      },
    ],
  }, 
}

export const UGC_PAGE = {
  title: 'UGC Content',
  description: 'Leverage the power of user-generated content to build authenticity and engagement. Nextagmedia helps you curate, manage, and optimize UGC to strengthen your brand’s reputation and foster a loyal community.',
  image: '/assets/Images/home-page/user-content.svg',
  processImage: "/assets/Images/home-page/UGC-process.svg",
  mobileProcessImage: "/assets/Images/home-page/ugc-mobile.svg",
  sectionHeading: 'Core Features',
  sectionSubtitle: 'Leverage authentic user-generated content to strengthen trust, increase engagement, and create a lasting impact on your target audience.',
  features: [
    {
      title: "User-Generated Content Strategy",
      description: "Develop a strategy to encourage and curate content created by your audience to increase engagement and brand loyalty.",
      image: "/assets/Images/home-page/user-generatedd.png",
    },
    {
      title: "Social Proof & Reviews",
      description: "Leverage customer reviews, testimonials, and user-generated content to build trust and credibility.",
      image: "/assets/Images/home-page/social-proofs.png",
    },
    {
      title: "Community Building & Engagement",
      description: "Create and manage online communities that foster collaboration, creativity, and brand advocacy.",
      image: "/assets/Images/home-page/community-engage.png",
    },
    {
      title: "Content Curation & Management",
      description: "Curate high-quality user-generated content and showcase it on your website and social media channels to drive engagement.",
      image: "/assets/Images/home-page/content.png",
    },
    {
      title: "Campaigns & Contests",
      description: "Run creative campaigns and contests to encourage your audience to create content that promotes your brand.",
      image: "/assets/Images/home-page/contests.png",
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Get answers to common questions about our UGC services and how they can enhance your brand’s authenticity and reach.",
    faqs: [
      {
        question: "What is user-generated content (UGC)?",
        answer: "User-generated content refers to any content—text, images, videos, reviews—created by customers or audiences, rather than the brand itself.",
      },
      {
        question: "Why is UGC important for brands?",
        answer: "UGC builds trust and authenticity by showcasing real experiences from customers. It increases engagement, boosts credibility, and fosters community growth.",
      },
      {
        question: "How do you curate UGC for my brand?",
        answer: "We identify and collect high-quality content created by your audience and strategically showcase it across your social media, website, and marketing campaigns.",
      },
      {
        question: "How do contests and campaigns encourage UGC?",
        answer: "We design creative campaigns and contests that motivate your audience to contribute content while promoting brand awareness and engagement.",
      },
      {
        question: "How can UGC help with social proof?",
        answer: "Customer reviews, testimonials, and content shared by real users serve as social proof, reassuring potential customers of your brand’s reliability and value.",
      },
      {
        question: "Can UGC be used in advertising?",
        answer: "Yes, UGC can be repurposed in ads to create relatable and trustworthy content that resonates with your audience, driving higher conversions.",
      },
    ],
  }, 
}
