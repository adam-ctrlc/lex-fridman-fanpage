import React from 'react';
import { MdPictureAsPdf, MdLink, MdFormatQuote } from 'react-icons/md';

export const papers = [
  {
    title: "Arguing Machines: Human Supervision of Black Box AI Systems That Make Life-Critical Decisions",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/1710.04459.pdf", icon: <MdPictureAsPdf /> },
      { label: "BibTeX", href: "#", icon: <MdFormatQuote /> },
      { label: "Scholar", href: "https://scholar.google.com/scholar?q=%22Arguing+Machines%3A+Human+Supervision+of+Black+Box+AI+Systems+That+Make+Life-Critical+Decisions%22", icon: <MdLink /> },
    ],
    summary: "Framework for providing human supervision of a black box AI system that makes life-critical decisions. We demonstrate this approach on two applications: (1) image classification and (2) real-world data of AI-assisted steering in Tesla vehicles."
  },
  {
    title: "MIT Advanced Vehicle Technology Study: Large-Scale Naturalistic Study of Human Interaction with Automation",
    links: [
      { label: "Website", href: "https://lexfridman.com/avt/", icon: <MdLink /> },
      { label: "Paper", href: "https://arxiv.org/pdf/1711.06976.pdf", icon: <MdPictureAsPdf /> },
      { label: "Scholar", href: "https://scholar.google.com/scholar?q=%22MIT+Advanced+Vehicle+Technology+Study%3A+Large-Scale+Naturalistic+Driving+Study+of+Driver+Behavior+and+Interaction+With+Automation%22", icon: <MdLink /> },
    ],
    summary: "Large-scale real-world AI-assisted driving data collection study to understand how human-AI interaction in driving can be safe and enjoyable. The emphasis is on computer vision based analysis of driver behavior in the context of automation use."
  },
  {
    title: "Cognitive Load Estimation in the Wild",
    links: [
      { label: "Paper", href: "https://www.researchgate.net/profile/Lex_Fridman/publication/324658835_Cognitive_Load_Estimation_in_the_Wild/links/5bf0ba3092851c6b27c74bd1/Cognitive-Load-Estimation-in-the-Wild.pdf", icon: <MdPictureAsPdf /> },
      { label: "Scholar", href: "https://scholar.google.com/scholar?q=%22Cognitive+Load+Estimation+in+the+Wild%22", icon: <MdLink /> },
    ],
    summary: "Winner of the CHI 2018 Honorable Mention Award. We propose two novel vision-based methods for cognitive load estimation and evaluate them on a large-scale dataset collected under real-world driving conditions."
  },
  {
    title: "DeepTraffic: Reinforcement Learning System for Multi-Agent Dense Traffic Navigation",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/1801.02805.pdf", icon: <MdPictureAsPdf /> },
      { label: "Scholar", href: "https://scholar.google.com/scholar?q=%22DeepTraffic%3A+Crowdsourced+Hyperparameter+Tuning+of+Deep+Reinforcement+Learning+Systems+for+Multi-Agent+Dense+Traffic+Navigation%22", icon: <MdLink /> },
    ],
    summary: "Traffic simulation and optimization with deep reinforcement learning. Primary goal is to make the hands-on study of deep RL accessible to thousands of students, educators, and researchers."
  },
  {
    title: "Driver Gaze Region Estimation without Use of Eye Movement",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/1507.04760.pdf", icon: <MdPictureAsPdf /> },
      { label: "Scholar", href: "https://scholar.google.com/scholar?q=%22Driver+Gaze+Region+Estimation+without+Use+of+Eye+Movement%22", icon: <MdLink /> },
    ],
    summary: "We propose a simplification of the general gaze estimation task by framing it as a gaze region estimation task in the driving context, thereby making it amenable to machine learning approaches. We go on to describe and evaluate one such learning-based approach."
  },
  // New papers from Scholar
  {
    title: "Active authentication on mobile devices via stylometry, application usage, web browsing, and GPS location",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Active+authentication+on+mobile+devices+via+stylometry%2C+application+usage%2C+web+browsing%2C+and+GPS+location", icon: <MdLink /> }
    ],
    summary: "L Fridman, S Weber, R Greenstadt, M Kam. IEEE Systems Journal 11 (2), 513-521, 2016."
  },
  {
    title: "Learning human identity from motion patterns",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Learning+human+identity+from+motion+patterns", icon: <MdLink /> }
    ],
    summary: "N Neverova, C Wolf, G Lacey, L Fridman, D Chandra, B Barbello, G Taylor. IEEE Access 4, 1810-1820, 2016."
  },
  {
    title: "To walk or not to walk: Crowdsourced assessment of external vehicle-to-pedestrian displays",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=To+walk+or+not+to+walk%3A+Crowdsourced+assessment+of+external+vehicle-to-pedestrian+displays", icon: <MdLink /> }
    ],
    summary: "L Fridman, B Mehler, L Xia, Y Yang, LY Facusse, B Reimer. arXiv preprint arXiv:1707.02698, 2017."
  },
  {
    title: "A machine learning approach for power allocation in HetNets considering QoS",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=A+machine+learning+approach+for+power+allocation+in+HetNets+considering+QoS", icon: <MdLink /> }
    ],
    summary: "R Amiri, H Mehrpouyan, L Fridman, RK Mallik, A Nallanathan, D Matolak. 2018 IEEE international conference on communications (ICC), 1-7, 2018."
  },
  {
    title: "Owl and Lizard: patterns of head pose and eye pose in driver gaze classification",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Owl+and+Lizard%3A+patterns+of+head+pose+and+eye+pose+in+driver+gaze+classification", icon: <MdLink /> }
    ],
    summary: "L Fridman, J Lee, B Reimer, T Victor. IET Computer Vision 10 (4), 308-314, 2016."
  },
  {
    title: "Human-centered autonomous vehicle systems: Principles of effective shared autonomy",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Human-centered+autonomous+vehicle+systems%3A+Principles+of+effective+shared+autonomy", icon: <MdLink /> }
    ],
    summary: "L Fridman. arXiv preprint arXiv:1810.01835, 2018."
  },
  {
    title: "Multi-modal decision fusion for continuous authentication",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Multi-modal+decision+fusion+for+continuous+authentication", icon: <MdLink /> }
    ],
    summary: "L Fridman, A Stolerman, S Acharya, P Brennan, P Juola, R Greenstadt, ... Computers & Electrical Engineering 41, 142-156, 2015."
  },
  {
    title: "Detecting road surface wetness from audio: A deep learning approach",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Detecting+road+surface+wetness+from+audio%3A+A+deep+learning+approach", icon: <MdLink /> }
    ],
    summary: "I Abdić, L Fridman, DE Brown, W Angell, B Reimer, E Marchi, B Schuller. 2016 23rd International Conference on Pattern Recognition (ICPR), 3458-3463, 2016."
  },
  {
    title: "What can be predicted from six seconds of driver glances?",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=What+can+be+predicted+from+six+seconds+of+driver+glances%3F", icon: <MdLink /> }
    ],
    summary: "L Fridman, H Toyoda, S Seaman, B Seppelt, L Angell, J Lee, B Mehler, ... Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems, 2017."
  },
  {
    title: "Automated synchronization of driving data using vibration and steering events",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Automated+synchronization+of+driving+data+using+vibration+and+steering+events", icon: <MdLink /> }
    ],
    summary: "L Fridman, DE Brown, W Angell, I Abdić, B Reimer, HY Noh. Pattern Recognition Letters 75, 9-15, 2016."
  },
  {
    title: "Driver frustration detection from audio and video in the wild",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Driver+frustration+detection+from+audio+and+video+in+the+wild", icon: <MdLink /> }
    ],
    summary: "I Abdic, L Fridman, D McDuff, E Marchi, B Reimer, B Schuller. Proceedings of the KI, 237, 2016."
  },
  {
    title: "Eye contact between pedestrians and drivers",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Eye+contact+between+pedestrians+and+drivers", icon: <MdLink /> }
    ],
    summary: "D AlAdawy, M Glazer, J Terwilliger, H Schmidt, J Domeyer, B Mehler, ... arXiv preprint arXiv:1904.04188, 2019."
  },
  {
    title: "Distinguishing patterns in drivers’ visual attention allocation using Hidden Markov Models",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Distinguishing+patterns+in+drivers%E2%80%99+visual+attention+allocation+using+Hidden+Markov+Models", icon: <MdLink /> }
    ],
    summary: "M Muñoz, B Reimer, J Lee, B Mehler, L Fridman. Transportation research part F: traffic psychology and behaviour 43, 90-103, 2016."
  },
  {
    title: "Behavioral impact of drivers' roles in automated driving",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Behavioral+impact+of+drivers%27+roles+in+automated+driving", icon: <MdLink /> }
    ],
    summary: "B Reimer, A Pettinato, L Fridman, J Lee, B Mehler, B Seppelt, J Park, ... Proceedings of the 8th international conference on automotive user interfaces, 2016."
  },
  {
    title: "Decision fusion for multimodal active authentication",
    links: [
       { label: "Scholar", href: "https://scholar.google.com/scholar?q=Decision+fusion+for+multimodal+active+authentication", icon: <MdLink /> }
    ],
    summary: "L Fridman, A Stolerman, S Acharya, P Brennan, P Juola, R Greenstadt, ... IT Professional 15 (4), 29-33, 2013."
  }
];
