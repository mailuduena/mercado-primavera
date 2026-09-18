export type PageId = 'inicio' | 'quienes-somos' | 'como-trabajamos' | 'productos' | 'contacto';

export interface NavItem {
  id: PageId;
  label: string;
  badge?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  tag: string;
  accentColor: string;
  itemsPreview: string[];
}
