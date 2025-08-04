import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-starbucks-cream via-background to-starbucks-light-green/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
        <Image
                src="/logo.jpeg"
                alt="Starbucks Vazha Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="font-display font-semibold text-2xl text-white">
                Starbucks Vazha
              </span>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-white hover:text-starbucks-light-green transition-colors font-medium text-lg">Menu</a>
              <a href="#about" className="text-white hover:text-starbucks-light-green transition-colors font-medium text-lg">About</a>
              <a href="#contact" className="text-white hover:text-starbucks-light-green transition-colors font-medium text-lg">Contact</a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-starbucks-light-green transition-colors font-medium text-lg">
                Sign In
              </button>
              <button className="bg-white text-starbucks-dark px-6 py-3 rounded-full font-semibold hover:bg-starbucks-light-green transition-all">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/background.jpeg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <span className="text-2xl">🍃</span>
              <span className="text-white font-medium">Vazha Edition</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
              Starbucks
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              This isn&apos;t your average Starbucks. This is Starbucks, reimagined through a banana leaf filter.
              Think espresso with pazham pori energy. Macchiatos served with a side of Malayalam sarcasm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-starbucks text-lg px-8 py-4">
                Explore Menu
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-starbucks-dark px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-starbucks-light-green/50">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-display font-semibold text-xl text-starbucks-dark mb-2">Leaf-Wrapped Tradition</h3>
              <p className="text-starbucks-text-light">Every brew is crafted with the resilience of the vazha maram — always rooted, always rising.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-starbucks-light-green/30">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="font-display font-semibold text-xl text-starbucks-dark mb-2">Bold Local Spirit</h3>
              <p className="text-starbucks-text-light">No pretentious vibes. Just bold drinks with cultural kick strong enough to rival your amma&apos;s stare.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-starbucks-light-green/40">
              <div className="text-4xl mb-4">🍌</div>
              <h3 className="font-display font-semibold text-xl text-starbucks-dark mb-2">Pazham Pori Energy</h3>
              <p className="text-starbucks-text-light">Frappes bold enough to be mistaken for political statements. Served with authentic Malayalam attitude.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 bg-starbucks-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">Menu 🍌☕</h2>
            <p className="text-xl text-white/80">Handcrafted for those who dare to mix tradition with trend</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pazham Poriccino",
                description: "Deep-fried banana meets cappuccino. Comes with a crunchy pazham pori rim.",
                tagline: "When you want filter coffee but also cholesterol.",
                price: "₹220",
                emoji: "🧋"
              },
              {
                name: "Nendran Nitro",
                description: "Cold brew aged in a kattan chaya kettle, infused with overripe nendran banana essence.",
                tagline: "Served in: An actual banana stem. Warning: May attract monkeys.",
                price: "₹280",
                emoji: "🍵"
              },
              {
                name: "Ela Macchiato",
                description: "A shot of espresso steamed inside a rolled banana leaf.",
                tagline: "Add-ons: Optional jaggery foam or coconut oil drizzle.",
                price: "₹180",
                emoji: "🍌"
              },
              {
                name: "Banana Stem Frappe (Chorappu Special)",
                description: "A detox frappe made from vazhapindi (banana stem), green tea, and denial.",
                tagline: "For: Your cousin who went on a diet last Onam.",
                price: "₹240",
                emoji: "🍨"
              },
              {
                name: "Vazha Wrapuccino",
                description: "Coffee-flavored jackfruit wrap, served in a sun-dried banana leaf.",
                tagline: "Free with: Existential confusion.",
                price: "₹260",
                emoji: "🌯"
              },
              {
                name: "Plantain Pumpkin Spice Latte (Seasonal Special)",
                description: "The autumnal flop you never asked for — because pumpkins don't grow here, so we used ethakka.",
                tagline: "Scent: Smells like Onam in Bangalore.",
                price: "₹300",
                emoji: "🕯️"
              },
              {
                name: "Coconut Caramel Banana Blast",
                description: "Three tropical ingredients. No actual coffee. Just vibes.",
                tagline: "Side: Served with a mini thalappavu (banana-leaf umbrella).",
                price: "₹320",
                emoji: "🥥"
              },
              {
                name: "Reusable Vazha Ela Cup",
                description: "Collect 5 and you get… a mosquito bite and moral superiority.",
                tagline: "BONUS: Eco-friendly with a side of sarcasm.",
                price: "₹150",
                emoji: "🎁"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-starbucks-light-green">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-display font-semibold text-xl text-starbucks-dark mb-2">{item.name}</h3>
                <p className="text-starbucks-text-light mb-3">{item.description}</p>
                <p className="text-sm text-starbucks-green italic mb-4 font-medium">{item.tagline}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-starbucks-green">{item.price}</span>
                  <button className="btn-starbucks text-sm px-4 py-2">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl text-starbucks-dark mb-6">Our Story</h2>
              <p className="text-lg text-starbucks-text-light mb-6 leading-relaxed">
                Inspired by the resilience of the vazha maram — always rooted, always rising — our brews are handcrafted for those who dare to mix tradition with trend, and banana stems with bold shots.
              </p>
              <p className="text-lg text-starbucks-text-light mb-6 leading-relaxed">
                No pretentious vibes. No artificial flavours. Just bold drinks, local spirit, and vibes strong enough to rival your amma&apos;s stare.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-starbucks-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <div>
                  <p className="font-semibold text-starbucks-dark">Starbucks Vazha Edition</p>
                  <p className="text-sm text-starbucks-text-light">Brewed for the bold. Inspired by you.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-starbucks-light-green rounded-3xl p-8 text-center">
                <div className="text-6xl mb-4">🍃</div>
                <h3 className="font-display font-semibold text-2xl text-starbucks-dark mb-4">Because you deserve coffee with cultural kick.</h3>
                <p className="text-starbucks-text-light">
                  Here, we take the global coffee giant and give it a hyperlocal, leaf-wrapped twist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-starbucks-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-starbucks-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="font-display font-semibold text-xl">Starbucks Vazha</span>
              </div>
              <p className="text-white/80">
                Brewed for the bold. Inspired by you.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Coffee</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Tea</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Food</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Merchandise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Find a Store</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Feedback</a></li>
                <li><a href="#" className="hover:text-starbucks-light-green transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Starbucks Vazha Edition. All rights reserved. Brewed with 🍃 and cultural pride.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
