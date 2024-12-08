export const productData = [
  {
    id: 101,
    name: "Pop the Cork",
    description: "Twisted Glitter Cosmetic Grade",
    origin: "Made in USA-Cosmetic-Vegan-Cruelty Free",
    isFeatured: false,
    materials: [
      {
        type: "cosmetic",
        subtype: "holographic",
      },
    ],
    flakeSizes: [
      {
        size: "mixed",
        img: "/src/assets/images/product_sizes/101-pop_the_cork/101-pop_the_cork-mixed.png",
        flakeSize: "mixed",
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "2.59" },
              { size: "3/4 oz", price: "3.99" },
              { size: "4 oz", price: "12.99" },
              { size: "8 oz", price: "24.99" },
              { size: "16 oz", price: "49.99" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
    ],
    images: {
      featured:
        "/src/assets/images/product_featured/101-pop_the_cork-featured.png",
      card: "/src/assets/images/product_cards/101-pop_the_cork-product_card.png",
      frame: null,
    },
  },
  {
    id: 102,
    name: "Red Dragon",
    description: "Polyester Glitter Metallic",
    origin: "Made in USA-Cosmetic-Vegan-Cruelty Free",
    isFeatured: true,
    materials: [
      {
        type: "polyester",
        subtype: "opaque-metallic",
        typeDetails: "polyethylene terephthalate film",
      },
    ],
    flakeSizes: [
      {
        size: "ultra fine",
        img: "/src/assets/images/product_sizes/102-red_dragon/102-red_dragon-ultrafine.png",
        flakeSize: 0.008,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "1.99" },
              { size: "3/4 oz", price: "2.23" },
              { size: "4 oz", price: "7.87" },
              { size: "8 oz", price: "14.71" },
              { size: "16 oz", price: "28.39" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
      {
        size: "fine",
        img: "/src/assets/images/product_sizes/102-red_dragon/102-red_dragon-fine.png",
        flakeSize: 0.015,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "1.99" },
              { size: "3/4 oz", price: "2.23" },
              { size: "4 oz", price: "7.87" },
              { size: "8 oz", price: "14.71" },
              { size: "16 oz", price: "28.39" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
      {
        size: "tinsel shred",
        img: "/src/assets/images/product_sizes/102-red_dragon/102-red_dragon-tinsel_shred.png",
        flakeSize: 0.062,
        flakeShape: "tinsel shred",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "1.99" },
              { size: "3/4 oz", price: "2.23" },
              { size: "4 oz", price: "7.87" },
              { size: "8 oz", price: "14.71" },
              { size: "16 oz", price: "28.39" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
      {
        size: "chunky",
        img: "/src/assets/images/product_sizes/102-red_dragon/102-red_dragon-chunky.png",
        flakeSize: 0.04,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "1.99" },
              { size: "3/4 oz", price: "2.23" },
              { size: "4 oz", price: "7.87" },
              { size: "8 oz", price: "14.71" },
              { size: "16 oz", price: "28.39" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
      {
        size: "jumbo",
        img: "/src/assets/images/product_sizes/102-red_dragon/102-red_dragon-jumbo.png",
        flakeSize: 0.094,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "1.99" },
              { size: "3/4 oz", price: "2.23" },
              { size: "4 oz", price: "7.87" },
              { size: "8 oz", price: "14.71" },
              { size: "16 oz", price: "28.39" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
      {
        size: "colossal",
        img: "/src/assets/images/product_sizes/102-red_dragon/102-red_dragon-colossal.png",
        flakeSize: 0.125,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "1.99" },
              { size: "3/4 oz", price: "2.23" },
              { size: "4 oz", price: "7.87" },
              { size: "8 oz", price: "14.71" },
              { size: "16 oz", price: "28.39" },
            ],
          },
          { type: "bag", sizes: [{ size: "16 oz", price: "28.39" }] },
        ],
      },
    ],
    images: {
      featured:
        "/src/assets/images/product_featured/102-red_dragon-featured.png",
      card: "/src/assets/images/product_cards/102-red_dragon-product_card.png",
      frame:
        "/src/assets/images/product_frames/102-red_dragon-glitter-frame.png",
    },
  },
  {
    id: 103,
    name: "Fortunes Favor",
    description: "Biodegradable Iridescent",
    origin: "Made in USA-Cosmetic-Vegan-Cruelty Free",
    isFeatured: true,
    materials: [
      {
        type: "biodegradable",
        subtype: "iridescent",
        typeDetails: "biodegradable lactide/shellac",
      },
    ],
    flakeSizes: [
      {
        size: "ultra fine",
        img: "/src/assets/images/product_sizes/103-fortunes_favor/103-fortunes_favor-ultrafine.png",
        flakeSize: 0.008,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "2.59" },
              { size: "3/4 oz", price: "4.59" },
              { size: "4 oz", price: "14.89" },
              { size: "8 oz", price: "27.89" },
              { size: "16 oz", price: "55.19" },
            ],
          },
          {
            type: "bag",
            sizes: [
              { size: "2 tsp", price: "1.99" },
              { size: "16 oz", price: "55.19" },
            ],
          },
        ],
      },
      {
        size: "chunky",
        img: "/src/assets/images/product_sizes/103-fortunes_favor/103-fortunes_favor-chunky.png",
        flakeSize: 0.04,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "2.59" },
              { size: "3/4 oz", price: "4.59" },
              { size: "4 oz", price: "14.89" },
              { size: "8 oz", price: "27.89" },
              { size: "16 oz", price: "55.19" },
            ],
          },
          { type: "bag", sizes: [{ size: "2 tsp", price: "1.99" }] },
        ],
      },
      {
        size: "moon shape",
        img: "/src/assets/images/product_sizes/103-fortunes_favor/103-fortunes_favor-moon.png",
        flakeSize: 0.125,
        flakeShape: "moon",
        packagingOptions: [
          {
            type: "jar",
            sizes: [{ size: "1.5 tsp", price: "2.59" }],
          },
        ],
      },
      {
        size: "heart shape",
        img: "/src/assets/images/product_sizes/103-fortunes_favor/103-fortunes_favor-hearts.png",
        flakeSize: 0.125,
        flakeShape: "heart",
        packagingOptions: [
          {
            type: "jar",
            sizes: [{ size: "1.5 tsp", price: "2.59" }],
          },
        ],
      },
      {
        size: "flower shape",
        img: "/src/assets/images/product_sizes/103-fortunes_favor/103-fortunes_favor-flower.png",
        flakeSize: 0.02,
        flakeShape: "flower",
        packagingOptions: [
          {
            type: "jar",
            sizes: [{ size: "1.5 tsp", price: "2.59" }],
          },
        ],
      },
    ],
    images: {
      featured:
        "/src/assets/images/product_featured/103-fortunes_favor-featured.png",
      card: "/src/assets/images/product_cards/103-fortunes_favor-product_card.png",
      frame:
        "/src/assets/images/product_frames/103-fortunes_favor-glitter-frame.png",
    },
  },
  {
    id: 104,
    name: "Blissful Tease",
    description: "Cosmetic Holographic",
    origin: "Made in USA-Cosmetic-Vegan-Cruelty Free",
    isFeatured: true,
    materials: [
      {
        type: "opaque",
        subtype: "holographic",
        typeDetails: "Polyethylene Terephthalate Film",
      },
    ],
    flakeSizes: [
      {
        size: "ultra fine",
        img: "/src/assets/images/product_sizes/104-blissful_tease/104-blissful_tease-ultrafine.png",
        flakeSize: 0.008,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "2.99" },
              { size: "3/4 oz", price: "5.09" },
              { size: "4 oz", price: "19.29" },
              { size: "8 oz", price: "37.89" },
              { size: "16 oz", price: "74.99" },
            ],
          },
          {
            type: "bag",
            sizes: [
              { size: "2 tsp", price: "1.99" },
              { size: "16 oz", price: "75.29" },
            ],
          },
        ],
      },
      {
        size: "fine",
        img: "/src/assets/images/product_sizes/104-blissful_tease/104-blissful_tease-fine.png",
        flakeSize: 0.015,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "1.5 tsp", price: "2.99" },
              { size: "3/4 oz", price: "5.09" },
              { size: "4 oz", price: "19.29" },
              { size: "8 oz", price: "37.89" },
              { size: "16 oz", price: "74.99" },
            ],
          },
          {
            type: "bag",
            sizes: [
              { size: "2 tsp", price: "1.99" },
              { size: "16 oz", price: "75.29" },
            ],
          },
        ],
      },
    ],
    images: {
      featured:
        "/src/assets/images/product_featured/104-blissful_tease-featured.png",
      card: "/src/assets/images/product_cards/104-blissful_tease-product_card.png",
      frame:
        "/src/assets/images/product_frames/104-blissful_tease-glitter-frame.png",
    },
  },
  {
    id: 105,
    name: "Honorguard Gold",
    description: "Metallic Hybrid",
    origin: "Made in USA-Cosmetic-Vegan-Cruelty Free",
    isFeatured: false,
    materials: [
      {
        type: "opaque",
        subtype: "metallic",
        typeDetails: "Polyethylene Terephthalate Film",
      },
    ],
    flakeSizes: [
      {
        size: "ultra fine",
        img: "/src/assets/images/product_sizes/105-honorguard_gold/105-honorguard_gold-ultrafine.png",
        flakeSize: 0.008,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "4 oz", price: "2.49" },
              { size: "8 oz", price: "37.89" },
              { size: "16 oz", price: "7.07" },
            ],
          },
          {
            type: "bag",
            sizes: [{ size: "16 oz", price: "7.07" }],
          },
        ],
      },
      {
        size: "fine",
        img: "/src/assets/images/product_sizes/105-honorguard_gold/105-honorguard_gold-fine.png",
        flakeSize: 0.015,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "4 oz", price: "4.89" },
              { size: "8 oz", price: "7.79" },
              { size: "16 oz", price: "13.99" },
            ],
          },
          {
            type: "bag",
            sizes: [{ size: "16 oz", price: "13.99" }],
          },
        ],
      },
      {
        size: "chunky",
        img: "/src/assets/images/product_sizes/105-honorguard_gold/105-honorguard_gold-chunky.png",
        flakeSize: 0.04,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "4 oz", price: "4.89" },
              { size: "8 oz", price: "7.79" },
            ],
          },
          {
            type: "bag",
            sizes: [null],
          },
        ],
      },
    ],
    images: {
      featured:
        "/src/assets/images/product_featured/105-honorguard_gold-featured.png",
      card: "/src/assets/images/product_cards/105-honorguard_gold-product-card.png",
      frame:
        "/src/assets/images/product_frames/105-honorguard_gold-glitter-frame.png",
    },
  },
  {
    id: 106,
    name: "Peppermint Twist",
    description: "Iridescent Craft",
    origin: "Made in USA-Cosmetic-Vegan-Cruelty Free",
    isFeatured: false,
    materials: [
      {
        type: "iridescent",
        subtype: "transparent",
        typeDetails: "Rigid Polyvinyl Chloride Film",
      },
    ],
    flakeSizes: [
      {
        size: "chunky",
        img: "/src/assets/images/product_sizes/106-peppermint_twist/106-peppermint_twist-chunky.png",
        flakeSize: 0.04,
        flakeShape: "hex",
        packagingOptions: [
          {
            type: "jar",
            sizes: [
              { size: "3/4 oz", price: "1.99" },
              { size: "4 oz", price: "4.99" },
              { size: "8 oz", price: "7.09" },
              { size: "16 oz", price: "11.99" },
            ],
          },
          {
            type: "bag",
            sizes: [{ size: "16 oz", price: "11.99" }],
          },
          {
            type: "box",
            sizes: [
              { size: "10 lbs", price: "116.99" },
              { size: "125 lbs", price: "224.89" },
            ],
          },
        ],
      },
    ],
    images: {
      featured:
        "/src/assets/images/product_featured/106-peppermint_twist-featured.png",
      card: "/src/assets/images/product_cards/106-peppermint_twist-product-card.png",
      frame:
        "/src/assets/images/product_frames/106-peppermint_twist-glitter-frame.png",
    },
  },
];
