import NUS from '../Images/NUS.JPG';
import Aura from '../Images/Aura.HEIC'
import Cookies from '../Images/Cookies.JPG';
import Crystals from '../Images/Crystals.JPEG'

import { avatars } from '../../config/avatarConfig';

export const MODAL_CONTENT = {
  Graduate: {
    avatar: avatars.find((a) => a.id === "Graduate").image,
    title: 'Graduate_Teri',
    description: 'In 2022, I graduated from National University of Singapore with a Bachelor\'s degree in Computer Science, and Minor in Interactive Media Developement. Prior to this, I had graduated 3rd from Nanyang Polytechnic with a Diploma in Hospitality & Tourism. Why? Well, we can have a chat about that.',
    image: NUS,
  },
  Worker: {
    avatar: avatars.find((a) => a.id === "Worker").image,
    title: 'Developer_Teri',
    description: 'I started as a Frontend Developer, but I guess I\'m full stack now after my first job. My interests still lie heavily in UI/UX. I enjoy noticing the beautiful designs and smooth user experience on any app or webpage I visit. I also really love to fish for bugs (not on my own code tho).',
    image: null,
  },
  PetOwner: {
    avatar: avatars.find((a) => a.id === "PetOwner").image,
    title: 'PetOwner_Teri',
    description: 'I have an adorable Golden Retriever named Aura. I took her home when she was just 2 months old and she\'s almost 5 years old now. She\'s my biggest joy in life and I love her to bits.',
    image: Aura,
  },
  Baker: {
    avatar: avatars.find((a) => a.id === "Baker").image,
    title: 'Baker_Teri',
    description: 'I enjoy baking ocassionally. I\'ve made Cookies, cupcakes, PUPcakes, and cakes! If I\'m feeling it, you might get a sweet treat from me. ',
    image: Cookies,
  },
  Crystal: {
    avatar: avatars.find((a) => a.id === "Crystal").image,
    title: 'Collector_Teri',
    description: "One of my hobbies is collecting crystals. I was really amazed at how nature could create such magical minerals. One of my favourite crystals is labradorite! It's really cool how they can reflect so many colors. Check out my collection @krztera on Instagram.",
    image: Crystals,
  },
};
