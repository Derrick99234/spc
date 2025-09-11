"use client";
import AddPostPopup from "@/components/add-post-popup";
import { useEffect, useState } from "react";
export interface Post {
  platform?: string;
  serviceType?: string;
  post: {
    postType: string;
    amountSpent: number;
    reach: number;
    viewCount: number;
  }[];
}

export default function Home() {
  // const [serviceType, setServiceType] = useState("pre-service");
  // const [social, setSocial] = useState("instagram");
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => setIsOpen(false);

  const [form, setForm] = useState<Post>({
    platform: "instagram",
    serviceType: "pre-service",
    post: [],
  });
  useEffect(() => {}, []);
  return (
    <main className="flex justify-around items-start pt-20 min-h-screen bg-gray-900 px-16 gap-16">
      <div className="">
        <h1 className="text-5xl text-white">SPECIAL PROMOTIONAL CAMPAIGN</h1>
        <h3 className="text-gray-300 text-lg mt-8 mb-4">POST TYPE</h3>
        <ul className="text-gray-400 list-disc list-inside">
          <li>Pre-Service</li>
          <li>In-Service</li>
          <li>Post-Service</li>
        </ul>
      </div>
      <form className="w-full max-w-3xl border border-gray-100 rounded-md p-4 px-10 pb-20">
        <h2 className="text-5xl text-gray-500 text-center font-bold mt-4 mb-8">
          SPC
        </h2>
        <label
          htmlFor="service-type"
          className="block mb-2 font-medium text-gray-300"
        >
          Select Service Type
        </label>
        <select
          id="service-type"
          name="service-type"
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
          className="mt-1 block bg-gray-600 outline-none w-full py-4 text-white px-4 rounded-md"
        >
          <option value="pre-service">Pre Service</option>
          <option value="in-service">In Service</option>
          <option value="post-service">Post Service</option>
        </select>
        <label
          htmlFor="service-type"
          className="block mb-2 font-medium text-gray-300 mt-5"
        >
          Social
        </label>
        <select
          id="social"
          name="social"
          value={form.platform}
          onChange={(e) => setForm({ ...form, platform: e.target.value })}
          className="mt-1 block bg-gray-600 outline-none w-full py-4 text-white px-4 rounded-md"
        >
          <option value="instagram">Instagram</option>
          <option value="x">X</option>
          <option value="facebook">Facebook</option>
          <option value="youtube">YouTube</option>
        </select>
        <button
          type="button"
          className="cursor-pointer mt-10 w-full hover:bg-white bg-black text-white hover:text-black transition-colors duration-500 font-bold py-4 px-4 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Add Post
        </button>
      </form>
      {isOpen && (
        <AddPostPopup onClose={closePopup} form={form} setPost={setForm} />
      )}
    </main>
  );
}
