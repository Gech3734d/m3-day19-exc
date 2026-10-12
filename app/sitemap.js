import { dishes } from "@/lib/dishes";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default function sitemap() {
  const staticRoutes = [{url:siteUrl,changeFrequency:"weekly",priority:1},{url:`${siteUrl}/menu`,changeFrequency:"weekly",priority:0.9}];
  const dishRoutes = dishes.map((dish)=>({url:`${siteUrl}/menu/${dish.id}`,changeFrequency:"monthly",priority:0.7}));
  // Transactional routes /cart and /checkout are intentionally excluded.
  return [...staticRoutes,...dishRoutes].map((route)=>({...route,lastModified:new Date()}));
}
