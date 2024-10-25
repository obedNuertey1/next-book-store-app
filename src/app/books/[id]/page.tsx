"use client";
import BooksDetails from "@/app/components/Book/BookDetails";

export default function BooksDetailsPage({params}: {params: {id: string}}) {
  return <BooksDetails params={params} />;
}