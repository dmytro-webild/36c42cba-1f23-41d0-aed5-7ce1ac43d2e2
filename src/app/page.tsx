"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Info } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="large"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Nexus Agency"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="NEXUS SOCIAL"
      description="Elevating brands through data-driven creativity and elite social performance strategies."
      buttons={[
        {
          text: "Book Consultation",
          href: "#contact",
        },
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-computer-with-company-profit-progress-screen_482257-77678.jpg",
          imageAlt: "Agency Analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/corporate-meeting-where-multicultural-partners-collaborate-through-video-call-applying-strategic_482257-132358.jpg",
          imageAlt: "Collaborative Team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-works-with-sound-laptop-early-morning_169016-26761.jpg",
          imageAlt: "Content Studio",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-particle-design-with-shallow-depth-field_1048-14034.jpg",
          imageAlt: "Network Connection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-phone-16-pro-max_187299-46137.jpg",
          imageAlt: "Mobile Strategy",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-graphic-digital-tablet-stationeries-paper-backdrop_23-2147880451.jpg",
          imageAlt: "Creative Design",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="About Us"
      title="A Legacy of Digital Excellence"
      buttons={[
        {
          text: "Learn Our Process",
          href: "#about",
        },
      ]}
      tagIcon={Info}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "s1",
          title: "Brand Strategy",
          subtitle: "Defining your digital identity.",
          category: "Strategy",
          value: "Elite",
        },
        {
          id: "s2",
          title: "Paid Social",
          subtitle: "Maximum ROI guaranteed.",
          category: "Performance",
          value: "Scale",
        },
        {
          id: "s3",
          title: "Influencer Outreach",
          subtitle: "Building authentic partnerships.",
          category: "Influence",
          value: "Growth",
        },
      ]}
      title="Premium Agency Services"
      description="Tailored strategies designed for high-growth brands."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Nexus Group",
        "TechFlow",
        "Global Brands",
        "Streamline Co",
        "Innovate X",
        "Pixel Media",
        "Core Digital",
      ]}
      title="Trusted by Market Leaders"
      description="We partner with ambitious companies across the globe."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Results That Speak"
      tag="Impact"
      metrics={[
        {
          id: "m1",
          value: "500%+",
          description: "Average ROAS Increase",
        },
        {
          id: "m2",
          value: "1.2B",
          description: "Total Reach Generated",
        },
        {
          id: "m3",
          value: "45+",
          description: "Premium Brand Partnerships",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Transformation",
          quote: "The most professional agency experience we have ever had.",
          name: "Sarah J.",
          role: "CMO",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-doing-research-analysis-computer-screen-plan-financial-statistics-with-charts-graphs-data-male-employee-working-with-diagram-report-find-sales-profit-e-commerce_482257-40940.jpg",
        },
        {
          id: "t2",
          title: "Growth",
          quote: "Metrics soared from day one.",
          name: "Mark L.",
          role: "CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-back-office_23-2149097923.jpg",
        },
        {
          id: "t3",
          title: "Partnership",
          quote: "Truly understanding our vision.",
          name: "Emma R.",
          role: "Brand Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-computer-having-marketing-project-graphs-screen-while-multiethnic-businesspeople-discussing-company-turnover-startup-office-diverse-team-planning-business-collaboration_482257-38712.jpg",
        },
        {
          id: "t4",
          title: "Performance",
          quote: "Scale beyond expectations.",
          name: "David W.",
          role: "VP Marketing",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-looking-business-analytics_482257-115272.jpg",
        },
        {
          id: "t5",
          title: "Strategy",
          quote: "Incredible tactical execution.",
          name: "Sophie K.",
          role: "Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-group-female-colleagues-ensuring-goals-achievement-chroma-key_482257-123809.jpg",
        },
      ]}
      title="Client Success Stories"
      description="How we helped elite brands redefine their digital presence."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How do we start?",
          content: "Schedule an initial discovery call.",
        },
        {
          id: "f2",
          title: "What is the timeline?",
          content: "Strategy starts immediately upon kickoff.",
        },
        {
          id: "f3",
          title: "Do you work with startups?",
          content: "We support both established brands and high-growth startups.",
        },
      ]}
      title="Common Questions"
      description="Learn more about our agency approach."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Let's Build Something Great"
      description="Reach out to start your digital journey today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your goals",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/female-web-designer-taking-notes-office_23-2149749872.jpg"
      imageAlt="Contact us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="NEXUS"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
