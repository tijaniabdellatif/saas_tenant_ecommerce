import {
  GoogleWorkspace, MailChimp, Meta, GoogleAnalytics, StripePaypal, FreshDesk, Canva, JudgeMe, SEO,
  Seamless,
  Analytics,
  ImageGeneration,
  ProductDescription,
  ChatBot,
  Recommandation,
  Templating
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



export type IntegrationType = typeof integrationTools;