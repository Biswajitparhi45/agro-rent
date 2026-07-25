import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/site-layout";
import { CategoryOrbits } from "@/components/site/category-orbits";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Equipment Categories | AgriRent" },
      {
        name: "description",
        content:
          "Explore tractors, harvesters, seeders, rotavators, cultivators, sprayers and mini tools available for rent.",
      },
      { property: "og:title", content: "Equipment Categories | AgriRent" },
      {
        property: "og:description",
        content: "Seven machine families, hundreds of verified listings.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="Categories"
        title="Seven families of farm machinery"
        subtitle="Pick a category to see live listings, daily rates and owner availability near your fields."
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <CategoryOrbits />
      </div>
    </SiteLayout>
  ),
});
