import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KnowledgePage from "@/components/guide/KnowledgePage";
import { getKnowledge, getAllKnowledgeSlugs } from "@/data/knowledge-registry";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllKnowledgeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getKnowledge(slug);
  if (!page) return { title: "Knowledge Not Found | Travelvus" };
  const url = `https://www.travelvus.com/knowledge/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: "article", siteName: "Travelvus" },
    twitter: { card: "summary", title: page.title, description: page.description },
  };
}

export default async function KnowledgeRoute({ params }: Props) {
  const { slug } = await params;
  const page = getKnowledge(slug);
  if (!page) notFound();
  return <KnowledgePage page={page} />;
}
