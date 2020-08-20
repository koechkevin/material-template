export interface Props {
  title: string;
  summary: any;
  open: boolean;
  onOpenChange: (val: boolean) => void;
  icon?: any;
}
