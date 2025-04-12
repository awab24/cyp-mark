import React from 'react';

const LearnMorePage = () => {
  return (
    <div className="learn-more-page" style={{ backgroundColor: 'black', color: 'yellow', padding: '2rem' }}>
      <div className="container">
        {/* Page Header */}
        <header className="text-center mb-5">
          <h1 className="display-4" style={{ color: 'yellow' }}>Learn More About Cyprus Market</h1>
          <p className="lead" style={{ color: 'white' }}>
            Your one-stop platform for renting apartments, renting cars, selling and buying cars, and electronics in Cyprus.
          </p>
        </header>

        {/* Section: About the Website */}
        <section className="mb-5">
          <h2 className="text-white">What is Cyprus Market?</h2>
          <p style={{ color: 'white' }}>
            Cyprus Market is an all-in-one platform designed to make renting, buying, and selling easy for everyone in Cyprus. Whether you're looking to rent an apartment, find a rental car, sell or buy a car, or even purchase electronics, we have you covered. Our platform is user-friendly, secure, and optimized to ensure you get the best deals quickly and efficiently.
          </p>
        </section>

        {/* Section: Key Features */}
        <section className="mb-5">
          <h2 className="text-white">Key Features</h2>
          <ul className="list-unstyled" style={{ color: 'white' }}>
            <li>🌍 <strong>Rent Apartments:</strong> Easily browse and list apartments for rent in popular Cyprus cities like Lefkosa and Girne.</li>
            <li>🚗 <strong>Rent Cars:</strong> Find the best deals on car rentals or list your own vehicle for rent.</li>
            <li>🚙 <strong>Sell & Buy Cars:</strong> Connect with potential buyers or browse available cars for purchase.</li>
            <li>💻 <strong>Sell & Buy Electronics:</strong> Sell or buy electronics securely through our verified listings.</li>
          </ul>
        </section>

        {/* Section: How It Works */}
        <section className="mb-5">
          <h2 className="text-white">How It Works</h2>
          <p style={{ color: 'white' }}>
            Cyprus Market provides a simple process for both buyers and sellers. You can create an account, list your items, and manage inquiries from interested buyers. On the other hand, if you're looking to rent or buy, you can browse listings, contact sellers, and finalize your deals effortlessly through our platform.
          </p>
        </section>

        {/* Section: Call to Action */}
        <section className="text-center">
          <h2 className="text-white">Ready to Get Started?</h2>
          <p style={{ color: 'white' }}>
            Join Cyprus Market today to discover great deals and opportunities. Whether you're looking to rent an apartment or sell a car, we're here to help.
          </p>
          <a href="/auth" className="btn btn-warning btn-lg mr-3" style={{ transition: 'background-color 0.3s' }}>
            Sign Up Now
          </a>
          <a href="/work-with-us" className="btn btn-success btn-lg" style={{ transition: 'background-color 0.3s' }}>
            Work With Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default LearnMorePage;
