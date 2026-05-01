export const Collabs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Collaborations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Collaboration cards would go here */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Open Source</h3>
            <p className="text-gray-600">Contributing to various open source projects</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Freelance</h3>
            <p className="text-gray-600">Available for freelance projects</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Partnerships</h3>
            <p className="text-gray-600">Open to collaboration opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collabs;