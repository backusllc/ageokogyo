import { Sprinkles } from '../../styles/sprinkles.css';

export interface TwoDevidedSectionSettings {
  contentType: 'twoDevided';
  props: TwoDevidedSectionProps;
}

export interface TwoDevidedSectionProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

export const defaultTwoDevidedSectionProps: TwoDevidedSectionProps = {
  imageUrl: "https://magic-pod.com/acms-media/001/202107/02_ja__.png",
  alt: "説明です",
  title: "AIがスクリプト作成を手助け",
  description: "AIエンジンが、アプリケーションの画面から項目を自動検出。あとは項目を選んでいくだけで、読みやすい日本語のスクリプトが作成できます。",
};
