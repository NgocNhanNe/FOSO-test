import { BlogCard, CategoryStyle } from './types';

// export const categoriesWithCount = [
//   {
//     category: 'Thiết Kế Website',
//     count: 20
//   },
//   {
//     category: 'Thiết Kế App Mobile',
//     count: 10
//   },
//   {
//     category: 'Quản Lý Sản Xuất',
//     count: 23
//   },
//   {
//     category: 'Quản Lý Bán Hàng',
//     count: 18
//   },
//   {
//     category: 'Báo Chí Nói Về FOSO',
//     count: 5
//   },
//   {
//     category: 'Tin Tức FOSO',
//     count: 13
//   }
// ];

export const categoryStyles: Record<string, CategoryStyle> = {
  'Thiết Kế Website': { color: '#0F4F9E', backgroundColor: '#E2F0FE' },
  'Thiết Kế App Mobile': { color: '#0F4F9E', backgroundColor: '#28a745' },
  'Quản Lý Sản Xuất': { color: '#0F4F9E', backgroundColor: '#dc3545' },
  'Quản Lý Bán Hàng': { color: '#0F4F9E', backgroundColor: '#ffc107' },
  'Báo Chí Nói Về FOSO': { color: '#0F4F9E', backgroundColor: '#6c757d' },
  'Tin Tức FOSO': { color: '#0F4F9E', backgroundColor: '#17a2b8' }
};

