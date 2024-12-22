import { Container } from "@/components/container";
import { Favorite } from "@/components/profile/favorite";
import Image from "next/image";
import { FaShare } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="w-full">
      <Container>
        <section className="flex items-center mt-8 mb-6 justify-between flex-col relative sm:flex-row">
          <div className="flex w-full items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src="https://avatars.githubusercontent.com/u/103395926?v=4"
              alt="profile"
              className=" rounded-full object-cover"
              quality={100}
              width={128}
              height={128}
            />

            <h1 className="text-2xl font-bold">Otto Souza</h1>
          </div>
          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShare size={24} color="#fff" />
            </button>
          </div>
        </section>

        <div className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <Favorite />
          </div>
          <div className="flex-grow flex-wrap">
            <Favorite />
          </div>
          <div className="flex-grow flex-wrap">
            <Favorite />
          </div>
        </div>
      </Container>
    </div>
  );
}
