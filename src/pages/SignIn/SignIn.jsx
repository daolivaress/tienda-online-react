import BaseLayout from "../../layout/BaseLayout";

function SignIn() {
  return (
    <>
      <BaseLayout>
        <section>
          <div className="flex items-center justify-center relative w-80 mb-6">
            <h1 className="font-semibold text-xl">Sign In</h1>
          </div>
          <div className="flex items-center justify-center mb-6">
            <form action="" className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <label htmlFor="email" className="font-semibold text-lg w-20">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-black rounded-md px-4 py-2"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <label htmlFor="password" className="font-semibold text-lg w-20">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border border-black rounded-md px-4 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white font-semibold py-4 rounded-md transition-all hover:scale-110"
                >
                  Sign In
                </button>
            </form>
          </div>
        </section>
      </BaseLayout>
    </>
  );
}

export default SignIn;
