import logo from "@/assets/logo_eagles.jpeg";

const Header = () => {
  return (
    <header className="bg-primary py-4 px-6 shadow-lg">
      <div className="container mx-auto max-w-6xl flex items-center gap-4">
        <img src={logo} alt="Escuderia Eagles" className="h-16 w-auto rounded" />
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground tracking-wider">
            ESCUDERIA EAGLES
          </h1>
          <p className="text-sm md:text-base font-body text-primary-foreground/70 tracking-widest uppercase">
            A new way to fly
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
