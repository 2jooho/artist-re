export interface MenuVisibilityProps {
    hidden: boolean;
  }
  
  export interface ButtonProps extends MenuVisibilityProps {
    src: string;
    mode: 'menu' | 'top' | 'Low';
  }
  
  export interface UserState {
    userId: string | null;
  }