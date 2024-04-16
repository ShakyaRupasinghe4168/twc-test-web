import Head from "next/head";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <div
      className="h-screen flex items-center justify-center overflow-clip"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('/assets/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>add new contact</title>
      </Head>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-clip">
        <div
          className="bg-[#083F46] rotate-12"
          style={{ width: "1900px", height: "850px", borderRadius: "30%" }}
        ></div>
      </div>
      <div className="absolute top-[55px] left-[260px]">
        <div>
          <img
            src="/assets/logo1.png"
            alt="Logo"
            className="w-18 inline-block"
          />
          <img
            src="/assets/logo2.png"
            alt="Logo"
            className="w-18 inline-block"
          />
        </div>
        <p className="text-white text-[30px] font-semibold ">Contacts</p>
        <p className="text-white text-[30px] font-semibold ">Portal</p>
      </div>
      <div className="absolute top-[270px] left-[208px]">
        <p className="text-white text-[70px] font-bold ">Welcome,</p>
        <p className="text-white text-[30px] font-semibold ">
          This is where your contacts will live. Click the button below to add a
          new contact.
        </p>
        <Link href="/contacts/new" className="inline-block">
          <button className="bg-[#083F46] text-[20px] text-white px-4 py-2 w-[250px] rounded-[20px] mt-10 mr-4 border border-white">
            Add your first contact
          </button>
        </Link>
      </div>
      <Link href="/">
        <div className="absolute top-[670px] right-[120px] flex">
          <img
            src="/assets/vector (1).png"
            alt="Logo"
            className="w-8 h-10 mr-1"
          />
        </div>
        <div className="absolute top-[670px] right-[120px] flex">
          <img
            src="/assets/vector.png"
            alt="Logo"
            className="w-6 h-5 mt-2.5 mr-3"
          />
        </div>
        <div className="absolute top-[670px] right-[60px] flex">
          <p className="inline-block items-center ml-2 mt-4 text-white text-xl">
            logout
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WelcomePage;
