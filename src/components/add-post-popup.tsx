import { Post } from "@/app/page";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { GoIssueClosed } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

function AddPostPopup({
  onClose,
  form,
  setPost,
}: {
  onClose: () => void;
  form: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
}) {
  const [addPost, setAddPost] = React.useState(false);
  const [newPost, setNewPost] = React.useState({
    post: {
      postType: "",
      amountSpent: 0,
      viewCount: 0,
      reach: 0,
    },
  });

  const handleAddPost = () => {
    const updatedForm = {
      ...form,
      post: [...form.post, newPost.post],
    };
    setPost(updatedForm);
    setAddPost(false);
    setNewPost({
      post: {
        postType: "",
        amountSpent: 0,
        viewCount: 0,
        reach: 0,
      },
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Posts:", form);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-md max-w-3xl w-full">
        <h2 className="text-white text-2xl uppercase">Add Post</h2>
        <div className="flex flex-wrap gap-4 mt-8 mb-4">
          {form.post.map((p, index) => (
            <div
              key={index}
              className="bg-gray-600 text-white p-4 m-2 rounded-md w-full max-w-xs"
            >
              <h3 className="text-lg font-bold mb-2">
                {p.postType.split("-").join(" ").toUpperCase()}
              </h3>
              <p className="text-sm">${p.amountSpent}</p>
            </div>
          ))}
        </div>
        {addPost && (
          <div className="flex gap-3 items-center">
            <select
              id="service-type"
              name="service-type"
              value={newPost.post.postType}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  post: { ...newPost.post, postType: e.target.value },
                })
              }
              className="mt-1 block bg-gray-600 outline-none py-4 text-white px-4 rounded-md"
            >
              <option value="">-- post type --</option>
              <option value="service-highlight">Service Highlight</option>
              <option value="highlight-reel">Highlight Reel</option>
              <option value="service-flyer">Service Flyer</option>
              <option value="special-post">Special Post</option>
              <option value="service-carousel">Service Carousel</option>
            </select>
            <div className="flex flex-wrap gap-2">
              <input
                type="number"
                placeholder="View Count"
                className="mt-1 block border-b-4 border-gray-600 outline-none py-4 text-white px-4 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-28"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post: {
                      ...newPost.post,
                      viewCount: Number(e.target.value),
                    },
                  })
                }
                value={newPost.post.viewCount || ""}
              />
              <input
                type="number"
                placeholder="Reach"
                className="mt-1 block border-b-4 border-gray-600 outline-none py-4 text-white px-4 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-28"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post: { ...newPost.post, reach: Number(e.target.value) },
                  })
                }
                value={newPost.post.reach || ""}
              />
              <input
                type="number"
                placeholder="Amount Spent"
                className="mt-1 block border-b-4 border-gray-600 outline-none py-4 text-white px-4 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-36"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post: {
                      ...newPost.post,
                      amountSpent: Number(e.target.value),
                    },
                  })
                }
                value={newPost.post.amountSpent || ""}
              />
            </div>

            <GoIssueClosed
              className="text-green-500 text-4xl ml-4 cursor-pointer rounded-md block"
              onClick={handleAddPost}
            />
            <IoIosClose
              className="text-red-500 text-5xl cursor-pointer rounded-md block"
              onClick={() => setAddPost(false)}
            />
          </div>
        )}
        {!addPost && (
          <GrAdd
            className="text-white border p-1 text-3xl rounded-full ml-4 mt-5 cursor-pointer"
            onClick={() => setAddPost(true)}
          />
        )}
        <div className="flex justify-between mt-4">
          <button
            className="text-white bg-red-400 px-8 py-2 cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="text-white bg-blue-500 px-8 py-2 cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPostPopup;
