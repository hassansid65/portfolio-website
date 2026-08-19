import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

/**
 * Decorative flowing lines behind the hero.
 *
 * Two instances render, so every path here costs double. The set was 36 paths
 * each — 72 infinite animations that kept running long after the hero scrolled
 * away. It now draws half as many lines over the same spread (geometry steps by
 * two instead of one, so the shape is unchanged, just less dense) and freezes
 * them entirely once the hero is out of view.
 */
export function FloatingPaths({ position }: { position: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    const paths = Array.from({ length: 18 }, (_, i) => {
        const k = i * 2;
        return {
            id: i,
            d: `M-${380 - k * 5 * position} -${189 + k * 6}C-${
                380 - k * 5 * position
            } -${189 + k * 6} -${312 - k * 5 * position} ${216 - k * 6} ${
                152 - k * 5 * position
            } ${343 - k * 6}C${616 - k * 5 * position} ${470 - k * 6} ${
                684 - k * 5 * position
            } ${875 - k * 6} ${684 - k * 5 * position} ${875 - k * 6}`,
            width: 0.5 + k * 0.03,
            opacity: (0.1 + k * 0.03) / 2,
            // Deterministic, so a re-render does not reshuffle every duration.
            duration: 20 + (i % 10),
        };
    });

    return (
        <div ref={ref} className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        initial={{ pathLength: 0.3, opacity: 0.3 }}
                        animate={
                            inView
                                ? {
                                      pathLength: 1,
                                      opacity: [0.15, 0.3, 0.15],
                                      pathOffset: [0, 1, 0],
                                  }
                                : { pathLength: 1, opacity: 0.2 }
                        }
                        transition={
                            inView
                                ? {
                                      duration: path.duration,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "linear",
                                  }
                                : { duration: 0 }
                        }
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
