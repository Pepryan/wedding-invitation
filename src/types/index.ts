export interface SocialMediaLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface EventDetails {
  date: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
  dresscode?: string;
}

export interface BankAccount {
  name: string;
  accountNumber: string;
  accountHolder: string;
}

export interface EWallet {
  name: string;
  number: string;
  logo: string;
} 