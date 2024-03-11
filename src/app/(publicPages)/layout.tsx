import TopNav from "@/app/ui/toplevelComponents/TopNav"
import Footer from "@/app/ui/toplevelComponents/Footer"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* topnav */}
      <TopNav />
 
        <div className=" mt-20">{children}</div>

      {/* footer */}
      <Footer />
    </section>
  )
}