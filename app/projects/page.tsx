import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";
import { UrlObject } from "url";

const GITLAB_API_URL = "https://gitlab.com/api/v4";
const GITLAB_TOKEN = process.env.GITLAB_TOKEN; // Ajoutez votre token GitLab ici ou dans un fichier .env

export const revalidate = 60;

async function fetchGitLabProjects() {
    const response = await fetch(`${GITLAB_API_URL}/projects?membership=true`, {
        headers: {
            Authorization: `Bearer ${GITLAB_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch GitLab projects");
    }

    const projects = await response.json();
    return projects.map((project: { id: any; path_with_namespace: any; name: any; description: any; created_at: any; star_count: any; web_url: any; }) => ({
        id: project.id,
        slug: project.path_with_namespace,
        title: project.name,
        description: project.description,
        date: project.created_at,
        views: project.star_count || 0, // Utilisez les étoiles comme indicateur de popularité
        url: project.web_url,
    }));
}

export default async function ProjectsPage() {
    const projects = await fetchGitLabProjects();

    const featured = projects[0];
    const topProjects = projects.slice(1, 3);
    const sorted = projects.slice(3);

    return (
        <div className="relative pb-16">
            <Navigation/>
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Mes Projets GitLab
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Découvrez mes projets hébergés sur GitLab. Certains de ces projets
                        sont issus de mes expériences professionnelles ou personnelles.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800"/>

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link href={featured.url}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-100">
                                        <time dateTime={new Date(featured.date).toISOString()}>
                                            {Intl.DateTimeFormat(undefined, {
                                                dateStyle: "medium",
                                            }).format(new Date(featured.date))}
                                        </time>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4"/>{" "}
                                        {Intl.NumberFormat("en-US", {notation: "compact"}).format(
                                            featured.views
                                        )}
                  </span>
                                </div>

                                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    {featured.title}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                                        Lire plus <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div
                        className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        {topProjects.map((project) => (
                            <Card key={project.slug}>
                                <Link href={project.url}>
                                    <article className="p-4 md:p-8">
                                        <h3 className="text-xl font-bold text-zinc-100">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-zinc-400">{project.description}</p>
                                    </article>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800"/>

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    {sorted.map((project: { slug: React.Key | null | undefined; url: string | UrlObject; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                        <Card key={project.slug}>
                            <Link href={project.url}>
                                <article className="p-4">
                                    <h3 className="text-lg font-bold text-zinc-100">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-zinc-400">{project.description}</p>
                                </article>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
