
export interface ServiceItem {
  id: string;
  title: string;
  link: string;
  description?: string;
}

export interface CustomerStory {
  id: string;
  image: string;
  title: string;
  tags: string[];
  date: string;
}

export interface BlogArticle {
  id: string;
  image: string;
  title: string;
  tags: string[];
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
