export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectSolution {
  title: string;
  description: string;
  image?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface ProjectTechnology {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Cloud"
    | "AI/ML"
    | "Other";
  description?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: "hero" | "screenshot" | "diagram" | "mockup" | "gallery";
}

export interface ProjectTimeline {
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  status: "completed" | "in-progress" | "on-hold";
  completedAt?: string;
  startedAt: string;
  duration: string;

  // Hero Section
  heroImage: string;
  heroTitle: string;
  heroDescription: string;

  // Overview
  overview: string;
  overviewImage?: string;

  // Project Details
  objectives: string[];
  challenges: ProjectChallenge[];
  solutions: ProjectSolution[];

  // Visuals
  images: ProjectImage[];

  architecture?: string;

  technologies?: ProjectTechnology[];
  timeline?: ProjectTimeline[];

  // Results
  metrics: ProjectMetric[];
  keyResults: string[];

  // Team
  teamSize?: number;
  roles?: string[];

  // Additional
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  // Metadata
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "vmeals-healthy-meal-delivery",
    slug: "vmeals-healthy-meal-delivery",
    title: "VMeals Healthy Meal Delivery Service",
    subtitle:
      "Providing fresh, personalized, and nutrition-focused meal plans delivered daily across UAE",
    category: "Health & Wellness",
    industry: "Food & Beverage",
    status: "completed",
    startedAt: "2023-06-01T00:00:00.000Z",
    duration: "14 months",

    // Hero Section
    heroImage: "/vmeals-banner.png",
    heroTitle: "Healthy Meals Delivered to Your Doorstep",
    heroDescription:
      "VMeals offers a wide range of freshly prepared, portion-controlled healthy meals designed by expert nutritionists and chefs, catering to various fitness and wellness goals.",

    // Overview
    overview:
      "VMeals is a trusted meal delivery service in Dubai and UAE focused on making healthy eating easy and accessible. With customizable plans for weight loss, muscle gain, wellness, or maintenance, meals are crafted fresh daily using nutrient-rich ingredients. The service emphasizes convenience, sustainability, and personalized nutrition to help clients maintain a balanced lifestyle without the hassle of shopping or cooking.",

    // Objectives
    objectives: [
      "Offer diverse meal plans customized to individual dietary and fitness goals",
      "Deliver fresh, nutritious, and portion-controlled meals daily across UAE",
      "Ensure high-quality preparation with expert nutritionists and chefs",
      "Provide seamless, timely delivery and excellent customer service",
      "Promote healthy lifestyle changes through convenient meal solutions",
      "Use sustainable packaging and eco-friendly delivery practices",
    ],

    // Challenges
    challenges: [
      {
        title: "Meeting Diverse Dietary Needs",
        description:
          "Developing meal plans that accommodate a wide range of dietary restrictions, allergies, and preferences while maintaining nutritional balance.",
      },
      {
        title: "Ensuring Freshness and Quality",
        description:
          "Maintaining meal freshness and quality during daily preparation and delivery across a broad geographical area.",
      },
      {
        title: "Scaling Delivery Operations",
        description:
          "Managing timely and efficient delivery logistics throughout Dubai and UAE to meet growing customer demand.",
      },
      {
        title: "Sustainability",
        description:
          "Adopting eco-friendly packaging solutions to reduce environmental impact while ensuring food safety and convenience.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Expert-Curated Meal Plans",
        description:
          "Nutritionists and dietitians design meal plans tailored to specific fitness goals and dietary needs, ensuring balanced nutrient intake.",
        image:
          "https://images.unsplash.com/photo-1665110180279-ee5372bb96bb?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Fresh Daily Preparation",
        description:
          "Meals are prepared fresh each day by professional chefs, guaranteeing taste and quality with every delivery.",
        image:
          "https://images.unsplash.com/photo-1758523417366-22dbbd2bf92f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Advanced Delivery Network",
        description:
          "A robust delivery infrastructure ensures meals reach customers on time, covering all areas of Dubai and the UAE efficiently.",
        image:
          "https://images.unsplash.com/photo-1582469062319-9d6a6a9eb4f2?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Sustainable Packaging",
        description:
          "Use of biodegradable, eco-friendly containers that are convenient for reheating and disposal, aligning with VMeals' commitment to the environment.",
        image:
          "https://images.unsplash.com/photo-1662556828484-2a531014489a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],

    // Images
    images: [
      {
        url: "/vmeals-banner.png",
        alt: "Fresh healthy meals from VMeals",
        caption: "VMeals fresh healthy meals ready for delivery",
        type: "hero",
      },
      {
        url: "/vmeals-banner.png",
        alt: "Custom meal plans by nutritionists",
        caption: "Customized meal plans crafted by expert nutritionists",
        type: "screenshot",
      },
      {
        url: "/vmeals-banner.png",
        alt: "Chef preparing meals",
        caption: "Professional chefs preparing fresh meals daily",
        type: "screenshot",
      },
      {
        url: "/vmeals-banner.png",
        alt: "Timely meal delivery",
        caption: "Efficient delivery network ensures meals arrive fresh",
        type: "screenshot",
      },
      {
        url: "/vmeals-banner.png",
        alt: "Eco-friendly packaging",
        caption:
          "Biodegradable containers maintaining quality and sustainability",
        type: "screenshot",
      },
    ],

    // Architecture
    architecture:
      "VMeals operates a vertically integrated system combining meal planning, preparation, and an optimized delivery network supported by a proprietary management platform that handles customer subscriptions, meal customizations, and real-time delivery tracking.",

    // Metrics
    metrics: [
      {
        label: "Daily Customers Served",
        value: "Thousands",
        context:
          "Number of active meal plan subscribers receiving daily deliveries.",
      },
      {
        label: "Meal Plans Offered",
        value: "10+",
        context:
          "Variety of meal plans catering to different nutrition and fitness goals.",
      },
      {
        label: "Delivery Areas",
        value: "All Dubai & UAE",
        context: "Coverage of delivery network ensuring timely meal service.",
      },
      {
        label: "Customer Satisfaction",
        value: "95%",
        context: "Customer satisfaction rate based on feedback and reviews.",
      },
    ],

    // Key Results
    keyResults: [
      "Enabled convenient access to healthy meals, eliminating shopping and cooking hassle.",
      "Achieved high customer satisfaction with personalized nutrition plans.",
      "Scaled delivery network covering extensive UAE areas efficiently.",
      "Promoted sustainable practices with eco-friendly packaging.",
    ],

    // Team
    teamSize: 25,
    roles: [
      "Nutritionists",
      "Chefs",
      "Delivery Personnel",
      "Customer Support",
      "Technology Team",
      "Operations Managers",
    ],

    // Testimonial
    testimonial: {
      quote:
        "VMeals has transformed the way I approach healthy eating. Their personalized plans and fresh meals make maintaining my fitness goals effortless.",
      author: "Ayesha Khan",
      role: "Wellness Enthusiast",
    },

    // Tags
    tags: [
      "Healthy Meals",
      "Meal Delivery",
      "Nutrition",
      "Fitness",
      "Sustainability",
      "Dubai",
      "UAE",
    ],

    // Metadata
    metaTitle: "VMeals Healthy Meal Delivery Service | Fresh & Nutritious UAE",
    metaDescription:
      "VMeals offers fresh, personalized, and nutrition-focused meal plans delivered daily across UAE. Designed by expert nutritionists and chefs for a healthier lifestyle.",
  },
  {
    id: "dunesync-custom-software-solutions",
    slug: "dunesync-custom-software-solutions",
    title: "DuneSync Custom Software Development",
    subtitle:
      "Crafting intelligent, scalable, and future-ready software solutions for businesses",
    category: "Software Development",
    industry: "Information Technology",
    status: "completed",
    startedAt: "2023-01-01T00:00:00.000Z",
    duration: "20 months",

    // Hero Section
    heroImage: "/dunesync-banner.png",
    heroTitle: "Innovate. Automate. Excel.",
    heroDescription:
      "DuneSync delivers tailored software and digital transformation solutions that help businesses optimize operations and scale with efficiency.",

    // Overview
    overview:
      "DuneSync specializes in custom software development, IT staff augmentation, and business automation solutions. Leveraging the latest technology trends, DuneSync provides scalable, secure, and high-performing software products tailored to unique business needs across industries such as healthcare, finance, and manufacturing.",

    // Objectives
    objectives: [
      "Develop custom software tailored to client-specific workflows",
      "Provide seamless integration of disparate business systems via smart API connections",
      "Enable digital transformation for operational efficiency and scalability",
      "Offer IT staff augmentation with pre-vetted experts for faster project delivery",
      "Optimize business processes with automation tools and ERP solutions",
      "Ensure high-quality software development with agile methodologies",
    ],

    // Challenges
    challenges: [
      {
        title: "Unique Business Requirements",
        description:
          "Each business has distinct workflows and processes requiring customized software that off-the-shelf products cannot fulfill.",
      },
      {
        title: "System Integration Complexity",
        description:
          "Integrating diverse legacy systems, CRMs, ERP, and third-party applications to work seamlessly can be complex and prone to data inconsistencies.",
      },
      {
        title: "Scaling Development Teams",
        description:
          "Rapid scaling and access to specialized IT talent on demand requires efficient staff augmentation without disrupting ongoing projects.",
      },
      {
        title: "Maintaining Security and Quality",
        description:
          "Ensuring software security, performance, and compliance across industries while delivering on tight deadlines is critical.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Custom Software Development",
        description:
          "Building bespoke software solutions tailored to client-specific needs with scalable architectures and modern tech stacks.",
        image:
          "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "API Integration",
        description:
          "Implementing smart API integrations to unify business systems, reducing manual work and improving productivity.",
        image:
          "https://images.unsplash.com/photo-1760952851538-17a59f691efe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "IT Staff Augmentation",
        description:
          "Providing rapid access to pre-vetted IT professionals to extend client teams, ensuring timely project completion and skill flexibility.",
        image:
          "https://images.unsplash.com/photo-1668713701571-1d1cbcefe7bd?q=80&w=1592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "ERP and Automation Solutions",
        description:
          "Delivering tailored ERP implementations and automation tools to streamline resource management and operational efficiency.",
        image:
          "https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],

    // Images
    images: [
      {
        url: "/dunesync-banner.png",
        alt: "DuneSync software development",
        caption: "Innovative and scalable custom software solutions",
        type: "hero",
      },
      {
        url: "/dunesync-banner.png",
        alt: "Custom software development process",
        caption: "Tailored software development to unique client needs",
        type: "screenshot",
      },
      {
        url: "/dunesync-banner.png",
        alt: "API integration concept",
        caption: "Seamless integration of business systems",
        type: "diagram",
      },
      {
        url: "/dunesync-banner.png",
        alt: "IT staff augmentation",
        caption: "Access to expert developers to scale teams instantly",
        type: "screenshot",
      },
      {
        url: "/dunesync-banner.png",
        alt: "ERP and business automation",
        caption: "Efficient resource management and workflow automation",
        type: "screenshot",
      },
    ],

    architecture:
      "DuneSync employs a modular microservices architecture enabling scalable, maintainable systems with robust API integrations and containerized deployment pipelines for high availability and performance.",

    // Metrics
    metrics: [
      {
        label: "Clients Served",
        value: "50+",
        context:
          "Businesses across multiple industries served with custom software solutions.",
      },
      {
        label: "Projects Delivered",
        value: "100+",
        context: "Successful software and automation project completions.",
      },
      {
        label: "IT Experts Available",
        value: "100+",
        context:
          "Pre-vetted IT professionals available for staff augmentation.",
      },
      {
        label: "Customer Satisfaction",
        value: "95%",
        context:
          "Average client satisfaction rating based on feedback and reviews.",
      },
    ],

    // Key Results
    keyResults: [
      "Enabled unique, scalable software solutions tailored to client workflows.",
      "Reduced manual processes with smart API integrations.",
      "Accelerated project timelines with on-demand expert teams.",
      "Improved business efficiency with ERP and automation implementations.",
    ],

    // Team
    teamSize: 40,
    roles: [
      "Software Developers",
      "UI/UX Designers",
      "DevOps Engineers",
      "Project Managers",
      "Quality Assurance Specialists",
      "Business Analysts",
      "IT Consultants",
    ],

    // Testimonial
    testimonial: {
      quote:
        "DuneSync transformed our software capabilities with their expert team and tailored solutions. Their professionalism and innovative approach helped us achieve our digital transformation goals faster than we expected.",
      author: "James Williams",
      role: "CTO, Healthcare Solutions Inc.",
    },

    // Tags
    tags: [
      "Custom Software Development",
      "API Integration",
      "IT Staff Augmentation",
      "ERP Solutions",
      "Business Automation",
      "Cloud",
      "DevOps",
    ],

    // Metadata
    metaTitle: "DuneSync Custom Software Development & IT Solutions",
    metaDescription:
      "DuneSync provides innovative custom software development, API integrations, staff augmentation, and automation solutions to help businesses transform and scale efficiently.",
  },
  {
    id: "redas-real-estate-association-singapore",
    slug: "redas-real-estate-association-singapore",
    title: "Real Estate Developers' Association of Singapore (REDAS)",
    subtitle:
      "Advancing the real estate industry through advocacy, education, and industry engagement",
    category: "Industry Association",
    industry: "Real Estate",
    status: "completed",
    startedAt: "2023-01-01T00:00:00.000Z",
    duration: "22 months",

    // Hero Section
    heroImage: "/redas-banner-1.png",
    heroTitle:
      "Driving Growth and Innovation in Singapore’s Real Estate Sector",
    heroDescription:
      "REDAS is Singapore's leading real estate developers' association providing regulatory updates, industry insights, training programmes, and engagement platforms to support sustainable and innovative development.",

    // Overview
    overview:
      "REDAS actively represents the interests of the real estate development community in Singapore. It provides timely circulars and regulatory updates, hosts seminars and engagement sessions on critical industry topics such as AI, fire safety, and green technology, and supports members with professional development initiatives and market outlooks.",

    // Objectives
    objectives: [
      "Provide authoritative industry advocacy and represent developer interests",
      "Disseminate regulatory updates and circulars relevant to real estate and building sectors",
      "Organize educational workshops, seminars, and engagement sessions on emerging industry challenges and innovations",
      "Facilitate networking and knowledge sharing among industry professionals",
      "Promote sustainable development initiatives including green technology and smart buildings",
      "Support regulatory compliance and industry best practices",
    ],

    // Challenges
    challenges: [
      {
        title: "Keeping Pace with Regulatory Changes",
        description:
          "The real estate industry in Singapore faces frequent updates in regulations on fire safety, building control, and environmental standards requiring constant monitoring and communication.",
      },
      {
        title: "Industry Education on Emerging Technologies",
        description:
          "Educating members on the implications and opportunities presented by AI, smart building tech, and EV infrastructure.",
      },
      {
        title: "Facilitating Collaboration Amid Diverse Stakeholders",
        description:
          "Bringing together developers, government agencies, and service providers to align on sector growth strategies and regulatory compliance.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Comprehensive Regulatory Circulars",
        description:
          "Regular publication and dissemination of circulars on building control, fire precautions, gas installation standards, and anti-money laundering requirements.",
        image:
          "https://images.unsplash.com/photo-1657233979858-70176bccde18?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Industry Engagement Sessions",
        description:
          "Organizing topical seminars and workshops such as AI in Real Estate, Fire Safety of Electric Vehicles, and Smart Building Development with Green Tech.",
        image:
          "https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Market Outlook Reports",
        description:
          "Providing timely market insights and outlooks helping developers plan and adapt to changing market conditions.",
        image:
          "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Professional Development Programmes",
        description:
          "Offering training and leadership forums to build industry capacity and leadership skills.",
        image:
          "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],

    // Images
    images: [
      {
        url: "/redas-banner-1.png",
        alt: "REDAS Industry Advocacy",
        caption:
          "Empowering real estate developers through advocacy and education",
        type: "hero",
      },
      {
        url: "/redas-banner-1.png",
        alt: "Regulatory circulars",
        caption: "Publishing key regulatory updates for the industry",
        type: "screenshot",
      },
      {
        url: "/redas-banner-1.png",
        alt: "Industry seminars and workshops",
        caption:
          "Engaging sessions focused on real estate innovations and compliance",
        type: "screenshot",
      },
      {
        url: "/redas-banner-1.png",
        alt: "Market outlook report",
        caption: "Analysis and forecasts to aid strategic planning",
        type: "screenshot",
      },
      {
        url: "/redas-banner-1.png",
        alt: "Professional development",
        caption:
          "Training and leadership programmes for industry professionals",
        type: "screenshot",
      },
    ],

    architecture:
      "REDAS website and member platform operates on a CMS-based architecture with integrated communication and event management tools to facilitate timely dissemination of industry knowledge and member engagement.",

    // Metrics
    metrics: [
      {
        label: "Industry Circulars Published",
        value: "10+",
        context: "Up-to-date regulatory and best practice circulars annually",
      },
      {
        label: "Engagement Sessions",
        value: "20+",
        context:
          "Seminars and workshops held for member education in past year",
      },
      {
        label: "Member Organisations",
        value: "100+",
        context: "Real estate developers and related stakeholders represented",
      },
      {
        label: "Event Attendance",
        value: "1000+",
        context:
          "Participants in seminars, forums, and training programmes annually",
      },
    ],

    // Key Results
    keyResults: [
      "Maintained industry compliance with regulatory changes through timely updates",
      "Enhanced industry knowledge around AI, smart buildings, and sustainability",
      "Facilitated collaboration among developers, regulators, and service providers",
      "Supported professional growth via leadership and training forums",
    ],

    // Team
    teamSize: 15,
    roles: [
      "Industry Advocates",
      "Regulatory Experts",
      "Event Coordinators",
      "Communications Specialists",
      "Training Facilitators",
    ],

    // Testimonial
    testimonial: {
      quote:
        "REDAS is instrumental in keeping our community informed and prepared amidst evolving regulations and technology trends. Their engagement sessions and updates have been invaluable to our operations.",
      author: "Michael Lee",
      role: "Senior Developer, Singapore Property Group",
    },

    // Tags
    tags: [
      "Real Estate",
      "Industry Association",
      "Regulatory Compliance",
      "Education",
      "Seminars",
      "Sustainability",
      "Singapore",
    ],

    // Metadata
    metaTitle:
      "REDAS - Real Estate Developers' Association of Singapore | Industry Advocacy & Education",
    metaDescription:
      "REDAS advocates for Singapore’s real estate industry by providing regulatory updates, seminars, and professional development for sustainable and innovative sector growth.",
  },
  {
    id: "vstinc-digital-transformation-automation",
    slug: "vstinc-digital-transformation-automation",
    title: "VST Inc. Digital Transformation & Business Automation",
    subtitle:
      "Empowering businesses with innovative technology solutions for automation, strategy, and growth",
    category: "Digital Transformation",
    industry: "Information Technology",
    status: "completed",
    startedAt: "2023-03-01T00:00:00.000Z",
    duration: "18 months",

    // Hero Section
    heroImage: "/vstinc-banner.png",
    heroTitle: "Revolutionizing Business Through Technology",
    heroDescription:
      "VST Inc. partners with enterprises to implement cutting-edge business process automation, digital marketing, IT strategy, and cloud solutions to accelerate growth and efficiency.",

    // Overview
    overview:
      "VST Inc. delivers world-class digital transformation services focused on automating business processes, enhancing marketing effectiveness, ensuring IT and cybersecurity compliance, and enabling cloud adoption. Their solutions help businesses optimize operations, expand revenue channels, and stay competitive in a rapidly evolving digital landscape.",

    // Objectives
    objectives: [
      "Implement robust business process automation solutions",
      "Enhance brand visibility and customer engagement through digital media marketing",
      "Provide strategic consulting for business and IT alignment",
      "Develop and deploy e-commerce platforms to optimize revenue generation",
      "Design and develop next-generation applications",
      "Deliver managed IT services tailored to enterprise needs",
      "Ensure cybersecurity compliance with major regulatory standards",
      "Support cloud migration and adoption for scalable infrastructure",
    ],

    // Challenges
    challenges: [
      {
        title: "Complex Business Processes",
        description:
          "Enterprises require tailored automation strategies that align with complex, multi-departmental workflows.",
      },
      {
        title: "Digital Marketing Saturation",
        description:
          "Standing out and achieving ROI in competitive digital marketing landscapes demands innovative strategies and technology.",
      },
      {
        title: "Security and Compliance",
        description:
          "Adapting to evolving cybersecurity threats and regulatory mandates requires continuous vigilance and expertise.",
      },
      {
        title: "Cloud Migration Risks",
        description:
          "Transitioning legacy infrastructure to cloud-native environments involves technical, operational, and cultural challenges.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Business Process Automation",
        description:
          "Deploying scalable automation solutions that streamline operations and reduce manual effort across business units.",
        image:
          "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Digital Media Marketing",
        description:
          "Leveraging award-winning marketing technologies to boost brand awareness and customer engagement.",
        image:
          "https://images.unsplash.com/photo-1621763542503-f8496eb0ac25?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "IT Strategy Consulting",
        description:
          "Providing insights and roadmaps to align IT investments with business goals and innovation objectives.",
        image:
          "https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Cloud Consulting & Migration",
        description:
          "Offering expert guidance and implementation support for successful cloud adoption and modernization.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],

    // Images
    images: [
      {
        url: "/vstinc-banner.png",
        alt: "VST Inc. Digital Transformation",
        caption: "Driving enterprise growth through technology innovation",
        type: "hero",
      },
      {
        url: "/vstinc-banner.png",
        alt: "Business process automation",
        caption: "Automating complex enterprise workflows",
        type: "screenshot",
      },
      {
        url: "/vstinc-banner.png",
        alt: "Digital media marketing",
        caption: "Strategic marketing to enhance brand reach",
        type: "screenshot",
      },
      {
        url: "/vstinc-banner.png",
        alt: "IT strategy consulting",
        caption: "Aligning IT with business goals",
        type: "screenshot",
      },
      {
        url: "/vstinc-banner.png",
        alt: "Cloud consulting and migration",
        caption: "Seamless transition to cloud infrastructure",
        type: "screenshot",
      },
    ],

    architecture:
      "VST Inc. combines automation tools, cloud platforms, and advanced marketing tech under an agile development framework to provide end-to-end digital transformation solutions tailored for enterprise scalability and compliance.",

    // Metrics
    metrics: [
      {
        label: "Clients Served",
        value: "100+",
        context:
          "Enterprises benefited from VST’s digital transformation solutions.",
      },
      {
        label: "Automated Processes",
        value: "500+",
        context:
          "Business processes automated improving efficiency and accuracy.",
      },
      {
        label: "Successful Cloud Migrations",
        value: "50+",
        context:
          "Enterprises modernized their infrastructure with cloud solutions.",
      },
      {
        label: "Compliance Certifications",
        value: "10+",
        context:
          "Regulatory and security certifications maintained and implemented.",
      },
    ],

    // Key Results
    keyResults: [
      "Streamlined enterprise operations through business process automation.",
      "Increased brand awareness and customer engagement via digital marketing.",
      "Helped enterprises successfully migrate to scalable cloud infrastructures.",
      "Maintained high levels of cybersecurity and regulatory compliance.",
    ],

    // Team
    teamSize: 60,
    roles: [
      "Business Automation Specialists",
      "Digital Marketing Experts",
      "IT Strategists",
      "Cloud Architects",
      "Cybersecurity Professionals",
      "Project Managers",
    ],

    // Testimonial
    testimonial: {
      quote:
        "VST Inc. has been a pivotal partner in our digital journey, delivering robust automation and cloud solutions that have transformed our operations and accelerated our growth.",
      author: "Linda Roberts",
      role: "Chief Information Officer",
    },

    // Tags
    tags: [
      "Digital Transformation",
      "Business Automation",
      "Cloud Migration",
      "Cybersecurity",
      "Digital Marketing",
      "IT Strategy",
    ],

    // Metadata
    metaTitle:
      "VST Inc. Digital Transformation & Business Automation Solutions",
    metaDescription:
      "VST Inc. empowers enterprises with automation, digital marketing, IT strategy, cloud migration, and cybersecurity solutions to drive innovation and growth.",
  },
  {
    id: "eduportal-school-management-software",
    slug: "eduportal-school-management-software",
    title: "EduPortal School & College Management Software",
    subtitle:
      "A comprehensive digital platform to simplify school and college administration and enhance learning experience in Pakistan",
    category: "Education Technology",
    industry: "Education",
    status: "completed",
    startedAt: "2022-01-01T00:00:00.000Z",
    duration: "3 months",

    // Hero Section
    heroImage: "/eduportal-banner.png",
    heroTitle: "Transforming Education Through Technology",
    heroDescription:
      "EduPortal provides modules for timetable management, attendance tracking, online classes, examinations, gradebooks, mobile learning, and hostel management, supporting schools, colleges, and universities.",

    // Overview
    overview:
      "EduPortal is a leading education management solution in Pakistan designed to streamline academic and administrative processes. It empowers institutions with tools for online learning, real-time attendance, exams management, progress tracking, and secure parent-teacher-student communication, enhancing efficiency and transparency.",

    // Objectives
    objectives: [
      "Automate academic and administrative workflows",
      "Enable online and blended learning through digital classrooms",
      "Provide real-time attendance and performance tracking",
      "Facilitate seamless communication between parents, teachers, and students",
      "Manage examinations, grading, and result reporting efficiently",
      "Support hostel and resource management",
      "Enhance accessibility through a mobile-friendly platform",
    ],

    // Challenges
    challenges: [
      {
        title: "Digital Adoption in Traditional Institutions",
        description:
          "Helping schools and colleges transition from manual processes to integrated digital systems.",
      },
      {
        title: "Ensuring Real-Time Accurate Data",
        description:
          "Maintaining up-to-date attendance, grading, and scheduling data accessible to all stakeholders.",
      },
      {
        title: "Integration Across Departments",
        description:
          "Bringing together academic, administrative, and extracurricular management under one platform.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Modular School Management System",
        description:
          "Includes modules for timetable creation, attendance, gradebooks, examinations, and hostel management to cover end-to-end institutional needs.",
        image:
          "https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Mobile Learning and Communication",
        description:
          "Supports online classes, push notifications, and a parent-teacher-student communication portal accessible via mobile app.",
        image:
          "https://images.unsplash.com/photo-1758270704522-f091f8064a81?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Analytics and Reporting",
        description:
          "Real-time progress tracking and comprehensive reports help educators and administrators make data-driven decisions.",
        image:
          "https://images.unsplash.com/photo-1662748562746-380c3f049414?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],

    // Images
    images: [
      {
        url: "/eduportal-banner.png",
        alt: "EduPortal School Management Interface",
        caption: "Intuitive user interface for school management",
        type: "hero",
      },
      {
        url: "/eduportal-banner.png",
        alt: "School management modules",
        caption:
          "Comprehensive modules for academic and administrative management",
        type: "screenshot",
      },
      {
        url: "/eduportal-banner.png",
        alt: "Mobile learning app interface",
        caption: "Access learning and communication on the go",
        type: "screenshot",
      },
      {
        url: "/eduportal-banner.png",
        alt: "Performance analytics dashboard",
        caption: "Monitor student progress and institutional performance",
        type: "screenshot",
      },
    ],

    architecture:
      "EduPortal is built on a modular microservices architecture with secure APIs enabling integrated management of academic functions, mobile access, and real-time analytics.",

    // Metrics
    metrics: [
      {
        label: "Institutions Served",
        value: "100+",
        context:
          "Schools, colleges, and universities across Pakistan using EduPortal.",
      },
      {
        label: "Active Users",
        value: "50,000+",
        context:
          "Students, teachers, and parents actively engaging with the platform.",
      },
      {
        label: "Modules Included",
        value: "8+",
        context:
          "Core management modules covering various academic and administrative needs.",
      },
    ],

    // Key Results
    keyResults: [
      "Streamlined academic and administrative workflows reducing manual effort.",
      "Improved communication and transparency between school and parents.",
      "Enabled remote learning and continuous education through integrated online classrooms.",
      "Provided actionable analytics fostering data-driven educational decisions.",
    ],

    // Team
    teamSize: 30,
    roles: [
      "Software Engineers",
      "UI/UX Designers",
      "Educational Consultants",
      "Customer Support Specialists",
      "Product Managers",
    ],

    // Testimonial
    testimonial: {
      quote:
        "EduPortal has revolutionized the way we manage academic and administrative tasks. The seamless communication with parents and the mobile learning capabilities have greatly enhanced our school’s efficiency.",
      author: "Mrs. Ayesha Malik",
      role: "Principal, Crescent School",
    },

    // Tags
    tags: [
      "Education Technology",
      "School Management",
      "Attendance Tracking",
      "Online Classes",
      "Grading System",
      "Mobile Learning",
      "Pakistan",
    ],

    // Metadata
    metaTitle:
      "EduPortal - Comprehensive School and College Management Software in Pakistan",
    metaDescription:
      "EduPortal offers a full-featured school management system with online classes, attendance tracking, examinations, and mobile learning to transform education administration in Pakistan.",
  },
  {
    id: "evidanza-corporate-performance-management",
    slug: "evidanza-corporate-performance-management",
    title: "Evidanza Corporate Performance Management Platform",
    subtitle:
      "Integrated CPM solution to monitor, measure, and improve business performance through data-driven insights",
    category: "Business Intelligence",
    industry: "Enterprise Software",
    status: "completed",
    startedAt: "2023-05-01T00:00:00.000Z",
    duration: "5 months",

    // Hero Section
    heroImage: "/evidanza-banner.png",
    heroTitle: "Optimize Your Business Performance with Evidanza",
    heroDescription:
      "Evidanza offers an all-in-one Corporate Performance Management (CPM) platform combining business intelligence, planning, and process management to help companies make strategic decisions based on real-time data.",

    // Overview
    overview:
      "Evidanza's CPM platform 'SYNAPSE' integrates business intelligence for data analysis, business planning for strategy formulation, and business process management for workflow optimization. The platform enables companies, especially in the Mittelstand sector, to continuously monitor key performance indicators, evaluate operational data, and enhance decision-making efficiency.",

    // Objectives
    objectives: [
      "Provide continuous monitoring and analysis of company performance metrics",
      "Enable strategic business planning leveraging integrated company data",
      "Optimize business processes through data-driven analysis and planning",
      "Automate business applications and data management to improve workflows",
      "Support enterprise management in informed decision-making",
    ],

    // Challenges
    challenges: [
      {
        title: "Integrating Disparate Business Data",
        description:
          "Collecting and harmonizing data from multiple sources for comprehensive analysis.",
      },
      {
        title: "Real-time Performance Monitoring",
        description:
          "Ensuring up-to-date visibility into key business metrics for timely decision-making.",
      },
      {
        title: "Process Optimization Alignment",
        description:
          "Aligning various business processes through planning and data insights to drive efficiency.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Business Intelligence Module",
        description:
          "Advanced analytics tools to visualize and analyze enterprise performance data.",
        image:
          "https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Business Planning Module",
        description:
          "Planning tools integrated with data analytics to support strategic business decisions.",
        image:
          "https://images.unsplash.com/photo-1586436008908-49c3fb035022?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Business Process Management",
        description:
          "Tools to optimize and automate workflows based on analytic insights.",
        image:
          "https://images.unsplash.com/photo-1758876020010-fe9a9d9f8266?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Automation Platform",
        description:
          "Business apps and data management solutions to automate routine processes.",
        image:
          "https://images.unsplash.com/photo-1693045181254-08462917f681?q=80&w=1057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],

    // Images
    images: [
      {
        url: "/evidanza-banner.png",
        alt: "Evidanza Corporate Performance Management Dashboard",
        caption: "Real-time monitoring and analytics with SYNAPSE CPM platform",
        type: "hero",
      },
      {
        url: "/evidanza-banner.png",
        alt: "Business intelligence analytics",
        caption: "Analyze and visualize company data effectively",
        type: "screenshot",
      },
      {
        url: "/evidanza-banner.png",
        alt: "Business planning tools",
        caption: "Strategic planning integrated with performance data",
        type: "screenshot",
      },
      {
        url: "/evidanza-banner.png",
        alt: "Business process management",
        caption: "Optimize workflows and processes based on analytics",
        type: "screenshot",
      },
      {
        url: "/evidanza-banner.png",
        alt: "Automation platform",
        caption: "Automate business applications and data handling",
        type: "screenshot",
      },
    ],

    architecture:
      "Evidanza SYNAPSE platform integrates BI, planning, process management, and automation in a modular architecture that supports real-time data flow and enterprise-wide strategic decision making.",

    // Metrics
    metrics: [
      {
        label: "Key Performance Indicators Monitored",
        value: "100+",
        context: "Across multiple industries for continuous business insight.",
      },
      {
        label: "Client Companies",
        value: "50+",
        context: "Medium-sized enterprises using Evidanza SYNAPSE.",
      },
      {
        label: "Automated Processes",
        value: "Thousands",
        context:
          "Routine business workflows streamlined with Evidanza solutions.",
      },
    ],

    // Key Results
    keyResults: [
      "Improved decision-making speed through real-time business intelligence.",
      "Enhanced operational efficiency by optimizing business processes.",
      "Reduced manual workload via automation of routine tasks.",
      "Enabled data-driven strategic planning to support growth.",
    ],

    // Team
    teamSize: 40,
    roles: [
      "Business Intelligence Analysts",
      "Software Developers",
      "Process Consultants",
      "Automation Engineers",
      "Project Managers",
    ],

    // Testimonial
    testimonial: {
      quote:
        "Evidanza’s integrated CPM platform has significantly improved our ability to monitor performance and make strategic decisions faster. The automation tools have freed our staff to focus on high-impact activities.",
      author: "Dr. Martin Schneider",
      role: "CEO, Mittelstand Corporation",
    },

    // Tags
    tags: [
      "CPM",
      "Business Intelligence",
      "Business Planning",
      "Process Management",
      "Automation",
      "Enterprise Software",
    ],

    // Metadata
    metaTitle:
      "Evidanza SYNAPSE - Corporate Performance Management & Business Intelligence",
    metaDescription:
      "Evidanza offers a comprehensive CPM platform combining business intelligence, strategic planning, process management, and automation to optimize medium-sized business performance.",
  },
];

export const getAllProjects = () => PROJECTS_DATA;

export const getProjectBySlug = (slug: string) =>
  PROJECTS_DATA.find((project) => project.slug === slug);

export const getFeaturedProjects = (limit = 3) => PROJECTS_DATA.slice(0, limit);

export const getProjectsByCategory = (category: string) =>
  PROJECTS_DATA.filter((project) => project.category === category);

export const getProjectsByIndustry = (industry: string) =>
  PROJECTS_DATA.filter((project) => project.industry === industry);
