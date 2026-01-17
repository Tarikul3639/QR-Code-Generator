export type ITab = "Text" | "URL" | "WiFi"

export interface IInput{
    type: ITab
    data: {
        text?: string
        url?: string
        ssid?: string
        password?: string
        security?: "WPA" | "WEP" | "None"| string
    }
}