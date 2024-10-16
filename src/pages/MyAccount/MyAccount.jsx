import BaseLayout from "../../layout/BaseLayout";

function MyAccount() {
  return (
    <>
      <BaseLayout>
        <section>
          <div className="flex items-center justify-center relative w-80 mb-6">
            <h1 className="font-semibold text-xl">My Account</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <h3 className="font-semibold text-lg">Nombre:</h3>
              <p className="border border-black rounded-md p-4 font-light">Daniel Andres Olivares Rodelo</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email:</h3>
              <p className="border border-black rounded-md p-4 font-light">daolivaresrodelo@gmail.com</p>
            </div>
          </div>
        </section>
      </BaseLayout>
    </>
  );
}

export default MyAccount;
