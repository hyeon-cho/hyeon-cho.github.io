// Publication data. Cards render from this list.
// author: { name, url?, first?(gradient bold = Hyunmin as first author),
//           me?(plain bold = Hyunmin as co-author), star?(equal contrib),
//           dagger?(corresponding) }
// summary: array of { t, b? } segments so bold is preserved without raw HTML.

const JIN = {
  name: 'Kyong Hwan Jin',
  url: 'https://scholar.google.com/citations?user=aLYNnyoAAAAJ&hl=en',
  dagger: true,
}

export const firstAuthorPubs = [
  {
    id: 'harmonic-siren',
    venue: 'ECCV 2026',
    location: 'Malmö, Sweden 🇸🇪',
    title:
      'Recurrent Sinusoidal INRs for Efficient High-Fidelity Representation: Harmonic-line Spectrum Perspective',
    url: 'https://hyeon-cho.github.io/Harmonic-line-Spectrum/',
    authors: [
      { name: 'Hyunmin Cho', first: true },
      { name: 'Jaejun Yoo', url: 'https://sites.google.com/view/jaejunyoo' },
      JIN,
    ],
    venueFull: '19th European Conference on Computer Vision',
    links: [
      { icon: '📄', label: 'Paper', url: 'https://ipa.korea.ac.kr', disabled: true, note: 'coming soon' },
      { icon: '↗', label: 'Website', url: 'https://hyeon-cho.github.io/Harmonic-line-Spectrum/' },
      { icon: '⌘', label: 'Code', url: 'https://github.com/hyeon-cho/Harmonic-Siren' },
    ],
    summary: [
      { t: 'Reusing one sinusoidal block recurrently expands spectral support without extra parameters: by ' },
      { t: 'Jacobi–Anger', b: true },
      { t: ', each sine step creates new frequency combinations.' },
    ],
  },
  {
    id: 'balancing',
    venue: 'ICML 2026',
    location: 'Seoul, South Korea 🇰🇷',
    title:
      'Balancing Fidelity and Diversity in Diffusion Models via Symmetric Attention Decomposition: Hopfield Perspective',
    url: 'https://hyeon-cho.github.io/Balancing/',
    authors: [
      { name: 'Hyunmin Cho', first: true },
      { name: 'Woo Kyoung Han' },
      JIN,
    ],
    venueFull: '43rd International Conference on Machine Learning',
    links: [
      { icon: '📄', label: 'Paper', url: 'https://arxiv.org/abs/2605.27476' },
      { icon: '↗', label: 'Website', url: 'https://hyeon-cho.github.io/Balancing/' },
      { icon: '⌘', label: 'Code', url: 'https://github.com/hyeon-cho/Attention-Symmetric-Decomposition' },
    ],
    summary: [
      { t: 'We characterize the pre-softmax attention matrix ' },
      { t: 'QK', b: true },
      {
        t: ' in transformers as an associative memory matrix encoding pairwise associations between input features.',
      },
    ],
  },
  {
    id: 'tag',
    venue: 'ICML 2026',
    location: 'Seoul, South Korea 🇰🇷',
    title: 'TAG: Tangential Amplifying Guidance for Hallucination-Resistant Sampling',
    url: 'https://hyeon-cho.github.io/TAG/',
    authors: [
      { name: 'Hyunmin Cho', first: true, star: true },
      { name: 'Donghoon Ahn', url: 'https://sunovivid.github.io/', star: true },
      { name: 'Susung Hong', url: 'https://susunghong.github.io/', star: true },
      { name: 'Jee Eun Kim' },
      { name: 'Seungryong Kim', url: 'https://cvlab.kaist.ac.kr/', dagger: true },
      JIN,
    ],
    note: '* Equal contribution',
    venueFull: '43rd International Conference on Machine Learning',
    links: [
      { icon: '📄', label: 'Paper', url: 'https://huggingface.co/papers/2510.04533' },
      { icon: '↗', label: 'Website', url: 'https://hyeon-cho.github.io/TAG/' },
      { icon: '⌘', label: 'Code', url: 'https://github.com/hyeon-cho/Tangential-Amplifying-Guidance' },
    ],
    summary: [
      { t: 'We introduce ' },
      { t: 'TAG', b: true },
      {
        t: ', a theoretically grounded, training-free, computationally lightweight, and architecture-agnostic guidance method that operates solely on trajectory signals without modifying the underlying diffusion model.',
      },
    ],
  },
  {
    id: 'irag',
    venue: 'ICCV 2025',
    location: 'Hawaii, USA 🇺🇸',
    title:
      'Reference-based Super-Resolution via Image-based Retrieval-Augmented Generation Diffusion',
    url: 'https://byeonghunlee12.github.io/iRAG_page/',
    authors: [
      { name: 'Byeonghun Lee', url: 'https://scholar.google.com/citations?user=0VhcJXwAAAAJ&hl=ko', star: true },
      { name: 'Hyunmin Cho', first: true, star: true },
      { name: 'Hong Gyu Choi' },
      { name: 'Soo Min Kang' },
      { name: 'Iljun Ahn' },
      JIN,
    ],
    note: '* Equal contribution',
    venueFull: '20th International Conference on Computer Vision',
    links: [
      {
        icon: '📄',
        label: 'Paper',
        url: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Lee_Reference-based_Super-Resolution_via_Image-based_Retrieval-Augmented_Generation_Diffusion_ICCV_2025_paper.pdf',
      },
      { icon: '↗', label: 'Website', url: 'https://byeonghunlee12.github.io/iRAG_page/' },
      { icon: '⌘', label: 'Code', url: 'https://github.com/ByeonghunLee12/iRAG' },
    ],
    summary: [
      { t: 'We propose an image-based RAG framework ' },
      { t: '(iRAG)', b: true },
      {
        t: ' for realistic super-resolution, using a trainable hashing function to retrieve either real-world or generated references from an LR query.',
      },
    ],
  },
]

