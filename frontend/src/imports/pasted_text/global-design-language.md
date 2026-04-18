Prompt 1 — Global Design Language (use this first in every tool)
Design system for KisanTrust AI — a web platform for Indian rural farmers that combines crop disease diagnosis with agricultural credit scoring.

BRAND IDENTITY:
Name: KisanTrust AI
Tagline: "Grow with Purpose"
Personality: Grounded, honest, warm, quietly confident — like a trusted village elder who happens to understand technology. Not corporate, not sterile.

COLOR PALETTE:
Primary: Deep forest green #1A3A1A (headers, nav, primary buttons)
Accent: Harvest lime #64B43C (CTAs, active states, score highlights)
Warm soil: #8B5E3C (trust badges, secondary accents)
Sky morning: #E8F5E0 (backgrounds, card surfaces)
Pure cream: #FAFBF7 (page background — warmer than pure white)
Text primary: #1C1C1A (near-black, not harsh black)
Text muted: #6B7B5E (descriptions, labels)
Danger/disease alert: #C0392B (severity indicators only)
Success: #27AE60 (improvement metrics, healthy state)

TYPOGRAPHY:
Heading font: "Fraunces" (serif, organic, feels handcrafted) — use for hero headings and score numbers only
Body font: "DM Sans" (humanist sans-serif, warm, highly legible at small sizes)
Vernacular labels: Use "Tiro Devanagari Hindi" for any Hindi text overlays
Scale: 48px hero / 32px section / 24px card title / 16px body / 13px label
Line height: 1.65 for body, 1.2 for headings
Letter spacing: -0.02em for headings over 28px

3D & DEPTH APPROACH (minimal, purposeful):
One single floating element per page maximum — a subtle CSS transform3d card tilt on hover (rotateX 3deg, rotateY 4deg), nothing more
Soft layered cards: box-shadow 0 2px 8px rgba(26,58,26,0.07), 0 0 0 0.5px rgba(26,58,26,0.06)
Raised metric cards: box-shadow 0 4px 16px rgba(26,58,26,0.10)
No parallax, no heavy three.js, no glassmorphism — these look fake and distract judges

HUMAN TOUCH RULES (critical for non-AI look):
1. Every illustration uses organic shapes with 1-3px intentional imperfection (slight asymmetry in leaf icons, hand-drawn underlines)
2. Avatar initials for farmers use earthy color — never generic blue circles
3. Micro-copy is conversational: "Your fields are doing well today" not "Dashboard loaded successfully"
4. Empty states show hand-drawn style SVG illustrations with encouraging Hindi text underneath
5. Timestamps read as "3 days ago" and "last Tuesday" — never ISO strings
6. Crop health percentage uses a circular arc, not a progress bar
7. Numbers animate count-up on first load (0 → 748 over 1.2s with ease-out)

SPACING SYSTEM:
Base unit: 4px
Component padding: 16px / 24px / 32px
Card gap: 16px
Section gap: 48px
Max content width: 1200px, centered

COMPONENT RULES:
Buttons: Rounded 10px, no sharp corners, 44px min height (thumb friendly)
Primary button: bg #1A3A1A, text #E8F5E0, hover scale(1.02) with background lighten
Secondary button: bg transparent, border 1px #1A3A1A, text #1A3A1A
Inputs: Border 1px #C5D5B5, focus border #64B43C, background #FAFBF7, rounded 8px
Cards: background #FFFFFF, border 0.5px rgba(26,58,26,0.10), rounded 14px
Tags/badges: pill shape, 6px 12px padding, no harsh black text

ICONOGRAPHY:
Style: Phosphor Icons (rounded, 1.5px stroke weight, never filled)
Size: 20px in cards, 24px in nav, 32px in empty states
Leaf icon: Custom SVG, slightly asymmetric, used as brand motif throughout
Never use emoji as UI icons
Copy prompt 1
Prompt 2 — Landing Page
Design the KisanTrust AI landing page using the global design language defined above.

