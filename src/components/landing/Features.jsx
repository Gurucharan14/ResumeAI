function Features() {
  return (
    <section 
    id="features"
    className="py-20 bg-white">

      <h2 className="text-5xl font-bold text-center">
        Why Choose ResumeAI?
      </h2>

      <p className="text-center text-gray-600 mt-4 mb-14">
        Everything you need to build an ATS-friendly resume.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        <div className="rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <div className="text-5xl mb-5">📊</div>

          <h3 className="text-2xl font-bold mb-3">
            ATS Score
          </h3>

          <p className="text-gray-600">
            Instantly check how well your resume performs in Applicant Tracking Systems.
          </p>
        </div>

        <div className="rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <div className="text-5xl mb-5">🤖</div>

          <h3 className="text-2xl font-bold mb-3">
            AI Suggestions
          </h3>

          <p className="text-gray-600">
            Receive intelligent suggestions to improve your resume and increase interview chances.
          </p>
        </div>

        <div className="rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <div className="text-5xl mb-5">💼</div>

          <h3 className="text-2xl font-bold mb-3">
            Job Match
          </h3>

          <p className="text-gray-600">
            Compare your resume with job descriptions and discover missing skills.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;