import React from 'react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-light-gray text-slate-gray">
      {/* Header */}
      <header className="bg-navy-blue text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Industry-Academia Portal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-teal">Home</a></li>
              <li><a href="#about" className="hover:text-teal">About</a></li>
              <li><a href="#contact" className="hover:text-teal">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <section id="home" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Industry-Academia Portal</h2>
          <p>This portal bridges the gap between industry and academia, fostering collaboration and innovation.</p>
        </section>

        <section id="about" className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-sky-blue font-bold mb-4">About Us</h2>
          <p>Our mission is to connect industry leaders with academic researchers to drive progress and innovation.</p>
        </section>

        <section id="contact" className="bg-forest-green text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Get in touch with us to learn more about our initiatives and how you can get involved.</p>
          <button className="bg-amber text-navy-blue px-4 py-2 mt-4 rounded">Get in Touch</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-blue text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Industry-Academia Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Demo;
