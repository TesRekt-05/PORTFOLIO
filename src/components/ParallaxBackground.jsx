import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });
    const mountain3y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const mountain2y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1y = useTransform(x, [0, 0.5], ["0%", "0%"]);
    const planetx = useTransform(x, [0, 0.5], ["0%", "20%"]);
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/* background sky */}
                <div
                    className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: "url(/assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />
                {/* mountain layer 3 */}
                <motion.div
                    className="absolute inset-0 -z-40"
                    style={{
                        backgroundImage: "url(/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3y,
                    }}
                />
                {/* planets */}
                <motion.div
                    className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: "url(/assets/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetx,
                    }}
                />
                {/* mountain layer 2 */}
                <motion.div
                    className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: "url(/assets/mountain-2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2y,
                    }}
                />
                {/* mountain layer 1 */}
                <motion.div
                    className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: "url(/assets/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1y,
                    }}
                />
            </div>
        </section>
    );
};

export default ParallaxBackground;