import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReportFormModal } from "@/components/report-form-modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
      <ReportFormModal />
    </div>
  );
}
