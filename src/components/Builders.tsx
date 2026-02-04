import React from 'react'

const Builders: React.FC = () => {
    return (
        <div className="font-mono leading-normal antialiased relative bg-black text-zinc-100 min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[60vh] relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-bloomberg-orange/10 via-transparent to-bloomberg-orange/5" />
                    <div
                        className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-bloomberg-orange/10 rounded-full blur-[150px] animate-pulse"
                        style={{ animationDuration: '5s' }}
                    />
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,89,0,0.6) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(255,89,0,0.6) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px'
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="flex flex-col items-center justify-center pt-32 pb-20">
                        <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-bloomberg-orange/10 text-bloomberg-orange border border-bloomberg-orange/30 mb-6">
                            Product Builders
                        </span>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-center mb-6">
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-bloomberg-orange/30 blur-3xl" />
                                <span className="relative text-bloomberg-orange drop-shadow-[0_0_40px_rgba(255,89,0,0.6)]">
                                    Builders
                                </span>
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8 font-light tracking-wide text-zinc-400">
                            Create markets on any forecastable outcome. Build products that traders want to use.
                        </p>

                        <p className="text-base text-center max-w-3xl opacity-60 mb-10 leading-relaxed">
                            Autonity enables permissionless, decentralized market creation on AFP.
                            If the outcome can be validated, it can become a market.
                        </p>

                        <a
                            href="https://forms.gle/XgWVCVZQdRkevuTT7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-bloomberg-orange hover:bg-bloomberg-orange/90 text-black px-8 py-4 font-bold uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(255,89,0,0.3)] hover:shadow-[0_0_50px_rgba(255,89,0,0.5)] inline-flex items-center gap-3 text-lg"
                        >
                            <span className="relative z-10">Apply to Build</span>
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </a>
                    </div>
                </div>
            </section>

            {/* What You Can Build */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-8 text-center">
                            What You Can Build
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-2 border-zinc-800 p-6 hover:border-bloomberg-orange transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-bloomberg-orange">Forecast Futures</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Markets on any continuous data feed. Create futures on crypto prices,
                                    weather data, economic indicators, or any verifiable numerical outcome.
                                </p>
                            </div>
                            <div className="border-2 border-zinc-800 p-6 hover:border-bloomberg-orange transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-bloomberg-orange">Prediction Markets</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    Binary or multi-outcome markets on any verifiable event. Politics,
                                    sports, tech milestones, or any real-world outcome you can define.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-zinc-900 border border-zinc-800">
                            <h4 className="font-bold mb-3 text-sm uppercase tracking-wider">Getting Started</h4>
                            <ol className="space-y-2 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center bg-bloomberg-orange text-black font-bold text-xs shrink-0">1</span>
                                    <span className="text-zinc-400">Identify a forecastable outcome with a verifiable data source</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center bg-bloomberg-orange text-black font-bold text-xs shrink-0">2</span>
                                    <span className="text-zinc-400">Write a clear market specification following the template</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center bg-bloomberg-orange text-black font-bold text-xs shrink-0">3</span>
                                    <span className="text-zinc-400">Submit a PR to the Forecastathon Products repository</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center bg-bloomberg-orange text-black font-bold text-xs shrink-0">4</span>
                                    <span className="text-zinc-400">Your market goes live once approved</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0">
                    <div
                        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bloomberg-orange/10 rounded-full blur-[150px] animate-pulse"
                        style={{ animationDuration: '6s' }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-bloomberg-orange font-mono text-sm tracking-[0.3em] uppercase mb-8 block">
                            Builder Reputation
                        </span>
                        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed">
                            <span className="text-bloomberg-orange text-5xl leading-none align-top">"</span>
                            Your reputation as a builder is determined by adoption. How many people are
                            trading your markets? How much volume is generated? The more popular your
                            products become, the more you{' '}
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-bloomberg-orange/30 blur-xl" />
                                <span className="relative text-bloomberg-orange font-bold">stand out</span>
                            </span>.
                            <span className="text-bloomberg-orange text-5xl leading-none align-bottom">"</span>
                        </blockquote>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-bloomberg-orange" />
                            <span className="text-sm opacity-40 uppercase tracking-wider">Season 4</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-bloomberg-orange" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-bloomberg-orange/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">
                            Start Building
                        </h2>
                        <p className="text-lg mb-10 text-zinc-400">
                            Check out the repository to see existing product specifications
                            and submit your own market ideas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/autonity/forecastathon-products"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-bloomberg-orange hover:bg-bloomberg-orange/90 text-black px-6 py-3 font-bold uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(255,89,0,0.3)] hover:shadow-[0_0_50px_rgba(255,89,0,0.5)] inline-flex items-center justify-center gap-2"
                            >
                                <GithubIcon />
                                Products Repository
                            </a>
                            <a
                                href="https://discord.gg/autonity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border-2 border-zinc-700 hover:border-bloomberg-orange transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <DiscordIcon />
                                Join Discord
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const GithubIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
)

const DiscordIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
)

export default Builders
