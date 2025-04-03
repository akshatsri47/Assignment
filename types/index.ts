


export interface AdminCardProps {
    id: string;
    name: string;
    image: string;
    access: "Full Access" | "Partial Access" | string;
    onMoreClick: (id: string) => void;
  }
  export  interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
  }
   export interface TextAreaProps {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
  }
 
  export interface Admin {
    id: number;
    name: string;
    image: string;
    access: "Full Access" | "Partial Access" | string;
  }
  export interface AdminSettingsModalProps {
    admin: Admin;
    onClose: () => void;
  }
  
  
  export interface PermissionToggleProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }
  
  
  export interface AccessLevelDropdownProps {
    selected: string;
    onSelect: (level: string) => void;
  }
  
  
  export interface ActionButtonsProps {
    onRemoveUser: () => void;
    onUpdateAccess: () => void;
  }
  
