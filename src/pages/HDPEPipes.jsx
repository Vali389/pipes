import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBackground from '../assets/product page background image.jpeg'
import hdpeRollsImage from '../assets/Screenshot 2026-01-31 191542.png'

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

const CheckList = ({ items }) => (
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
                <svg className="w-6 h-6 text-[#40E0D0] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#333333] leading-relaxed text-[17px] md:text-[18px] font-inter">{item}</span>
            </motion.li>
        ))}
    </ul>
)

export default function HDPEPipes() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-white font-inter text-gray-800">

            {/* --- HERO SECTION: With Background Image --- */}
            <div className="relative h-[70vh] bg-gradient-to-br from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroBackground} className="w-full h-full object-cover" alt="HDPE Piping Infrastructure" />
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
                            HDPE Pipes
                        </h1>
                        <p className="text-[20px] md:text-[24px] text-white leading-relaxed max-w-2xl font-medium drop-shadow-lg mb-10" style={{ opacity: 1, color: '#ffffff' }}>
                            We supply a comprehensive range of High Density Polyethylene (HDPE) pipes designed to meet modern water management, irrigation, and industrial fluid transport requirements.
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
                            HDPE Pipes
                        </h2>
                        <div className="w-40 h-2 bg-gradient-to-r from-[#40E0D0] via-[#7FFFD4] to-[#40E0D0] mx-auto mb-10 rounded-full"></div>
                        <p className="font-inter text-[18px] md:text-[20px] text-[#333333] leading-relaxed">
                            We supply a comprehensive range of High Density Polyethylene (HDPE) pipes designed to meet modern water management, irrigation, and industrial fluid transport requirements. Our products are engineered with precision, manufactured using virgin-grade HDPE, and consistently upgraded to exceed prevailing quality benchmarks—delivering long-term value to end users and project stakeholders.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTION 1: HDPE PIPE PRODUCT RANGE --- */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>HDPE Pipe Product Range</SectionHeading>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* HDPE Pressure Pipes */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl p-8 shadow-xl border-2 border-[#40E0D0]/20 hover:border-[#40E0D0] transition-all"
                        >
                            <h3 className="text-[28px] font-extrabold text-[#40E0D0] mb-4 font-opensans">HDPE Pressure Pipes</h3>
                            <div className="bg-gradient-to-br from-[#40E0D0]/10 to-[#7FFFD4]/10 p-6 rounded-xl border-2 border-[#40E0D0]/30">
                                <ul className="space-y-3 text-[16px] text-[#333333]">
                                    <li className="flex justify-between border-b border-[#40E0D0]/20 pb-2">
                                        <span className="font-inter font-medium">Diameter range</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans">20 mm to 500 mm</span>
                                    </li>
                                    <li className="flex justify-between border-b border-[#40E0D0]/20 pb-2">
                                        <span className="font-inter font-medium">Pressure ratings</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans">2.5 to 16 kg/cm²</span>
                                    </li>
                                    <li className="flex justify-between pt-1">
                                        <span className="font-inter font-medium">Raw material grades</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans">PE 63, PE 80, PE 100</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* HDPE Sprinkler Pipes */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl p-8 shadow-xl border-2 border-[#7FFFD4]/20 hover:border-[#7FFFD4] transition-all"
                        >
                            <h3 className="text-[28px] font-extrabold text-[#7FFFD4] mb-4 font-opensans">HDPE Sprinkler Pipes</h3>
                            <div className="bg-gradient-to-br from-[#7FFFD4]/10 to-[#40E0D0]/10 p-6 rounded-xl border-2 border-[#7FFFD4]/30 mb-4">
                                <ul className="space-y-3 text-[16px] text-[#333333]">
                                    <li className="flex justify-between border-b border-[#7FFFD4]/20 pb-2">
                                        <span className="font-inter font-medium">Diameter range</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans">50 mm to 110 mm</span>
                                    </li>
                                    <li className="flex justify-between pt-1">
                                        <span className="font-inter font-medium">Application</span>
                                        <span className="text-[#40E0D0] font-bold font-opensans">Lift irrigation, drip, and sprinkler systems</span>
                                    </li>
                                </ul>
                            </div>
                            <img src={hdpeRollsImage} alt="HDPE Sprinkler Pipes" className="w-full rounded-xl h-48 object-cover border-2 border-[#7FFFD4]/30" />
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center mt-12 font-inter text-[18px] text-[#333333] leading-relaxed"
                    >
                        All products are manufactured to meet modern water management and infrastructure requirements, with continuous quality enhancement to exceed industry standards.
                    </motion.p>
                </div>
            </div>

            {/* --- SECTION 2: KEY BENEFITS --- */}
            <div className="py-16 bg-gradient-to-b from-[#F8F9FA] to-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>Key Benefits of HDPE Pipes</SectionHeading>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#40E0D0]/20"
                        >
                            <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Mechanical & Hydraulic Performance</h4>
                            <CheckList items={[
                                "High abrasion resistance and tensile strength",
                                "Smooth inner surface for high flow efficiency",
                                "Excellent resistance to water hammer and surge pressure"
                            ]} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#40E0D0]/20"
                        >
                            <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Installation & Handling Advantages</h4>
                            <CheckList items={[
                                "Lightweight and easy to transport",
                                "Heat fusion, butt fusion, and socket fusion joints",
                                "Leak-proof, monolithic pipeline system"
                            ]} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#40E0D0]/20"
                        >
                            <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Durability & Safety</h4>
                            <CheckList items={[
                                "UV resistant – suitable for outdoor storage",
                                "Corrosion-free and chemically inert",
                                "Operating temperature range: –40°C to +80°C",
                                "Free from heavy metals; suitable for potable water"
                            ]} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: APPLICATIONS --- */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>Applications of HDPE Pipes</SectionHeading>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Irrigation & agriculture water conveyance",
                            "Drinking water distribution systems",
                            "Submersible pump suction and delivery lines",
                            "Industrial effluent, chemicals & gas transmission",
                            "Drainage and sewerage systems",
                            "Drip, sprinkler & lift irrigation projects"
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-6 bg-gradient-to-br from-white to-[#F8F9FA] border-2 border-[#40E0D0]/20 rounded-xl hover:border-[#40E0D0] hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-[#40E0D0] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#333333] leading-relaxed text-[17px] font-inter font-medium">{item}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- SECTION 4: WHY HDPE --- */}
            <div className="py-16 bg-gradient-to-b from-[#F8F9FA] to-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>Why HDPE Piping Systems Are the Preferred Choice</SectionHeading>
                        <p className="font-inter text-[18px] md:text-[20px] text-[#333333] mx-auto leading-relaxed mt-8">
                            HDPE piping offers a cost-effective and technically superior solution for a wide range of applications, including municipal infrastructure, industrial plants, mining operations, marine projects, landfill systems, ducting, and agricultural networks. Due to its versatility and proven performance, HDPE is increasingly specified for critical infrastructure worldwide.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTION 5: PROVEN INSTALLATION --- */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>Proven Installation & Application Capabilities</SectionHeading>
                        <p className="font-inter text-[18px] md:text-[20px] text-[#333333] mx-auto leading-relaxed mt-8 mb-4">
                            HDPE pipes are tested and proven for diverse installation environments, including:
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Above-Ground & Buried", desc: "Above-ground and buried pipeline installations" },
                            { title: "Trenchless Applications", desc: "Slip-lining and trenchless applications, ideal for rehabilitation projects" },
                            { title: "Marine Installations", desc: "Floating and sub-surface marine installations, where corrosion resistance is critical" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 bg-gradient-to-br from-white to-[#F8F9FA] border-2 border-[#40E0D0]/20 rounded-xl hover:border-[#40E0D0] hover:shadow-xl transition-all"
                            >
                                <h4 className="font-bold text-[#40E0D0] text-[22px] mb-4 font-opensans">{item.title}</h4>
                                <p className="text-[16px] text-[#333333] font-inter leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center mt-12 font-inter text-[18px] text-[#333333] leading-relaxed"
                    >
                        This adaptability makes HDPE piping suitable for both new construction and retrofit projects.
                    </motion.p>
                </div>
            </div>

            {/* --- SECTION 6: PERFORMANCE BENEFITS --- */}
            <div className="py-16 bg-gradient-to-b from-[#F8F9FA] to-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <SectionHeading>Performance Benefits of HDPE Pipes</SectionHeading>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Corrosion-Free & Long-Lasting</h4>
                                <p className="text-[18px] text-[#333333] leading-relaxed font-inter">
                                    HDPE pipes do not rust, crust, or corrode, even in aggressive soils or chemically harsh environments, ensuring extended service life with minimal degradation.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Monolithic, Leak-Free Pipeline System</h4>
                                <p className="text-[18px] text-[#333333] leading-relaxed font-inter">
                                    Heat-fused joints create a homogeneous, monolithic pipeline. The fusion joint is stronger than the pipe itself, virtually eliminating leakage and joint failure.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Excellent Surge & Water Hammer Resistance</h4>
                                <p className="text-[18px] text-[#333333] leading-relaxed font-inter">
                                    With high strain tolerance and flexibility, HDPE pipelines effectively absorb pressure fluctuations, reducing failures caused by surge pressure, water hammer, and freezing conditions.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#40E0D0] mb-4 text-[20px] uppercase tracking-wide font-opensans">Lower Lifecycle Costs</h4>
                                <p className="text-[18px] text-[#333333] leading-relaxed font-inter">
                                    Reduced repair frequency, minimal maintenance requirements, and the elimination of water losses translate into significant long-term cost savings compared to conventional piping materials.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 7: SUSTAINABLE --- */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <SectionHeading>Sustainable & Environment-Friendly Infrastructure Solution</SectionHeading>
                        <p className="font-inter text-[18px] md:text-[20px] text-[#333333]  leading-relaxed mt-4">
                            With zero infiltration and leakage, HDPE pipelines help conserve potable water and prevent groundwater contamination. Their long service life and recyclability make HDPE piping a sustainable choice for modern infrastructure development.
                        </p>
                    </motion.div>
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
                        <h2 className="text-[36px] md:text-[44px] font-extrabold  font-opensans drop-shadow-lg">
                            Ready to Upgrade Your Infrastructure?
                        </h2>
                        <p className="font-inter text-[20px] md:text-[22px] text-white  leading-relaxed mb-20">
                            Contact us for detailed specifications, bulk pricing, and project consulting. We offer comprehensive piping solutions for agriculture, plumbing, drainage, electrical, and industrial infrastructure projects.
                        </p>
                        <Link to="/contact" className="inline-block px-12 py-5 bg-white text-[#40E0D0] font-bold rounded-xl shadow-2xl hover:bg-gray-50 transition-all uppercase tracking-wide text-[18px] transform hover:-translate-y-1 hover:shadow-3xl mt-5">
                            Request a Quote
                        </Link>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

