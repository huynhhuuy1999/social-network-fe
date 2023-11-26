import { ISidebar } from "@/models/components";

export const SideBar: React.FC<ISidebar> = ({ children, className, width }) => {
  return (
    <div
      style={{ width: width }}
      className={`fixed z-10 h-[calc(100vh-56px)] w-[23%] overflow-auto bg-dark-second px-1 ${className} sm:hidden`}
    >
      {children}
    </div>
  );
};
