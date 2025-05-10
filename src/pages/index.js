import Navbar from '../components/Navbar';
import data from '../data/data';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      >
        <div className="bg-opacity-60 border-[1.5px] border-white text-white p-10 rounded text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{data.name}</h1>
          <p className="text-xl mt-2">{data.title}</p>
        </div>
      </section>

      {/* Featured Projects */}
  

{/* Featured Projects (Full-width banners) */}
<section className="bg-white flex flex-col items-center pt-16 mb-20 gap-10">
  {data.featuredProjects.map((project, index) => (
    <Link key={index} href={`/projects/${project.slug}`}>
      <div
        className="relative h-[70vh] w-[70vw] bg-cover bg-center flex items-center justify-center cursor-pointer"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 hover:bg-zinc-800 transition"></div>
        <h2 className="relative text-white text-3xl md:text-5xl font-serif z-10 text-center">
          {project.title}
        </h2>
      </div>
    </Link>
  ))}
</section>

<Footer />

    </div>
  );
}
