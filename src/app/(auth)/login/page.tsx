"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/nong-san-1.jpg" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Xin chào</h1>
          <p>
            Đăng nhập vào tài khoản của bạn hoặc tạo 1 tài khoản mới thông qua
            các nút sau
          </p>
          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-orange-50 transition-all"
            onClick={() => signIn("google")}
          >
            <Image
              src="/google-icon.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Đăng nhập bằng Google</span>
          </button>
          <button
            className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md hover:bg-blue-50 transition-all"
            onClick={() => signIn("facebook")}
          >
            <Image
              src="/facebook-icon.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Đăng nhập bằng Facebook</span>
          </button>
          <p className="text-sm">
            Có vấn đề{" "}
            <Link className="underline" href="/">
              Liên hệ chúng tôi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
