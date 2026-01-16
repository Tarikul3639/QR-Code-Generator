import { motion } from "framer-motion"
import { CaseSensitive, Link2, Wifi } from "lucide-react"
import { useState } from "react"

const CONTENT_STYLES =
  "flex flex-col items-center justify-center gap-0.5 px-5 py-3 cursor-pointer hover:bg-[#29A38F]/10 dark:hover:bg-[#121417]/10 rounded-2xl transition-colors"
const SELECTED_TAB = "bg-[#29A38F]/20 dark:bg-[#121417]/20"
const TEXT = "text-[10px] font-semibold"
const SIZE = 18

type ITab = "Text" | "URL" | "WiFi"

const TabSelector: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<ITab>("Text")
  return (
    <div className="flex items-center justify-around bg-gray-200 rounded-2xl m-2 p-1">
      {/* Text */}
      <motion.div
        key={"Text"}
        className={`${CONTENT_STYLES} ${selectedTab === "Text" ? SELECTED_TAB : ""}`}
        onClick={() => setSelectedTab("Text")}>
        <CaseSensitive size={SIZE} />
        <span className={TEXT}>Text</span>
      </motion.div>
      {/* URL */}
      <motion.div
        key={"URL"}
        className={`${CONTENT_STYLES} ${selectedTab === "URL" ? SELECTED_TAB : ""}`}
        onClick={() => setSelectedTab("URL")}>
        <Link2 size={SIZE} />
        <span className={TEXT}>URL</span>
      </motion.div>
      {/* WiFi */}
      <motion.div
        key={"WiFi"}
        className={`${CONTENT_STYLES} ${selectedTab === "WiFi" ? SELECTED_TAB : ""}`}
        onClick={() => setSelectedTab("WiFi")}>
        <Wifi size={SIZE} />
        <span className={TEXT}>WiFi</span>
      </motion.div>
    </div>
  )
}

export default TabSelector
