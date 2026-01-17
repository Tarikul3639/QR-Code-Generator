import "./style"

import { Buttons } from "@/component/Buttons"
import { GenerateButton } from "@/component/GenerateButton"
import Header from "@/component/Header"
import { InputText } from "@/component/InputText"
import { InputURL } from "@/component/InputURL"
import { InputWiFi } from "@/component/InputWIFI"
import { QRPreview } from "@/component/QRPreview"
import TabSelector from "@/component/TabSelector"
import { IInput, ITab } from "@/types"
import * as QRCode from "qrcode"
import { useState } from "react"

function Popup() {
  const [tab, setTab] = useState<ITab>("Text")
  const [loading, setLoading] = useState(false)
  const [inputData, setInputData] = useState<IInput>({
    type: "Text",
    data: { text: "" }
  })
  // const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const buildQRValue = () => {
    if (tab === "Text") return inputData.data.text
    if (tab === "URL") return inputData.data.url

    if (tab === "WiFi") {
      const { ssid, password, security } = inputData.data
      return `WIFI:T:${security};S:${ssid};P:${password};;`
    }

    return ""
  }

  const handleGenerate = async () => {
    const value = buildQRValue()
    if (!value?.trim()) return

    setResult(null) // 👈 clear previous QR

    try {
      setLoading(true)
      const qr = await QRCode.toDataURL(value, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      })
      setResult(qr)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-[420px] flex flex-col gap-3 p-4 pb-10 bg-[#F9FAFB] dark:bg-zinc-950">
      <Header />
      <TabSelector tab={tab} setTab={setTab} />
      {tab === "Text" && (
        <InputText inputData={inputData} setInputData={setInputData} />
      )}
      {tab === "URL" && (
        <InputURL inputData={inputData} setInputData={setInputData} />
      )}
      {tab === "WiFi" && (
        <InputWiFi inputData={inputData} setInputData={setInputData} />
      )}
      <GenerateButton handleGenerate={handleGenerate} isLoading={loading} />
      <QRPreview result={result} />
      <Buttons result={result} />
    </div>
  )
}

export default Popup
