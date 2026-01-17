import { IInput } from "@/types"
import { AlertCircle, IdCard, LockKeyhole, Shield } from "lucide-react"
import { useMemo } from "react"

interface InputWiFiProps {
  inputData: IInput
  setInputData: React.Dispatch<React.SetStateAction<IInput>>
}

export const InputWiFi: React.FC<InputWiFiProps> = ({
  inputData,
  setInputData
}) => {
  const ssid = inputData.data.ssid
  const password = inputData.data.password
  const security = inputData.data.security ?? "WPA"

  const isValidSSID = useMemo(() => {
    return ssid !== undefined && ssid.trim().length > 0
  }, [ssid])

  const isValidPassword = useMemo(() => {
    if (security === "nopass") return true
    return password !== undefined && password.trim().length >= 8
  }, [password, security])

  return (
    <div className="w-full flex flex-col gap-2 rounded-2xl bg-white dark:bg-zinc-900">
      {/* SSID */}
      <div className="relative flex flex-col gap-1">
        <input
          type="text"
          id="inputSSID"
          value={ssid}
          onChange={(e) => {
            setInputData({
              type: "WiFi",
              data: { ssid: e.target.value, password, security }
            })
          }}
          className={`w-full relative px-4 py-2.5 pl-12 text-[15px] border-[1.5px] rounded-2xl transition-all duration-300
            ${
              isValidSSID
                ? "border-[#38E079]/40 focus:ring-[#38E079]"
                : "border-red-400/60 focus:ring-red-400 pr-10"
            }
            focus:outline-none focus:ring-[1px]
            dark:bg-zinc-800 dark:border-zinc-600
          `}
          placeholder="WiFi SSID"
        />
        <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 dark:text-zinc-500">
          <IdCard size={20} />
        </span>
        {!isValidSSID && (
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-red-400">
            <AlertCircle size={18} />
          </span>
        )}
      </div>

      {!isValidSSID && (
        <p className="text-xs text-red-400 pl-2">Please enter a valid SSID</p>
      )}

      {/* Security */}
      <div className="relative flex flex-col gap-1">
        <select
          value={security}
          onChange={(e) =>
            setInputData({
              type: "WiFi",
              data: { ssid, password, security: e.target.value }
            })
          }
          className="w-full px-4 py-2.5 pl-12 text-[15px] border-[1.5px] border-[#38E079]/40 rounded-2xl
            focus:outline-none focus:ring-[1px] focus:ring-[#38E079]
            dark:bg-zinc-800 dark:border-zinc-600 transition-all duration-300">
          <option value="WPA">WPA / WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">Open (No Password)</option>
        </select>

        <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 dark:text-zinc-500">
          <Shield size={20} />
        </span>
      </div>

      {/* Password */}
      {security !== "nopass" && (
        <>
          <div className="relative flex flex-col gap-1">
            <input
              type="text"
              id="inputPassword"
              value={password}
              onChange={(e) => {
                setInputData({
                  type: "WiFi",
                  data: { ssid, password: e.target.value, security }
                })
              }}
              className={`w-full relative px-4 py-2.5 pl-12 text-[15px] border-[1.5px] rounded-2xl transition-all duration-300
                ${
                  isValidPassword
                    ? "border-[#38E079]/40 focus:ring-[#38E079]"
                    : "border-red-400/60 focus:ring-red-400 pr-10"
                }
                focus:outline-none focus:ring-[1px]
                dark:bg-zinc-800 dark:border-zinc-600
              `}
              placeholder="WiFi Password"
            />
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 dark:text-zinc-500">
              <LockKeyhole size={20} />
            </span>
            {!isValidPassword && (
              <span className="absolute top-1/2 right-4 -translate-y-1/2 text-red-400">
                <AlertCircle size={18} />
              </span>
            )}
          </div>

          {!isValidPassword && (
            <p className="text-xs text-red-400 pl-2">
              Password must be at least 8 characters
            </p>
          )}
        </>
      )}
    </div>
  )
}
