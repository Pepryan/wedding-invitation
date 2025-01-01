export interface WeddingConfig {
  couple: {
    bride: {
      name: string;
      fullName: string;
      photo: {
        url: string;
        aspectRatio: "1:1" | "portrait";
      };
      parents: string;
      about: string;
      socialMedia: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
      };
    };
    groom: {
      name: string;
      fullName: string;
      photo: {
        url: string;
        aspectRatio: "1:1" | "portrait";
      };
      parents: string;
      about: string;
      socialMedia: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
      };
    };
    firstMeet: string;
    loveStory: Array<{
      date: string;
      title: string;
      description: string;
      image: string;
    }>;
  };
  event: {
    akad: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };
    reception: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };
  };
  gallery: {
    prewedding: Array<{
      url: string;
      caption: string;
    }>;
    engagement: Array<{
      url: string;
      caption: string;
    }>;
  };
  digitalEnvelope: {
    banks: Array<{
      name: string;
      accountNumber: string;
      accountHolder: string;
    }>;
    eWallets: Array<{
      name: string;
      number: string;
      logo: string;
    }>;
  };
  rsvp: {
    whatsappNumber: string;
    formFields: Array<{
      name: string;
      label: string;
      type: string;
      options?: string[];
    }>;
  };
  specialFeatures: {
    countdownTimer: boolean;
    photoBoothFrame: boolean;
    virtualGuestBook: boolean;
    giftRegistry: {
      enabled: boolean;
      items: Array<{
        title: string;
        description?: string;
        image: string;
        link?: string;
      }>;
    };
    liveStreaming: {
      enabled: boolean;
      platform: string;
      link: string;
    };
  };
}


export const themes = {
  sage: {
    primary: "#B2BEB5",
    secondary: "#E8EDE6",
    accent: "#9CAF88",
    text: "#454B1B"
  },
  dustyBlue: {
    primary: "#4F6F8F",
    secondary: "#E5EDF5",
    accent: "#8FA5BC",
    text: "#2C3E50"
  },
  softBrown: {
    primary: "#B49F89",
    secondary: "#F5E6D3",
    accent: "#DEC4A7",
    text: "#5E4B3B"
  },
  roseDust: {
    primary: "#C5AFA0",
    secondary: "#F2E9E4",
    accent: "#E6D1C5",
    text: "#8C7267"
  },
  oliveGreen: {
    primary: "#A3B18A",
    secondary: "#E9EDe4",
    accent: "#CAD2C5",
    text: "#52573D"
  }
};

