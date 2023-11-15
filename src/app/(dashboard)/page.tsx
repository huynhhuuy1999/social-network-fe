import { SIDEBAR_HOME } from "@/constants";
import { Sidebar } from "./components";
import { CardItemSidebar } from "./components/CardItemSidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar>
        <div>
          {SIDEBAR_HOME.map((value, key) => {
            return (
              <CardItemSidebar
                bgPosition={value.bgPosition}
                bgSize={value.bgSize}
                name={value.name}
                key={key}
              />
            );
          })}
        </div>
      </Sidebar>
    </div>
  );
};

export default Home;
