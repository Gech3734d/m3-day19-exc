import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Addis Eats restaurant and menu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() { return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"80px",color:"white",background:"linear-gradient(135deg, #71371d, #24130c)",fontFamily:"Arial"}}><div style={{fontSize:34,letterSpacing:8}}>WELCOME TO</div><div style={{fontSize:100,fontWeight:800,marginTop:18}}>Addis Eats</div><div style={{fontSize:36,marginTop:24}}>Ethiopian favorites and more.</div><div style={{fontSize:68,marginTop:28}}>🍲 🍕 🍔</div></div>, { ...size }); }
