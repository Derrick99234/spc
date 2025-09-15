// components/DownloadButton.tsx
"use client";
export default function DownloadExcelButton() {
  const handleDownload = () => {
    // Make request to NestJS API
    fetch("https://spc-api-whni.onrender.com/form/download", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to download file");
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "forms.xlsx"; // filename
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error(err));
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 absolute top-5 right-5 cursor-pointer"
    >
      Download Excel
    </button>
  );
}
