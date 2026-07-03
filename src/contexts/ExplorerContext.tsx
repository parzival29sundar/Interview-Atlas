import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ExplorerContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ExplorerContext = createContext<ExplorerContextType | undefined>(
  undefined
);

export function ExplorerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <ExplorerContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ExplorerContext.Provider>
  );
}

export function useExplorer() {
  const context = useContext(ExplorerContext);

  if (!context) {
    throw new Error(
      "useExplorer must be used inside ExplorerProvider"
    );
  }

  return context;
}