import {
  GoogleWorkspace, MailChimp, Meta, GoogleAnalytics, StripePaypal, FreshDesk, Canva, JudgeMe, SEO,
  Seamless,
  Analytics,
  ImageGeneration,
  ProductDescription,
  ChatBot,
  Recommandation,
  Templating,
  Avatar
} from '@/Assets';


interface IFeatureLogos {
  id: number,
  alt: string,
  source: string | React.ReactElement,
  rotate: number,
  featureIndex: number // Maps to the index in the features list
}


export const pricingTiers = [
  {
    title: "Core",
    monthlyPrice: 20,
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      'Up to 2 Admin Users',
      '2 Templates integration'
    ],
  },

  {
    title: "Pro",
    monthlyPrice: 40,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      'Up to 4 Admin Users',
      '5 Templates Integration',
      'common design',
      'common design',
      'common design',
    ],
  },

  {
    title: "Entreprise",
    monthlyPrice: 100,
    buttonText: "Get it now",
    popular: false,
    inverse: false,
    features: [
      'Up to 10 Admin Users',
      '5 Templates integrations',
      'Effective store',
      'Relialibility',
      'Relialibility',
      'Relialibility',
      'Relialibility'
    ],
  },
];

export const sectionFeaturs = [
  'AI SEO Automation',
  'Effortless Installation',
  'Intelligent Analytics',
  'Robust Image & Description Generation',
  'AI Chatbot',
  'Robust Product Recommendations',
  'Beautiful Templates'
];

export const featureLogos: IFeatureLogos[] = [
  {
    id: 1,
    alt: "SEO automation",
    source: SEO,
    rotate: 0,
    featureIndex: 0
  },
  {
    id: 2,
    alt: "Seamless Installation",
    source: Seamless,
    rotate: 45,
    featureIndex: 1
  },
  {
    id: 3,
    alt: "Analytics",
    source: Analytics,
    rotate: 90,
    featureIndex: 2
  },
  {
    id: 4,
    alt: "Image Generation",
    source: ImageGeneration,
    rotate: 135,
    featureIndex: 3
  },
  {
    id: 5,
    alt: "Product Description",
    source: ProductDescription,
    rotate: 180,
    featureIndex: 3
  },
  {
    id: 6,
    alt: "ChatBot Assistant",
    source: ChatBot,
    rotate: 225,
    featureIndex: 4
  },
  {
    id: 7,
    alt: "Robust Recommandation",
    source: Recommandation,
    rotate: 270,
    featureIndex: 5
  },
  {
    id: 8,
    alt: "Beautiful Templates",
    source: Templating,
    rotate: 315,
    featureIndex: 6
  },
];


export const integrationTools = [
  {
    name: "Google Workspace",
    icon: GoogleWorkspace,
    description: "Connect your store with Google's productivity suite for seamless document management, calendar scheduling, and team collaboration. Share product catalogs, marketing plans, and financial reports effortlessly."
  },
  {
    name: "Mailchimp",
    icon: MailChimp,
    description: "Supercharge your email marketing with automated campaigns, customer segmentation, and detailed analytics. Create beautiful newsletters, abandoned cart reminders, and personalized product recommendations."
  },
  {
    name: "Meta Business Suite",
    icon: Meta,
    description: "Manage your Facebook and Instagram presence directly from your dashboard. Schedule posts, run targeted ad campaigns, and track social media performance to expand your store's reach."
  },
  {
    name: "Google Analytics",
    icon: GoogleAnalytics,
    description: "Gain powerful insights into your store's performance with detailed visitor tracking, conversion analysis, and customer journey mapping. Make data-driven decisions to optimize your sales funnel."
  },
  {
    name: "Stripe/Paypal",
    icon: StripePaypal,
    description: "Offer secure, frictionless payment options to your customers worldwide. Accept credit cards, digital wallets, and alternative payment methods with automatic fraud protection and seamless checkout."
  },
  {
    name: "Freshdesk",
    icon: FreshDesk,
    description: "Deliver exceptional customer support with a unified ticketing system, automated responses, and multi-channel communication. Resolve issues quickly and build stronger customer relationships."
  },
  {
    name: "Canva",
    icon: Canva,
    description: "Create stunning product visuals, social media graphics, and marketing materials without design skills. Access thousands of templates and customize your store's visual identity in minutes."
  },
  {
    name: "Judge.me",
    icon: JudgeMe,
    description: "Build trust and boost conversions with authentic customer reviews. Automatically collect, moderate, and showcase product feedback to enhance your store's credibility and social proof."
  }
];


