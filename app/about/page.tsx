import React from "react";
import { Navigation } from "../components/nav";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center">
                        Qui suis-je ?
                    </h2>
                    <p className="mt-4 text-zinc-400 text-justify">Passionné par l'informatique et la programmation en général, j’ai découvert le développement web en filière STI2D option SIN. Après plusieurs expériences (Fabrik Ton Parcours, Garantie Jeune, E2C), j’ai suivi une formation Développeur Web et Web Mobile chez Web Force 3 (Titre Pro BAC+2) puis une formation Concepteur Développeur d’Applications. Ces parcours m’ont permis d’acquérir des compétences techniques et des certifications en développement web, mobile et desktop. Je suis également depuis bientôt 10 ans musicien en fanfare, batterie-fanfare, harmonie et dans plusieurs projets musicaux en tout genre (rock, metal, électro, etc...).
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800"/>

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-zinc-100 text-center">Expériences</h3>
                        <ul className="list-disc pl-5 text-zinc-400">
                            <li>2024 : Stage Concepteur Développeur d’Applications (CIAD LAB UBFC Dijon) - Stagiaire en Développement Informatique</li>
                            <li>2023 : Vendanges (Domaine R. JEANNIARD) - Coupeur</li>
                            <li>2022 : Vendanges (Loic HAYME Prestations Viticoles) - Porteur</li>
                            <li>2021 : ID’EES 21 (Centre de tri Dijon-Nord Valmy) - Agent de valorisation</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-zinc-100 text-center">Formations</h3>
                        <ul className="list-disc pl-5 text-zinc-400">
                            <li>2023-2024 : Formation Concepteur Développeur d’Applications (GRETA 21 site Le Castel)</li>
                            <li>2022-2023 : Formation Développeur Web et Web Mobile (Web Force 3)</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-zinc-100 text-center">Compétences</h3>
                        <ul className="list-disc pl-5 text-zinc-400">
                            <li>Bureautique</li>
                            <li>HTML, CSS, JavaScript, PHP, SQL, Java, Python, Twig, Dart</li>
                            <li>Frameworks : Angular, React, Next.js, Expo, Symfony, Laravel, Flutter, FastAPI, Django, Flask</li>
                            <li>Arduino (C, C++)</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-zinc-100 text-center">Langues</h3>
                        <ul className="list-disc pl-5 text-zinc-400">
                            <li>Français</li>
                            <li>Anglais</li>
                            <li>Espagnol</li>
                            <li>Quelques notions d'Allemand et de Japonais</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-zinc-100 text-center">Contact</h3>
                        <p className="text-zinc-400 text-justify">
                            Vous pouvez me joindre par email à{" "}
                            <a
                                href="mailto:david.dharma815@outlook.fr"
                                className="text-blue-400 underline"
                            >
                                david.dharma815@outlook.fr
                            </a>{" "}
                            ou via mes réseaux sociaux. <Link href="/contact" className="underline duration-500 hover:text-zinc-300">En savoir plus</Link>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-zinc-100 text-center">Loisirs</h3>
                        <ul className="list-disc pl-5 text-zinc-400">
                            <li>Musique</li>
                            <li>Aéronautique et Aérospatial</li>
                            <li>Informatique et Programmation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
