import React from 'react';

interface GeneralContextType {
  categoryFilter: string;
  setCategoryFilter: (categoryFilter: string) => void;
}

export const GeneralContext = React.createContext<GeneralContextType>({
  categoryFilter: 'Tümü',
  setCategoryFilter: categoryFilter => {},
});