NAVIGATION BAR:
Background: #1A3A1A (deep forest green)
Left: KisanTrust AI logo — leaf SVG icon + "KisanTrust" in Fraunces 20px cream + "AI" in harvest lime
Center links: How it Works, For Farmers, For Lenders — in DM Sans 14px, cream/70% opacity
Right: "Farmer Login" ghost button (cream border) + "Lender Login" filled button (#64B43C)
Subtle: one tiny animated wheat stalk icon slowly swaying in the background of nav (CSS animation, loop 4s)

HERO SECTION:
Layout: 55% text left / 45% visual right
Background: Cream #FAFBF7 with very subtle diagonal texture (1px dots, 4% opacity, like graph paper — suggests precision farming)
Headline: (Fraunces, 52px, #1A3A1A, line-height 1.15)
"From Field to Finance —
Your Farm Builds
Your Credit Score"
Subheadline: (DM Sans 18px, #6B7B5E)
"Upload a crop photo. Get instant AI diagnosis in your language. Watch your Agri-Trust Score grow with every harvest you protect."
CTA buttons side by side:
  — "Start Diagnosing Free" — primary filled, #1A3A1A bg, cream text
  — "See How It Works" — ghost, forest green border
Below CTA: three trust micro-badges in a row:
  [leaf icon] No app download needed
  [shield icon] GPS-verified data
  [star icon] Scores accepted by 12+ lenders

RIGHT VISUAL: A realistic hand holding a basic Android phone showing the app UI. Phone has a subtle 3D tilt (CSS transform, not rendered 3D). Around the phone: 3 small floating data cards appearing at different z-levels — "Disease Detected: Powdery Mildew", "Agri-Trust Score: 748", "Treatment Plan Ready" — each card has a very slight drop shadow difference to create depth. These float with gentle CSS keyframe animation (translateY -6px, 3s, alternate, ease-in-out).

PROBLEM STATEMENT STRIP (below hero):
Background: #2D5A27 (mid green)
Three stats side by side, large Fraunces numbers in harvest lime:
  "70%" — Farmers denied credit due to no financial history
  "45 min" — Average time to reach an agronomist in rural India
  "₹0" — Cost to use KisanTrust AI
Caption below each in cream 13px DM Sans

HOW IT WORKS (3 steps):
Background: #FAFBF7
Section header: "Three steps. Zero friction." (Fraunces 36px, centered)
Three cards in a row with a thin connecting dashed line between them (like a journey path):
Card 1: Illustration of a hand taking a photo of a wilting leaf
  Number badge: "01" in harvest lime circle
  Title: "Photograph your crop"
  Text: "Any browser, any phone. No download needed."
Card 2: Illustration of AI brain with leaf overlay
  Number badge: "02"
  Title: "AI identifies the disease"
  Text: "Location-verified diagnosis in your language within seconds."
Card 3: Illustration of a rising chart with a coin
  Number badge: "03"
  Title: "Your score grows"
  Text: "Every diagnosis becomes data. Data becomes credit access."
Cards have hover: slight lift (translateY -4px) + shadow increase

AGRI-TRUST SCORE EXPLAINER:
Background: alternating — left half cream, right half #1A3A1A
Left side: Large circular score gauge (SVG arc, 0-850, showing 748) in harvest lime. Five factor pills below it as a stacked list with percentage bars.
Right side: Quote in Fraunces italic 24px cream "A score that banks trust, built from the land you tend." — followed by two farmer testimonial micro-cards (fake but realistic: photo, name in Hindi romanized, village, score number, loan amount approved)

FOOTER:
Background: #111E11 (very dark green)
Left: Logo + tagline "Grow with Purpose"
Center: Links grid
Right: Hindi text "किसान का विश्वास, हमारी ताकत" with Bhashini/Govt of India partnership badge
Bottom bar: "Built with purpose at HackElite · Team HackElite"
Copy prompt 2
Prompt 3 — Auth Screens (Login + Register)
Design the KisanTrust AI authentication screens — Farmer Register, Farmer Login, and Lender Login.

LAYOUT FOR ALL AUTH SCREENS:
Split layout: Left 45% decorative panel / Right 55% form
Left panel background: #1A3A1A
Left panel content: Large hand-drawn style illustration of terraced green fields (SVG path artwork, organic curves, not photographic). Three floating micro-fact cards on top of the illustration showing real farm stats. Bottom of panel: "किसान का विश्वास" (Hindi) in Fraunces cream. A slow animated overlay of light moving across the fields to suggest time of day (CSS gradient animation, very subtle, 12s loop).
Right panel background: #FAFBF7

FARMER REGISTER FORM:
Header: Small KisanTrust leaf logo + "Create your farmer profile" in Fraunces 28px
Subtext: "Your journey to fair credit starts here"
Progress indicator: 3 dots showing step 1 of 3 active (harvest lime dot, gray dots)

Step 1 — Identity:
  Full name input (placeholder: "जैसे: Ramesh Kumar")
  Mobile number input with +91 prefix chip
  Village / Tehsil input
  State dropdown (Indian states only)
  Password input with strength meter below (bar fills harvest lime as strength increases)
"Continue" button full width, primary style

Step 2 — Farm Details (shown after step 1):
  Land size in acres (number input with "acres" suffix chip)
  Crop type multiselect tags (wheat, rice, sugarcane, cotton, vegetable — click to toggle, harvest lime highlight when selected)
  "Set my field location" button — opens a small Leaflet.js map inline with a pin, "Tap to confirm your field center"

Step 3 — Confirmation:
  Summary card showing all entered data
  "Your Agri-Trust Score starts at 0. Every diagnosis you upload builds it."
  Confirm & Register button

FARMER LOGIN FORM:
Simpler: Mobile number + Password + "Login" button
Below form: "New farmer? Create account →"
Forgot password link with SMS OTP flow indicated

LENDER LOGIN:
Different left panel illustration: City bank building merging with a farmfield (representing finance meets agriculture)
Form: Organization name + email + password
Lender badge next to the header: "Verified Lender Portal" with a small verified checkmark in harvest lime
Note below login: "Farmer data is anonymized until you initiate a credit inquiry"

MICRO-DETAILS:
Input focus state: left border turns harvest lime (border-left 3px #64B43C), background subtly lightens
Error state: red left border + small error text below input in #C0392B, 12px
Success state (after registration): Full-width green success card slides down from top with "Profile created! Your Agri-Trust journey begins."
All transitions: 200ms ease
Copy prompt 3
Prompt 4 — Farmer Dashboard (Core Screen)
Design the KisanTrust AI Farmer Dashboard — the most important screen. This is what judges will see first after login.

LAYOUT:
Left sidebar (240px, fixed): navigation
Main content area: scrollable
Top greeting bar: full width

SIDEBAR:
Background: #1A3A1A
Top: Farmer avatar circle (earthy amber initials, not blue) + name + village name in 12px
Nav items with phosphor icons: Dashboard, Diagnose Crop, My Log, Score Details, Settings
Active item: harvest lime left border + slightly lighter bg tint
Bottom of sidebar: "Powered by Bhashini" language toggle — shows current language (Hindi/English/Marathi) with a small India flag
Very bottom: Agri-Trust Score mini-badge in sidebar showing current score number

TOP GREETING BAR:
Background: cream #FAFBF7
Left: "Good morning, Ramesh 🌱" — Fraunces 24px. Below: "Your Kharif wheat is in its 4th week. Time for a check-up?" (contextual, dynamic text)
Right: Weather widget — current temp + condition for farmer's registered village (pulled from API), shown as a small card. + Notification bell with dot if there are reminders.

AGRI-TRUST SCORE CARD (hero card, top left of main area):
Large card, background gradient-free: white with subtle #1A3A1A border at top (4px accent stripe)
Left side of card: Circular arc gauge built in SVG
  — Outer ring: light gray track
  — Filled arc: harvest lime (#64B43C), drawn clockwise from bottom-left
  — Center of arc: Score number in Fraunces 56px #1A3A1A
  — Below number: "Agri-Trust Score" in DM Sans 13px muted
  — Below that: score tier badge — "Good Standing" in a lime pill
Right side of card: Five factor breakdown listed vertically
  Each row: [icon] Factor name + thin horizontal bar (partial fill in lime) + "28/30" fraction
  Factors: Diagnosis Frequency, Crop Improvement, Location Consistency, Seasonal Management, Response Time
  Hover on any factor: tooltip card appears showing what this factor means in plain Hindi + English
Bottom of card: "Score updated 2 hours ago" in 12px muted text + "View full breakdown →" link

STAT CARDS ROW (4 cards):
Grid: 4 equal columns, gap 16px
Card 1: Total Diagnoses — big Fraunces number, "diagnoses uploaded" label, small upward trend sparkline
Card 2: Diseases Caught — number + "unique diseases identified" + small leaf icons for each type
Card 3: Follow-ups Completed — percentage with circular mini-arc + "of treatments followed up"
Card 4: Loan Eligibility — "₹45,000" in harvest lime + "estimated based on your score" in muted

RECENT DIAGNOSIS STRIP (below stats):
Header: "Recent crop checks" + "View all →" right aligned
Three most recent diagnosis cards in a row:
  Each card: Crop photo thumbnail (rounded 10px) + diagnosis date (relative: "3 days ago") + disease name badge (red if severe, yellow if medium, green if healthy) + severity level text + "Follow up due" chip if applicable
  Hover: card lifts 3px, photo slightly zooms (scale 1.03, overflow hidden)

TREATMENT TIMELINE (below diagnosis strip):
Visual timeline — not a table. Vertical line on the left (#64B43C), dots for each event
Events: "Uploaded first diagnosis", "Powdery Mildew detected", "Treatment started", "Follow-up photo uploaded", "Score increased by 24 points"
Each event: dot color matches type (red=disease, green=improvement, blue=upload, amber=reminder)
Latest event has a pulsing ring animation (CSS @keyframes, lime color, 2s loop)

BOTTOM: SMART TIPS CARD:
Background: #E8F5E0 (light green)
Left: Small illustrated icon (sprouting seedling, SVG)
Right: Personalized tip — "Based on your location and season: Aphid risk is high this week in Haryana. Upload a check photo to protect your score."
CTA link: "Diagnose now →"
Copy prompt 4
Prompt 5 — Crop Diagnosis Screen
Design the KisanTrust AI Crop Diagnosis screen — the core feature. This must feel fast, reassuring, and simple for a farmer with a basic Android phone.

PAGE STATES — design all four:

STATE 1: READY TO UPLOAD
Top instruction card: warm cream background, single clear instruction
  Large illustrated icon: hand holding a phone pointed at a leaf (SVG, organic style)
  Text: "Take a close photo of the sick leaf or crop area"
  Subtext in 13px muted: "Your GPS location is being captured automatically"

GPS Status bar: thin bar below instruction card
  Left dot: pulsing green circle (CSS animation) + "Location verified: Rohtak Field 1, 23m accuracy"
  Right: small map pin icon
  If GPS fails: yellow dot + "Move outside for better signal" — never block the upload

Large Upload Zone: dashed border (1.5px, #C5D5B5, dashed), rounded 14px, centered
  Inside: camera icon (phosphor, 40px, #6B7B5E) + "Tap to photograph or upload"
  Accepts: camera capture on mobile, file on desktop
  Drag & drop active state: border turns harvest lime, background tints to #E8F5E0

Field selector below upload: "Uploading for: [Kharif Wheat — Field 1 ▾]" — dropdown to select which registered field this diagnosis is for

STATE 2: ANALYZING (shown after upload)
Photo preview fills the upload zone with the uploaded image (object-fit: cover)
Overlay: semi-transparent #1A3A1A/80% with a centered analysis indicator
Analysis indicator: NOT a spinner. Instead: a scanning line animation — a thin lime line sweeps top to bottom over the image (CSS keyframes, 1.5s loop) suggesting "reading" the image
Text below image: "Analyzing your crop..." + 3 sequential messages that rotate every 1.5s:
  "Identifying disease markers..."
  "Checking regional outbreak data..."
  "Preparing your treatment plan..."
Score impact preview badge: "This diagnosis will add to your Agri-Trust Score" appears in bottom right corner of overlay

STATE 3: RESULTS REVEALED (the payoff moment)
Layout: two-column on desktop, stacked on mobile

LEFT — Disease Card (primary):
  Top accent stripe color = severity (red/amber/green, 4px top border)
  Disease name in Fraunces 28px: "Powdery Mildew"
  Confidence badge: "94% confident" in small pill
  Severity badge: "Medium Severity" in amber pill
  Uploaded photo thumbnail small, right aligned in card
  "What is this?" expandable section: 2-sentence plain language explanation

RIGHT — Treatment Plan:
  Header: "Your 7-Day Plan" + language toggle (EN / हिं / मर)
  7 day cards stacked — Day 1 through Day 7, each with:
    Day number circle (harvest lime) + action text + icon
    Estimated cost: "~₹80 for neem spray"
  Bottom of treatment: "Set reminder for Day 7 follow-up" toggle switch

SCORE IMPACT STRIP (full width, below both cards):
  Background: #1A3A1A, text cream
  Left: "+12 points added to your Agri-Trust Score"
  Center: mini before/after arc showing old score → new score
  Right: "Next upload in 7 days will add more"

Follow-up scheduling card: "We'll send you an SMS on [date] to remind you to upload a follow-up photo. Enable reminders?" — Yes / Later buttons

STATE 4: FOLLOW-UP COMPARISON VIEW
Split image comparison: two photos side by side (before / after)
Between them: improvement percentage badge: "+67% improvement" in large harvest lime
AI verdict text below: "Your wheat has significantly recovered. Excellent response time."
This diagnosis contributed: shows which score factors were improved and by how much
Copy prompt 5
Prompt 6 — Diagnosis History Log
Design the KisanTrust AI Diagnosis History Log — a visual, scrollable record of all past diagnoses.

PAGE HEADER:
Title: "Your Crop Journal" (Fraunces 32px) — the word "Journal" is deliberate, it feels personal not transactional
Subtitle: "48 diagnoses across 3 fields since March 2024"
Right side: Filter bar — search input + filter chips: All / Healthy / Diseased / Follow-ups Pending

VIEW TOGGLE:
Two view options styled as pill toggle:
  [Grid icon] Photo Grid — default
  [List icon] Timeline

PHOTO GRID VIEW:
Masonry-style grid (3 columns), gap 12px
Each card:
  Crop photo (full bleed top, aspect ratio 4:3)
  Bottom section: disease name + date badge (relative time) + severity dot (colored circle: green/amber/red)
  If follow-up pending: amber banner at top of card "Follow-up due in 3 days"
  If healthy: small green checkmark badge overlay at top right of photo
Hover: photo zooms subtly (scale 1.04), card info slides up slightly revealing "View full diagnosis" button
Filter active: non-matching cards fade to 30% opacity, matching cards stay full

TIMELINE VIEW:
Vertical scrolling timeline
Month headers: sticky, cream background, "June 2024" in DM Sans 13px muted uppercase
Each entry on timeline:
  Left: Date column (day number large in Fraunces, month small below in muted)
  Center: Connecting vertical line (#C5D5B5)
  Right: Expandable event card — thumbnail + disease + field name + score change chip
  Score change chip: "+ 8 pts" in lime pill or "No change" in gray pill
Clicking any card: expands inline to show full diagnosis details + treatment plan recap (no new page navigation — accordion expand)

EMPTY STATE (first-time user):
Centered: Large hand-drawn SVG illustration of a curious farmer looking at a healthy leaf (stick-figure organic style, not clip art)
Text: "Your crop journal is waiting" (Fraunces)
Subtext: "Every photo you upload tells the story of your farming. Start today."
CTA: "Take your first photo →" button

FILTER + SEARCH BEHAVIOR:
Search: filters by disease name, field name, date — results highlight matching text in lime
Active filters show as removable chips above the grid
"Showing 12 of 48 diagnoses" counter updates live
Copy prompt 6
Prompt 7 — Lender Dashboard (Judge Highlight Screen)
Design the KisanTrust AI Lender Dashboard — a professional, data-rich screen for banks and NBFCs. This screen should look like enterprise software — clean, credible, decision-ready.

OVERALL FEEL:
Slightly more corporate than the farmer side — but not cold. Same color system, but white is used more. Navigation bar is white with #1A3A1A accents rather than full green.

TOP BAR:
White background, 1px bottom border
Left: KisanTrust AI logo (smaller) + "Lender Portal" badge in small muted pill
Center: Search bar — "Search farmer by phone number or name" — wide, prominent
Right: Lender organization name + "Verified Lender" badge (lime checkmark) + notification bell

SUMMARY ROW (4 stat cards):
Farmers reviewed today: number + sparkline
Loans approved this week: number + trend arrow
Average trust score of reviewed farmers: gauge mini
Pending applications: number with urgency color if >10

FARMER LEADERBOARD (main panel, left 60%):
Header: "Top Farmers by Agri-Trust Score" + filter: [All States ▾] [All Crops ▾] [Sort: Score ▾]
Table-style list BUT designed as cards, not a grid table:
Each row card:
  Rank badge (1st = gold circle, 2nd = silver, 3rd = bronze, rest = plain number) — left
  Farmer avatar (earthy initials circle) + Name + Village + State — center left
  Score arc (tiny circular arc, 32px, shows score visually) + score number — center
  Crop tags (2-3 pill badges: wheat, rice etc) — center right
  Top diagnosed disease (small badge, red/amber/green) — right
  "View Profile" ghost button — far right, appears on hover only
Row hover: slight background tint + "View Profile" button fades in
Top 3 rows have a subtle golden/silver/bronze left border accent

FARMER COMPARISON SYSTEM (right 40%, collapsible panel):
Header: "Compare Farmers" + "Select up to 3 →"
When no farmers selected: placeholder illustration + text "Click any farmer to add to comparison"
When 2-3 farmers selected: 
  Side-by-side comparison cards for each farmer
  Radar/spider chart (SVG, 5 axes = 5 score factors): each farmer drawn in different color
  Below radar: table of raw scores per factor, differences highlighted
  Recommendation chip: "Ramesh Kumar shows the most consistent location data — lower fraud risk"
  Two action buttons: "Approve Loan" (lime filled) + "Request More Data" (ghost)

INDIVIDUAL FARMER PROFILE DRAWER:
Slides in from right (off-canvas, 480px wide, white bg)
Header: farmer photo placeholder + name + Agri-Trust Score arc (large, 80px) + "View on map" link
Tabs: Overview / Diagnosis History / Score Breakdown / Loan History
Overview tab shows:
  Field map (Leaflet.js embedded, small, showing registered field pin)
  Last 5 diagnoses as mini timeline
  Score trend line chart (last 90 days)
  Estimated creditworthiness text: "Based on 8 weeks of verified farm data, this farmer demonstrates above-average crop management. Recommended credit range: ₹30,000–₹60,000"
Score Breakdown tab: same 5-factor detailed breakdown as farmer sees, but with lender-specific context like "Location verification: 100% — all uploads within 47m of registered field. Low fraud risk."

LOAN APPLICATION PANEL:
After reviewing, lender clicks "Approve Loan"
Modal slides in (not popup — it slides from bottom, 320px height, overlay dims main content)
Fields: Loan Amount (₹), Purpose dropdown, Interest Rate, Duration
Farmer's score and name shown at top of modal as reminder
Approve button: #1A3A1A filled, "Farmer will be notified via SMS"
After approval: success card animates in the main dashboard: "Loan of ₹45,000 approved for Ramesh Kumar. SMS sent to +91-XXXXXX"

EXTRA PANEL — Outbreak Map:
Small card at bottom of lender dashboard
India map (SVG, state-level) with heat dots showing disease outbreak concentrations by region
"Powdery Mildew outbreak detected in 3 districts of Haryana — 8 registered farmers in affected zones"
This helps lenders understand macro risk context
Copy prompt 7
Bonus — Judge-winning micro-details to add to every screen
Add these micro-details across all screens to make the design feel alive, human, and thoughtfully built:

MOTION PRINCIPLES:
- Page transitions: fade + slide up (200ms, ease-out). Never a hard cut.
- Score number: always count-up animates when first rendered (requestAnimationFrame, 1.2s, ease-out-cubic)
- Cards entering viewport: stagger fade-in (each card 60ms apart, translateY from 12px to 0)
- Diagnosis scan line: a lime horizontal line sweeps top-to-bottom over uploaded image during AI processing
- Success events: a small burst of 4 leaf particles (CSS, not canvas) flies out from the score number when it increases
- Sidebar active item: background pill slides smoothly to new position (CSS transition on a shared background element)

HUMAN COPY PATTERNS (use throughout):
Instead of "Error: GPS unavailable" → "Step outside for a moment — we need a clear view of the sky"
Instead of "Upload successful" → "Got it! Analyzing your crop now..."
Instead of "Score updated" → "Your farm work just paid off — score improved"
Instead of "No data" → "Your crop journal is empty — start your first diagnosis"
Instead of "Loading..." → "Checking your fields..."
Dashboard greeting changes by time: morning = "Good morning", afternoon = "Good afternoon", evening = "How was the field today?"

CONTEXTUAL INTELLIGENCE TOUCHES:
- If farmer's location is Haryana in Kharif season: dashboard auto-shows "Wheat Watch" banner
- If score drops: yellow soft alert "Your score dipped. Here is why and how to recover" — never red, never alarming
- If farmer hasn't uploaded in 10 days: gentle nudge card "Your wheat hasn't been checked in 10 days. Disease can spread fast — upload a quick photo"
- If score crosses 700: confetti-style subtle animation + "You've unlocked lender visibility. You may now receive loan offers."

ACCESSIBILITY (never skip these):
- All color pairings must pass WCAG AA contrast
- All interactive elements 44px min touch target
- Language toggle always visible in sidebar (not buried in settings)
- Hindi text never smaller than 14px (Devanagari script needs more space)
- Focus rings: 2px offset, harvest lime color
- Images always have alt text in Hindi

RESPONSIVE RULES:
Mobile (< 768px):
  — Sidebar collapses to bottom tab bar (5 icons)
  — Score card becomes full width, arc above stats
  — Diagnosis upload: camera button full width, prominent, sticky at bottom
  — Lender dashboard not available on mobile (redirect to "Use desktop for lender tools")
Tablet (768–1024px):
  — Sidebar stays, main content single column
  — Cards become 2-column grid

TRUST SIGNALS TO PLACE THROUGHOUT:
- "Data encrypted end-to-end" small badge in footer of every page
- "GPS verified" chip on every diagnosis card
- "DPDP Act Compliant" badge in settings and lender portal
- Farmer count: "14,283 farmers building their score" — social proof in landing page
- Lender logos row: "Accepted by" — 4-5 placeholder bank logos in grayscale