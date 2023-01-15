import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, mohaveFont }: { children: React.ReactNode, mohaveFont: string }) {
  return (
    <>
      <div className="mb-11">
        <Header mohaveFont={mohaveFont} />
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
