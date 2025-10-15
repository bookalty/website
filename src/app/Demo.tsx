const Demo: React.FC = () => {
    return <>
    <section className="h-screen w-screen bg-background">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Démo en ligne</h2>
        <p className="text-highlight mb-4">Version web intégrée.</p>

        <div className="relative h-[calc(100%-6rem)] w-full rounded-2xl overflow-hidden border border-accent overscroll-contain">
          <iframe
            src="bookalty_demo/index.html/"
            className="absolute inset-0 h-full w-full overscroll-contain"
            loading="lazy"
            allow="clipboard-write; fullscreen"
            title="Flutter Web Demo"
          />
        </div>
      </div>
    </section>
    </>
};

export default Demo;