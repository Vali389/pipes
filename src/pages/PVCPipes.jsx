import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBackground from '../assets/product page background image.jpeg'
import redDrainageImage from '../assets/Screenshot 2026-01-31 191127.png'
import highPressureImage from '../assets/Screenshot 2026-01-31 191238.png'
import whitePipesImage from '../assets/Screenshot 2026-01-31 191427.png'
import conduitImage from '../assets/Screenshot 2026-01-31 191508.png'

const SectionHeading = ({ children, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
    >
        <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#40E0D0] font-opensans mb-4 leading-tight">{children}</h2>
        {subtitle && <div className="w-32 h-1.5 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] rounded-full"></div>}
    </motion.div>
)

const CheckList = ({ items, dark = false }) => (
    <ul className="space-y-4 mt-6">
        {items.map((item, idx) => (
            <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4"
            >
                <svg className={`w-6 h-6 ${dark ? 'text-[#7FFFD4]' : 'text-[#40E0D0]'} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={`${dark ? 'text-gray-300' : 'text-[#333333]'} leading-relaxed text-[17px] md:text-[18px] font-inter`}>{item}</span>
            </motion.li>
        ))}
    </ul>
)

export default function PVCPipes() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-white font-inter text-gray-800">

            {/* --- HERO SECTION: With Background Image --- */}
            <div className="relative h-[70vh] bg-gradient-to-br from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroBackground} className="w-full h-full object-cover" alt="PVC Piping Infrastructure" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-0"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-extrabold text-white font-opensans leading-tight mb-4 drop-shadow-xl">
                            PVC & SWR Pipe Systems
                        </h1>
                        <p className="text-[20px] md:text-[24px] text-white leading-relaxed max-w-2xl font-medium drop-shadow-lg mb-10" style={{ opacity: 1, color: '#ffffff' }}>
                            Comprehensive piping solutions for agriculture, plumbing, and infrastructure. Engineered for durability, safety, and long-term efficiency.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact" className="px-10 py-4 bg-[#F57C00] hover:bg-[#e67500] text-white font-bold rounded-lg transition-all uppercase tracking-wide text-[16px] shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                                Get Quote
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- INTRO SECTION --- */}
            <div className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
                <div className="container px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#40E0D0] mb-4 font-opensans leading-tight">
                            PVC & SWR Pipe Systems for Agriculture, Plumbing & Infrastructure
                        </h2>
                        <div className="w-40 h-2 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-10 rounded-full"></div>
                        <p className="font-inter text-[18px] md:text-[20px] text-[#333333]  leading-relaxed">
                            We offer a comprehensive range of PVC rigid pipes, PVC plumbing pipes, PVC braided hose pipes, SWR drainage systems, and PVC electrical conduit pipes, engineered for agriculture, water supply, plumbing, electrical, industrial, and infrastructure applications. Manufactured under strict quality control, these piping solutions deliver durability, safety, and long-term cost efficiency.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTION 1: PVC RIGID PIPES --- */}
            <div className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <SectionHeading subtitle>PVC Rigid Pipes for Agriculture & Water Supply</SectionHeading>
                            <p className="text-[18px] text-[#333333] mb-4 leading-relaxed font-inter">
                                PVC Rigid Pipes form the backbone of agricultural and water distribution infrastructure. Manufactured as per <strong className="text-[#40E0D0] font-semibold">IS 4985:2000</strong>, these pipes are designed for consistent performance in irrigation and potable water supply systems, where reliability directly impacts agricultural productivity and livelihoods.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-[#40E0D0] mb-4 uppercase text-[16px] tracking-wide font-opensans">Product Specifications</h4>
                                    <div className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl border-2 border-[#40E0D0]/30 overflow-hidden shadow-lg">
                                        <table className="w-full text-[15px] text-left">
                                            <tbody>
                                                <tr className="border-b border-gray-200 bg-gradient-to-r from-[#40E0D0]/10 to-[#7FFFD4]/10">
                                                    <th className="p-4 font-bold text-[#40E0D0] w-2/5 font-opensans">Size range</th>
                                                    <td className="p-4 text-[#333333] font-inter">63 mm to 200 mm</td>
                                                </tr>
                                                <tr className="border-b border-gray-200">
                                                    <th className="p-4 font-bold text-[#40E0D0] font-opensans">Pressure ratings</th>
                                                    <td className="p-4 text-[#333333] font-inter">2.5, 4 & 6 kgf/cm²</td>
                                                </tr>
                                                <tr className="border-b border-gray-200">
                                                    <th className="p-4 font-bold text-[#40E0D0] font-opensans">Standard length</th>
                                                    <td className="p-4 text-[#333333] font-inter">6 meters (with socket)</td>
                                                </tr>
                                                <tr className="border-b border-gray-200">
                                                    <th className="p-4 font-bold text-[#40E0D0] font-opensans">Color</th>
                                                    <td className="p-4 text-[#333333] font-inter">Light Grey</td>
                                                </tr>
                                                <tr>
                                                    <th className="p-4 font-bold text-[#40E0D0] font-opensans">Material</th>
                                                    <td className="p-4 text-[#333333] font-inter">Polyvinyl Chloride (PVC)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#40E0D0] mb-4 uppercase text-[16px] tracking-wide font-opensans">Key Benefits</h4>
                                    <CheckList items={[
                                        "Lightweight and easy to install",
                                        "Smooth bore for improved flow efficiency",
                                        "Corrosion, chemical & fire resistant",
                                        "Low maintenance and economical",
                                        "Long service life with excellent visual finish"
                                    ]} />
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#40E0D0] mb-4 uppercase text-[16px] tracking-wide font-opensans">Applications</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Drinking water supply systems", "Drip & lift irrigation", "Plumbing installations", "Telecommunication cable ducting", "Rainwater harvesting", "Tube-well casing", "Industrial ducting", "Sewage & drainage systems", "Chemical transportation"].map(tag => (
                                            <span key={tag} className="px-4 py-2 bg-gradient-to-r from-[#40E0D0]/10 to-[#7FFFD4]/10 text-[#40E0D0] text-[14px] font-semibold rounded-lg border border-[#40E0D0]/30">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 sticky top-24 self-start"
                        >
                            <div className="w-full">
                                <img src={highPressureImage} alt="PVC Rigid Pipes" className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-[#40E0D0]/30" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 2: PVC PLUMBING --- */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-1 sticky top-24 self-start"
                        >
                            <div className="w-full">
                                <img src={whitePipesImage} alt="PVC Plumbing Pipes" className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-[#7FFFD4]/30" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-2"
                        >
                            <SectionHeading subtitle>PVC Plumbing Pipes & Fittings</SectionHeading>
                            <p className="text-[18px] text-[#333333] mb-4 leading-relaxed font-inter">
                                PVC Plumbing Pipes are suitable for residential, commercial, and gardening applications, offering excellent compatibility with conventional plumbing systems.
                            </p>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-[#40E0D0] mb-4 text-[18px] uppercase tracking-wide font-opensans">Features</h4>
                                    <CheckList items={[
                                        "Available in light grey, blue & white",
                                        "Standard pipe length: 6 meters",
                                        "Jointing with solvent cement",
                                        "Threadable pipes compatible with GI fittings",
                                        "Manufactured as per Schedule 40 & Schedule 80"
                                    ]} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#40E0D0] mb-4 text-[18px] uppercase tracking-wide font-opensans">Applications</h4>
                                    <CheckList items={[
                                        "Internal & external plumbing",
                                        "Gardening & water distribution",
                                        "Residential & commercial piping"
                                    ]} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: BRAIDED HOSE --- */}
            <div className="py-16 container  px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center  mb-10"
                >
                    <SectionHeading>PVC Braided Hose Pipes</SectionHeading>
                    <p className="font-inter text-[18px] md:text-[20px] text-[#333333] mx-auto leading-relaxed">
                        PVC Braided Hose Pipes are manufactured using high-strength yarn braided between inner and outer PVC layers, ensuring superior pressure resistance and durability. Their transparent construction allows visual inspection of internal flow, enhancing safety and reliability.
                    </p>
                </motion.div>

                <div className="mb-4">
                    <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans text-center">Key Advantages</h4>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-4">
                        <CheckList items={[
                            "High working pressure resistance",
                            "Burst-resistant design",
                            "Transparent for flow monitoring"
                        ]} />
                        <CheckList items={[
                            "Resistant to chemicals, alkalis, mild acids & oils",
                            "Performs reliably in all climatic conditions"
                        ]} />
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans text-center">Application Variants</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Air / Pneumatic Pipes", desc: "Compressed air, gases & chemicals" },
                            { title: "Rock Drilling Pipes", desc: "Mining, marble & granite drilling" },
                            { title: "Car Wash Pipes", desc: "Service stations (30–40 kg/cm² working pressure)" },
                            { title: "Super Spray Pipes", desc: "Pesticides & insecticide spraying" },
                            { title: "Welding Pipes", desc: "Oxy-acetylene welding & cutting equipment" },
                            { title: "Garden / Water Pipes", desc: "Gardening, construction & irrigation" }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-6 bg-gradient-to-br from-white to-[#F8F9FA] border-2 border-[#40E0D0]/20 rounded-xl hover:border-[#40E0D0] hover:shadow-xl transition-all group"
                            >
                                <h3 className="text-[20px] font-bold text-[#40E0D0] mb-3 font-opensans group-hover:text-[#7FFFD4] transition-colors">{item.title}</h3>
                                <p className="text-[16px] text-[#333333] font-inter leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- SECTION 4: SWR & CONDUIT --- */}
            <div className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>SWR Pipes & Electrical Conduit Systems</SectionHeading>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* SWR */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-4">
                                <div className="w-16 h-1.5 bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] rounded-full mb-4"></div>
                                <h3 className="text-[32px] md:text-[36px] font-extrabold font-opensans text-[#40E0D0] mb-4 leading-tight">SWR Pipes & Drainage Systems</h3>
                            </div>
                            <p className="text-[18px] text-[#333333] mb-4 leading-relaxed font-inter">
                                SWR (Soil, Waste & Rainwater) Pipes are engineered for leak-proof, hygienic, and efficient drainage systems in residential and commercial buildings.
                            </p>
                            
                            <div className="mb-4">
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[18px] uppercase tracking-wide font-opensans">Product Features</h4>
                                <CheckList items={[
                                    "High tensile and impact strength",
                                    "Resistant to rust, scale formation, weathering & chemicals",
                                    "Immune to bacteria, fungi & micro-organisms",
                                    "Long-lasting and cost-effective alternative to conventional drainage systems"
                                ]} />
                            </div>
                            
                            <div className="bg-gradient-to-br from-[#40E0D0]/10 via-[#7FFFD4]/10 to-[#40E0D0]/10 p-6 rounded-xl border-2 border-[#40E0D0]/30">
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[18px] uppercase tracking-wide font-opensans">Specifications</h4>
                                <ul className="space-y-3 text-[16px] text-[#333333]">
                                    <li className="flex justify-between items-center border-b border-[#40E0D0]/20 pb-2">
                                        <span className="font-inter">Sizes available</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans text-[16px]">75 mm & 90 mm</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-[#40E0D0]/20 pb-2">
                                        <span className="font-inter">Lengths</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans text-[16px]">2 m, 4 m & 6 m</span>
                                    </li>
                                    <li className="flex justify-between items-center pt-1">
                                        <span className="font-inter">Custom lengths</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans text-[16px]">Available on request</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Conduit */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-4">
                                <div className="w-16 h-1.5 bg-gradient-to-r from-[#7FFFD4] to-[#40E0D0] rounded-full mb-4"></div>
                                <h3 className="text-[32px] md:text-[36px] font-extrabold font-opensans text-[#7FFFD4] mb-4 leading-tight">PVC Electrical Conduit Pipes & Fittings</h3>
                            </div>
                            <p className="text-[18px] text-[#333333] mb-4 leading-relaxed font-inter">
                                PVC Electrical Conduit Pipes and Fittings are designed for modern architectural and electrical installations, preferred for residential, commercial, and industrial projects.
                            </p>
                            
                            <div className="mb-4">
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[18px] uppercase tracking-wide font-opensans">Key Properties</h4>
                                <CheckList items={[
                                    "Manufactured from high-impact unplasticized PVC",
                                    "Non-conductive – prevents electric shock & short circuits",
                                    "Non-corrosive – suitable for humid and aggressive environments",
                                    "Fire-resistant & self-extinguishing",
                                    "Easy installation in open and concealed wiring"
                                ]} />
                            </div>
                            
                            <div className="bg-gradient-to-br from-[#7FFFD4]/10 via-[#40E0D0]/10 to-[#7FFFD4]/10 p-6 rounded-xl border-2 border-[#7FFFD4]/30">
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[18px] uppercase tracking-wide font-opensans">Applications</h4>
                                <CheckList items={[
                                    "Electrical wire protection systems",
                                    "Residential & commercial buildings",
                                    "Industrial electrical installations",
                                    "Concealed and surface-mounted wiring"
                                ]} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- WHY CHOOSE US --- */}
            <div className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#40E0D0] mb-4 font-opensans leading-tight">
                            Why Choose PVC Pipe Systems?
                        </h2>
                        <div className="w-40 h-2 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-4 rounded-full"></div>
                        <p className="font-inter text-[18px] md:text-[20px] text-[#333333] mx-auto leading-relaxed">
                            PVC pipe systems offer durability, safety, corrosion resistance, and cost efficiency, making them ideal for agriculture, plumbing, drainage, electrical, and industrial infrastructure projects.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Durable", text: "Long service life with high impact strength and excellent visual finish." },
                            { title: "Safe", text: "Non-toxic, lead-free, fire-resistant, and non-conductive for electrical safety." },
                            { title: "Efficient", text: "Smooth bore for better flow efficiency and low maintenance requirements." },
                            { title: "Economical", text: "Cost-effective compared to traditional metal systems with long-term savings." }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl border-2 border-[#40E0D0]/20 hover:border-[#40E0D0] hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#7FFFD4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#40E0D0] text-[22px] mb-4 font-opensans group-hover:text-[#7FFFD4] transition-colors">{item.title}</h4>
                                <p className="text-[16px] text-[#333333] font-inter leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CTA SECTION --- */}
            <div className="py-14 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 lg:px-12 text-center text-white relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[36px] md:text-[44px] font-extrabold mb-4 font-opensans drop-shadow-lg">
                            Ready to Upgrade Your Infrastructure?
                        </h2>
                        <p className="font-inter text-[20px] md:text-[22px] text-white mx-auto leading-relaxed mb-10">
                            Contact us for detailed specifications, bulk pricing, and project consulting. We offer comprehensive piping solutions for agriculture, plumbing, drainage, electrical, and industrial infrastructure projects.
                        </p>
                        <Link to="/contact" className="inline-block px-12 py-5 bg-white text-[#40E0D0] font-bold rounded-xl shadow-2xl hover:bg-gray-50 transition-all uppercase tracking-wide text-[18px] transform hover:-translate-y-1 hover:shadow-3xl">
                            Request a Quote
                        </Link>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
