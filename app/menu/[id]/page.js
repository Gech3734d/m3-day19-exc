import { notFound } from "next/navigation";
import { dishes, getDishById } from "@/lib/dishes";
export function generateStaticParams() { return dishes.map((dish) => ({ id: dish.id })); }
export async function generateMetadata({ params }) {
  const { id } = await params; const dish = getDishById(id);
  if (!dish) return { title: "Dish not found", description: "This dish could not be found in the Addis Eats menu." };
  const title = `${dish.name} — ${dish.price} Birr`; const description = `${dish.summary} Price: ${dish.price} Birr.`; const image = `/menu/${dish.id}/opengraph-image`;
  return { title, description, openGraph: { type: "article", title: `${dish.name} | Addis Eats`, description, images: [{ url: image, width: 1200, height: 630, alt: `${dish.name} from Addis Eats` }] }, twitter: { card: "summary_large_image", title: `${dish.name} | Addis Eats`, description, images: [image] } };
}
export default async function DishPage({ params }) {
  const { id } = await params; const dish = getDishById(id); if (!dish) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "MenuItem", name: dish.name, description: dish.summary, offers: { "@type": "Offer", price: String(dish.price), priceCurrency: "ETB", availability: "https://schema.org/InStock" } };
  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLdString}}/><p className="eyebrow">{dish.category}</p><h1>{dish.name}</h1><p className="lead">{dish.summary}</p><div className="detail-art" style={{background:dish.color}} aria-hidden="true">{dish.emoji}</div><p>{dish.description}</p><p className="price">Price: {dish.price} Birr</p><p><a className="button" href="/menu">Back to menu</a></p></main>;
}
