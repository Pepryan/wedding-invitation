export interface WeddingConfig {
  couple: {
    bride: {
      name: string;
      fullName: string;
      photo: string;
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
      photo: string;
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
      qrCode?: string;
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
      name: "Nama Lengkap Pengantin Wanita",
      fullName: "R",
      parents: "Putri dari Bpk ... dan Ibu ...",
      photo: "wedding-invitation/images/couple/bride.jpg",
      about: "Deskripsi singkat tentang mempelai wanita",
      socialMedia: {
        instagram: "@username",
        facebook: "url",
        twitter: "url"
      }
    },
    groom: {
      name: "Nama Lengkap Pengantin Pria",
      fullName: "R",
      parents: "Putra dari Bpk ... dan Ibu ...",
      photo: "wedding-invitation/images/couple/groom.jpg",
      about: "Deskripsi singkat tentang mempelai pria",
      socialMedia: {
        instagram: "@username",
        facebook: "url",
        twitter: "url"
      }
    },
    firstMeet: "Cerita singkat pertama bertemu",
    loveStory: [
      {
        date: "01 January 2022",
        title: "Pertama Bertemu",
        description: "Cerita detail",
        image: "wedding-invitation/images/story/first-meet.jpg"
      },
      // ... more story timeline
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
      {
        name: "BCA",
        accountNumber: "1234567890",
        accountHolder: "NAMA PEMILIK"
      },
      {
        name: "Mandiri",
        accountNumber: "0987654321",
        accountHolder: "NAMA PEMILIK"
      }
    ],
    eWallets: [
      {
        name: "GoPay",
        number: "081234567890",
        qrCode: "wedding-invitation/images/qr/gopay.jpg"
      },
      {
        name: "DANA",
        number: "081234567890",
        qrCode: "wedding-invitation/images/qr/dana.png"
      }
    ]
  },
  gallery: {
    prewedding: [
      {
        url: '/wedding-invitation/images/gallery/pre1.jpg',
        caption: 'Pre Wedding 1'
      },
      // ...
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
          image: "/images/registry/amazon.png",
          link: "https://amazon.com/registry/..."
        },
        {
          title: "Target Registry",
          description: "Shop our registry at Target",
          image: "/images/registry/target.png",
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