interface SectionLayoutProps {
    id: string;
    Component: React.FC;
    title: string;
}

const SectionLayout = ({ id, Component, title }: SectionLayoutProps) =>
    function HOC() {
        return (
            <section
                id={id}
                className="container mx-auto px-4 "
            >

                <div
                    className="h-screen w-full 
                    "
                >
                    <p
                        className="text-3xl text-left font-bold text-white mt-5"

                    >
                        {title}
                    </p>

                    <Component />
                </div>

            </section>
        );
    };

export default SectionLayout;