export const weddingConfig = {
  couple: {
    bride: {
      name: "Mempelai Wanita",
      fullName: "R",
      photo: {
        url: "wedding-invitation/images/couple/bride.webp",
        aspectRatio: "1:1"
      },
      parents: "Putri dari Bpk ... dan Ibu ...",
      about: "Deskripsi singkat tentang mempelai wanita",
      socialMedia: {
        instagram: "https://instagram.com/",
        facebook: undefined,
        twitter: undefined
      }
    },
    groom: {
      name: "Mempelai Pria",
      fullName: "FR",
      photo: {
        url: "wedding-invitation/images/couple/groom.webp",
        aspectRatio: "1:1"
      },
      parents: "Putra dari Bpk ... dan Ibu ...",
      about: "Deskripsi singkat tentang mempelai pria",
      socialMedia: {
        instagram: "https://instagram.com/nayrbef",
        facebook: undefined,
        twitter: undefined
      }
    },
    firstMeet: "Our paths crossed unexpectedly, and little did we know it was the start of something beautiful",
    loveStory: [
      {
        date: "January 2022",
        title: "The First Encounter",
        description: "We met at a mutual friend's gathering. Our eyes locked across the room, and we spent the whole night talking and laughing like we've known each other forever.",
        image: "wedding-invitation/images/story/first-meet.webp"
      },
      {
        date: "March 2022",
        title: "First Date",
        description: "Our first official date at a cozy coffee shop. We discovered our shared love for art and music, and the hours flew by as we shared our dreams and aspirations.",
        image: "wedding-invitation/images/gallery/prewedding-1.webp"
      },
      {
        date: "June 2022",
        title: "Becoming Official",
        description: "After months of getting to know each other, we made it official. It was a simple moment, but one we'll cherish forever.",
        image: "wedding-invitation/images/gallery/prewedding-2.webp"
      },
      {
        date: "December 2022",
        title: "First Eid al-Fitr Together",
        description: "Celebrating our first Eid al-Fitr as a couple, sharing the joy of the holy month and strengthening our bond through faith.",
        image: "wedding-invitation/images/gallery/moment-3.webp"
      },
      {
        date: "June 2023",
        title: "The Proposal",
        description: "On a beautiful beach at sunset, surrounded by our closest friends and family, we promised to spend our lives together.",
        image: "wedding-invitation/images/gallery/prewedding-3.webp"
      },
      {
        date: "The Future",
        title: "Our Journey Continues",
        description: "We look forward to building a life full of love, laughter, and adventure together. This is just the beginning of our forever.",
        image: "wedding-invitation/images/gallery/moment-1.webp"
      }
    ]
  },
  event: {
    akad: {
      date: "2300-06-01",
      time: "08:00",
      venue: "Nama Tempat",
      address: "Alamat Lengkap",
      mapLink: "Google Maps Link",
      dresscode: "Putih / Broken White",
      additional_info: "Info tambahan tentang acara akad"
    },
    reception: {
      date: "2300-06-01",
      time: "11:00",
      venue: "Nama Tempat",
      address: "Alamat Lengkap",
      mapLink: "Google Maps Link",
      dresscode: "Sage Green / Earthy Colors",
      additional_info: "Info tambahan tentang acara resepsi"
    }
  },
  digitalEnvelope: {
    banks: [
      // {
      //   name: "BCA",
      //   accountNumber: "1234567890",
      //   accountHolder: "NAMA PEMILIK"
      // },
      // {
      //   name: "Mandiri",
      //   accountNumber: "0987654321",
      //   accountHolder: "NAMA PEMILIK"
      // },
      {
        name: "BNI",
        accountNumber: "1234567890",
        accountHolder: "NAMA PEMILIK"
      },
      // {
      //   name: "BSI",
      //   accountNumber: "1234567890",
      //   accountHolder: "NAMA PEMILIK"
      // },
      {
        name: "Bank Jago Syariah",
        accountNumber: "1234567890",
        accountHolder: "NAMA PEMILIK"
      }
    ],
    eWallets: [
      {
        name: "GoPay",
        number: "08888024148",
        logo: "wedding-invitation/images/logos/gopay.webp"
      },
      // {
      //   name: "OVO",
      //   number: "08888024148",
      //   logo: "wedding-invitation/images/logos/ovo.webp"
      // },
      {
        name: "ShopeePay",
        number: "08",
        logo: "wedding-invitation/images/logos/shopeepay.webp"
      }
    ]
  },
  gallery: {
    prewedding: [
      {
        url: '/images/gallery/prewedding-1.webp',
        caption: 'Our First Date - Where It All Began'
      },
      {
        url: '/images/gallery/prewedding-2.webp',
        caption: 'Beach Getaway - Our First Vacation'
      },
      {
        url: '/images/gallery/prewedding-3.webp',
        caption: 'Hiking Together - Overcoming Challenges'
      },
      {
        url: '/images/gallery/moment-1.webp',
        caption: 'First Concert - Sharing Our Love for Music'
      }
    ]
  },
  music: {
    tracks: [
      {
        src: '/wedding-invitation/music/song1.mp3',
        title: 'Lagu 1',
        artist: 'Artis 1'
      }
    ]
  },
  guestBook: {
    enabled: true,
    moderationEnabled: true
  },
  rsvp: {
    enabled: true,
    deadline: "2024-05-20",
    whatsappNumber: "081234567890",
    additionalFields: [
      {
        name: "jumlah_tamu",
        label: "Jumlah Tamu",
        type: "number"
      },
      {
        name: "kehadiran",
        label: "Konfirmasi Kehadiran",
        type: "select",
        options: ["Hadir", "Tidak Hadir", "Masih Ragu"]
      }
    ]
  },
  specialFeatures: {
    countdownTimer: true,
    photoBoothFrame: true,
    virtualGuestBook: true,
    giftRegistry: {
      enabled: false,
      items: [
        {
          title: "Amazon Registry",
          description: "Find our wishlist on Amazon",
          image: "/images/registry/amazon.webp",
          link: "https://amazon.com/registry/..."
        },
        {
          title: "Target Registry",
          description: "Shop our registry at Target",
          image: "/images/registry/target.webp",
          link: "https://target.com/registry/..."
        }
      ]
    },
    liveStreaming: {
      enabled: false,
      platform: "YouTube",
      link: "https://youtube.com/live/..."
    }
  }
}