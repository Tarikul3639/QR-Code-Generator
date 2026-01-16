import { QrCode } from "lucide-react"

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 shadow-md bg-[#29A38F]/2 dark:bg-[#121417]/2 backdrop-blur-sm border-b border-[#29A38F]/10 dark:border-[#121417]/10">
      <div className="flex items-center gap-2 font-bold">
        <QrCode className="text-[#29A38F] text-[24px]" />
        <h2 className="text-[#121417] dark:text-white text-sm font-bold leading-tight tracking-tight">
          QR Generator
        </h2>
      </div>
    </header>
  )
}
export default Header
