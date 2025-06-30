export type Language = 'en' | 'ar'

export interface Translations {
  // Navigation
  nav: {
    products: string
    recycling: string
    sustainability: string
    franchise: string
    search: string
    account: string
    cart: string
    allProducts: string
    inkCartridges: string
    tonerCartridges: string
    originalCartridges: string
  }
  // Hero Section
  hero: {
    title: string
    subtitle: string
    description: string
    shopNow: string
    learnMore: string
    recycleNow: string
    thinkGreenPrintSmart: string
    sustainablePrinting: string
    solutions: string
    sustainableDescription: string
    shopCartridges: string
    startRecycling: string
    costSavings: string
    lessCO2: string
    qualityMatch: string
    whyChooseSpearink: string
    ecoFriendly: string
    ecoDescription: string
    premiumQuality: string
    qualityDescription: string
    cartridgeReturn: string
    returnDescription: string
    returnEmptyCartridge: string
    getVoucher: string
  }
  // Sustainability Section
  sustainability: {
    title: string
    subtitle: string
    description: string
    stats: {
      cartridgesRecycled: string
      co2Reduced: string
      costSavings: string
    }
    learnMore: string
  }
  // Recycling Program
  recycling: {
    title: string
    subtitle: string
    description: string
    vouchers: {
      ink: string
      toner: string
    }
    howItWorks: string
    startRecycling: string
    turnEmptyCartridges: string
    recyclingDescription: string
    perInkCartridge: string
    perTonerCartridge: string
    calculateValue: string
    collectEmpties: string
    collectDescription: string
    dropOffPickup: string
    dropOffDescription: string
    getVouchers: string
    vouchersDescription: string
    cartridgesRecycled: string
  }
  // Franchise
  franchise: {
    title: string
    subtitle: string
    description: string
    investment: string
    revenue: string
    learnMore: string
  }
  // Footer
  footer: {
    company: string
    products: string
    services: string
    support: string
    contact: string
    phone: string
    email: string
    address: string
    thinkGreen: string
    tagline: string
    allRights: string
    brandDescription: string
    recycled: string
    carbonNeutral: string
    recyclable: string
    isoCertified: string
    allProducts: string
    inkCartridges: string
    tonerCartridges: string
    originalCartridges: string
    cartridgeRecycling: string
    refillingService: string
    pickupService: string
    corporateSolutions: string
    aboutUs: string
    findStoreLocations: string
    privacyPolicy: string
    termsOfService: string
  }
  // Cart
  cart: {
    cart: string
    cartWithCount: string
    emptyCart: string
    addToCart: string
    removeFromCart: string
    quantity: string
    total: string
    subtotal: string
    checkout: string
    continueShopping: string
  }
  // Common
  common: {
    loading: string
    error: string
    tryAgain: string
    close: string
    open: string
    menu: string
    price: string
    sale: string
    outOfStock: string
    inStock: string
    addToCart: string
    buyNow: string
    viewDetails: string
    readMore: string
    showMore: string
    showLess: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      products: "Products",
      recycling: "Recycling",
      sustainability: "Sustainability", 
      franchise: "Franchise",
      search: "Search",
      account: "Account",
      cart: "Cart",
      allProducts: "All Products",
      inkCartridges: "Ink Cartridges",
      tonerCartridges: "Toner Cartridges",
      originalCartridges: "Original Cartridges"
    },
    hero: {
      title: "Premium Refilled Cartridges",
      subtitle: "Think Green, Save More",
      description: "High-quality refilled ink and toner cartridges that deliver exceptional results while reducing environmental impact. Save up to 50% compared to original cartridges.",
      shopNow: "Shop Now",
      learnMore: "Learn More",
      recycleNow: "Recycle Now",
      thinkGreenPrintSmart: "Think Green, Print Smart",
      sustainablePrinting: "Sustainable Printing",
      solutions: "Solutions",
      sustainableDescription: "Reduce your environmental impact with our premium refilled cartridges. Same quality, 50% less cost, 80% less carbon footprint.",
      shopCartridges: "Shop Cartridges",
      startRecycling: "Start Recycling",
      costSavings: "Cost Savings",
      lessCO2: "Less CO₂",
      qualityMatch: "Quality Match",
      whyChooseSpearink: "Why Choose Spearink?",
      ecoFriendly: "Eco-Friendly",
      ecoDescription: "Each refilled cartridge saves 2.5 lbs of CO₂ emissions",
      premiumQuality: "Premium Quality",
      qualityDescription: "ISO certified inks with 100% satisfaction guarantee",
      cartridgeReturn: "Cartridge Return",
      returnDescription: "Earn vouchers for every empty cartridge you return",
      returnEmptyCartridge: "Return Empty Cartridge",
      getVoucher: "Get $5 Voucher"
    },
    sustainability: {
      title: "Environmental Impact",
      subtitle: "Making a Difference Together",
      description: "Every refilled cartridge helps reduce waste and carbon footprint. Join our mission to create a more sustainable future.",
      stats: {
        cartridgesRecycled: "Cartridges Recycled",
        co2Reduced: "Less CO₂",
        costSavings: "Savings"
      },
      learnMore: "Learn More"
    },
    recycling: {
      title: "Cartridge Recycling Program",
      subtitle: "Turn Your Empty Cartridges Into Rewards",
      description: "Bring your empty cartridges and receive valuable vouchers for your next purchase. Help the environment while saving money.",
      vouchers: {
        ink: "$5 for Ink Cartridges",
        toner: "$8 for Toner Cartridges"
      },
      howItWorks: "How It Works",
      startRecycling: "Start Recycling",
      turnEmptyCartridges: "Turn Empty Cartridges Into Rewards",
      recyclingDescription: "Don't throw away your empty cartridges! Bring them to us and earn valuable vouchers for your next purchase. It's our way of saying thank you for helping the environment.",
      perInkCartridge: "Per Ink Cartridge",
      perTonerCartridge: "Per Toner Cartridge",
      calculateValue: "Calculate Value",
      collectEmpties: "Collect Your Empties",
      collectDescription: "Gather ink and toner cartridges from any brand",
      dropOffPickup: "Drop Off or Schedule Pickup",
      dropOffDescription: "Visit our store or we'll come to you",
      getVouchers: "Get Instant Vouchers",
      vouchersDescription: "Receive vouchers to use on your next purchase",
      cartridgesRecycled: "Cartridges Already Recycled"
    },
    franchise: {
      title: "Franchise Opportunities",
      subtitle: "Join the Green Revolution",
      description: "Start your own sustainable printing business with our proven franchise model. Complete support and training included.",
      investment: "Total Investment: $180K",
      revenue: "Annual Revenue: $300K-$500K",
      learnMore: "Learn More"
    },
    footer: {
      company: "Company",
      products: "Products",
      services: "Services", 
      support: "Support",
      contact: "Contact Us",
      phone: "+1 (555) 123-4567",
      email: "info@spearink.com",
      address: "123 Green Street, Eco City, EC 12345",
      thinkGreen: "Think Green",
      tagline: "Every cartridge makes a difference",
      allRights: "All rights reserved",
      brandDescription: "Leading the sustainable printing revolution with premium refilled cartridges. Same quality, lower cost, better for the planet.",
      recycled: "Recycled",
      carbonNeutral: "Carbon Neutral",
      recyclable: "100% Recyclable",
      isoCertified: "ISO Certified",
      allProducts: "All Products",
      inkCartridges: "Ink Cartridges",
      tonerCartridges: "Toner Cartridges",
      originalCartridges: "Original Cartridges",
      cartridgeRecycling: "Cartridge Recycling",
      refillingService: "Refilling Service",
      pickupService: "Pickup Service",
      corporateSolutions: "Corporate Solutions",
      aboutUs: "About Us",
      findStoreLocations: "Find Store Locations",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    cart: {
      cart: "Cart",
      cartWithCount: "Cart ({count})",
      emptyCart: "Your cart is empty",
      addToCart: "Add to Cart",
      removeFromCart: "Remove from Cart",
      quantity: "Quantity",
      total: "Total",
      subtotal: "Subtotal",
      checkout: "Checkout",
      continueShopping: "Continue Shopping"
    },
    common: {
      loading: "Loading...",
      error: "Error occurred",
      tryAgain: "Try Again",
      close: "Close",
      open: "Open",
      menu: "Menu",
      price: "Price",
      sale: "Sale",
      outOfStock: "Out of Stock",
      inStock: "In Stock",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      viewDetails: "View Details",
      readMore: "Read More",
      showMore: "Show More",
      showLess: "Show Less"
    }
  },
  ar: {
    nav: {
      products: "المنتجات",
      recycling: "إعادة التدوير",
      sustainability: "الاستدامة",
      franchise: "الامتياز التجاري",
      search: "البحث",
      account: "الحساب",
      cart: "السلة",
      allProducts: "جميع المنتجات",
      inkCartridges: "خراطيش الحبر",
      tonerCartridges: "خراطيش التونر",
      originalCartridges: "الخراطيش الأصلية"
    },
    hero: {
      title: "خراطيش معبأة عالية الجودة",
      subtitle: "فكر أخضر، وفر أكثر",
      description: "خراطيش حبر وتونر معبأة عالية الجودة تقدم نتائج استثنائية مع تقليل التأثير البيئي. وفر حتى 50% مقارنة بالخراطيش الأصلية.",
      shopNow: "تسوق الآن",
      learnMore: "اعرف المزيد",
      recycleNow: "أعد التدوير الآن",
      thinkGreenPrintSmart: "فكر أخضر، اطبع بذكاء",
      sustainablePrinting: "حلول الطباعة",
      solutions: "المستدامة",
      sustainableDescription: "قلل من تأثيرك البيئي مع خراطيشنا المعبأة عالية الجودة، تكلفة أقل بـ 50%، بصمة كربونية أقل بـ 80%.",
      shopCartridges: "تسوق الخراطيش",
      startRecycling: "ابدأ إعادة التدوير",
      costSavings: "توفير التكلفة",
      lessCO2: "أقل من ثاني أكسيد الكربون",
      qualityMatch: "مطابقة الجودة",
      whyChooseSpearink: "لماذا تختار سبيرإنك؟",
      ecoFriendly: "صديق للبيئة",
      ecoDescription: "كل خرطوشة معبأة توفر 2.5 رطل من انبعاثات ثاني أكسيد الكربون",
      premiumQuality: "جودة عالية",
      qualityDescription: "أحبار معتمدة من الأيزو مع ضمان الرضا 100%",
      cartridgeReturn: "إرجاع الخراطيش",
      returnDescription: "احصل على قسائم لكل خرطوشة فارغة ترجعها",
      returnEmptyCartridge: "أرجع الخرطوشة الفارغة",
      getVoucher: "احصل على قسيمة 5 دولار"
    },
    sustainability: {
      title: "التأثير البيئي",
      subtitle: "نصنع الفرق معاً",
      description: "كل خرطوشة معبأة تساعد في تقليل النفايات والبصمة الكربونية. انضم إلى مهمتنا لخلق مستقبل أكثر استدامة.",
      stats: {
        cartridgesRecycled: "خرطوشة معاد تدويرها",
        co2Reduced: "أقل من ثاني أكسيد الكربون",
        costSavings: "توفير"
      },
      learnMore: "اعرف المزيد"
    },
    recycling: {
      title: "برنامج إعادة تدوير الخراطيش",
      subtitle: "حول خراطيشك الفارغة إلى مكافآت",
      description: "أحضر خراطيشك الفارغة واحصل على قسائم قيمة لشرائك التالي. ساعد البيئة واوفر المال.",
      vouchers: {
        ink: "5 دولار لخراطيش الحبر",
        toner: "8 دولار لخراطيش التونر"
      },
      howItWorks: "كيف يعمل",
      startRecycling: "ابدأ إعادة التدوير",
      turnEmptyCartridges: "حول خراطيشك الفارغة إلى مكافآت",
      recyclingDescription: "لا ترمي خراطيشك الفارغة! أحضرها إلينا واحصل على قسائم قيمة لشرائك التالي. هذه طريقتنا في شكرك لمساعدة البيئة.",
      perInkCartridge: "لكل خرطوشة حبر",
      perTonerCartridge: "لكل خرطوشة تونر",
      calculateValue: "احسب القيمة",
      collectEmpties: "اجمع خراطيشك الفارغة",
      collectDescription: "اجمع خراطيش الحبر والتونر من أي علامة تجارية",
      dropOffPickup: "أحضرها أو اطلب الاستلام",
      dropOffDescription: "زر متجرنا أو سنأتي إليك",
      getVouchers: "احصل على قسائم فورية",
      vouchersDescription: "احصل على قسائم لاستخدامها في شرائك التالي",
      cartridgesRecycled: "خرطوشة تم إعادة تدويرها بالفعل"
    },
    franchise: {
      title: "فرص الامتياز التجاري",
      subtitle: "انضم إلى الثورة الخضراء",
      description: "ابدأ عملك الخاص في الطباعة المستدامة مع نموذج الامتياز المجرب. دعم وتدريب كامل متضمن.",
      investment: "إجمالي الاستثمار: 180 ألف دولار",
      revenue: "الإيرادات السنوية: 300-500 ألف دولار",
      learnMore: "اعرف المزيد"
    },
    footer: {
      company: "الشركة",
      products: "المنتجات",
      services: "الخدمات",
      support: "الدعم",
      contact: "اتصل بنا",
      phone: "+966 11 123 4567",
      email: "info@spearink.com",
      address: "123 شارع الأخضر، المدينة البيئية، الرياض 12345",
      thinkGreen: "فكر أخضر",
      tagline: "كل خرطوشة تصنع الفرق",
      allRights: "جميع الحقوق محفوظة",
      brandDescription: "نقود ثورة الطباعة المستدامة بخراطيش معبأة عالية الجودة. نفس الجودة، تكلفة أقل، أفضل للكوكب.",
      recycled: "معاد تدويرها",
      carbonNeutral: "محايد الكربون",
      recyclable: "قابل للتدوير 100%",
      isoCertified: "معتمد من الأيزو",
      allProducts: "جميع المنتجات",
      inkCartridges: "خراطيش الحبر",
      tonerCartridges: "خراطيش التونر",
      originalCartridges: "الخراطيش الأصلية",
      cartridgeRecycling: "إعادة تدوير الخراطيش",
      refillingService: "خدمة إعادة التعبئة",
      pickupService: "خدمة الاستلام",
      corporateSolutions: "الحلول المؤسسية",
      aboutUs: "من نحن",
      findStoreLocations: "العثور على مواقع المتاجر",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة"
    },
    cart: {
      cart: "السلة",
      cartWithCount: "السلة ({count})",
      emptyCart: "سلتك فارغة",
      addToCart: "أضف إلى السلة",
      removeFromCart: "إزالة من السلة",
      quantity: "الكمية",
      total: "المجموع",
      subtotal: "المجموع الفرعي",
      checkout: "الدفع",
      continueShopping: "متابعة التسوق"
    },
    common: {
      loading: "جاري التحميل...",
      error: "حدث خطأ",
      tryAgain: "حاول مرة أخرى",
      close: "إغلاق",
      open: "فتح",
      menu: "القائمة",
      price: "السعر",
      sale: "تخفيض",
      outOfStock: "غير متوفر",
      inStock: "متوفر",
      addToCart: "أضف إلى السلة",
      buyNow: "اشتر الآن",
      viewDetails: "عرض التفاصيل",
      readMore: "اقرأ المزيد",
      showMore: "عرض المزيد",
      showLess: "عرض أقل"
    }
  }
}

