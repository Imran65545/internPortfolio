import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "../../data/data";
import Loader from "../../components/Loader"; // 👈 import it
import Navbar from "@/components/Navbar";
import Image from "next/image"; // make sure it's imported

export default function ProjectPage({ project, nextProject, prevProject }) {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, [router.asPath]);

  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <div className="p-10 font-sans min-h-screen pt-28">
        <Navbar/>
      {!showContent ? (
        <Loader />
      ) : (
        <div className="transition-opacity duration-700 opacity-100">
          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
          <div className="flex flex-col lg:flex-row justify-baseline gap-10 items-start">
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 w-full max-w-4xl rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6">{project.description}</p>
          </div>

          <div className="mt-8 flex justify-between p-10  gap-4">
            {prevProject && (
              <Link href={`/projects/${prevProject.slug}`}>
                <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300 transition">
                  ← Previous: {prevProject.title}
                </button>
              </Link>
            )}
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`}>
                <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  Next: {nextProject.title} →
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.featuredProjects.map((proj) => ({
    params: { slug: proj.slug }, // slug must match what's in data.js exactly
  }));
  return {
    paths,
    fallback: false, // show 404 if slug not found
  };
}

export async function getStaticProps({ params }) {
  const projects = data.featuredProjects;
  const currentIndex = projects.findIndex((proj) => proj.slug === params.slug);

  const project = projects[currentIndex] || null;
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return {
    props: {
      project,
      nextProject,
      prevProject,
    },
  };
}
