"use client"
import dynamic from 'next/dynamic';

const ClientRenderedComponent = dynamic(() => import('../../components/GalleryPage'), { ssr: false });

const Home = () => (
    <div>

        <main>
            <ClientRenderedComponent />
        </main>
    </div>
);

export default Home;

