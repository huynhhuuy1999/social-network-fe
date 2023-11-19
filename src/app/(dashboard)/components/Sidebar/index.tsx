import { ISidebar } from "@/models/components";

export const SideBar: React.FC<ISidebar> = ({ children, className, width }) => {
  return (
    <div
      style={{ width: width }}
      className={`h-[calc(100vh-56px)] w-[23%] overflow-auto bg-dark-second px-1 ${className}`}
    >
      {children}
    </div>
  );
};
