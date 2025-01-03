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
        frame?: {
          "1:1": string;
          portrait: string;
        };
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
        aspectRatio: "portrait",
        frame: {
          "1:1": "wedding-invitation/images/couple/frame-photo-1.webp",
          portrait: "wedding-invitation/images/couple/frame-photo-2.webp"
        }
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
        aspectRatio: "1:1",
        frame: {
          "1:1": "wedding-invitation/images/couple/frame-photo-1.webp",
          portrait: "wedding-invitation/images/couple/frame-photo-2.webp"
        }
      },
      parents: "Putra dari Bpk ... dan Ibu ...",
      about: "Deskripsi singkat tentang mempelai pria",
      socialMedia: {
        instagram: "https://instagram.com/nayrbef",
        facebook: undefined,
        twitter: undefined
      }
    },
    firstMeet: "Dengan izin Allah, perjalanan kami dimulai. 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya' (QS. Ar-Rum: 21)",
    loveStory: [
      {
        date: "Januari 2022",
        title: "Pertemuan Pertama",
        description: "Atas kehendak Allah, kami dipertemukan dalam majelis ilmu. 'Sesungguhnya Allah menciptakan jodoh-jodoh di antara kalian' (HR. Muslim). Kami bersyukur atas pertemuan ini.",
        image: "wedding-invitation/images/story/first-meet.webp"
      },
      {
        date: "Maret 2022",
        title: "Ta'aruf",
        description: "Kami memulai proses ta'aruf dengan niat yang tulus. 'Wanita itu dinikahi karena empat hal: karena hartanya, keturunannya, kecantikannya, dan agamanya. Maka pilihlah yang memiliki agama, niscaya kamu akan beruntung' (HR. Bukhari).",
        image: "wedding-invitation/images/gallery/prewedding-1.webp"
      },
      {
        date: "Juni 2022",
        title: "Khitbah",
        description: "Dengan restu orang tua, kami memantapkan niat untuk membangun rumah tangga yang sakinah, mawaddah, wa rahmah. 'Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan juga orang-orang yang layak dari hamba-hamba sahayamu yang lelaki dan perempuan' (QS. An-Nur: 32).",
        image: "wedding-invitation/images/gallery/prewedding-2.webp"
      },
      {
        date: "Desember 2022",
        title: "Ramadhan Pertama Bersama",
        description: "Bersama menjalani ibadah Ramadhan, saling mengingatkan dalam kebaikan. 'Sebaik-baik kamu adalah yang paling baik terhadap istrinya' (HR. Tirmidzi).",
        image: "wedding-invitation/images/gallery/moment-3.webp"
      },
      {
        date: "Juni 2023",
        title: "Lamaran",
        description: "Dengan doa dan restu keluarga, kami melangkah ke tahap lamaran. 'Barangsiapa yang menikah, maka ia telah menyempurnakan separuh agamanya' (HR. Baihaqi).",
        image: "wedding-invitation/images/gallery/prewedding-3.webp"
      },
      {
        date: "Masa Depan",
        title: "Perjalanan Suci",
        description: "Kami berdoa agar Allah SWT memberkahi pernikahan kami. 'Ya Allah, berkahilah kami dalam pasangan kami dan berkahilah pasangan kami untuk kami' (HR. Abu Dawud).",
        image: "wedding-invitation/images/gallery/moment-1.webp"
      }
    ]
  },
  event: {
    akad: {
      date: "2026-01-01",
      time: "08:00",
      venue: "Nama Tempat",
      address: "Alamat Lengkap",
      mapLink: "Google Maps Link",
      dresscode: "Putih / Broken White",
      additional_info: "Info tambahan tentang acara akad"
    },
    reception: {
      date: "2026-01-01",
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