export const blogCards: BlogCard[] = [
  {
    image: 'https://robohash.org/0.1797670428676863',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'et sit aliqua adipiscing aliqua',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.1624847328066883',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'dolore adipiscing do magna dolor et eiusmod aliqua',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.30948656177737743',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'aliqua magna do magna Lorem',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.9675590877811582',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'aliqua sit dolor consectetur dolore magna eiusmod',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 5
  },
  {
    image: 'https://robohash.org/0.6503071839852432',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'Lorem aliqua Lorem sed dolor dolore ut',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.08774224722168977',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'aliqua Lorem dolore magna do Lorem',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.9458275038584263',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'consectetur ut elit adipiscing sed do',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.010045839963669367',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'consectetur sed magna adipiscing labore',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.7894100928823773',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'et ut consectetur ut elit magna tempor incididunt do',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.21501032376300366',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'eiusmod eiusmod sed sit do incididunt amet amet',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.5481224376416083',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'eiusmod elit eiusmod sed et labore dolore elit incididunt',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.4592860710945774',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'amet ipsum consectetur amet magna dolore sit',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.9072188032656985',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'consectetur ipsum sed dolore amet',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.3431241359946873',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'ipsum consectetur magna amet magna',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.6779167181176913',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'tempor Lorem et eiusmod aliqua do aliqua',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.21078523029057683',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'sit elit magna do magna amet',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.9124064681753974',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'amet do elit incididunt eiusmod incididunt',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.297279276135346',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'sed dolor sit magna labore ipsum incididunt dolore amet',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.7845992198624396',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'consectetur eiusmod dolore dolor sit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.24243223440330297',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'magna et eiusmod sit sed Lorem incididunt tempor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.20189106900367904',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'aliqua dolore adipiscing consectetur magna ipsum sit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.29478542571685384',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'adipiscing dolore amet incididunt tempor tempor amet',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    image: 'https://robohash.org/0.9644106305218847',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'labore adipiscing Lorem elit dolor aliqua incididunt',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.38643680035483263',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'incididunt incididunt Lorem do sed incididunt eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.8023122415500366',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'aliqua do eiusmod adipiscing eiusmod Lorem Lorem aliqua',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.10188683451482428',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'consectetur elit et sed ipsum do magna ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 5
  },
  {
    image: 'https://robohash.org/0.24281487237143273',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'elit labore do dolor et ipsum aliqua incididunt',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.27297397734229856',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'elit Lorem Lorem dolore ipsum labore ipsum ut tempor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.18794007164001525',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'incididunt elit do amet et',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.19805623232386083',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#28a745'
      }
    },
    title: 'et ipsum dolor amet sit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.06039967296820081',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'et eiusmod sed et ipsum amet',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.05252927671773566',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'sit eiusmod dolore elit eiusmod elit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.07672567511686079',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'sed dolor elit elit consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.2115522343661851',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'dolor sit labore dolor ipsum dolore dolor elit consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    image: 'https://robohash.org/0.42559233520737094',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'elit ipsum aliqua Lorem adipiscing',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.1801711906885326',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'labore dolore consectetur aliqua labore',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.10567345527108007',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'sit et sit Lorem dolore sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.5155523447717256',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'adipiscing elit amet incididunt Lorem eiusmod aliqua dolore et',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.14822771550037772',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'eiusmod eiusmod Lorem dolore magna eiusmod incididunt tempor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.49764453814418164',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'aliqua eiusmod aliqua elit adipiscing labore labore sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.3597842184711839',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'dolor magna elit aliqua tempor aliqua eiusmod consectetur incididunt',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.09788096079641395',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'consectetur dolor consectetur labore ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.44153165431027097',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'aliqua incididunt aliqua dolor eiusmod sed consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.6519032858562492',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'aliqua dolore Lorem incididunt consectetur do adipiscing dolore',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.22981947087678822',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'eiusmod aliqua et incididunt incididunt dolore consectetur dolor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.8829632395190874',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'incididunt adipiscing aliqua aliqua eiusmod dolor eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.30111406685196074',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'ut et sed eiusmod sed consectetur magna',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.7994506295164134',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'amet sit aliqua sed sit ut aliqua et',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.6256481066627984',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'ipsum labore elit ipsum elit sed incididunt aliqua aliqua',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.8555152698079784',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'labore incididunt consectetur incididunt elit tempor sit magna',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.9267057846953741',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'aliqua Lorem dolor amet aliqua dolor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.04773378115404525',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'consectetur et sit eiusmod dolore tempor ipsum labore ipsum',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.2754354096750753',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#dc3545'
      }
    },
    title: 'labore tempor do elit tempor ut sit dolore eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    image: 'https://robohash.org/0.7473403538280445',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'ut ut do ut incididunt amet sit tempor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.45967017162377766',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'sit incididunt elit labore Lorem ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.29010336968221884',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'dolor elit dolore Lorem eiusmod consectetur aliqua elit et',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    image: 'https://robohash.org/0.5967538648940138',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'incididunt Lorem incididunt Lorem tempor consectetur incididunt aliqua',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.9978241932259126',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'magna amet adipiscing eiusmod amet do ut consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.3648252611163174',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'dolor aliqua dolore ipsum dolor et et do adipiscing',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.8486985051690747',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'aliqua consectetur Lorem ut et labore et',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.8260945228494436',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'do elit dolor do magna',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.5682131871987393',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'ipsum ut dolor do elit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    image: 'https://robohash.org/0.6751420153078509',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'consectetur sit labore dolore consectetur eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.48355916371717433',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'adipiscing consectetur eiusmod tempor ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.9267494574452253',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'eiusmod et amet do eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.07172046560863365',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'consectetur dolor dolor adipiscing et ut consectetur et do',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.05243741622864073',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'labore Lorem incididunt ut amet dolore',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.2735863623970156',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'adipiscing ut adipiscing ipsum ipsum',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.21272761281807728',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'Lorem labore Lorem elit ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.05841769473725966',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'Lorem sed dolor sit tempor tempor eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.16136717847014692',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#ffc107'
      }
    },
    title: 'consectetur elit aliqua elit sit dolor ipsum incididunt',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.7193162694188069',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#6c757d'
      }
    },
    title: 'ut adipiscing dolor dolor consectetur sed magna dolor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.29177694482168826',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#6c757d'
      }
    },
    title: 'ut amet do aliqua consectetur magna sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.21962550618588894',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#6c757d'
      }
    },
    title: 'magna ut eiusmod Lorem incididunt incididunt dolore Lorem',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.6792525045729707',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#6c757d'
      }
    },
    title: 'do Lorem tempor ipsum sed dolore ut ut magna',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    image: 'https://robohash.org/0.922878906444901',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#6c757d'
      }
    },
    title: 'aliqua ipsum adipiscing ipsum ipsum sed ipsum sit adipiscing',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.7942490886411921',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'ipsum ut labore ipsum sed labore sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    image: 'https://robohash.org/0.5922338687566702',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'sed aliqua sit aliqua elit consectetur ipsum consectetur do',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    image: 'https://robohash.org/0.015536982803960209',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'labore eiusmod dolore ipsum incididunt sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.5080096034657995',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'tempor tempor dolore labore eiusmod labore',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 5
  },
  {
    image: 'https://robohash.org/0.12269396956579603',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'dolor et consectetur aliqua et aliqua elit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    image: 'https://robohash.org/0.6987933777276067',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'dolore ipsum elit adipiscing et aliqua consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.6696965012283809',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'sed eiusmod eiusmod sit adipiscing magna sed consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  },
  {
    image: 'https://robohash.org/0.7221888335838504',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'dolore eiusmod et dolore incididunt sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    image: 'https://robohash.org/0.4284307596448269',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'Lorem et do elit do et tempor labore do',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.05579471929074886',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'ut magna sed incididunt dolore sed incididunt Lorem ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    image: 'https://robohash.org/0.8401360436349972',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'ut sit incididunt sit elit tempor tempor magna dolor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    image: 'https://robohash.org/0.8838275376295694',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'tempor elit eiusmod consectetur et tempor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    image: 'https://robohash.org/0.9401640669964455',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#17a2b8'
      }
    },
    title: 'eiusmod ipsum Lorem magna ipsum labore ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  }
];
