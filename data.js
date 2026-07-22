// A DoL House — Impact & Evidence Dashboard
// Data compiled from: Impact_A_DOL_HOUSE.xlsx, TBH A DoL House M&E plan, LinkedIn screenshots (July 2026)
// All figures are drawn directly from source data. Fields marked TBC are not yet in the master sheet.

const DASHBOARD_DATA = {

  meta: {
    title: "A DoL House",
    subtitle: "Impact & Evidence Dashboard",
    runDates: "23 June – 18 July 2026 (extended run)",
    lastUpdated: "22 July 2026",
    note: "This is a working evidence base, not a final report. Several figures are still being consolidated across the team — see the Data Gaps panel at the bottom of this page."
  },

  headline: [
    { value: "347", label: "audience members recorded", sub: "TicketSource bookings" },
    { value: "51", label: "quotes captured", sub: "via transcription app & FOH" },
    { value: "30", label: "LinkedIn posts about the show", sub: "24 saved as screenshots" },
    { value: "21", label: "sector organisations engaged", sub: "policy, legal, care & research" },
    { value: "120", label: "returning TBH audience members", sub: "of 347 who gave booking data" },
    { value: "2", label: "written testimonials", sub: "INQUEST & Islington Council" }
  ],

  audience: {
    total: 347,
    returning: 120,
    ages: { "18-24": 11, "25-34": 93, "35-44": 63, "45-54": 43, "55-64": 36, "65 or over": 19 },
    agesResponded: 265,
    employment: { "Social Care": 84, "Public Sector": 60, "Charity": 40, "Arts": 27, "Student": 15, "Finance": 11, "NEET": 3 },
    employmentResponded: 240,
    heard: { "Word of mouth": 250, "Social Media": 65, "Newsletters": 27, "Reviews": 5 },
    why: { "Heard good things about the show": 163, "Fan of The Big House": 137, "Know someone in the show": 30, "Local to the area": 17 }
  },

  youngPeople: {
    surveyCount: 5,
    additionalNamedAttendees: 9,
    stats: [
      { metric: "said the show helped them understand DoL rights (definitely or a bit)", value: "5 / 5" },
      { metric: "felt more confident to speak up for themselves or others afterwards", value: "4 / 5" },
      { metric: "want to be more involved in speaking up (talks, panels, future TBH projects)", value: "3 / 5" }
    ],
    responses: [
      { name: "Deshaun Mbonu", tag: "TBH member", stood_out: "It was very well acted and written, funny, sad and vexing, a master class rlly.", rights: "Yes, definitely", confidence: "Yes" },
      { name: "Laura", tag: "TBH member", stood_out: "A lot of it stuck with me, although I hadn't been on a DoL order I found a lot of experiences resonated with my own. As someone who was a child in need I related to a lot of the experiences.", rights: "Yes, a bit", confidence: "Yes" },
      { name: "Anonymous", tag: "TBH member", stood_out: "The fact the needs of young people are being neglected because of poor delegation and ignorance pertaining to the people in power over vulnerable young people.", rights: "Yes, definitely", confidence: "Prefer not to say" },
      { name: "Nisivitaa Sockalingam", tag: "Young person, general audience", stood_out: "The line where they say to the social worker 'I think the problem's on your end' — even though in context they were talking about the internet connection, it was very good messaging about how the issues of the system lay on the side of the authorities rather than the young people who are victim to it.", rights: "Yes, definitely", confidence: "Yes" },
      { name: "Leah", tag: "TBH member", stood_out: "How not all types of validation is good validation, and that people are different.", rights: "Yes, a bit", confidence: "Yes" }
    ],
    namedMembers: ["Nyeeka", "Nae Nae", "Kimberley", "Becki", "Knieke", "Colm", "Fahim Mugulyma", "Charde", "Mia Parke"]
  },

  systemsChange: {
    orgCount: 21,
    orgs: [
      { name: "OFSTED", note: "Yvette Stanley (Chief Inspector, Social Care) and Sir Martin Oliver attended. In touch with Head of Learning & Development re: Yellow Line brochure. Being pitched to commission TBH for immersive workshops (£15k/year)." },
      { name: "RESET", note: "Launched their partnership with TBH the night of the show. CEO Dara de Burca posted publicly. Feeding into TBH's own methodology work." },
      { name: "Purposeful Ventures", note: "COO Joshua Marks attended and posted. Strategic deep-dive in progress." },
      { name: "VRU (Violence Reduction Unit)", note: "Attended, positive feedback on the show." },
      { name: "NFJO (National Family Justice Observatory)", note: "Director Lisa Harker attended (x3 contacts) and gave an on-record video response. Posted about the show on LinkedIn." },
      { name: "INQUEST", note: "Deborah Coles and Jodie Anderson attended; Jodie sent a full written testimonial (see Voices)." },
      { name: "Article 39", note: "Jodie Wickers (Executive Director) and Rebekah Pierre attended; Jodie posted on LinkedIn." },
      { name: "BASW (British Association of Social Workers)", note: "Co-Chair Nadine Boyne attended and posted publicly." },
      { name: "NAGALRO", note: "Training courses on children's care experience under discussion." },
      { name: "Big Change / Virgin Unite", note: "Introduction being brokered." },
      { name: "Department for Housing, Communities & Local Government", note: "Meeting held; TBH pitching to train local authorities on unregistered care home risk." },
      { name: "The Children's Home Association", note: "Dr Mark Kerr (care-experienced) attended; national conference invitation in Birmingham under discussion." },
      { name: "UK Parliament / Minister for Children", note: "Josh MacAlister MP, Minister for Children & Families, attended and posted publicly." },
      { name: "Islington Council", note: "Independent scrutineer and lead councillor for Children's Services attended; Cllr Sheila Chapman sent written thanks." },
      { name: "Lambeth Council", note: "Advanced Practitioner for Safeguarding attended." },
      { name: "House of Commons", note: "Chief of Staff for an MP's office attended." },
      { name: "Anglia Ruskin University", note: "Sarah Colley, post-doctoral researcher, attended and posted." },
      { name: "Loughborough / Oxford", note: "Professor Harriet Ward CBE (child & family research) attended with colleagues from Get Further." },
      { name: "Legal chambers", note: "Barristers from 39 Essex Chambers, Doughty Street Chambers and Serjeants' Inn attended across multiple performances (groups of 7–12)." },
      { name: "Government Legal / Public Trustee", note: "Two Official Solicitors and Public Trustees for the government attended on separate nights." },
      { name: "BBC", note: "Reporter Sanchia Berg attended and posted about \"the scandal of Britain's locked-up children.\"" }
    ],
    coverage: [
      { outlet: "Financial Times", note: "Josh MacAlister opinion piece referencing the DoL crisis." },
      { outlet: "Prospect Magazine", note: "\"The scandal of Britain's locked-up children: A DoL House, The Big House\"." },
      { outlet: "Community Care", note: "Referenced in a sector review, drawing professional commentary." }
    ]
  },

  linkedin: {
    totalPosts: 30,
    screenshotsSaved: 24,
    posts: [
      { name: "Josh MacAlister MP", role: "Minister for Children & Families", org: "UK Government", image: "images/josh_macalister__minister_for_children__families.png" },
      { name: "Lisa Harker", role: "Director", org: "NFJO", image: "images/lisa_harker__nfjo.png" },
      { name: "Dara de Burca", role: "CEO", org: "RESET", image: "images/ceo_of_reset_quote.png" },
      { name: "Jodie Wickers", role: "Executive Director", org: "Article 39", image: "images/jodie_from_inquest_writeup.png" },
      { name: "Sanchia Berg", role: "Reporter", org: "BBC", image: "images/sanchia_berg__bbc.png" },
      { name: "Nadine Boyne", role: "Co-Chair", org: "British Association of Social Workers", image: "images/nadine_boyne__co-chair_of_london_basw_social_worker.png" },
      { name: "Chris Wild", role: "Author / Director", org: "Foster Greatness", image: "images/chris_wild__author.png", quote: "Incredible, the best I've seen in this sector. No tokenism, just raw talent." },
      { name: "Sarah Colley", role: "Post-doctoral researcher", org: "Anglia Ruskin University", image: "images/sarah_colley__post-doc_researcher_at_anglia_ruskin.png" },
      { name: "Aliyah Ali", role: "Founder", org: "Daddyless Daughters", image: "images/aliyah_ali__founder_of_daddyless_daughters.png" },
      { name: "Adam Pickering", role: "Deputy Manager", org: "Staffordshire Council", image: "images/adam_pickering__staffordshire_council.png" },
      { name: "Hannah Olatunde", role: "Social Worker (former Magic Circle lawyer)", org: "", image: "images/hannah_olatunde__social_worker_quote.png" },
      { name: "Kimberley Dixon", role: "Actor / Broadcast Presenter", org: "", image: "images/kimberley_dixon_post.png" },
      { name: "Maria Totolici", role: "Psychologist", org: "", image: "images/maria_totolici__psychologist_quote.png" },
      { name: "Judith Denton", role: "", org: "The Black Care Experience", image: "images/judith_denton__the_black_care_experience.png" },
      { name: "Sarah Thomas", role: "CEO", org: "The Fostering Network", image: "images/sarah_thomas__ceo_of_the_fostering_network.png" },
      { name: "Monique Kufuor", role: "Mental Health Nurse", org: "", image: "images/monique_kufuor__mental_health_nurse.png" },
      { name: "Jake", role: "", org: "Hampton Children's Homes", image: "images/jake__hampton_children_s_homes_post.png" },
      { name: "Nuffield Family Justice Observatory", role: "Organisation post", org: "NFJO", image: "images/nfjo_post_about_the_show.png" },
      { name: "Alexandra Rudman", role: "Director of Brand Architecture & Development", org: "Foster Greatness UK", image: "images/alexandra_rudman_post_pt.1.png" },
      { name: "Alexandra Rudman", role: "(continued)", org: "Foster Greatness UK", image: "images/alexandra_rudman_post_pt.2.png" },
      { name: "Sarah Richardson", role: "", org: "Russell-Cooke Solicitors", image: "images/sarah_richardson__russell-cooke_solicitors.png" },
      { name: "Ravi", role: "", org: "Cartwright King Law Firm", image: "images/ravi__cartwright_king_law_firm.png" },
      { name: "Community Care", role: "Reader comment on sector review", org: "", image: "images/commenter_on_cc_review.png" },
      { name: "The Cambridge Pledge", role: "Organisation post", org: "", image: "images/the_cambridge_pledge.png" }
    ]
  },

  quotes: {
    systems: [
      { text: "I'm feeling really moved… I just found the portrayal of what it was like to be on a deprivation of liberty order so poignant, very truthful to the reality of what we know from our own research and from young people's testimony. It is the best way to understand what it's like — you need to really get to see what it's like from the perspective of young people, and I think this play really pulls that off.", name: "Lisa Harker", role: "Director, NFJO", source: "Vox pop, on the night" },
      { text: "A DoL House should be mandatory viewing for every politician who has a say in children's mental health and social care. It perfectly captured the hell and Kafkaesque nature of these orders and the cold, uncaring placements that vulnerable children are so often dumped in.", name: "Jodie Anderson", role: "Co-Lead of Casework Team, INQUEST", source: "Written testimonial" },
      { text: "The show itself was incredible. The characters were all real people I've come across in this work… I came away even more inspired by the work you do. You offer something so much more than access to arts, it's clearly a well established and strong family unit.", name: "Jodie Anderson", role: "Co-Lead of Casework Team, INQUEST", source: "Written testimonial" },
      { text: "Incredible, the best I've seen in this sector. No tokenism, just raw talent.", name: "Chris Wild", role: "Author / Director, Foster Greatness", source: "LinkedIn" },
      { text: "I thought the show was amazing. What fantastic writing and acting and such a lovely venue.", name: "Cllr Sheila Chapman", role: "Executive Member for Children, Young People & Families, Islington Council", source: "Written testimonial" }
    ],
    audience: [
      { text: "It also made me feel so under-educated about what actually goes on, I think particularly in my role I feel like I should know more, and I'm joining the campaign for sure.", name: "Grace K", role: "Teacher", source: "Post-show, on the night" },
      { text: "I'm a child care solicitor, so I deal with children like Leila on a day-to-day basis, and it's extremely moving, because even as a solicitor we only read about the children's things that we don't want to see. It's an absolutely fantastic performance, and the message is just so loud.", name: "Priti", role: "Child care solicitor", source: "Post-show, on the night" },
      { text: "I work for Camden Council and I am a care leaver who has now done the Care Leavers Programme and is a recruitment officer helping other care leavers into employment. I thought that the play was very insightful, very accurate, and a true raw depiction.", name: "Rose Green", role: "Camden Council, care leaver", source: "Post-show, on the night" },
      { text: "As someone who has lived in care, as someone who can relate to a lot of the scenes I have seen today, and as someone who's come up the other side and now works in central government, it's unfortunately an honour to be able to witness something like this.", name: "Elijah", role: "General audience, care-experienced", source: "Post-show, on the night" },
      { text: "For somebody that's been in a DOLS secure unit, it was very touching. I didn't expect it to be so triggering. You guys listed out key factors, things that actually happen in secure units, and you guys created awareness.", name: "Zarha", role: "General audience, lived experience", source: "Post-show, on the night" }
    ],
    youngPeople: [
      { text: "The line where they say to the social worker 'I think the problem's on your end'… it was very good messaging about how the issues of the system lay on the side of the authorities rather than the young people that are victim to it.", name: "Nisivitaa Sockalingam", role: "Young person, general audience", source: "Post-show survey" },
      { text: "Before tonight, all I knew was that underprivileged youth are placed in completely inadequate housing with untrained staff… Funding has been placed in entirely the wrong places. All the money that's gone into the adult projects could have gone into actual childcare facilities.", name: "Wadie", role: "Young person", source: "Transcript" },
      { text: "I think it's very important. It allows people to see things in more detail, in 4K. I think an audience are able to feel the emotions of the characters who are representing real people, definitely touches people's hearts.", name: "Nadege", role: "Young person", source: "Transcript" },
      { text: "It was very well acted and written, funny, sad and vexing — a master class rlly.", name: "Deshaun Mbonu", role: "TBH member", source: "Post-show survey" }
    ]
  },

  press: {
    note: "Press log is still being consolidated by Sophie. Confirmed coverage below; full reach and framing analysis is a data gap (see below).",
    items: [
      { outlet: "Financial Times", note: "Josh MacAlister opinion piece" },
      { outlet: "Prospect Magazine", note: "\"The scandal of Britain's locked-up children: A DoL House, The Big House\"" },
      { outlet: "Community Care", note: "Referenced in a sector review" }
    ]
  },

  evidenceStreams: [
    { stream: "QR code post-show email", status: "Live throughout the run", volume: "Included within the 51 captured quotes" },
    { stream: "Transcription app (voices)", status: "Live throughout the run", volume: "51 quotes / testimonials captured" },
    { stream: "Post-show questionnaire (Sophie & Kashvi)", status: "Live", volume: "7 responses so far" },
    { stream: "Young people's survey (Beth)", status: "Live", volume: "5 responses + 9 members logged by name" },
    { stream: "Email testimonials", status: "Ad hoc", volume: "2 received (INQUEST, Islington Council)" },
    { stream: "Vox pops (video)", status: "Recorded, mostly untranscribed", volume: "1 of several transcribed (Lisa Harker, NFJO)" },
    { stream: "TicketSource data", status: "Complete for the run", volume: "347 bookings recorded" },
    { stream: "LinkedIn monitoring", status: "Ongoing", volume: "30 posts identified, 24 saved as screenshots" }
  ],

  gaps: [
    "Headline numbers (total YP attending, number of lawyers, number of social workers) are listed in the sheet but not yet filled in — needs figures from Beth / Zoe / Hannah.",
    "Full press log (reach, framing, outlet-by-outlet) not yet built — flagged as Kashvi/Sophie's task in the M&E plan.",
    "Most vox pop videos are recorded but not yet transcribed — only Lisa Harker's is in the sheet.",
    "Post-show questionnaire response count (7) and YP survey count (5) are low relative to 347 attendees — worth a reminder push before the data window closes.",
    "RESET cross-referral numbers, staff reflection sessions, and mentoring hours logged are not yet in the sheet (Zoe and Beth's tracking, per the M&E plan).",
    "Pre/post knowledge survey scores for general audiences (distinct from the YP survey) are not consolidated.",
    "Consent status is not yet logged against each quote — needed before any of this goes external-facing."
  ]
};
