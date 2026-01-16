import "./style"
import Header from "@/component/Header"
import TabSelector from "@/component/TabSelector"

function Popup() {
  return (
    <div className="w-[420px] h-56 flex flex-col">
      <Header />
      <TabSelector />
    </div>
  )
}

export default Popup
