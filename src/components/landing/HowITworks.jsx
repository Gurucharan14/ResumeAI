function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-50"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">

        <div className="text-center">
          <div className="text-6xl mb-5">
            📄
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Upload Resume
          </h3>

          <p className="text-gray-600">
            Upload your resume in PDF format.
          </p>
        </div>

        <div className="text-center">
          <div className="text-6xl mb-5">
            🤖
          </div>

          <h3 className="text-2xl font-bold mb-3">
            AI Analysis
          </h3>

          <p className="text-gray-600">
            Our AI analyzes your resume and ATS score.
          </p>
        </div>

        <div className="text-center">
          <div className="text-6xl mb-5">
            🚀
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Improve & Apply
          </h3>

          <p className="text-gray-600">
            Download your improved resume and start applying.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;