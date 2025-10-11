import { useState } from "react";
import UploadForm from "./UploadForm";
import LoadingPage from "./LoadingPage";
import ResultPage from "./ResultPage";

function HomePage() {

    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleUploadComplete = (data) => {
        setResult(data);
        setIsLoading(false);
    }

    const handleUploadStart = () => {
        setIsLoading(true);
    }

    const handleReset = () => {
        setResult(null);
        setIsLoading(false);
    }

    if (isLoading) {
        return <LoadingPage />;
    }

    if (result) {
        return <ResultPage result={result} onReset={handleReset} />;
    }
    

    return (
        <UploadForm
            onUploadStart={handleUploadStart} 
            onUploadComplete={handleUploadComplete}
        />
    );
}

export default HomePage;