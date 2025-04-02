import Header from "../components/groupplan/Header";
import StatusBar from "../components/groupplan/StatusBar";

export default function setting(){
    return(
        <div>
          <StatusBar />
          <Header title="Group"  />
          <div className="w-[375px] h-[385px] top-[92px] gap-2 flex flex-col ">
            <h1>Permissions</h1>
          </div>
        </div>
    )
}