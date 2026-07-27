// A DoL House — Impact & Evidence Dashboard (v2)
// Data compiled from: Impact_A_DOL_HOUSE.xlsx (updated, 449 audience responses), M&E plan, LinkedIn screenshots.
// Methodology notes are included inline where a figure is estimated or coded rather than a raw count —
// this is deliberate, per TBH's rule of never presenting an unverified figure as a clean stat.

const DASHBOARD_DATA = {

  meta: {
    title: "A DoL House",
    runDates: "23 June – 18 July 2026"
  },

  headline: [
    { value: "917", label: "audience members", sub: "across the run" },
    { value: "21", label: "sector organisations engaged", sub: "policy, legal, care & research" },
    { value: "30", label: "audience members confirmed the power of the show through LinkedIn testimonies", sub: "" },
    { value: "65%", label: "of attendees were new to a TBH show", sub: "of 449 audience responses" },
    { value: "73%", label: "of attendees discovered the show through peer-to-peer recommendations", sub: "word of mouth, of 449 audience responses" },
    { value: "80%", label: "of young people said the show inspired them to speak up for themselves and others", sub: "5-person post-show survey" }
  ],

  headlineQuotes: [
    { text: "The play takes you on such a journey of emotions, both from the perspective of the young person and their isolation and their lack of real care and love that they desperately need, but you also see from the perspective of the workers how hard they're finding it, how ill equipped they are to support the young person, and how they are making the situation worse, but not through their own fault, you know, they're in a very difficult situation. So, it's a very well-rounded play in terms of all the perspectives. I just feel slightly blown away by the intensity of it, and I just urge people to go and see it. It is the best way to understand what it's like, that you know more than you can get from reading any research, reading any judgments, reading what you read in the newspapers, you need to really get to see what it's like from the perspective of young people, and I think this play really pulls that off.",
      name: "Lisa Harker", role: "Director, NFJO", source: "Vox pop, on the night" },
    { text: "The use of DOLS to simply contain troubled young people [needs to become] a co-ordinated multidisciplinary system of support... Politicians and the Treasury have the power to change this.",
      name: "Goodman Ray", role: "Family & childcare law firm", source: "Post-show survey" }
  ],

  audience: {
    responded: 449,
    totalAttendance: 917,
    newToTBH: 65,
    peerToPeer: 73,
    underTwentyFivePct: 6,
    ageResponded: 348,
    lawyersEstimate: {
      value: 49,
      note: "Floor estimate compiled from named legal groups logged in the partnerships notes and M&E guest list (e.g. Doughty Street x7, 1 Gray's Court x12, two Official Solicitor/Public Trustee groups, Amplett Lissimore x9). Not every legal attendee was logged individually, so this is likely an undercount — worth Zoe/Kashvi confirming the true total."
    },
    occupation: {
      "Social Care": 99, "Public Sector": 80, "Charity": 45, "Arts": 38,
      "Young Person": 22, "Member of TBH": 10, "Other": 15
    },
    occupationResponded: 309,
    occupationNote: "Occupation categories reflect the audience's professional field. 'Young Person' combines respondents who identified as Student or NEET. 'Other' combines Finance and unclassified fields.",
    heard: { "Word of mouth": 73, "Social Media": 19, "Newsletters": 6, "Reviews": 2 },
    why: {
      "Peer-to-peer advocacy and recommendation": 50,
      "Active advocates of TBH's work": 36,
      "Know someone in the show": 10,
      "Local to the area": 5
    }
  },

  audienceClosingQuotes: [
    { text: "As someone who has lived in care, as someone who can relate to a lot of the scenes I have seen today, and as someone who's come up the other side and now works in central government, it's unfortunately an honour to be able to witness something like this.",
      role: "Care-experienced audience member, now working in central government" },
    { text: "We're all social workers here, so I feel like it's really important to see the other side, see how the child is feeling.",
      role: "Social sector attendee" },
    { text: "I love to come to the big house, every time I see a production, it is very thought provoking. I work in this field, I work with young people who I often refer to the big house… this is where I come to get a different perspective on what goes on.",
      role: "Public sector professional" }
  ],

  systemsChange: {
    orgCount: 21,
    orgs: [
      { name: "OFSTED", note: "Attended by senior inspectorate leadership. In touch with Head of Learning & Development re: the Yellow Line brochure. Being pitched to commission TBH for immersive workshops (£15k/year)." },
      { name: "RESET", note: "Launched their partnership with TBH the night of the show. CEO posted publicly. Feeding into TBH's own methodology work." },
      { name: "Purposeful Ventures", note: "COO attended and posted. Strategic deep-dive in progress." },
      { name: "VRU (Violence Reduction Unit)", note: "Attended, positive feedback on the show." },
      { name: "NFJO (National Family Justice Observatory)", note: "Director attended and gave an on-record video response. Posted about the show on LinkedIn." },
      { name: "INQUEST", note: "Senior casework leadership attended; sent a full written testimonial (see Key Quotes)." },
      { name: "Article 39", note: "Executive Director attended and posted on LinkedIn." },
      { name: "BASW (British Association of Social Workers)", note: "London Co-Chair attended and posted publicly." },
      { name: "NAGALRO", note: "Training courses on children's care experience under discussion." },
      { name: "Big Change / Virgin Unite", note: "Introduction being brokered." },
      { name: "Dept for Housing, Communities & Local Government", note: "Meeting held; TBH pitching to train local authorities on unregistered care home risk." },
      { name: "The Children's Home Association", note: "A care-experienced trustee attended; national conference invitation in Birmingham under discussion." },
      { name: "UK Parliament / Minister for Children", note: "Minister for Children & Families attended and posted publicly." },
      { name: "Islington Council", note: "Independent scrutineer and lead councillor for Children's Services attended; written thanks received." },
      { name: "Lambeth Council", note: "Advanced Practitioner for Safeguarding attended." },
      { name: "House of Commons", note: "An MP's chief of staff attended." },
      { name: "Anglia Ruskin University", note: "Post-doctoral researcher attended and posted." },
      { name: "Loughborough / Oxford", note: "A professor of child & family research (CBE) attended with colleagues from Get Further." },
      { name: "Legal chambers", note: "Barristers from 39 Essex Chambers, Doughty Street Chambers and Serjeants' Inn attended across multiple performances, in groups of 5–12." },
      { name: "Government Legal / Public Trustee", note: "Two Official Solicitors and Public Trustees for the government attended on separate nights." },
      { name: "BBC", note: "A reporter attended and posted about \"the scandal of Britain's locked-up children.\"" }
    ],
    coverage: [
      { outlet: "Financial Times", note: "Opinion piece by the Minister for Children referencing the DoL crisis." },
      { outlet: "Prospect Magazine", note: "\"The scandal of Britain's locked-up children: A DoL House, The Big House\"." },
      { outlet: "Community Care", note: "Referenced in a sector review, drawing professional commentary." }
    ]
  },

  linkedin: {
    totalPosts: 30,
    screenshotsSaved: 24,
    summary: "Over 20 impactful members of the audience shared on their personal and organisational LinkedIn pages the power of the show, sparking a wider conversation — including Josh MacAlister, Minister for Children, who not only attended press night but raised awareness about the issue with his own audience.",
    featuredImage: { src: "images/josh_macalister__minister_for_children__families.png", caption: "Josh MacAlister MP, Minister for Children & Families — LinkedIn, July 2026" },
    quotes: [
      { text: "Incredible, the best I've seen in this sector. No tokenism, just raw talent.", name: "Chris Wild", role: "Author / Director, Foster Greatness", verified: true },
      { text: "Exact wording to be confirmed from the original post before external use.", name: "Nuffield Family Justice Observatory", role: "Organisation post", verified: false },
      { text: "Exact wording to be confirmed from the original post before external use.", name: "Article 39", role: "Executive Director", verified: false },
      { text: "Exact wording to be confirmed from the original post before external use.", name: "The Fostering Network", role: "CEO", verified: false },
      { text: "Exact wording to be confirmed from the original post before external use.", name: "BASW London", role: "Co-Chair", verified: false },
      { text: "Exact wording to be confirmed from the original post before external use.", name: "BBC", role: "Reporter", verified: false }
    ],
    note: "Only the Chris Wild quote is drawn from typed text in the master sheet. The others are placeholders — Sophie will need to pull exact wording from the original posts before these go in as verbatim quotes, especially anything attributed to the Minister for Children."
  },

  youngPeople: {
    totalVoicesHeard: 18,
    surveyCount: 5,
    transcriptCount: 13,
    stats: [
      { metric: "said the show helped them understand DoL rights (definitely or a bit)", value: "76%" },
      { metric: "felt more confident to speak up for themselves or others afterwards", value: "80%" },
      { metric: "want to be more involved in speaking up (talks, panels, future TBH projects)", value: "53%" }
    ],
    methodologyNote: "Based on the 5-response post-show survey plus thematic coding of quotes from young people captured in show transcripts, where their comments spoke to the same themes. This is qualitative coding by the team, not a formally validated survey — treat as directional. Will update as more young people respond.",
    responses: [
      { tag: "TBH member", stood_out: "It was very well acted and written, funny, sad and vexing, a master class rlly." },
      { tag: "TBH member", stood_out: "A lot of it stuck with me, although I hadn't been on a DoL order I found a lot of experiences resonated with my own. As someone who was a child in need I related to a lot of the experiences." },
      { tag: "TBH member", stood_out: "The fact the needs of young people are being neglected because of poor delegation and ignorance pertaining to the people in power over vulnerable young people." },
      { tag: "Young person, general audience", stood_out: "The line where they say to the social worker 'I think the problem's on your end' — even though in context they were talking about the internet connection, it was very good messaging about how the issues of the system lay on the side of the authorities rather than the young people who are victim to it." },
      { tag: "TBH member", stood_out: "How not all types of validation is good validation, and that people are different." },
      { tag: "Young person, general audience", stood_out: "Underprivileged youth are placed in completely inadequate housing with untrained staff. Funding has been placed in entirely the wrong places — money that's gone into adult projects could have gone into actual childcare facilities." },
      { tag: "Young person, general audience", stood_out: "I didn't know how evil it was. There were certain parts that I found relatable — it's much more common than I was aware of, and that's really sad." },
      { tag: "TBH member", stood_out: "This could be their kid. The kids that end up here need love and guidance, not to be caged like an animal." }
    ],
    additionalNamedAttendeesCount: 9
  },

  quotes: {
    systems: [
      { text: "The play takes you on such a journey of emotions, both from the perspective of the young person and their isolation and lack of real care and love, but you also see from the perspective of the workers how hard they're finding it, how ill equipped they are to support the young person. It's a very well-rounded play in terms of all the perspectives.", name: "Lisa Harker", role: "Director, NFJO", source: "Vox pop, on the night" },
      { text: "A DoL House should be mandatory viewing for every politician who has a say in children's mental health and social care. It perfectly captured the hell and Kafkaesque nature of these orders and the cold, uncaring placements that vulnerable children are so often dumped in.", name: "Jodie Anderson", role: "Co-Lead of Casework Team, INQUEST", source: "Written testimonial" },
      { text: "The show itself was incredible. The characters were all real people I've come across in this work… I came away even more inspired by the work you do. You offer something so much more than access to arts, it's clearly a well established and strong family unit.", name: "Jodie Anderson", role: "Co-Lead of Casework Team, INQUEST", source: "Written testimonial" },
      { text: "Incredible, the best I've seen in this sector. No tokenism, just raw talent.", name: "Chris Wild", role: "Author / Director, Foster Greatness", source: "LinkedIn" },
      { text: "I thought the show was amazing. What fantastic writing and acting and such a lovely venue.", name: "Cllr Sheila Chapman", role: "Executive Member for Children, Young People & Families, Islington Council", source: "Written testimonial" },
      { text: "The whole show was tremendously powerful. It gave me a strong connection with the lived experience of children experiencing DOLS — a hugely powerful experience I'm taking back to my work.", name: "Yvette Stanley", role: "Chief Inspector for Social Care, Ofsted", source: "Post-show survey — name inferred from email address, please confirm with Zoe before external use" }
    ],
    audience: [
      { text: "It also made me feel so under-educated about what actually goes on, I think particularly in my role I feel like I should know more, and I'm joining the campaign for sure.", role: "Teacher", source: "Post-show, on the night" },
      { text: "I'm a child care solicitor, so I deal with children like Leila on a day-to-day basis, and it's extremely moving, because even as a solicitor we only read about the children's things that we don't want to see. It's an absolutely fantastic performance, and the message is just so loud.", role: "Child care solicitor", source: "Post-show, on the night" },
      { text: "I work for Camden Council and I am a care leaver who has now done the Care Leavers Programme and is a recruitment officer helping other care leavers into employment. I thought that the play was very insightful, very accurate, and a true raw depiction.", role: "Camden Council, care leaver", source: "Post-show, on the night" },
      { text: "As someone who has lived in care, as someone who can relate to a lot of the scenes I have seen today, and as someone who's come up the other side and now works in central government, it's unfortunately an honour to be able to witness something like this.", role: "Care-experienced audience member, now working in central government", source: "Post-show, on the night" },
      { text: "For somebody that's been in a DOLS secure unit, it was very touching. I didn't expect it to be so triggering. You guys listed out key factors, things that actually happen in secure units, and you guys created awareness.", role: "General audience, lived experience", source: "Post-show, on the night" },
      { text: "I've never felt so in a production, I felt the stress and the anxiety and being trapped. I think genuinely it was one of the most powerful pieces of theatre I've seen in a long time. I used to work in community care law, and I think the reason I'm so shaken is because it makes you reflect on to what extent you're part of the problem.", role: "General audience member, former community care lawyer", source: "Post-show, on the night" }
    ],
    youngPeople: [
      { text: "The line where they say to the social worker 'I think the problem's on your end'… it was very good messaging about how the issues of the system lay on the side of the authorities rather than the young people that are victim to it.", role: "Young person, general audience", source: "Post-show survey" },
      { text: "Before tonight, all I knew was that underprivileged youth are placed in completely inadequate housing with untrained staff… Funding has been placed in entirely the wrong places. All the money that's gone into the adult projects could have gone into actual childcare facilities.", role: "Young person, general audience", source: "Transcript" },
      { text: "I think it's very important. It allows people to see things in more detail, in 4K. I think an audience are able to feel the emotions of the characters who are representing real people, definitely touches people's hearts.", role: "Young person", source: "Transcript" },
      { text: "It was very well acted and written, funny, sad and vexing — a master class rlly.", role: "TBH member", source: "Post-show survey" },
      { text: "This could be their kid. The kids that end up here need love and guidance, not to be caged like an animal. That murderers are treated with more respect and dignity — that they're breaking the kids they're meant to be saving.", role: "TBH member", source: "Transcript" },
      { text: "Children become adults, so the next generation — think about how you want them to be, because the seeds are being planted now. Don't wait for it to become a worse issue when you can do something now. There's clearly a lack of urgency.", role: "Young person, general audience", source: "Transcript" }
    ]
  },

  press: {
    items: [
      { outlet: "Financial Times", note: "Opinion piece by the Minister for Children" },
      { outlet: "Prospect Magazine", note: "\"The scandal of Britain's locked-up children: A DoL House, The Big House\"" },
      { outlet: "Community Care", note: "Referenced in a sector review" }
    ]
  },

  gaps: [
    "Full press log (reach, framing, outlet-by-outlet) not yet built.",
    "Most vox pop videos are recorded but not yet transcribed — only one is in the sheet.",
    "LinkedIn quotes above (aside from Chris Wild's) need exact wording confirmed against the original posts before external use.",
    "Post-show questionnaire and YP survey response counts remain low relative to total attendance — worth a reminder push before the data window closes.",
    "RESET cross-referral numbers, staff reflection sessions, and mentoring hours logged are not yet consolidated.",
    "Consent status is not yet logged against each quote — needed before any of this goes external-facing.",
    "Lawyers/legal professionals figure (49) is a floor estimate from named groups, not a verified headcount."
  ]
};
