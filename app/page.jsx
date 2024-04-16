import Head from "next/head";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div
      className="h-screen flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('/assets/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>login</title>
      </Head>
      <div className="rounded-tr-full rounded-br-full bg-[#083F46] h-full w-[1000px]  absolute left-0">
        <div className="flex flex-col justify-center h-full absolute  left-[50px] text-white px-10">
          <p className="text-5xl font-bold ">Hi, there</p>
          <p className=" text-3xl font-semibold mt-3">Welcome to our</p>
          <p className="text-3xl font-semibold mt-2">Contact portal</p>

          <div className="mt-20">
            <input
              type="text"
              placeholder="Email"
              className="block bg-white px-4 py-3.5 mb-3 rounded-[20px] placeholder-[#083F46] w-[450px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="block bg-white px-4 py-3.5 mb-3 rounded-[20px] placeholder-[#083F46] w-[450px]"
            />
          </div>
          <div>
            <Link href="/welcome" className="inline-block">
              <button className="bg-[#083F46] text-white px-4 py-2 w-[250px] rounded-[20px] mt-4 mr-4 border border-white">
                Login
              </button>
            </Link>
            or
            <Link href="/register">
              <p className="inline-block items-center ml-2 mt-4 text-white text-xl">
                Click here to register
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-[255px] right-[260px]">
        <img src="/assets/logo.png" alt="Logo" className="w-54 " />
        <p className="text-[#083F46] text-[80px] font-bold ">Contacts</p>
        <p className="text-[#083F46] text-[50px] font-semibold ">Portal</p>
      </div>
    </div>
  );
};

export default LoginPage;