export const coAuthoredPubs = [
  {
    id: 'real',
    venue: 'ECCV 2026',
    location: 'Malmö, Sweden 🇸🇪',
    title: 'ReAL: Reference-to-Image (R2I)-Aware Latent Diffusion for Image Super-Resolution',
    url: null,
    authors: [
      { name: 'Byeonghun Lee', url: 'https://scholar.google.com/citations?user=0VhcJXwAAAAJ&hl=ko' },
      { name: 'Hyunmin Cho', me: true },
      { name: 'Sunghoon Im', dagger: true },
      JIN,
    ],
    venueFull: '19th European Conference on Computer Vision',
    links: [{ icon: '↗', label: 'Project', disabled: true, note: 'coming soon' }],
    summary: [
      { t: 'ReAL grounds diffusion SR in retrieved visual references rather than text priors.', b: true },
      {
        t: ' It encodes a matched reference once and reuses its cached attention features throughout denoising, enabling reference-driven texture and structure recovery without CFG.',
      },
    ],
  },
  {
    id: 'lossless-inr',
    venue: 'CVPR 2025',
    location: 'Nashville, USA 🇺🇸',
    title: 'Towards Lossless Implicit Neural Representation via Bit Plane Decomposition',
    url: 'https://wookyounghan.github.io/LosslessINR/',
    authors: [
      { name: 'Woo Kyoung Han', url: 'https://scholar.google.com/citations?user=kieVQZwAAAAJ&hl=en' },
      { name: 'Byeonghun Lee', url: 'https://scholar.google.com/citations?user=0VhcJXwAAAAJ&hl=ko' },
      { name: 'Hyunmin Cho', me: true },
      { name: 'Sunghoon Im' },
      JIN,
    ],
    venueFull: '38th Conference on Computer Vision and Pattern Recognition',
    links: [{ icon: '↗', label: 'Project', url: 'https://wookyounghan.github.io/LosslessINR/' }],
    summary: [
      { t: 'We introduce a bit-plane decomposition that enables ' },
      { t: 'lossless implicit neural representations', b: true },
      { t: ', allowing exact reconstruction of digital signals with continuous networks.' },
    ],
  },
]
