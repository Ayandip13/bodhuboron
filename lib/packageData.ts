import { PackageTier } from "@/components/PackageCards";

export const weddingPackages: PackageTier[] = [
  {
    name: "Silver (70k)",
    description: "Ideal for comprehensive wedding coverage across both sides.",
    features: [
      "Wedding both side coverage",
      "2 indigo luxury album for 15 sheets",
      "1 full HD video 20 - 25 minute",
      "Digital invitation and cinematic treasures",
      "2 reels",
      "3 days coverup",
      "50 edited photos and all new copies",
    ],
  },
  {
    name: "Gold (85k)",
    description: "Our most popular package offering full wedding coverage and cinematic storytelling.",
    isPopular: true,
    features: [
      "Wedding both side coverage",
      "2 indigo luxury album for 20 sheets",
      "1 full HD video 25 - 30 minute",
      "Digital invitation and cinematic treasures",
      "Pre wedding and post wedding",
      "100 edited photos and all raw copies",
      "4 reels",
      "3 days wedding coverup",
    ],
  },
  {
    name: "Platinum (1 lakh)",
    description: "The complete luxury experience with extended coverage and priority delivery.",
    features: [
      "2 Canberra luxury album for 20 sheets",
      "1 full HD video 25 to 30 minute",
      "Digital invitation and cinematic treasures",
      "Pre wedding and post wedding video (Choose for your criteria)",
      "1 day drone coverup",
      "1 photo frame",
      "100 edited picture and all raw copies",
      "4 days wedding full coverup",
    ],
  },
];

export const preWeddingPackages: PackageTier[] = [
  {
    name: "Popular (15k)",
    description: "Full Pre wedding coverage with cinematic films and drone shots.",
    isPopular: true,
    features: [
      "Full Pre wedding Coverup photo with video",
      "Drone coverup included",
      "2 reels included",
      "1 trailer video (2 - 3 minute)",
    ],
  },
];

export const eventPackages: PackageTier[] = [
  {
    name: "Silver",
    description: "Fast and efficient coverage for small family gatherings and parties.",
    features: [
      "3-4 hours of event coverage",
      "1 senior lead photographer",
      "High-quality event documenting",
      "50+ professionally edited photos",
      "Online delivery in 72 hours",
      "Perfect for small gatherings",
    ],
  },
  {
    name: "Gold",
    description: "The best balance for major celebrations like anniversaries and engagements.",
    isPopular: true,
    features: [
      "6 hours of professional coverage",
      "2 professional photographers",
      "Candid reaction shots & portraits",
      "100+ professionally edited photos",
      "Highlight event teaser video (1 min)",
      "Online gallery delivery",
    ],
  },
  {
    name: "Platinum",
    description: "Highest tier coverage for high-energy concerts, festivals, and major corporate events.",
    features: [
      "Full event duration coverage",
      "3 photographers + video team",
      "Live event social media snippets",
      "200+ professionally edited photos",
      "Full cinematic event highlight film",
      "Same-day photo delivery service",
    ],
  },
];
