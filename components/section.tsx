import React from 'react';

interface SectionProps {
    heading: string;
    subheading?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ heading, subheading, children }) => {
    return (
        <>
            <section className="min-h-screen w-full relative border-b border-primary">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-pixel-heading text-primary mb-4">{heading}</h2>
                        {subheading && (
                            <h3 className="text-xl font-geist-mono text-muted-foreground mb-8">{subheading}</h3>
                        )}
                    </div>
                    <div className="max-w-6xl mx-auto font-geist-mono">
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section; 