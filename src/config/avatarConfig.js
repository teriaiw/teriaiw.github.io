import Default from '../pages/AvatarImages/Default.png';
import Graduate from '../pages/AvatarImages/Graduate.png';
import Worker from '../pages/AvatarImages/Worker.png';
import PetOwner from '../pages/AvatarImages/PetOwner.png';
import Baker from '../pages/AvatarImages/Baker.png';
import Crystal from '../pages/AvatarImages/Crystal.png';

import Graduate1 from '../pages/AvatarImages/Graduate1.png';
import Graduate2 from '../pages/AvatarImages/Graduate2.png';
import Graduate3 from '../pages/AvatarImages/Graduate3.png';

import Worker1 from '../pages/AvatarImages/Worker1.png';
import Worker2 from '../pages/AvatarImages/Worker2.png';
import Worker3 from '../pages/AvatarImages/Worker3.png';

import Pet1 from '../pages/AvatarImages/Pet1.png';
import Pet2 from '../pages/AvatarImages/Pet2.png';
import Pet3 from '../pages/AvatarImages/Pet3.png';

import Baker1 from '../pages/AvatarImages/Baker1.png';
import Baker2 from '../pages/AvatarImages/Baker2.png';
import Baker3 from '../pages/AvatarImages/Baker3.png';

import Crystal1 from '../pages/AvatarImages/Crystal1.png';
import Crystal2 from '../pages/AvatarImages/Crystal2.png';
import Crystal3 from '../pages/AvatarImages/Crystal3.png';

export const avatars = [
  {
    id: 'Default',
    image: Default,
  },
  {
    id: 'Graduate',
    image: Graduate,
    variations: {
      low: Graduate1,
      med: Graduate2,
      high: Graduate3
    }
  },
  {
    id: 'Worker',
    image: Worker,
    variations: {
      low: Worker1,
      med: Worker2,
      high: Worker3
    }
  },
  {
    id: 'PetOwner',
    image: PetOwner,
    variations: {
      low: Pet1,
      med: Pet2,
      high: Pet3
    }
  },
  {
    id: 'Baker',
    image: Baker,
    variations: {
      low: Baker1,
      med: Baker2,
      high: Baker3
    }
  },
  {
    id: 'Crystal',
    image: Crystal,
    variations: {
      low: Crystal1,
      med: Crystal2,
      high: Crystal3
    }
  }
];
