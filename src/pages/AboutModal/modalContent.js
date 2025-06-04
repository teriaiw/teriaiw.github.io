import NUS from '../Images/NUS.JPG';
import Aura from '../Images/Aura.HEIC'
import Cookies from '../Images/Cookies.JPG';
import Crystals from '../Images/Crystals.JPEG'

import { avatars } from '../../config/avatarConfig';

export const MODAL_CONTENT = {
  Graduate: {
    avatar: avatars.find((a) => a.id === "Graduate").image,
    title: 'Graduate_Teri',
    description: 'In 2022, I graduated from National University of Singapore with a Bachelor\'s degree in Computer Science, and Minor in Interactive Media Developement. In 2018, I graduated from Nanyang Polytechnic with a Diploma in Hospitality & Tourism and managed to get 3rd in the cohort.',
    image: NUS,
  },
  Worker: {
    avatar: avatars.find((a) => a.id === "Worker").image,
    title: 'Worker_Teri',
    description: 'As a Frontend Developer, my interests lie heavily in UI/UX. I enjoy noticing the beautiful designs and smooth user experience on any app or webpage I visit. Having worked as a Tester for the last 2 years, I\'m confident in following Accessibility guidelines and fishing for bugs.',
    image: null,
  },
  PetOwner: {
    avatar: avatars.find((a) => a.id === "PetOwner").image,
    title: 'PetOwner_Teri',
    description: 'I have an adorable Golden Retriever named Aura. I took her home when she was just 2 months old and she\'s almost 4 years old now. She\'s my biggest joy in life and I love her to bits.',
    image: Aura,
  },
  Baker: {
    avatar: avatars.find((a) => a.id === "Baker").image,
    title: 'Baker_Teri',
    description: 'I enjoy baking. I bake cookies the most, but I can also make cupcakes, PUPcakes, and cakes!',
    image: Cookies,
  },
  Crystal: {
    avatar: avatars.find((a) => a.id === "Crystal").image,
    title: 'Collector_Teri',
    description: "One of my hobbies is collecting Crystals. I was really amazed at how nature could create such magical minerals. One of my favourite crystals are Labradorites! It's really cool how they can reflect so many colors. I have an Instagram page documenting my collection @krztera. I used to sell some but it's closed for now.",
    image: Crystals,
  },
};
