import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janamdin ki Shubhkamnayein — Krishna Reveal" },
      { name: "description", content: "A personal Krishna-themed birthday wish for Pooja." },
      { property: "og:title", content: "Janamdin ki Shubhkamnayein — Krishna Reveal" },
      { property: "og:description", content: "A personal Krishna-themed birthday wish for Pooja." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/birthday.html"
      title="Birthday experience"
      allow="autoplay"
      className="fixed inset-0 h-dvh w-full border-0"
    />
  );
}
