import { motion } from "framer-motion"
import { Link2, LucideIcon, Type, Wifi } from "lucide-react"
import { useState } from "react"

type ITab = "Text" | "URL" | "WiFi"

interface TabConfig {
  id: ITab
  label: string
  Icon: LucideIcon
}

const TABS: TabConfig[] = [
  { id: "Text", label: "Text", Icon: Type },
  { id: "URL", label: "URL", Icon: Link2 },
  { id: "WiFi", label: "WiFi", Icon: Wifi }
]

const TabSelector: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<ITab>("Text")

  return (
    <div className="w-full flex flex-col items-center px-4">
      <div className="flex w-full items-center justify-center rounded-[32px] bg-[#EBECEF] p-1 mt-2 dark:bg-zinc-900">
        {TABS.map((tab) => {
          const isActive = selectedTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className="relative flex flex-1 flex-col items-center justify-center py-1 focus:outline-none transition-colors duration-300">
              {/* Active Background Pill - Image er moto ektu gap rakhar jonno inset use kora hoyeche */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-[16px] bg-white shadow-sm dark:bg-zinc-800"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}

              {/* Content Container */}
              <div
                className={`relative z-10 flex flex-col items-center gap-1 ${
                  isActive
                    ? "text-[#22C55E]" // Image er bright green
                    : "text-[#717680] dark:text-zinc-500"
                }`}>
                <tab.Icon
                  size={18}
                  strokeWidth={isActive ? 3 : 2}
                  className="transition-all duration-300"
                />
                <span className="text-[10px] font-semibold tracking-tight">
                  {tab.label}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TabSelector
