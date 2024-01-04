import Image from 'next/image'
import Gallery from "@/components/GalleryPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Weeelb Gallery Test Account one</h1>
          <Gallery/>
      </div>
    </main>
  )
}