export const testimonials = [
  {
    name: "Sarah Johnson",
    text: "This platform completely changed how I work. The interface is clean, and the support team is incredibly responsive!",
    username: "@sarahj",
    image: Avatar
  },
  {
    name: "Daniel Lee",
    text: "Amazing experience! Everything just works out of the box and helped me boost my productivity.",
    username: "@daniellee",
    image: Avatar
  },
  {
    name: "Fatima Zahra",
    text: "I love how intuitive and user-friendly the platform is. It made a big difference for my small business.",
    username: "@fatimazahra",
    image: Avatar
  },
  {
    name: "James Carter",
    text: "Reliable, fast, and easy to use. Highly recommend it to anyone looking for a modern solution.",
    username: "@jamescarter",
    image: Avatar
  },
  {
    name: "Linda Nguyen",
    text: "Excellent value and outstanding customer service. I felt supported every step of the way.",
    username: "@lindanguyen",
    image: Avatar
  },
  {
    name: "Carlos Rivera",
    text: "Their attention to detail and care for the user experience is unmatched. I'm a fan for life!",
    username: "@carlosr",
    image: Avatar
  },
  {
    name: "Emily Chen",
    text: "The onboarding was super smooth and quick. I was up and running in no time!",
    username: "@emchen",
    image: Avatar
  },
  {
    name: "Mohamed El Amrani",
    text: "What I appreciate most is the team's willingness to listen to feedback and constantly improve.",
    username: "@moamrani",
    image: Avatar
  },
  {
    name: "Isabelle Martin",
    text: "The clean UI and seamless workflow have been a game-changer for my projects.",
    username: "@isabelle.m",
    image: Avatar
  },
  {
    name: "Ali Khan",
    text: "I’ve tried many tools before, but none offered the balance of power and simplicity like this one.",
    username: "@alikhan",
    image: Avatar
  },
  {
    name: "Nina Petrova",
    text: "This platform helps me stay organized and focused every single day. Love it!",
    username: "@ninap",
    image: Avatar
  },
  {
    name: "Tom Becker",
    text: "Every update brings something new and useful. The team really listens to what users need.",
    username: "@tbecker",
    image: Avatar
  }
];

export const faqItems = [

  {
    question: "How is Enimsay different from the other Saas Ecommerce stores?",
    answer: 'Unlike traditional stores, enimsay is using AI powered tools to boost your store management',
  },
  {
    question: "Is there any constraints?",
    answer: 'The purpose of Enimsay is to facilitate the store creation by providing seamless integrations',
  },
  {
    question: "How do you handle payments?",
    answer: 'Unlike traditional stores, enimsay is using AI powered tools to boost your store management',
  },

  {
    question: "How does enimsay work?",
    answer: 'Unlike traditional stores, enimsay is using AI powered tools to boost your store management',
  },

];





