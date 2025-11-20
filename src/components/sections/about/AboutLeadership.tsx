import React from "react";

import { TeamSection } from "@/src/components/ui/team-section";
import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

const leadershipMembers = [
  {
    name: "Méschac Irung",
    designation: "Creator",
    imageSrc: "https://avatars.githubusercontent.com/u/47919550?v=4",
    socialLinks: [
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
  {
    name: "Théo Balick",
    designation: "Frontend Dev",
    imageSrc: "https://avatars.githubusercontent.com/u/68236786?v=4",
    socialLinks: [
      { icon: Github, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    name: "Glodie Lukose",
    designation: "Frontend Dev",
    imageSrc: "https://avatars.githubusercontent.com/u/99137927?v=4",
    socialLinks: [
      { icon: Facebook, href: "#" },
      { icon: Instagram, href: "#" },
    ],
  },
  {
    name: "Bernard Ngandu",
    designation: "Backend Dev",
    imageSrc: "https://avatars.githubusercontent.com/u/31113941?v=4",
    socialLinks: [
      { icon: Github, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
];

// const engineeringMembers = [
//   {
//     name: "Méschac Irung",
//     designation: "Creator",
//     imageSrc: "https://avatars.githubusercontent.com/u/47919550?v=4",
//     socialLinks: [
//       { icon: Twitter, href: "#" },
//       { icon: Linkedin, href: "#" },
//     ],
//   },
//   {
//     name: "Théo Balick",
//     designation: "Frontend Dev",
//     imageSrc: "https://avatars.githubusercontent.com/u/68236786?v=4",
//     socialLinks: [
//       { icon: Github, href: "#" },
//       { icon: Twitter, href: "#" },
//     ],
//   },
//   {
//     name: "Glodie Lukose",
//     designation: "Frontend Dev",
//     imageSrc: "https://avatars.githubusercontent.com/u/99137927?v=4",
//     socialLinks: [
//       { icon: Facebook, href: "#" },
//       { icon: Instagram, href: "#" },
//     ],
//   },
//   {
//     name: "Bernard Ngandu",
//     designation: "Backend Dev",
//     imageSrc: "https://avatars.githubusercontent.com/u/31113941?v=4",
//     socialLinks: [
//       { icon: Github, href: "#" },
//       { icon: Linkedin, href: "#" },
//     ],
//   },
// ];

// const marketingMembers = [
//   {
//     name: "Méschac Irung",
//     designation: "Creator",
//     imageSrc: "https://avatars.githubusercontent.com/u/47919550?v=4",
//     socialLinks: [
//       { icon: Twitter, href: "#" },
//       { icon: Linkedin, href: "#" },
//     ],
//   },
//   {
//     name: "Théo Balick",
//     designation: "Frontend Dev",
//     imageSrc: "https://avatars.githubusercontent.com/u/68236786?v=4",
//     socialLinks: [
//       { icon: Github, href: "#" },
//       { icon: Twitter, href: "#" },
//     ],
//   },
//   {
//     name: "Glodie Lukose",
//     designation: "Frontend Dev",
//     imageSrc: "https://avatars.githubusercontent.com/u/99137927?v=4",
//     socialLinks: [
//       { icon: Facebook, href: "#" },
//       { icon: Instagram, href: "#" },
//     ],
//   },
//   {
//     name: "Bernard Ngandu",
//     designation: "Backend Dev",
//     imageSrc: "https://avatars.githubusercontent.com/u/31113941?v=4",
//     socialLinks: [
//       { icon: Github, href: "#" },
//       { icon: Linkedin, href: "#" },
//     ],
//   },
// ];

export default function AboutLeadership() {
  const allMembers = [
    ...leadershipMembers,
    // ...engineeringMembers,
    // ...marketingMembers,
  ];

  return (
    <TeamSection
      title="CREATIVE TEAM"
      description="Talented individuals working together to create exceptional experiences. Our diverse team brings together expertise from leadership, engineering, and marketing to deliver outstanding results."
      members={allMembers}
      className="bg-[#050505]"
    />
  );
}
