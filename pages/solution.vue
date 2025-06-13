<template>
  <HeaderSection />
  <HeroSolutionSection />
  <UnderstandBrand title="Understand the Brand" bgColor="bg-[#F0F0F0]" leftTitle="🧭 The compass of your business"
    leftDescription="We begin by distilling your brand’s essence — tone, values, and purpose — into clear, strategic inputs. Through focused workshops and stakeholder alignment, we translate abstract brand traits into usable creative and product direction."
    :tags="[
      'Brand Discovery Sessions',
      'Stakeholder Interviews',
      'Brand Audit',
      'Personality Mapping'
    ]" toolsTitle="🛠️ Tools we use:" :toolsList="[
    'Miro or FigJam for live collaboration',
    'Whimsical for brand attributes and tone sliders',
    'Optional pre-workshop surveys via Typeform or Google Forms'
  ]" imageSrc="/Synth/assets/git-1.png" />

  <TestimonialSection imageSrc="/Synth/assets/mayya.png" personName="Mayya Aprosina"
    personTitle="CEO & Business Designer" quoteTitle="A clear why shapes everything that follows."
    quoteText="Understanding why your brand exists — beyond products or features — gives every decision direction. It’s the foundation for building digital experiences that feel aligned, intentional, and real."
    ctaText="Get in touch" ctaLink="#" class="pb-[8rem] pt-[8rem]" />
  <Translate />
  <UnderstandBrand title="Align Across Teams"
    bgColor="bg-[#161616]"
    textColor="text-white"
    tagBgColor="bg-[#222222]"
    tagTextColor="text-white"
    leftTitle="🤝 Turn strategy into shared understanding."
    leftDescription="Even the best strategy fails without alignment. We bring teams together — literally and strategically — so they move in sync."
    :tags="[
      'Cross-Functional Sessions',
      'Shared Documentation',
      'Brand Audit',
      'Project Management'
    ]" toolsTitle="🛠️ Tools we use:" :toolsList="[
    'Miro or FigJam for alignment workshops',
    'Notion for shared strategy docs',
    'Slack or Loom for async feedback',
    'Monday.com or Jira for team tracking'
  ]" imageSrc="/Synth/assets/git-1.png" />
  <StoriesSection />
  <WhiteSection title="Get Started Today"
    description="We work with founders, product leads, and marketing teams to shape digital products that reflect who you are — and scale with who you’re becoming."
    primaryText="Start a Project" primaryLink="#" secondaryText="Book a Call" secondaryLink="#" />
  <FooterSection />
</template>