export const staticTermsData = [
  {
    id: 1,
    slug: "introduction",
    title: "Introduction",
    content: `<p class="text-gray-700 mb-4">Welcome to our <span class="font-bold">platform</span>. These Terms of Use govern your use of our website, services, and products. By accessing or using our platform, you agree to be bound by these Terms of Use and our <a href="/privacy" class="text-blue-600 hover:underline">Privacy Policy</a>.</p><p class="text-gray-700 mb-4">If you do not agree with any part of these terms, please do not use our services.</p><div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-blue-700">Please read these terms carefully before proceeding.</p></div>`,
    order_index: 0,
    is_active: true,
    subsections: []
  },
  {
    id: 2,
    slug: "account-responsibilities",
    title: "Account Responsibilities",
    content: `<p class="text-gray-700 mb-4">When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p><ul class="list-disc pl-5 my-4 text-gray-700"><li class="mb-2">Keep your password secure</li><li class="mb-2">Update your information when it changes</li><li class="mb-2">Logout from shared devices</li></ul>`,
    order_index: 1,
    is_active: true,
    subsections: [
      {
        id: 1,
        section_id: 2,
        slug: "account-creation",
        title: "Account Creation",
        content: `<p class="text-gray-700 mb-4">To use certain features of our service, you may need to create an account. You must provide accurate and complete information when creating your account.</p><div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6"><p class="text-yellow-700">Important: You may not use another person's personal information to create an account without their explicit permission.</p></div>`,
        order_index: 0,
        is_active: true
      },
      {
        id: 2,
        section_id: 2,
        slug: "account-security",
        title: "Account Security",
        content: `<p class="text-gray-700 mb-4">You are responsible for safeguarding the password and security questions that you use to access our services. We recommend using strong, unique passwords and enabling two-factor authentication where available.</p><p class="text-gray-700 mb-4">You should not disclose your password to any third party.</p><ul class="list-disc pl-5 my-4 text-gray-700"><li class="mb-2">Use a password manager if possible</li><li class="mb-2">Enable <span class="font-semibold">two-factor authentication</span> for extra security</li><li class="mb-2">Change your password regularly</li></ul>`,
        order_index: 1,
        is_active: true
      }
    ]
  },
  {
    id: 3,
    slug: "acceptable-use",
    title: "Acceptable Use",
    content: `<p class="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms of Use. You agree not to use our services in any way that violates any applicable local, state, national, or international law or regulation.</p><p class="text-gray-700 mb-4">Our platform is designed to help you achieve your goals, but we expect responsible usage.</p>`,
    order_index: 2,
    is_active: true,
    subsections: [
      {
        id: 3,
        section_id: 3,
        slug: "prohibited-activities",
        title: "Prohibited Activities",
        content: `<p class="text-gray-700 mb-4">You may not engage in any of the following prohibited activities:</p><ol class="list-decimal pl-5 my-4 text-gray-700"><li class="mb-2">Copying, distributing, or disclosing any part of our services in any medium</li><li class="mb-2">Using any automated system to access our services</li><li class="mb-2">Transmitting spam, chain letters, or other unsolicited email</li><li class="mb-2">Attempting to interfere with or compromise the system integrity or security</li><li class="mb-2">Taking any action that imposes an unreasonable load on our infrastructure</li></ol>`,
        order_index: 0,
        is_active: true
      }
    ]
  },
  {
    id: 4,
    slug: "intellectual-property",
    title: "Intellectual Property Rights",
    content: `<p class="text-gray-700 mb-4">The content on our platform, including text, graphics, logos, and software, is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws.</p><p class="text-gray-700 mb-4">You may not use, reproduce, distribute, or create derivative works from our content without our express permission.</p>`,
    order_index: 3,
    is_active: true,
    subsections: [
      {
        id: 4,
        section_id: 4,
        slug: "user-content",
        title: "User Generated Content",
        content: `<p class="text-gray-700 mb-4">By posting content on our platform, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, publicly display, and distribute that content on our platform.</p><p class="text-gray-700 mb-4">You represent and warrant that you own or have the necessary rights to the content you post, and that your content does not infringe upon any third-party rights.</p>`,
        order_index: 0,
        is_active: true
      },
      {
        id: 5,
        section_id: 4,
        slug: "dmca",
        title: "DMCA Compliance",
        content: `<p class="text-gray-700 mb-4">We respect the intellectual property rights of others and expect our users to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us with the following information:</p><ul class="list-disc pl-5 my-4 text-gray-700"><li class="mb-2">A physical or electronic signature of the copyright owner</li><li class="mb-2">Identification of the copyrighted work claimed to have been infringed</li><li class="mb-2">Identification of the material that is claimed to be infringing</li><li class="mb-2">Your contact information</li><li class="mb-2">A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li></ul>`,
        order_index: 1,
        is_active: true
      }
    ]
  },
  {
    id: 5,
    slug: "privacy-data",
    title: "Privacy and Data Protection",
    content: `<p class="text-gray-700 mb-4">We collect and process information about you in accordance with our Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate.</p><p class="text-gray-700 mb-4">We take reasonable measures to protect your personal information, but we cannot guarantee its absolute security.</p>`,
    order_index: 4,
    is_active: true,
    subsections: [
      {
        id: 6,
        section_id: 5,
        slug: "data-collection",
        title: "Data Collection and Usage",
        content: `<p class="text-gray-700 mb-4">We collect various types of information, including information you provide to us, information we collect automatically, and information from third-party sources.</p><p class="text-gray-700 mb-4">We use this information to provide and improve our services, communicate with you, and for other purposes as described in our Privacy Policy.</p>`,
        order_index: 0,
        is_active: true
      }
    ]
  },
  {
    id: 6,
    slug: "limitation-liability",
    title: "Limitation of Liability",
    content: `<p class="text-gray-700 mb-4">To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p><p class="text-gray-700 mb-4">Our liability is limited to the amount you paid for the service in question, or $100, whichever is greater.</p>`,
    order_index: 5,
    is_active: true,
    subsections: []
  },
  {
    id: 7,
    slug: "term-termination",
    title: "Term and Termination",
    content: `<p class="text-gray-700 mb-4">These Terms will remain in effect until terminated by you or us. You may terminate these Terms by closing your account and discontinuing use of our services.</p><p class="text-gray-700 mb-4">We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.</p>`,
    order_index: 6,
    is_active: true,
    subsections: []
  },
  {
    id: 8,
    slug: "governing-law",
    title: "Governing Law",
    content: `<p class="text-gray-700 mb-4">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we are headquartered, without regard to its conflict of law provisions.</p><p class="text-gray-700 mb-4">Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in our jurisdiction.</p>`,
    order_index: 7,
    is_active: true,
    subsections: []
  },
  {
    id: 9,
    slug: "changes-terms",
    title: "Changes to Terms",
    content: `<p class="text-gray-700 mb-4">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p><p class="text-gray-700 mb-4">Your continued use of our service after such changes constitutes your acceptance of the new Terms.</p>`,
    order_index: 8,
    is_active: true,
    subsections: []
  },
  {
    id: 10,
    slug: "contact-us",
    title: "Contact Us",
    content: `<p class="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at support@example.com.</p><p class="text-gray-700 mb-4">We are committed to addressing any concerns you may have and will do our best to resolve any issues in a timely manner.</p>`,
    order_index: 9,
    is_active: true,
    subsections: []
  }
];



export type FaqType = typeof faqItems;
export type IntegrationType = typeof integrationTools;
export type TestimonialsType = typeof testimonials;
export type TermsServiceType = typeof staticTermsData;