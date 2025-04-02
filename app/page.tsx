import StatusBar from "./components/groupplan/StatusBar";
import Header from "./components/groupplan/Header";
import ProfileCard from "./components/groupplan/ProfileCard";

export default function Home() {
  return (
    <div className="absolute top-[266px] left-[100px] w-[375px] h-[812px]">
      <StatusBar />
      <Header title="Group Plan"/>
      <ProfileCard />
    </div>
  );
}
