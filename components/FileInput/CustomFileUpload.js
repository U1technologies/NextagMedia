import React from "react";
import Image from "next/image";

const CustomFileUpload = ({ label, name, fileUrl, handleFileUpload, uploading, fileName, setFileName, fileType = "pdf" }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
     
      handleFileUpload(e); 
    }
  };
  return (
    <div className="mb-4">
      <label className="block mb-1">
        {label}{label === "Resume" ? <span className="text-red-700"> *</span> : ""}
      </label>

      <div className="flex items-center justify-between gap-6 w-[330px]">
        {/* Display file name */}
        <span className="block truncate border-[1.5px] p-[8px] rounded-md text-gray-600 w-[200px]">
          {fileName || "No file selected"}
        </span>

        {/* Hidden file input */}
        <label className="border-[1.5px] flex justify-center items-center border-highlight rounded-md text-highlight p-[9px] w-[120px] cursor-pointer">
          <input
            type="file"
            name={name}
            accept={fileType === "image" ? "image/*" : fileType==='video' ? "video/*" : ".pdf"}
            onChange={handleFileChange}
            className="hidden"
          />
          {uploading ? "Uploading..." : "Choose File"}
        </label>
      </div>

      {/* Display preview for images or upload message for other files */}
      {fileUrl ? (
        fileType === "image" ? (
          <Image src={fileUrl} width={250} height={250} alt="Uploaded Preview" className="mt-2 max-w-full h-auto rounded-md" />
        ) : (
          <p className="text-highlight mt-2">File uploaded successfully.</p>
        )
      ) : (
        uploading && <p className="text-gray-500 mt-2">Uploading...</p>
      )}
    </div>
  );
};

export default CustomFileUpload;
