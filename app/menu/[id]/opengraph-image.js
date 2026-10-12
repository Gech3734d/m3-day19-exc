import { ImageResponse } from "next/og";
import { getDishById } from "@/lib/dishes";
export const runtime = "edge";
export const alt = "Addis Eats dish preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage({ params }) {
  const { id } = await params; const dish = getDishById(id);
  const name = dish?.name || "Addis Eats"; const summary = dish?.summary || "Discover delicious food at Addis Eats."; const price = dish ? `${dish.price} Birr` : "Fresh favorites"; const color = dish?.color || "#71371d"; const emoji = dish?.emoji || "🍽️";
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"72px",color:"white",background:`linear-gradient(135deg, ${color}, #27140d)`,fontFamily:"Arial"}}><div style={{fontSize:100,marginBottom:18}}>{emoji}</div><div style={{fontSize:30,opacity:0.85}}>ADDIS EATS · MENU</div><div style={{fontSize:76,fontWeight:800,marginTop:16}}>{name}</div><div style={{fontSize:30,marginTop:20,maxWidth:950}}>{summary}</div><div style={{fontSize:36,fontWeight:700,marginTop:26}}>{price}</div></div>, { ...size });
}
