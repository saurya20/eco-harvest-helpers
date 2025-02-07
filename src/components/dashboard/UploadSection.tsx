import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    toast({
      title: "Files uploaded",
      description: `${files.length} file(s) uploaded successfully.`,
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Plant Images</h2>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? "border-forest bg-forest/5" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600 mb-2">
          Drag and drop your plant images here, or
        </p>
        <Button
          variant="outline"
          className="border-forest text-forest hover:bg-forest hover:text-white"
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          Browse Files
        </Button>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
        />
      </div>
    </Card>
  );
};