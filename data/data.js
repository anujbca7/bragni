/**
 * INFLANAR — data.js
 * All content as data. Every section heading/sub managed here (admin panel pattern).
 * Replace with API fetch calls when backend is ready.
 */
const INFLANAR = {
  site: {
    name: "Inflanar",
    tagline: "Influencer Hiring Platform",
    logo: "assets/img/logo.png",
    email: "user@gmail.com",
    copyright: "Copyright 2025, QuomodoSoft. All Rights Reserved.",
  },

  nav: {
    main: [
      { label: "Home", href: "index.html" },
      { label: "About Us", href: "about.html" },
      { label: "Influencers", href: "influencers.html" },
      { label: "Services", href: "services.html" },
      {
        label: "Pages",
        dropdown: [
          { label: "Our Blogs", href: "blogs.html" },
          { label: "FAQ", href: "faq.html" },
          { label: "Terms & Conditions", href: "terms.html" },
          { label: "Privacy Policy", href: "privacy.html" },
          { label: "Custom Page One", href: "custom-page.html?page=one" },
          { label: "Custom Page Two", href: "custom-page.html?page=two" },
        ],
      },
      { label: "Contact", href: "contact.html" },
    ],
    currencies: [
      "$-USD",
      "₦-NGN",
      "₹-INR",
      "$-CAD",
      "₱-PHP",
      "₺-Turkish lira",
      "$-ARS",
    ],
    languages: ["English", "Arabic"],
  },

  /* ── HERO ──────────────────────────────────────────────── */
  hero: {
    label: "GO TO YOUR INFLUENCER PLATFORM",
    title: "The Right Influencer For Your Business",
    search_placeholder: "Search influencers, services...",
    popular_tags: ["TikTok", "Facebook", "Instagram", "Linkedin", "Influencer"],
    satisfied_clients: "2465+",
    hero_img: "assets/img/hero/hero-person.png",
  },

  /* ── CATEGORIES ────────────────────────────────────────── */
  categories_section: {
    label: "Categories",
    title: "Influencer in Different Categories",
  },
  categories: [
    { name: "Fashion", icon: "👗", count: 3, slug: "fashion" },
    { name: "Sport & Fitness", icon: "🏋️", count: 4, slug: "sport-fitness" },
    { name: "Parenting", icon: "👶", count: 1, slug: "parenting" },
    { name: "Life Style", icon: "🌿", count: 1, slug: "life-style" },
    { name: "Beauty", icon: "💄", count: 1, slug: "beauty" },
    { name: "Vloggers", icon: "🎥", count: 0, slug: "vloggers" },
    { name: "Pet Care", icon: "🐾", count: 0, slug: "pet-care" },
    { name: "Photography", icon: "📸", count: 1, slug: "photography" },
    { name: "Games", icon: "🎮", count: 0, slug: "games" },
    { name: "Travel", icon: "✈️", count: 0, slug: "travel" },
  ],

  /* ── FEATURES ──────────────────────────────────────────── */
  features_section: {
    label: "Best Feature",
    title: "Our Latest Features",
    sub: "Discover the powerful tools and features designed to simplify influencer marketing and maximize your campaign results.",
  },
  features: [
    {
      icon: "💰",
      title: "No upfront Cost",
      desc: "Nulla eget metus mauris. Sed in ipsum mollis, sagittis ligula. Start your campaign without any initial investment.",
    },
    {
      icon: "✅",
      title: "Verified Creators",
      desc: "Nulla eget metus mauris. Sed in ipsum mollis, sagittis ligula. All creators are verified for authentic engagement.",
    },
    {
      icon: "💬",
      title: "Live Chat",
      desc: "Nulla eget metus mauris. Sed in ipsum mollis, sagittis ligula. Connect instantly with influencers via live chat.",
    },
    {
      icon: "🛡️",
      title: "Safe Campaign",
      desc: "Nulla eget metus mauris. Sed in ipsum mollis, sagittis ligula. Your campaigns are protected with our safety guarantee.",
    },
  ],

  /* ── INFLUENCERS ───────────────────────────────────────── */
  influencers_section: {
    label: "Top Influencer",
    title: "Talented Influencer Member",
    sub: "Connect with our talented influencer members and amplify your brand's reach across all major social media platforms.",
  },
  influencers: [
    {
      id: "i001",
      slug: "alvantan-khan",
      name: "Alvantan Khan",
      category: "Sport & Fitness",
      followers: "1250K",
      following: "12K",
      verified: false,
      avatar: "assets/img/influencers/inf-1.jpg",
      bio: "Fitness enthusiast and certified personal trainer sharing workout tips and healthy lifestyle content.",
      rating: 4.8,
    },
    {
      id: "i002",
      slug: "nasrun-nessa",
      name: "Nasrun Nessa",
      category: "Sport & Fitness",
      followers: "8450K",
      following: "75K",
      verified: false,
      avatar: "assets/img/influencers/inf-2.jpg",
      bio: "Award-winning fitness and lifestyle influencer with a massive following across Instagram and YouTube.",
      rating: 4.9,
    },
    {
      id: "i003",
      slug: "nawyantong",
      name: "Nawyantong",
      category: "Graphic Designer",
      followers: "2550K",
      following: "84K",
      verified: false,
      avatar: "assets/img/influencers/inf-3.jpg",
      bio: "Creative graphic designer and visual content creator known for stunning photography and design tutorials.",
      rating: 4.7,
    },
    {
      id: "i004",
      slug: "david-richard",
      name: "David Richard",
      category: "Digital Marketer",
      followers: "1250K",
      following: "12K",
      verified: true,
      avatar: "assets/img/influencers/inf-4.jpg",
      bio: "Digital marketing expert helping brands grow their online presence through strategic influencer campaigns.",
      rating: 4.9,
    },
  ],

  /* ── SERVICES ──────────────────────────────────────────── */
  services_section: {
    label: "Our Services",
    title: "Influencer Latest Services",
    sub: "Explore our wide range of influencer marketing services designed to boost your brand visibility and engagement.",
  },
  services: [
    {
      id: "s001",
      slug: "makeup-magic",
      title: "Makeup Magic with Two Influencers",
      category: "Fashion",
      price: 18.0,
      rating: 4,
      reviews: 1,
      influencer: "David Richard",
      inf_id: "i004",
      img: "assets/img/services/svc-1.jpg",
      wishlist: false,
    },
    {
      id: "s002",
      slug: "strength-training",
      title: "Strength Training with Influencers",
      category: "Parenting",
      price: 55.0,
      rating: 4,
      reviews: 1,
      influencer: "David Richard",
      inf_id: "i004",
      img: "assets/img/services/svc-2.jpg",
      wishlist: false,
    },
    {
      id: "s003",
      slug: "beauty-makeovers",
      title: "Influencer Beauty Makeovers",
      category: "Photography",
      price: 25.0,
      rating: 4,
      reviews: 1,
      influencer: "David Richard",
      inf_id: "i004",
      img: "assets/img/services/svc-3.jpg",
      wishlist: false,
    },
    {
      id: "s004",
      slug: "training-programs",
      title: "Influencers Unleashed: Training Programs",
      category: "Sport & Fitness",
      price: 25.6,
      rating: 1,
      reviews: 0,
      influencer: "Alvantan Khan",
      inf_id: "i001",
      img: "assets/img/services/svc-4.jpg",
      wishlist: false,
    },
    {
      id: "s005",
      slug: "electrical-influencers",
      title: "Energizing Electrical Influencers",
      category: "Life Style",
      price: 18.0,
      rating: 4,
      reviews: 1,
      influencer: "Nasrun Nessa",
      inf_id: "i002",
      img: "assets/img/services/svc-5.jpg",
      wishlist: false,
    },
    {
      id: "s006",
      slug: "wardrobe-services",
      title: "Style Meets Influence: Wardrobe Services",
      category: "Sport & Fitness",
      price: 20.0,
      rating: 1,
      reviews: 0,
      influencer: "Nasrun Nessa",
      inf_id: "i002",
      img: "assets/img/services/svc-6.jpg",
      wishlist: false,
    },
    {
      id: "s007",
      slug: "strong-man-training",
      title: "Strong man the training black man",
      category: "Beauty",
      price: 14.99,
      rating: 3,
      reviews: 2,
      influencer: "Nawyantong",
      inf_id: "i003",
      img: "assets/img/services/svc-7.jpg",
      wishlist: false,
    },
    {
      id: "s008",
      slug: "two-girls-makeup",
      title: "Two girls are our doing make-up in",
      category: "Sport & Fitness",
      price: 9.99,
      rating: 1,
      reviews: 0,
      influencer: "Nawyantong",
      inf_id: "i003",
      img: "assets/img/services/svc-8.jpg",
      wishlist: false,
    },
  ],

  /* ── HOW IT WORKS ──────────────────────────────────────── */
  how_section: {
    label: "Working Process",
    title: "How Dose It Work?",
    sub: "Follow these simple steps to launch your influencer marketing campaign and start seeing results.",
  },
  steps: [
    {
      num: 1,
      title: "Create Account",
      desc: "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincidunt sem, id sagittis nibh.",
      img: "assets/img/steps/step-1.jpg",
    },
    {
      num: 2,
      title: "Choose Influencer",
      desc: "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincidunt sem, id sagittis nibh.",
      img: "assets/img/steps/step-2.jpg",
    },
    {
      num: 3,
      title: "Monitor Your Campaign",
      desc: "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincidunt sem, id sagittis nibh.",
      img: "assets/img/steps/step-3.jpg",
    },
    {
      num: 4,
      title: "Check Your Report",
      desc: "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincidunt sem, id sagittis nibh.",
      img: "assets/img/steps/step-4.jpg",
    },
  ],

  /* ── PLATFORM PROMO ────────────────────────────────────── */
  platform_section: {
    title: "Manage all your creator relationships in one place.",
    desc: "Suspendisse non leo lobortis, fermentum magna vitae, viverra nisi. Quisque tristique pretium odio eget ullamcorper. Sed quis mi pulvinar Integer vitae lorem tortor. Integer tempus nulla massa, eu blandit risus euismod non. Aenean vitae nunc orci suscipit hendrerit.",
    cta: "Discover More",
    href: "about.html",
    video_img: "assets/img/misc/video-thumb.jpg",
  },

  /* ── SOCIAL STATS ──────────────────────────────────────── */
  social_stats: [
    {
      platform: "Facebook",
      count: "6M+",
      icon: "assets/img/misc/fb-icon.png",
      color: "#1877F2",
    },
    {
      platform: "Twitter",
      count: "3M+",
      icon: "assets/img/misc/tw-icon.png",
      color: "#1DA1F2",
    },
    {
      platform: "TikTok",
      count: "2K+",
      icon: "assets/img/misc/tt-icon.png",
      color: "#010101",
    },
    {
      platform: "Instagram",
      count: "10M+",
      icon: "assets/img/misc/ig-icon.png",
      color: "#E1306C",
    },
  ],

  /* ── BRAND PARTNERS ────────────────────────────────────── */
  partners_section: {
    title: "We Work with Brands that Influence 1000+ Clients",
    desc: "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.",
    cta: "Contact Us",
    href: "contact.html",
  },
  partners: [
    { name: "Frontiac", img: "assets/img/partners/p1.svg" },
    { name: "Airbnb", img: "assets/img/partners/p2.svg" },
    { name: "CN Netcom", img: "assets/img/partners/p3.svg" },
    { name: "Ondulline", img: "assets/img/partners/p4.svg" },
    { name: "Bourer", img: "assets/img/partners/p5.svg" },
    { name: "Aircalin", img: "assets/img/partners/p6.svg" },
    { name: "Delta Lloyd", img: "assets/img/partners/p7.svg" },
    { name: "Delta", img: "assets/img/partners/p8.svg" },
    { name: "Others", img: "assets/img/partners/p9.svg" },
  ],

  /* ── ABOUT ─────────────────────────────────────────────── */
  about_section: {
    label: "About Inflanar",
    title: "Creative and First Problems Solving",
    desc1:
      "Quisque tristique, ipsum dignissim dapibus elementum, nisi urna convallis est, ut lacinia elit orci vel felis. Suspendisse accumsan metus quis nibh sagittis as suscipit. Sed sit amet condimentum nulla. Quisque sed tincidunt ante.",
    desc2:
      "Suspendisse accumsan metus quis nibh sagittis as suscipit. Sed sit amet condimentum nulla. Quisque sed tincidunt ante.",
    ceo_name: "Sufankho Jhon",
    ceo_role: "CEO of Inflanar",
    ceo_avatar: "assets/img/misc/ceo-avatar.webp",
    ceo_signature: "assets/img/misc/ceo-signature.webp",
    about_img: "assets/img/misc/about-img.webp",
  },

  /* ── FAQ ───────────────────────────────────────────────── */
  faq_section: {
    label: "Our Faq's",
    title: "Frequently Asked Questions",
    sub: "Curabitur a pretium orci, a venenatis diam phasell mi velit. Vestibulum et tincidunt.",
    faq_img: "assets/img/misc/faq-img.jpg",
  },
  faqs: [
    {
      q: "Can you provide documentation to implement?",
      a: "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
      open: true,
    },
    {
      q: "What is an influencer marketing tool?",
      a: "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
      open: false,
    },
    {
      q: "What is an influencer marketing software?",
      a: "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
      open: false,
    },
    {
      q: "Why is influencer marketing critical for social commerce?",
      a: "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
      open: false,
    },
    {
      q: "What is the average number of influencers for the campaign?",
      a: "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
      open: false,
    },
  ],

  /* ── TESTIMONIALS ──────────────────────────────────────── */
  testi_section: {
    label: "Testimonial",
    title: "What Our Customers Say?",
  },
  testimonials: [
    {
      name: "Daniel Paul",
      role: "Graphic Designer",
      company: "Deezer",
      logo: "assets/img/misc/t1.jpg",
      avatar: "assets/img/misc/t1.jpg",
      text: "Phasellus dapibus erat in lorem malesuada, a cosin Sed molestie nibh vitae pharetra egestas. Vivamusi cibus, egeit commodo odsio vulputate. Praesent as rdum, elit ligula sagittis lacus mauris.",
    },
    {
      name: "David Richard",
      role: "Web Designer",
      company: "Dropbox",
      logo: "assets/img/misc/t2.jpg",
      avatar: "assets/img/misc/t2.jpg",
      text: "Phasellus dapibus erat in lorem malesuada, a cosin Sed molestie nibh vitae pharetra egestas. Vivamusi cibus, egeit commodo odsio vulputate. Praesent as rdum, elit ligula sagittis lacus mauris.",
    },
    {
      name: "John Doe",
      role: "MBBS, FCPS, FRCS",
      company: "Hashnode",
      logo: "assets/img/misc/t3.jpg",
      avatar: "assets/img/misc/t3.jpg",
      text: "Phasellus dapibus erat in lorem malesuada, a cosin Sed molestie nibh vitae pharetra egestas. Vivamusi cibus, egeit commodo odsio vulputate. Praesent as rdum, elit ligula sagittis lacus mauris.",
    },
    {
      name: "Rashaini Chan",
      role: "Graphic Designer",
      company: "Airbnb",
      logo: "assets/img/misc/t4.jpg",
      avatar: "assets/img/misc/t4.jpg",
      text: "Phasellus dapibus erat in lorem malesuada, a cosin Sed molestie nibh vitae pharetra egestas. Vivamusi cibus, egeit commodo odsio vulputate. Praesent as rdum, elit ligula sagittis lacus mauris.",
    },
    {
      name: "John Doe",
      role: "Web Developer",
      company: "Google",
      logo: "assets/img/misc/t5.jpg",
      avatar: "assets/img/misc/t5.jpg",
      text: "Phasellus dapibus erat in lorem malesuada, a cosin Sed molestie nibh vitae pharetra egestas. Vivamusi cibus, egeit commodo odsio vulputate. Praesent as rdum, elit ligula sagittis lacus mauris.",
    },
  ],

  /* ── CTA BANNER ────────────────────────────────────────── */
  cta_banner: {
    title: "Let influencers do the heavy lifting for your marketing campaign",
    cta: "Join as Influencer",
    href: "register.html",
    img: "assets/img/misc/cta-mockup.jpg",
  },

  /* ── BLOGS ─────────────────────────────────────────────── */
  blogs_section: {
    label: "Latest News",
    title: "Latest Blog & Articles",
    sub: "Stay updated with the latest insights, tips and trends in influencer marketing.",
  },
  blogs: [
    {
      id: "b001",
      slug: "influencer-marketing-made-simple",
      title: "Influencer Marketing Made Simple",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Fashion",
      img: "assets/img/blogs/blog-1.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b002",
      slug: "discover-influencer-marketing-success",
      title: "Discover Influencer Marketing Success",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Life Style",
      img: "assets/img/blogs/blog-2.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b003",
      slug: "excited-and-audience-watching-confetti",
      title: "Excited and audience watching confetti",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Beauty",
      img: "assets/img/blogs/blog-3.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b004",
      slug: "establishing-a-content-marketing",
      title: "Establishing a content marketing strategy",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Fashion",
      img: "assets/img/blogs/blog-4.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b005",
      slug: "7-types-of-influencer-marketing",
      title: "7 types of influencer marketing campaigns",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Sport",
      img: "assets/img/blogs/blog-5.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b006",
      slug: "influencer-engagement",
      title: "Influencer engagement everything you",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Parenting",
      img: "assets/img/blogs/blog-6.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b007",
      slug: "90-social-as-media-influencers",
      title: "90% Social as Media Influencers",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Fashion",
      img: "assets/img/blogs/blog-7.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b008",
      slug: "influencer-is-a-real-job",
      title: "Influencer Is a Real the Job It's Time to Act",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Life Style",
      img: "assets/img/blogs/blog-8.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b009",
      slug: "how-brands-can-break-barriers",
      title: "How Brands Can Break Barriers Empo",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Fashion",
      img: "assets/img/blogs/blog-9.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
    {
      id: "b010",
      slug: "hire-top-influencers",
      title: "Hire Top Influencers for Maximum Impact",
      author: "John Doe",
      date: "15 Oct 2023",
      category: "Beauty",
      img: "assets/img/blogs/blog-10.jpg",
      excerpt:
        "Sint dignissim consectetue nec et per ad probatus referentur vel cu consequat sententiae.",
    },
  ],

  /* ── BLOG DETAIL — featured ────────────────────────────── */
  blog_detail: {
    id: "b002",
    title: "Discover Influencer Marketing Success",
    author: "Influencer",
    date: "15 Oct 2023",
    category: "Life Style",
    img: "assets/img/blogs/blog-2.jpg",
    tags: ["#tiktok", "#social media", "#trending video"],
    content: `<p>Sint dignissim consectetuer nec et, per ad probatus referentur, vel cu consequat sententiae. Ad duis fugit dictas mea, et cum stet oratio cetero. Ne pri omittam fastidi. No per harum dicant neglegentiur, sea ei esse volumus adolescens. Nulla argumentum at pri, vel apeirian principes in. An dicam dicant consul mea, ne per option appetere argumentum, vim legere senseri et.</p>
<p>Per ex vero nolumy. Ius eu doming nominavi mediocrem, aliquid efficiantur no vim, sanctus admodum mnesarchum ad pro. No sea invidunt partiendo. No postea numquam ocurreret duo, unam abhorreat cu nam, fugit fastidii percipitur nam id.</p>
<p>Id est maiorum volutpat, ad nominavi suscipit suscipiantur vix. Ut ius veri aperiam reprehendunt. Ut per unum sapientem consequuntur, usu ut quot scripta. Sea te rirei expetenda, ad quo congue argumentum, sit quis simul accusam cu. Usu ei perfecto repudiare tincidunt, ut quas malis erant vim. An mel vidit iudicabit.</p>
<p>Vis in natum soleant nostro, pri in eloquentiam contentiones. Eu sit sapientem deleniti nec et, no quot illum veniam est, ne pro iudico sapeet mnesarchum. Ea pri nostro disputando contentiones, eu nec menandrí qualísque, vis eu quídem invidunt. Tt accusam detracto splendide per, congue meliore id sea. Has eu aeterno patrioque expetendis, mel ei dissentiret reformidans.</p>`,
    comments: [
      {
        name: "David Simmons",
        date: "16 Oct 2023",
        text: "Ad duis fugit dictas mea, et cum stet oratio cetero. Ne pri omittam fastidi. No per harum dicant neglegentiur, sea ei esse volumus adolescens. Nulla argumentum at pri, vel apeirian principes in. An dicam dicant consul mea, ne per option appetere argumentum, vim legere senseri et.",
      },
      {
        name: "David Miller",
        date: "16 Oct 2023",
        text: "Per ex vero nolumy. Ius eu doming nominavi mediocrem, aliquid efficiantur no vim, sanctus admodum mnesarchum ad pro. No sea invidunt partiendo. No postea numquam ocurreret duo, unam abhorreat cu nam, fugit fastidii percipitur nam id.",
      },
    ],
    author_bio: {
      name: "John Doe",
      bio: "Sure there isn't anything embarrassing hidden in the middle of text. All the Lorem our as repeat predefined chunks as the as necessary, making this the first as true generator a 200 our aslatin words, combined with a handful of model sentence structures.",
      avatar: "assets/img/misc/t3.jpg",
    },
    blog_categories: [
      { name: "Fashion", count: 7 },
      { name: "Sport & Fitness", count: 3 },
      { name: "Parenting", count: 1 },
      { name: "Life Style", count: 1 },
      { name: "Beauty", count: 0 },
    ],
  },

  /* ── CONTACT ───────────────────────────────────────────── */
  contact: {
    title: "Contact Us",
    phone: ["+88 234 567 8991", "+88 562 987 3214"],
    email: ["nazakahar@gmail.com", "infoyour@gmail.com"],
    address:
      "27 NW New Vexmont, 3 No Tejturi Bazar West, Panthapath North, Dhaka 1215",
    hours: ["Mon - Fri: 7.00am - 6.00pm", "Sat: 7.00am - 6.00pm"],
  },

  /* ── FOOTER ────────────────────────────────────────────── */
  footer: {
    quick_links: [
      { label: "About Us", href: "about.html" },
      { label: "Our Services", href: "services.html" },
      { label: "Our Influencers", href: "influencers.html" },
      { label: "Our Blogs", href: "blogs.html" },
      { label: "Contact Us", href: "contact.html" },
      { label: "Terms And Conditions", href: "terms.html" },
      { label: "Privacy Policy", href: "privacy.html" },
      { label: "FAQ", href: "faq.html" },
      { label: "My Profile", href: "login.html" },
      { label: "Change Password", href: "login.html" },
    ],
    hours: ["Mon - Fri: 7.00am - 6.00pm", "Sat: 7.00am - 6.00pm"],
    address:
      "27 NW New Vexmont, 3 No Tejturi Bazar West, Panthapath North, Dhaka 1215",
    socials: [
      { icon: "𝕏", href: "#" },
      { icon: "Be", href: "#" },
      { icon: "📷", href: "#" },
      { icon: "in", href: "#" },
      { icon: "f", href: "#" },
    ],
  },

  /* ── TERMS & CONDITIONS ────────────────────────────────── */
  terms: {
    title: "Terms & Conditions",
    content: [
      {
        heading: "1. What Are Privacy Policy?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriefss asbut also the on leap into a electronic typesetting, remaining essentially unchanged. It wasn't popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andeiss more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
      },
      {
        heading: "2. Influencer Terms and Conditions Examples",
        paras: [
          "While it's not legally required for ecommerce websites to have a terms and conditions agreement, adding one will help protect your as sonline business. As terms and conditions are legally enforceable rules, they allow you to set standards for how users interact with your site. Here are some of the major abenefits of including terms and conditions on your ecommerce site:",
          "It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn't popularised in the obb1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop.",
        ],
        items: [
          "Slim body with metal cover",
          "Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
          "8GB DDR4 RAM and fast 512GB PCIe SSD",
          "NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support",
        ],
      },
      {
        heading: "3. Protect Your Property",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown as printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriezcs but also the on leap into as eyelectronic typesetting, remaining essentially unchanged. It wasn't popularised in the 1960s with the release of Letraszxet sheets containing Lorem Ipsum our spassages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book, five centuries but also a the on leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        heading: "4. What to Include in Terms and Conditions for Online Stores",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five as centuries but also as the on leap into electronic typesetting remaining essentially unchanged. It wasn't popularised in the 1960s with the release of as Leitraset sheets containing Lorem Ipsum passages, our andei more recently with desktop publishing software like Aldus PageMaker including versions of Loriem Ipsum to make a type our specimen book.",
      },
      {
        heading: "05. Pricing and Payment Terms",
        paras: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five as centuries but also the on leap into electronic typesetting remaining essentially unchanged. It wasn't popularised in the 1960s with the release as of Letraset sheets containing Lorem Ipsum our spassages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem alpsum to make a type specimen book.",
          "Five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn't popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker our as including versions of Loriem Ipsum to make a type specimen book. It wasn't popularised in the 1960s with the release of Letraset sheets as containing Lorem Ipsum passages, andei more recently with a desktop publishing software like Aldus PageMaker including versions of Loremadfsds Ipsum to make a type specimen book.",
          "It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn't popularised in the our 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing asou software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
        ],
      },
    ],
  },

  /* ── PRIVACY POLICY ────────────────────────────────────── */
  privacy: {
    title: "Privacy Policy",
    content: [
      {
        heading: "1. What Are Privacy Policy?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown our printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriefss asbut also the on leap into a electronic typesetting, remaining essentially unchanged. It wasn't popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andeiss more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
      },
      {
        heading: "2. Influencer Terms and Conditions Examples",
        paras: [
          "While it's not legally required for ecommerce websites to have a terms and conditions agreement, adding one will help protect your as sonline business. As terms and conditions are legally enforceable rules, they allow you to set standards for how users interact with your site. Here are some of the major abenefits of including terms and conditions on your ecommerce site:",
          "It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn't popularised in the obb1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop.",
        ],
        items: [
          "slim body with metal cover",
          "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
          "8GB DDR4 RAM and fast 512GB PCIe SSD",
          "NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support",
        ],
      },
      {
        heading: "3. Protect Your Property",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown as printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        heading: "4. What to Include in Terms and Conditions for Online Stores",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        heading: "05. Pricing and Payment Terms",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five as centuries but also the on leap into electronic typesetting remaining essentially unchanged.",
      },
    ],
  },

  /* ── CUSTOM PAGES ──────────────────────────────────────── */
  custom_pages: {
    one: {
      title: "Custom Page One",
      content: [
        {
          heading: "1. What is custom page?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriefss asbut also the on leap into a electronic typesetting, remaining essentially unchanged. It wasn't popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andeiss more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.",
        },
        {
          heading: "2. How does work custom page",
          paras: [
            "While it's not legally required for ecommerce websites to have a terms and conditions agreement, adding one will help protect your as sonline business.As terms and conditions are legally enforceable rules, they allow you to set standards for how users interact with your site. Here are some of the major abenefits of including terms and conditions on your ecommerce site:",
            "It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn't popularised in the obb1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop.",
          ],
          items: [
            "Slim body with metal cover",
            "Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
            "8GB DDR4 RAM and fast 512GB PCIe SSD",
            "NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support",
          ],
        },
        {
          heading: "3. Protect Your Property",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          heading:
            "4. What to Include in Terms and Conditions for Online Stores",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          heading: "05. Pricing and Payment Terms",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    two: {
      title: "Custom Page Two",
      content: [
        {
          heading: "1. What is custom page?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          heading: "2. How does work custom page",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          heading: "3. Protect Your Property",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          heading:
            "4. What to Include in Terms and Conditions for Online Stores",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          heading: "05. Pricing and Payment Terms",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
  },
};

/* ══════════════════════════════════════════════════════════
   SERVICE DETAIL — extra data
══════════════════════════════════════════════════════════ */
INFLANAR.service_detail = {
  s005: {
    id: "s005",
    slug: "electrical-influencers",
    title: "Energizing Electrical Influencers",
    category: "Life Style",
    price: 18.0,
    influencer_id: "i002",
    img: "assets/img/services/svc-5.jpg",
    description: `<p>This is one of the best WordPress Theme. It is clean, user friendly, fully responsivle, pixel perfect, our modern as design with latest WordPress Technologies. This WordPress theme is perfect for any ki Custom Slider holo the powerfu jemon temon as website.This WordPress Theme has the powerful theme control panel ki holo as with lots It is cleans, user of useful Addons tools to manage the site: Elementor Page Builder, Custom ki Slider, our Custom Icon Font,etc. With as variation and demos I am sure you gonna love it and use it for your next Project.</p>`,
    package_features: [
      "6 Video Post My Profile",
      "Business Growing",
      "Company Profile Build",
      "Business Growing",
      "Company Profile Build",
      "6 Video Post My Profile",
    ],
    package: {
      title: "My Package",
      price: 18.0,
      features: [
        "6 Video Post My Profile",
        "Business Growing",
        "Company Profile Build",
        "Business Growing",
        "Company Profile Build",
        "6 Video Post My Profile",
      ],
    },
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "9:00 AM - 6:00 PM",
      response_time: "Within 24 hours",
      delivery_time: "7 Days",
    },
    reviews: [
      {
        name: "David Richard",
        rating: 4,
        date: "16 Oct 2023",
        text: "Great service! The influencer did an amazing job promoting our product. Very professional and delivered on time.",
        avatar: "assets/img/influencers/inf-4.jpg",
      },
    ],
  },
};

/* ══════════════════════════════════════════════════════════
   INFLUENCER PROFILE — extended data
══════════════════════════════════════════════════════════ */
INFLANAR.influencer_profiles = {
  "nasrun-nessa": {
    id: "i002",
    slug: "nasrun-nessa",
    name: "Nasrun Nessa",
    category: "Sport & Fitness",
    member_since: "17 October 2023",
    avatar: "assets/img/influencers/inf-2.jpg",
    followers: "8450K",
    following: "75K",
    reviews_count: 1,
    job_stats: { active: 0, pending: 3, cancel: 0, complete: 0 },
    socials: { facebook: "#", tiktok: "#", twitter: "#", instagram: "#" },
    about:
      "Integer fermentum luctus urna non tincidunt risus laoreet in.Vivamus eu dolor lorem.Aenean efficitur um at es lobortis efficitur.Vestibulum tellus nunc, maximus eget eleifend a, mollis ac turpis. Integer eget our dictum est. Fusce eget pulvinar tor tor. Quisque suscipit ante ac nisi a rutrumnec mollis nulla.",
    skills: ["laravel", "php", "photography", "gym", "boxing"],
    educations: [
      {
        institution: "Independent University BD",
        detail: "Aperiam deserunt dol, Burundi",
        years: "2015 - 2020",
      },
      {
        institution: "North South University",
        detail: "Aperiam deserunt dol, Burundi",
        years: "2015 - 2020",
      },
    ],
    contact: {
      phone: "123-343-4444",
      email: "influencer3@gmail.com",
      location: "Los Angeles, CA, USA",
    },
    services: ["s005", "s006"],
    portfolio: [
      { img: "assets/img/services/svc-5.jpg", title: "Campaign 1" },
      { img: "assets/img/services/svc-6.jpg", title: "Campaign 2" },
    ],
  },
  "alvantan-khan": {
    id: "i001",
    slug: "alvantan-khan",
    name: "Alvantan Khan",
    category: "Sport & Fitness",
    member_since: "15 October 2023",
    avatar: "assets/img/influencers/inf-1.jpg",
    followers: "1250K",
    following: "12K",
    reviews_count: 2,
    job_stats: { active: 1, pending: 2, cancel: 0, complete: 3 },
    socials: { facebook: "#", tiktok: "#", twitter: "#", instagram: "#" },
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: ["fitness", "nutrition", "coaching", "photography"],
    educations: [
      {
        institution: "Sports Academy NY",
        detail: "Fitness & Nutrition",
        years: "2016 - 2020",
      },
    ],
    contact: {
      phone: "124-456-7890",
      email: "alvantan@gmail.com",
      location: "New York, NY, USA",
    },
    services: ["s001", "s004"],
    portfolio: [],
  },
  "david-richard": {
    id: "i004",
    slug: "david-richard",
    name: "David Richard",
    category: "Digital Marketer",
    member_since: "10 October 2023",
    avatar: "assets/img/influencers/inf-4.jpg",
    followers: "1250K",
    following: "12K",
    reviews_count: 3,
    job_stats: { active: 2, pending: 1, cancel: 0, complete: 5 },
    socials: { facebook: "#", tiktok: "#", twitter: "#", instagram: "#" },
    about:
      "Digital marketing expert with 8+ years helping brands grow. Specializing in social media strategy, content creation, and influencer campaigns.",
    skills: ["marketing", "seo", "content", "social media"],
    educations: [
      {
        institution: "Digital Marketing Institute",
        detail: "Marketing & Analytics",
        years: "2014 - 2018",
      },
    ],
    contact: {
      phone: "198-765-4321",
      email: "david@gmail.com",
      location: "New York, NY, USA",
    },
    services: ["s001", "s002", "s003"],
    portfolio: [],
  },
};
