import { useContext, createContext } from 'react';
import { AirDesignSystemTokens } from 'design-system-tokens';

export const TokenContext = createContext<AirDesignSystemTokens | undefined>(undefined);
export const TokenProvider = TokenContext.Provider;
export const TokenConsumer = TokenContext.Consumer;
export const useTokens = () => useContext(TokenContext);
