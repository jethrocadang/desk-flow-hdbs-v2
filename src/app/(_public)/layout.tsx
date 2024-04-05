import TopNav from "@/components/utils-ui/TopNav"
import Footer from "@/components/utils-ui/Footer"

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