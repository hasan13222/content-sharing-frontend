import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { useCreateContent } from "@/hooks/content.hooks";
import { Loader2 } from "lucide-react";

const PostEditor = ({ userId }: { userId: string }) => {
    const [value, setValue] = useState("");
    const handleChange = (content: string) => {
        setValue(content);
    };

    const {
        mutate: handleCreateContent,
        isPending,
    } = useCreateContent();


    function handleCreatePost() {
        if(!value){
            return;
        }
        handleCreateContent({userId, content: value});
        setValue("")
    }

    return (
        <>
            <div className="create_post w-full border rounded-md mb-4 p-4 flex gap-3 items-start">
                <img src="" alt="" />
                <div className="post_form flex flex-col gap-2 w-full">
                    <ReactQuill value={value} onChange={handleChange} />
                    <div className="flex justify-between items-center">
                        <Button
                            onClick={handleCreatePost}
                            size="sm"
                            className="bg-primary text-white"
                            variant="default"
                        >
                            {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Post"}
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PostEditor;
