import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/layout/BottomNav";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Landmark, QrCodeIcon, ReceiptText } from "lucide-react";
import qrImage from "@/assets/QR-Code.jpg";

// Dummy Data for Transaction History (Amount removed from display as requested)
const transactions = [
  { id: 1, date: "1/1/2025", item: "Sika Cement" },
  { id: 2, date: "3/1/2025", item: "Sika Caulk (Black)" },
  { id: 3, date: "31/1/2025", item: "Sika Cement Premium" },
  { id: 4, date: "6/2/2025", item: "Sika Cement + Sika Caulk" },
  { id: 5, date: "21/2/2025", item: "Sika Latex Power" },
  { id: 6, date: "3/3/2025", item: "SikaCim & Sika Supercool" },
  { id: 7, date: "23/3/2025", item: "Sika Repair Combo" },
  { id: 8, date: "7/4/2025", item: "Sika TopSeal" },
  { id: 9, date: "19/4/2025", item: "Sika Latex Sbr" },
];

export function HomeScreen() {
  // State to toggle between 'qr' and 'history'
  const [activeTab, setActiveTab] = useState<"qr" | "history">("qr");

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-white pb-32">

      {/* Wallet Card */}
      <Card
        className="w-11/12 mt-10 rounded-2xl bg-[#fff8f2] border-2 border-[#ccc7bd]"
      >
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold" style={{ color: "#342e28" }}>
              Your Wallet
            </CardTitle>
            {/* Made text thinner (font-normal) and smaller (text-xl) */}
            <p className="text-xl font-normal mt-2 flex items-center gap-1" style={{ color: "#342e28" }}>
              ₹ 2000
            </p>
          </div>

          {/* Bank Icon - Kept dark so it is visible against the #ebc467 background */}
          <div className="flex items-center justify-center">
            <Landmark size={60} style={{ color: "#ebc467" }} />
          </div>
        </CardHeader>
      </Card>

      {/* Scan Button */}
      {/* Width fits text (w-auto), increased vertical gap (mt-10) */}
      <Button
        className="w-auto px-8 mt-10 flex items-center gap-3 py-6 rounded-xl text-lg shadow-none"
        style={{ backgroundColor: "#ffd57d", color: "#342e28" }}
      >
        <QrCode className="w-5 h-5" />
        Scan Product Code
      </Button>

      {/* Toggle Buttons Row */}
      {/* Increased vertical gap (mt-10) */}
      <div className="w-11/12 mt-10 flex flex-row items-center justify-center gap-2">

        {/* My QR Button */}
        <Button
          onClick={() => setActiveTab("qr")}
          className="px-6 py-6 rounded-xl font-medium transition-colors duration-200"
          style={{
            backgroundColor: activeTab === "qr" ? "#ffd57d" : "#f3dcb8",
            color: "#342e28"
          }}
        >
          <QrCodeIcon className="w-5 h-5 mr-2" />
          My QR
        </Button>

        {/* Transaction History Button */}
        <Button
          onClick={() => setActiveTab("history")}
          className="px-6 py-6 rounded-xl font-medium transition-colors duration-200"
          style={{
            backgroundColor: activeTab === "history" ? "#ffd57d" : "#f3dcb8",
            color: "#342e28"
          }}
        >
          <ReceiptText className="w-5 h-5 mr-2" />
          Transaction History
        </Button>
      </div>

      {/* CONDITIONAL RENDER: Content Area */}
      {/* Increased vertical gap (mt-10) */}
      <div className="w-11/12 mt-10 flex flex-col items-center">
        {activeTab === "qr" ? (
          // === View 1: QR Code Image ===
          <img
            src={qrImage}
            alt="QR Code"
            className="w-full h-auto rounded-lg object-contain"
          />
        ) : (
          // === View 2: Transaction History Table ===
          <div className="flex flex-col w-full shadow-sm">
            {transactions.map((t, index) => (
              <div
                key={t.id}
                className={`
                  flex flex-col justify-center w-full px-4 py-3 bg-[#fff8f2]
                  ${index !== transactions.length - 1 ? 'border-b-2 border-[#bd8865]' : ''}
                `}
              >
                <div className="flex justify-between items-start">
                  <p className="text-xs text-[#5c5246] font-medium uppercase tracking-wide">
                    {t.date}
                  </p>
                  {/* Amount removed as requested */}
                </div>

                {/* Thinner and smaller text */}
                <p className="text-sm font-normal text-[#342e28] mt-1">
                  {t.item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Nav fixed to bottom */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNav />
      </div>
    </div>
  );
}
