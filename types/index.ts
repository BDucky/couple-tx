import { ReactNode } from "react";

export interface HomeButtonProps {
  title: string;
  className?: string;
}
export interface LayoutCardProps {
  children: ReactNode;
}

export interface CategoryBannerProps {
  img: string;
  category: string;
  descriptions: string;
}

export interface BlogListProps {
  img: string;
  title: string;
}

export interface CheckOutProps {
  img: string;
  category: string;
  descriptions: string;
}

export interface CartProps {
  img: string;
  title: string;
  price: number;
  color: string;
  gender: string;
  size: string;
}