function Testimonials() {
  return (
    <section 
    id="about"
    className="py-20 bg-white">

      <h2 className="text-5xl font-bold text-center mb-14">
        What Developers Say
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        <div className="shadow-lg rounded-2xl p-8">

          <p className="text-yellow-500 text-xl">
            ⭐⭐⭐⭐⭐
          </p>

          <p className="mt-5 text-gray-600">
            ResumeAI improved my ATS score from
            62% to 91%. I finally started getting
            interview calls.
          </p>

          <h4 className="mt-6 font-bold">
            Rahul
          </h4>

          <p className="text-gray-500">
            Software Developer
          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-8">

          <p className="text-yellow-500 text-xl">
            ⭐⭐⭐⭐⭐
          </p>

          <p className="mt-5 text-gray-600">
            The AI suggestions were extremely useful.
            My resume became much stronger.
          </p>

          <h4 className="mt-6 font-bold">
            Priya
          </h4>

          <p className="text-gray-500">
            Full Stack Developer
          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-8">

          <p className="text-yellow-500 text-xl">
            ⭐⭐⭐⭐⭐
          </p>

          <p className="mt-5 text-gray-600">
            The job matching feature helped me
            identify missing skills quickly.
          </p>

          <h4 className="mt-6 font-bold">
            Arjun
          </h4>

          <p className="text-gray-500">
            Frontend Developer
          </p>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;