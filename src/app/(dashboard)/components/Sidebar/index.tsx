import { ISidebar } from "@/models/components";

export const Sidebar: React.FC<ISidebar> = ({ children }) => {
  return (
    <div className="h-[100vh] w-[23%] border-r border-r-[#393a3b] bg-dark-primary">
      {children}
    </div>
  );
};
